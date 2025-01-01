import { useState } from "react";
import { ButtonGroup, Row, ToggleButton } from "react-bootstrap";
import { BookRenderer } from "./components/Renderers/BookRenderer";
import { PeopleRenderer } from "./components/Renderers/PeopleRenderer";
import { SearchSortAndFilter } from "./components/SearchSortAndFilter";
import { Items } from "./constants";
import { books } from "./dummyData/books";
import { persons } from "./dummyData/persons";

function App(): JSX.Element {
  const [display, setDisplay] = useState<keyof typeof Items>(Items.BOOKS);

  return (
    <section className="w-full flex flex-col items-center p-10">
      <header className="flex flex-col items-center">
        <h1 className="text-4xl font-bold">Advanced React</h1>
        <em className="text-gray-700">
          generic ts filter, search and sort functions
        </em>
      </header>

      <main className="flex flex-col items-center">
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
      </main>
    </section>
  );
}

export default App;
