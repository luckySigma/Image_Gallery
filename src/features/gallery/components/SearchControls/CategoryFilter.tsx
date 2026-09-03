import { IMAGE_CATEGORIES } from "../../../../constants/ImageFilters";
import { Select } from "./Select";

type CategoryFilterProps = {
  category: string;
  onChange: (value: string) => void;
};

const CATEGORY_OPTIONS = IMAGE_CATEGORIES.map((item) => ({
  value: item,
  label: item.charAt(0).toUpperCase() + item.slice(1),
}));

export function CategoryFilter({ category, onChange }: CategoryFilterProps) {
  return (
    <Select
      id="category-filter"
      label="Category"
      placeholder="Select Category"
      value={category}
      options={CATEGORY_OPTIONS}
      onChange={onChange}
    />
  );
}
