import { useEffect, useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import { useDebounce } from "../hooks/useDebounce";

interface Props {
  searchQuery: string;
  setSearchQuery(searchQuery: string): void;
}

export default function SearchInput(props: Props) {
  const { setSearchQuery, searchQuery } = props;
  const [query, setQuery] = useState<string>(searchQuery);
  const debouncedQuery = useDebounce<string>(query, 250);

  useEffect(() => {
    setSearchQuery(debouncedQuery);
  }, [debouncedQuery, setSearchQuery]);

  return (
    <Row className="m-3 justify-content-center">
      <Form style={{ width: "20rem" }}>
        <Form.Control
          value={query}
          id="search"
          placeholder="Search..."
          aria-label="Search"
          onChange={(event) => setQuery(event.target.value)}
        />
      </Form>
    </Row>
  );
}
