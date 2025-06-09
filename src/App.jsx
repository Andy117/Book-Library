import "./App.css";
import Books from "./components/Books";
import { BooksProvider } from "./context/BookContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BooksProvider>
      <Router>
        <Routes>
          <Route path='/' element={<Books></Books>}></Route>
        </Routes>
      </Router>
    </BooksProvider>
  );
}

export default App;
