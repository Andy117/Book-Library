import "./App.css";
import BookDetails from "./components/BookDetails";
import Books from "./components/Books";
import { BooksProvider } from "./context/BooksContext";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function App() {
  return (
    <BooksProvider>
      <Router>
        <Routes>
          <Route path='/' element={<Books></Books>}></Route>
          <Route path='/books' element={<Navigate to={"/"} />}></Route>
          <Route
            path='/books/:bookId'
            element={<BookDetails></BookDetails>}
          ></Route>
        </Routes>
      </Router>
    </BooksProvider>
  );
}

export default App;
