import { useState } from "react";
import { ButtonGroup, Container, Row, ToggleButton } from "react-bootstrap";
import { BookRenderer } from "./components/Renderers/BookRenderer";
import { PeopleRenderer } from "./components/Renderers/PeopleRenderer";
import { SearchSortAndFilter } from "./components/SearchSortAndFilter";
import { Items } from "./constants";
import { books } from "./dummyData/books";
import { persons } from "./dummyData/persons";

function App(): JSX.Element {
  const [display, setDisplay] = useState<keyof typeof Items>(Items.BOOKS);

  return (
    <Container
      style={{ width: "100vw" }}
      className="m-3 justify-content-center"
    >
      <Row className="m-3" justify-content-center>
        <h1 style={{ color: "white" }}>Advanced React</h1>
      </Row>
      <Row className="m-2" justify-content-center>
        <em style={{ fontSize: "1.3rem" }}>
          generic ts filter, search and sort functions
        </em>
      </Row>
      <Row className="m-4 justify-content-center">
        <ButtonGroup style={{ width: "20rem" }}>
          <ToggleButton
            id="tbg-btn-1"
            value="books"
            type="radio"
            variant="outline-primary"
            checked={display === Items.BOOKS}
            onChange={(): void => setDisplay(Items.BOOKS)}
          >
            books
          </ToggleButton>
          <ToggleButton
            id="tbg-btn-2"
            value="people"
            type="radio"
            variant="outline-primary"
            checked={display === Items.PEOPLE}
            onChange={(): void => setDisplay(Items.PEOPLE)}
          >
            people
          </ToggleButton>
        </ButtonGroup>
      </Row>

      {display === Items.BOOKS ? (
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
