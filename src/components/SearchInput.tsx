import { useEffect, useState } from 'react';
import { useDebounce } from '../hooks/useDebounce';

interface Props {
  setSearchQuery: (searchQuery: string) => void;
}

export default function SearchInput(props: Props) {
  const { setSearchQuery } = props;
  const [query, setQuery] = useState<string>('');

  const debouncedQuery = useDebounce(query, 250);

  useEffect(() => {
    setSearchQuery(debouncedQuery);
  }, [debouncedQuery, setSearchQuery]);

  return (
    <>
      <label htmlFor="search">Search</label>
      <input
        id="search"
        placeholder="Search..."
        aria-label="Search"
        onChange={(event) => setQuery(event.target.value)}
      />
    </>
  );
}
