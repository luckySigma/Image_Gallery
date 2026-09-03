import { Check, ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type SelectOption = {
  value: string;
  label: string;
};

type SelectProps = {
  id: string;
  label: string;
  value: string;
  placeholder?: string;
  options: readonly SelectOption[];
  onChange: (value: string) => void;
};

export function Select({
  id,
  label,
  value,
  placeholder,
  options,
  onChange,
}: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    function handlePointerDown(event: PointerEvent) {
      if (!containerRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const selectedOption = options.find((option) => option.value === value);
  const labelId = `${id}-label`;

  return (
    <div ref={containerRef} className="relative w-full">
      <p
        id={labelId}
        className="font-mono text-[0.65rem] tracking-[0.2em] text-(--ink-muted)"
      >
        {label.toUpperCase()}
      </p>
      <button
        type="button"
        id={id}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-labelledby={`${labelId} ${id}`}
        onClick={() => setIsOpen((open) => !open)}
        className="
          mt-1
          flex
          w-full
          cursor-pointer
          items-center
          justify-between
          gap-2
          rounded-xl
          border
          border-(--ink)
          bg-(--paper-raised)
          py-3
          ps-4
          pe-4
          text-start
          text-sm
          text-(--ink)
          transition
          hover:border-(--ink)
          focus:border-(--ink)
          focus:ring-2
          focus:ring-(--ink)/20
          focus:outline-none
        "
      >
        <span className={`min-w-0 truncate ${selectedOption ? "" : "text-(--ink-muted)"}`}>
          {selectedOption?.label ?? placeholder}
        </span>
        <ChevronDown
          className={`h-4 w-4 shrink-0 text-(--ink-muted) transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
          aria-hidden="true"
        />
      </button>

      {isOpen && (
        <ul
          role="listbox"
          aria-labelledby={labelId}
          className="
            absolute
            z-10
            mt-1
            max-h-64
            w-full
            overflow-auto
            rounded-xl
            border
            border-(--ink)
            bg-(--paper-raised)
            p-1
          "
        >
          {options.map((option) => {
            const isSelected = option.value === value;

            return (
              <li key={option.value} role="option" aria-selected={isSelected}>
                <button
                  type="button"
                  onClick={() => {
                    onChange(option.value);
                    setIsOpen(false);
                  }}
                  className={`
                    flex
                    w-full
                    cursor-pointer
                    items-center
                    justify-between
                    gap-2
                    rounded-lg
                    px-3
                    py-2.5
                    text-start
                    text-sm
                    transition
                    ${
                      isSelected
                        ? "bg-(--safelight)/10 font-medium text-(--safelight)"
                        : "text-(--ink) hover:bg-(--paper)"
                    }
                  `}
                >
                  {option.label}
                  {isSelected && (
                    <Check className="h-4 w-4 shrink-0" aria-hidden="true" />
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
