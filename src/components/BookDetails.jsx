import { useContext } from "react";
import { useParams } from "react-router-dom";
import { BooksContext } from "../context/BooksContext";

function BookDetails() {
  const { bookId } = useParams();
  const books = useContext(BooksContext);

  const book = books.find((b) => b.id === parseInt(bookId));

  if (books.length === 0) {
    return <div>Loading...</div>;
  }

  if (!book) {
    return <div>404! Book not found</div>;
  }

  return (
    <div>
      <h1>{book.title}</h1>
      <h2>by {book.author}</h2>
      <p>{book.description}</p>
    </div>
  );
}

export default BookDetails;
