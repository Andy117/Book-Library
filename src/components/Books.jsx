import { useContext } from "react";
import { BooksContext } from "../context/BooksContext";

function Books() {
  const books = useContext(BooksContext);

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
