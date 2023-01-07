import { useState } from 'react';
import { Button, Container, Row, Stack } from 'react-bootstrap';
import { search } from './business/search';
import { sort } from './business/sort';
import { BookRenderer } from './components/Renderers/Bookrenderer';
import { PeopleRenderer } from './components/Renderers/PeopleRenderer';
import SearchInput from './components/SearchInput';
import Sorters from './components/Sorters';
import { books } from './dummyData/books';
import { persons } from './dummyData/persons';
import { Book } from './interfaces/Book';
import { Person } from './interfaces/Person';
import { Property } from './interfaces/Property';

function App() {
  const [query, setQuery] = useState<string>('');
  const [personProperty, setPersonProperty] = useState<Property<Person>>({
    property: 'firstName',
  });
  const [bookProperty, setBookProperty] = useState<Property<Book>>({
    property: 'title',
  });
  const [showBooks, setShowBooks] = useState<boolean>(true);
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
          <Sorters
            object={persons[0]}
            setProperty={(property) => setPersonProperty({ property })}
          />
          {persons
            .filter((person) =>
              search(person, ['firstName', 'surname'], query, true)
            )
            .sort((a, b) => sort(a, b, personProperty.property))
            .map((person) => (
              <PeopleRenderer {...person} key={person._id} />
            ))}
        </Row>
      ) : (
        <Row className="m-3 justify-content-center align-self-start">
          <h1>Books</h1>
          <Sorters
            object={books[0]}
            setProperty={(property) => setBookProperty({ property })}
          />
          {books
            .filter((book) => search(book, ['title'], query))
            .sort((a, b) => sort(a, b, bookProperty.property))
            .map((book) => (
              <BookRenderer {...book} key={book._id} />
            ))}
        </Row>
      )}
    </Container>
  );
}

export default App;
