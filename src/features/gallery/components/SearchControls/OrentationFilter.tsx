import { IMAGE_ORIENTATIONS } from "../../../../constants/ImageFilters";

type OrientationFilterProps = {
  orientation: string;
  setOrientation: (value: string) => void;
};

export function OrientationFilter({
  orientation,
  setOrientation,
}: OrientationFilterProps) {
  return (
    <div className="w-full">
      <label htmlFor="category-filter" className="sr-only">
        Category
      </label>
      <select
        value={orientation}
        onChange={(e) => setOrientation(e.target.value)}
        className="
          w-full
          rounded-lg
          border
          border-gray-300
          py-3
          px-4
          focus:border-blue-500
          focus:ring-2
          focus:ring-blue-500/20
        "
      >
        {IMAGE_ORIENTATIONS.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
}
