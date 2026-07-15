import { useEffect, useState } from "react";

type DebounceProps = {
  searchQuery: string;
  timeoutValue: number;
};

export function useDebounce({ searchQuery, timeoutValue }: DebounceProps) {
  const [inputvalue, setInputValue] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setInputValue(searchQuery);
    }, timeoutValue);

    return () => clearTimeout(timer);
  }, [searchQuery, timeoutValue]);

  return inputvalue;
}
