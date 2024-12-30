import { useState } from "react";
import { ButtonGroup, Container, Row, ToggleButton } from "react-bootstrap";
import { BookRenderer } from "./components/Renderers/BookRenderer";
import { PeopleRenderer } from "./components/Renderers/PeopleRenderer";
import { SearchSortAndFilter } from "./components/SearchSortAndFilter";
import { Text } from "./components/UI/Text";
import { books } from "./dummyData/books";
import { persons } from "./dummyData/persons";

function App(): JSX.Element {
  const [display, setDisplay] = useState<"books" | "people">("books");

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
          generic ts filter, search and sort functions
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
            onChange={(): void => setDisplay("books")}
          >
            books
          </ToggleButton>
          <ToggleButton
            id="tbg-btn-2"
            value="people"
            type="radio"
            variant="outline-primary"
            checked={display === "people"}
            onChange={(): void => setDisplay("people")}
          >
            people
          </ToggleButton>
        </ButtonGroup>
      </Row>

      {display === "books" ? (
        <SearchSortAndFilter
          dataSource={books}
          searchProperties={["title", "author"]}
          filterKeys={["inPrint"]}
          sortKeys={["author", "title", "pages"]}
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
          sortKeys={["firstName", "surname", "age"]}
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
