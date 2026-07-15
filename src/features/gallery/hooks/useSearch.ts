import { useState } from "react";
import { useDebounce } from "./useDebounce";

export function useSearch() {
  const [query, setQuery] = useState("");

  const debounceQuery = useDebounce({
    searchQuery: query,
    timeoutValue: 300,
  });

  return {
    query,
    setQuery,
    debounceQuery,
  };
}
