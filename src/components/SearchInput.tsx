interface Props {
  setSearchQuery: (searchQuery: string) => void;
}

export default function SearchInput(props: Props) {
  const { setSearchQuery } = props;
  return (
    <>
      <label htmlFor="search">Search</label>
      <input
        id="search"
        placeholder="Search..."
        aria-label="Search"
        onChange={(event) => setSearchQuery(event.target.value)}
      />
    </>
  );
}
