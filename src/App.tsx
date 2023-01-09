import { useState } from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import { BookRenderer } from './components/Renderers/Bookrenderer';
import { PeopleRenderer } from './components/Renderers/PeopleRenderer';
import SearchSortAndFilter from './components/SearchSortAndFilter';
import { books } from './dummyData/books';
import { persons } from './dummyData/persons';

function App() {
  const [showBooks, setShowBooks] = useState<boolean>(true);
  const buttonText = showBooks ? 'show people' : 'show books';

  return (
    <Container
      style={{ width: '100vw' }}
      className="m-3 justify-content-center"
    >
      <Row className="m-3">
        <Button onClick={() => setShowBooks(!showBooks)}>{buttonText}</Button>
      </Row>

      {showBooks ? (
        <SearchSortAndFilter
          title="books"
          dataSource={books}
          searchProperties={['title', 'author']}
          filterKeys={['pages', 'inPrint']}
          initialSortProperty={{ property: 'title', isDescending: true }}
          initialFilterProperties={[]}
          initialSearchQuery=""
        >
          {(book) => <BookRenderer {...book} key={book._id} />}
        </SearchSortAndFilter>
      ) : (
        <SearchSortAndFilter
          title="people"
          dataSource={persons}
          searchProperties={['firstName', 'surname']}
          filterKeys={['married', 'eyeColor', 'age']}
          initialSortProperty={{ property: '_id', isDescending: true }}
          initialFilterProperties={[]}
          initialSearchQuery=""
        >
          {(person) => <PeopleRenderer {...person} key={person._id} />}
        </SearchSortAndFilter>
      )}
    </Container>
  );
}

export default App;
