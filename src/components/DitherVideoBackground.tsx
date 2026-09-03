import { useEffect, useRef } from "react";
import sourceVideo from "../assets/videos/pink-flowers.mp4";

const DITHER_WIDTH = 220;
const FRAME_SKIP = 10;
const PLAYBACK_RATE = 0.35;
const HOVER_RADIUS = 220;
const MASK_EASE = 0.15;
const MASK_SETTLE_THRESHOLD = 0.5;
const DITHER_COLOR = { r: 117, g: 111, b: 99 };
const DITHER_ALPHA = 80;

function floydSteinbergDither(gray: Float32Array, width: number, height: number) {
  const out = new Uint8Array(width * height);

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = y * width + x;
      const oldValue = gray[idx];
      const newValue = oldValue < 128 ? 0 : 255;
      out[idx] = newValue;

      const error = oldValue - newValue;
      if (x + 1 < width) gray[idx + 1] += (error * 7) / 16;
      if (x - 1 >= 0 && y + 1 < height) gray[idx + width - 1] += (error * 3) / 16;
      if (y + 1 < height) gray[idx + width] += (error * 5) / 16;
      if (x + 1 < width && y + 1 < height) gray[idx + width + 1] += (error * 1) / 16;
    }
  }

  return out;
}

export function DitherVideoBackground() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sampleCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const hoverControlsRef = useRef<{ start: () => void; stop: () => void } | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (!video || !canvas) return;

    let frameId = 0;
    let frameCount = 0;
    let width = DITHER_WIDTH;
    let height = DITHER_WIDTH;
    let ready = false;
    let running = false;
    let sampleCtx: CanvasRenderingContext2D | null = null;
    let ctx: CanvasRenderingContext2D | null = null;

    function setup() {
      if (!video) return;
      width = DITHER_WIDTH;
      height = Math.round(width * (video.videoHeight / video.videoWidth));

      sampleCanvasRef.current = document.createElement("canvas");
      sampleCanvasRef.current.width = width;
      sampleCanvasRef.current.height = height;
      sampleCtx = sampleCanvasRef.current.getContext("2d");

      if (canvas) {
        canvas.width = width;
        canvas.height = height;
        ctx = canvas.getContext("2d");
      }

      ready = true;
    }

    function drawFrame() {
      if (!running) return;
      frameId = requestAnimationFrame(drawFrame);
      if (!ready || !video) return;

      frameCount++;
      if (frameCount % FRAME_SKIP !== 0) return;

      if (!sampleCtx || !ctx) return;

      sampleCtx.drawImage(video, 0, 0, width, height);
      const { data } = sampleCtx.getImageData(0, 0, width, height);

      const gray = new Float32Array(width * height);
      for (let i = 0; i < width * height; i++) {
        const r = data[i * 4];
        const g = data[i * 4 + 1];
        const b = data[i * 4 + 2];
        gray[i] = 0.299 * r + 0.587 * g + 0.114 * b;
      }

      const dithered = floydSteinbergDither(gray, width, height);

      const outImageData = ctx.createImageData(width, height);
      for (let i = 0; i < width * height; i++) {
        const isDark = dithered[i] === 0;
        outImageData.data[i * 4] = DITHER_COLOR.r;
        outImageData.data[i * 4 + 1] = DITHER_COLOR.g;
        outImageData.data[i * 4 + 2] = DITHER_COLOR.b;
        outImageData.data[i * 4 + 3] = isDark ? DITHER_ALPHA : 0;
      }
      ctx.putImageData(outImageData, 0, 0);
    }

    if (video.readyState >= 1) {
      setup();
    }
    video.addEventListener("loadedmetadata", setup);
    video.playbackRate = PLAYBACK_RATE;

    hoverControlsRef.current = {
      start() {
        if (running) return;
        running = true;
        video.play().catch(() => {});
        frameId = requestAnimationFrame(drawFrame);
      },
      stop() {
        if (!running) return;
        running = false;
        video.pause();
        cancelAnimationFrame(frameId);
      },
    };

    return () => {
      video.removeEventListener("loadedmetadata", setup);
      cancelAnimationFrame(frameId);
      hoverControlsRef.current = null;
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = canvas?.parentElement;
    if (!canvas || !container) return;

    let targetRadius = 0;
    let currentRadius = 0;
    let mouseX = 0;
    let mouseY = 0;
    let maskFrameId = 0;
    let maskLoopRunning = false;

    function ensureMaskLoopRunning() {
      if (maskLoopRunning) return;
      maskLoopRunning = true;
      maskFrameId = requestAnimationFrame(animateMask);
    }

    function handlePointerMove(e: PointerEvent) {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
      targetRadius = HOVER_RADIUS;
      ensureMaskLoopRunning();
      hoverControlsRef.current?.start();
    }

    function handlePointerLeave() {
      targetRadius = 0;
      ensureMaskLoopRunning();
      hoverControlsRef.current?.stop();
    }

    function animateMask() {
      currentRadius += (targetRadius - currentRadius) * MASK_EASE;
      const mask = `radial-gradient(circle ${currentRadius}px at ${mouseX}px ${mouseY}px, black 55%, transparent 100%)`;
      if (canvas) {
        canvas.style.maskImage = mask;
        canvas.style.webkitMaskImage = mask;
      }

      if (targetRadius === 0 && currentRadius < MASK_SETTLE_THRESHOLD) {
        maskLoopRunning = false;
        return;
      }
      maskFrameId = requestAnimationFrame(animateMask);
    }

    container.addEventListener("pointermove", handlePointerMove);
    container.addEventListener("pointerleave", handlePointerLeave);
    window.addEventListener("blur", handlePointerLeave);

    return () => {
      container.removeEventListener("pointermove", handlePointerMove);
      container.removeEventListener("pointerleave", handlePointerLeave);
      window.removeEventListener("blur", handlePointerLeave);
      cancelAnimationFrame(maskFrameId);
    };
  }, []);

  return (
    <>
      <video
        ref={videoRef}
        src={sourceVideo}
        preload="none"
        style={{ position: "fixed", width: 1, height: 1, opacity: 0, pointerEvents: "none" }}
        loop
        muted
        playsInline
        aria-hidden="true"
      />
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 h-full w-full opacity-50"
        style={{ imageRendering: "pixelated" }}
      />
    </>
  );
}
