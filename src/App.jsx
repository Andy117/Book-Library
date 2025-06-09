import "./App.css";
import BookDetails from "./components/BookDetails";
import Books from "./components/Books";
import NotFound from "./components/NotFound";
import SecretBooks from "./components/SecretBooks";
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
          <Route path='*' element={<NotFound></NotFound>}></Route>
          <Route path='/secret' element={<SecretBooks></SecretBooks>}></Route>
        </Routes>
      </Router>
    </BooksProvider>
  );
}

export default App;
