import { useState } from 'react';
import './App.css';
import { search } from './business/search';
import SearchInput from './components/SearchInput';
import { books } from './dummyData/books';
import { persons } from './dummyData/persons';

function App() {
  const [query, setQuery] = useState<string>('');
  return (
    <>
      <SearchInput
        setSearchQuery={(query) => {
          console.log(query);
          setQuery(query);
        }}
      />
      <h1>Persons</h1>
      <ul>
        {persons
          .filter((person) =>
            search(person, ['firstName', 'surname'], query, true)
          )
          .map((person) => (
            <li key={person._id}>
              {person.firstName} {person.surname}
            </li>
          ))}
      </ul>
      <h1>Books</h1>
      <ul>
        {books
          .filter((book) => search(book, ['title'], query))
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
