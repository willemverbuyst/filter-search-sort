import { useEffect, useState } from "react";

import { useDebounce } from "../hooks/useDebounce";
import { Input } from "./ui/input";

interface Props {
  searchQuery: string;
  setSearchQuery(searchQuery: string): void;
}

export function SearchInput(props: Props): JSX.Element {
  const { setSearchQuery, searchQuery } = props;
  const [query, setQuery] = useState<string>(searchQuery);
  const debouncedQuery = useDebounce<string>(query, 250);

  useEffect(() => {
    setSearchQuery(debouncedQuery);
  }, [debouncedQuery, setSearchQuery]);

  return (
    <Input
      value={query}
      id="search"
      placeholder="Search..."
      aria-label="Search"
      onChange={(event): void => setQuery(event.target.value)}
    />
  );
}
