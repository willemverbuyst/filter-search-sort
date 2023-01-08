import { useState } from 'react';
import { Button, Container, Row, Stack } from 'react-bootstrap';
import { filter } from './business/filter';
import { search } from './business/search';
import { sort } from './business/sort';
import Filters from './components/Filters';
import { BookRenderer } from './components/Renderers/Bookrenderer';
import { PeopleRenderer } from './components/Renderers/PeopleRenderer';
import SearchInput from './components/SearchInput';
import Sorters from './components/Sorters';
import { books } from './dummyData/books';
import { persons } from './dummyData/persons';
import { Book } from './interfaces/Book';
import { Filter } from './interfaces/Filter';
import { Person } from './interfaces/Person';
import { Sorter } from './interfaces/Sorter';

function App() {
  const [query, setQuery] = useState<string>('');
  const [personSortProperty, setPersonSortProperty] = useState<Sorter<Person>>({
    property: 'firstName',
    isDescending: true,
  });
  const [bookSortProperty, setBookSortProperty] = useState<Sorter<Book>>({
    property: 'title',
    isDescending: true,
  });
  const [showBooks, setShowBooks] = useState<boolean>(true);
  const [bookFilterProperties, setBookFilterProperties] = useState<
    Array<Filter<Book>>
  >([]);
  const [personFilterProperties, setPersonFilterProperties] = useState<
    Array<Filter<Person>>
  >([]);
  const buttonText = showBooks ? 'show people' : 'show books';

  return (
    <Container
      style={{ width: '100vw' }}
      className="m-3 justify-content-center"
    >
      <Row className="m-3">
        <Stack direction="horizontal" className="justify-content-center">
          <SearchInput
            setSearchQuery={(query) => {
              console.log(query);
              setQuery(query);
            }}
          />
          <Button onClick={() => setShowBooks(!showBooks)}>{buttonText}</Button>
        </Stack>
      </Row>

      {!showBooks ? (
        <Row className="m-3 justify-content-center align-self-start">
          <h1>Persons</h1>
          <Sorters dataSource={persons} initialSortProperty="firstName">
            {(person) => <PeopleRenderer {...person} />}
          </Sorters>
          <br />
          <Filters
            object={persons[0]}
            properties={personFilterProperties}
            onChangeFilter={(property) => {
              personFilterProperties.includes(property)
                ? setPersonFilterProperties(
                    personFilterProperties.filter((p) => property !== p)
                  )
                : setPersonFilterProperties([
                    ...personFilterProperties,
                    property,
                  ]);
            }}
          />
          {persons
            .filter((person) =>
              search(person, ['firstName', 'surname'], query, true)
            )
            .filter((person) => filter(person, personFilterProperties))
            .sort((a, b) => sort(a, b, personSortProperty))
            .map((person) => (
              <PeopleRenderer {...person} key={person._id} />
            ))}
        </Row>
      ) : (
        <Row className="m-3 justify-content-center align-self-start">
          <h1>Books</h1>
          <Sorters dataSource={books} initialSortProperty="title">
            {(book) => <BookRenderer {...book} />}
          </Sorters>
          <br />
          <Filters
            object={books[0]}
            properties={bookFilterProperties}
            onChangeFilter={(property) => {
              const propertyMatch = bookFilterProperties.some(
                (bookFilterProperty) =>
                  bookFilterProperty.property === property.property &&
                  bookFilterProperty.isTruthySelected
              );
              const fullMatch = bookFilterProperties.some(
                (bookFilterProperty) =>
                  bookFilterProperty.property === property.property &&
                  bookFilterProperty.isTruthySelected ===
                    property.isTruthySelected
              );
              if (fullMatch) {
                setBookFilterProperties([
                  ...bookFilterProperties.filter(
                    (bookFilterProperty) =>
                      property.property !== bookFilterProperty.property
                  ),
                ]);
              } else if (propertyMatch) {
                setBookFilterProperties([
                  ...bookFilterProperties.filter(
                    (bookFilterProperty) =>
                      property.property !== bookFilterProperty.property
                  ),
                  property,
                ]);
              } else {
                setBookFilterProperties([...bookFilterProperties, property]);
              }
            }}
          />
          {books
            .filter((book) => search(book, ['title'], query))
            .filter((book) => filter(book, bookFilterProperties))
            .sort((a, b) => sort(a, b, bookSortProperty))
            .map((book) => (
              <BookRenderer {...book} key={book._id} />
            ))}
        </Row>
      )}
    </Container>
  );
}

export default App;
