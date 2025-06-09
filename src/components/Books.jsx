import { useContext } from "react";
import { useLocation } from "react-router-dom";
import BookInfoContext from "../context/BookInfoContext";

function Books() {
  const query = new URLSearchParams(useLocation().search);
  const search = query.get("search") || "";
  const books = useContext(BookInfoContext);

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1>All Books Available</h1>
      <ul>
        {filteredBooks.map((book) => (
          <li key={book.id}>
            {book.title} by {book.author}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Books;
