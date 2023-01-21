import { useState } from "react";
import { ButtonGroup, Container, Row, ToggleButton } from "react-bootstrap";

import {
  BookRenderer,
  PeopleRenderer,
  SearchSortAndFilter,
} from "./components";
import { Text } from "./components/Text";
import { books, persons } from "./dummyData";

function App(): JSX.Element {
  const [display, setDiplay] = useState<"books" | "people">("books");

  return (
    <Container
      style={{ width: "100vw" }}
      className="m-3 justify-content-center"
    >
      <Row className="m-3" justify-content-center>
        <Text component="h1">Try out advanced React</Text>
      </Row>
      <Row className="m-3 justify-content-center">
        <ButtonGroup style={{ width: "20rem" }}>
          <ToggleButton
            id="tbg-btn-1"
            value="books"
            type="radio"
            variant="outline-primary"
            checked={display === "books"}
            onChange={(): void => setDiplay("books")}
          >
            books
          </ToggleButton>
          <ToggleButton
            id="tbg-btn-2"
            value="people"
            type="radio"
            variant="outline-primary"
            checked={display === "people"}
            onChange={(): void => setDiplay("people")}
          >
            people
          </ToggleButton>
        </ButtonGroup>
      </Row>

      {display === "books" ? (
        <SearchSortAndFilter
          dataSource={books}
          searchProperties={["title", "author"]}
          filterKeys={["pages", "inPrint"]}
          initialSortProperty={{ property: "title", isDescending: true }}
          initialFilterProperties={[]}
          initialSearchQuery=""
        >
          {(book): JSX.Element => <BookRenderer {...book} key={book._id} />}
        </SearchSortAndFilter>
      ) : (
        <SearchSortAndFilter
          dataSource={persons}
          searchProperties={["firstName", "surname"]}
          filterKeys={["married", "eyeColor", "age"]}
          initialSortProperty={{ property: "_id", isDescending: true }}
          initialFilterProperties={[]}
          initialSearchQuery=""
        >
          {(person): JSX.Element => (
            <PeopleRenderer {...person} key={person._id} />
          )}
        </SearchSortAndFilter>
      )}
    </Container>
  );
}

export default App;
