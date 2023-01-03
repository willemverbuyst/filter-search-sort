import './App.css';
import { books } from './dummyData/books';
import { persons } from './dummyData/persons';

function App() {
  return (
    <>
      <h1>Persons</h1>
      <ul>
        {persons.map((person) => (
          <li key={person._id}>
            {person.firstName} {person.surname}
          </li>
        ))}
      </ul>
      <h1>Books</h1>
      <ul>
        {books.map((book) => (
          <li key={book._id}>
            {book.title} {book.pages}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
