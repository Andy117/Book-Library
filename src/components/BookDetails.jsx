import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { BooksContext } from "../context/BooksContext";

function BookDetails() {
  const bookId = useParams();
  const book = useContext(BooksContext);

  useEffect(() => {
    console.log(bookId);
  });
}

export default BookDetails;
