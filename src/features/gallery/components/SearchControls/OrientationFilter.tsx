import { IMAGE_ORIENTATIONS } from "../../../../constants/ImageFilters";
import { Select } from "./Select";

type OrientationFilterProps = {
  orientation: string;
  onChange: (value: string) => void;
};

const ORIENTATION_OPTIONS = IMAGE_ORIENTATIONS.map((item) => ({
  value: item,
  label: item.charAt(0).toUpperCase() + item.slice(1),
}));

export function OrientationFilter({
  orientation,
  onChange,
}: OrientationFilterProps) {
  return (
    <Select
      id="orientation-filter"
      label="Orientation"
      value={orientation}
      options={ORIENTATION_OPTIONS}
      onChange={onChange}
    />
  );
}
