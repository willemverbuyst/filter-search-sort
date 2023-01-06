import { useState } from 'react';
import { search } from './business/search';
import { sort } from './business/sort';
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
  return (
    <>
      <SearchInput
        setSearchQuery={(query) => {
          console.log(query);
          setQuery(query);
        }}
      />
      <h1>Persons</h1>
      <Sorters
        object={persons[0]}
        setProperty={(property) => setPersonProperty({ property })}
      />
      <ul>
        {persons
          .filter((person) =>
            search(person, ['firstName', 'surname'], query, true)
          )
          .sort((a, b) => sort(a, b, personProperty.property))
          .map((person) => (
            <li key={person._id}>
              {person.firstName} {person.surname}
            </li>
          ))}
      </ul>
      <h1>Books</h1>
      <Sorters
        object={books[0]}
        setProperty={(property) => setBookProperty({ property })}
      />
      <ul>
        {books
          .filter((book) => search(book, ['title'], query))
          .sort((a, b) => sort(a, b, bookProperty.property))
          .map((book) => (
            <li key={book._id}>
              {book.title} {book.pages}
            </li>
          ))}
      </ul>
    </>
  );
}

export default App;
