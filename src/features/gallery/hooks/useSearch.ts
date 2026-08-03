import { useState } from "react";
import { useDebounce } from "./useDebounce";

export type SearchFilters = {
  query: string;
  orientation: string;
};

export function useSearch() {
  const [query, setQuery] = useState("");

  const [orientation, setOrientation] = useState("landscape");

  const debounceQuery = useDebounce({
    searchQuery: query,
    timeoutValue: 300,
  });

  const filters: SearchFilters = {
    query: debounceQuery,
    orientation,
  };

  return {
    query,
    setQuery,

    orientation,
    setOrientation,

    filters,
  };
}
