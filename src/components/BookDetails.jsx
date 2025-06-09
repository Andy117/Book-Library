import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";

function BookDetails() {
  const bookId = useParams();

  useEffect(() => {
    console.log(bookId);
  });
}

export default BookDetails;
