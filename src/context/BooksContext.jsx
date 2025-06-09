import { useEffect, useState } from "react";
import BookInfoContext from "./BookInfoContext";

export const BooksProvider = ({ children }) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("/books.json")
      .then((response) => response.json())
      .then((data) => setBooks(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    //<BooksContext.Provider value={books}>{children}</BooksContext.Provider>
    <BookInfoContext.Provider value={books}>
      {children}
    </BookInfoContext.Provider>
  );
};
