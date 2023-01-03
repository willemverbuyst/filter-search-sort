import './App.css';
import { search } from './business/search';
import { books } from './dummyData/books';
import { persons } from './dummyData/persons';

function App() {
  const query = 'h';
  return (
    <>
      <h1>Persons</h1>
      <ul>
        {persons
          .filter((person) =>
            search(person, ['firstName', 'surname'], query, false)
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
          .filter((book) => search(book, ['title'], query, false))
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
