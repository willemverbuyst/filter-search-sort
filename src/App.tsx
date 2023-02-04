import { useState } from "react";
import { ButtonGroup, Container, Row, ToggleButton } from "react-bootstrap";

import {
  BookRenderer,
  HookRenderer,
  PeopleRenderer,
  SearchSortAndFilter,
} from "./components";
import { Text } from "./components/Text";
import { books, hooks, persons } from "./dummyData";

function App(): JSX.Element {
  const [display, setDiplay] = useState<"books" | "people" | "hooks">("books");

  return (
    <Container
      style={{ width: "100vw" }}
      className="m-3 justify-content-center"
    >
      <Row className="m-3" justify-content-center>
        <Text component="h1" color="white">
          Advanced React
        </Text>
      </Row>
      <Row className="m-2" justify-content-center>
        <Text
          component="em"
          style={{
            fontSize: "1.3rem",
          }}
        >
          pholymorphic components - hooks - generic ts functions
        </Text>
      </Row>
      <Row className="m-4 justify-content-center">
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
          <ToggleButton
            id="tbg-btn-3"
            value="hooks"
            type="radio"
            variant="outline-primary"
            checked={display === "hooks"}
            onChange={(): void => setDiplay("hooks")}
          >
            hooks
          </ToggleButton>
        </ButtonGroup>
      </Row>

      {display === "books" ? (
        <SearchSortAndFilter
          dataSource={books}
          searchProperties={["title", "author"]}
          filterKeys={["pages", "inPrint"]}
          sortKeys={["author", "title", "pages"]}
          initialSortProperty={{ property: "title", isDescending: true }}
          initialFilterProperties={[]}
          initialSearchQuery=""
        >
          {(book): JSX.Element => <BookRenderer {...book} key={book._id} />}
        </SearchSortAndFilter>
      ) : display === "people" ? (
        <SearchSortAndFilter
          dataSource={persons}
          searchProperties={["firstName", "surname"]}
          filterKeys={["married", "eyeColor", "age"]}
          sortKeys={["firstName", "surname", "age"]}
          initialSortProperty={{ property: "_id", isDescending: true }}
          initialFilterProperties={[]}
          initialSearchQuery=""
        >
          {(person): JSX.Element => (
            <PeopleRenderer {...person} key={person._id} />
          )}
        </SearchSortAndFilter>
      ) : (
        <SearchSortAndFilter
          dataSource={hooks}
          searchProperties={["name"]}
          filterKeys={[]}
          sortKeys={["name", "custom"]}
          initialSortProperty={{ property: "name", isDescending: true }}
          initialFilterProperties={[]}
          initialSearchQuery=""
        >
          {(hook): JSX.Element => <HookRenderer {...hook} key={hook.name} />}
        </SearchSortAndFilter>
      )}
    </Container>
  );
}

export default App;
