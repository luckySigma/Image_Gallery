import { IMAGE_CATEGORIES } from "../../../../constants/ImageFilters";

type CategoryFilterProps = {
  category: string;
  onChange: (value: string) => void;
};

export function CategoryFilter({
  category,
  onChange
}: CategoryFilterProps) {
  return (
    <div className="w-full">
      <label htmlFor="category-filter" className="sr-only">
        Category
      </label>

      <select
        id="category-filter"
        value={category}
        onChange={(e) => onChange(e.target.value)}
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
        <option value="" disabled>Select Category</option>
        {IMAGE_CATEGORIES.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
}
