import { useContext } from "react";
import { BookContext } from "../context/BooksContext.jsx";

function Books() {
  const books = useContext(BookContext);

  return (
    <div>
      <h1>All Books Available</h1>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            {book.title} by {book.author}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Books;
