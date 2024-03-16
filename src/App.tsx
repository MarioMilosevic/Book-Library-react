import Header from "./components/Header";
import Books from "./components/Books";
import Form from "./components/Form";
import { useState } from "react";

export interface Book {
  title: string;
  author: string;
  pages: number | string;
  isRead: boolean;
  isEditing: boolean;
  id: string;
}
function App() {
  const [isModalActive, setIsModalActive] = useState(false);
  const [books, setBooks] = useState<Book[]>([]);
  const [bookData, setBookData] = useState({
    title: "",
    author: "",
    pages: "",
    isRead: false,
    isEditing: false,
    id: crypto.randomUUID(),
  });


  const booksHandler = (e) => {
    e.preventDefault();
    setIsModalActive(false);
    setBooks(prevBooks => [...prevBooks, bookData]);
    setBookData(formData) 
    setBookData({})
  };
  return (
    <>
      <Header setIsModalActive={setIsModalActive} />
      <Books
        books={books}
        setBooks={setBooks}
        bookData={bookData}
        setBookData={setBookData}
        // titleHandler={titleHandler}
        // authorHandler={authorHandler}
        // pagesHandler={pagesHandler}
        booksHandler={booksHandler}
        // checkBoxHandler={checkBoxHandler}
      />
      {isModalActive && (
        <Form
          bookData={bookData}
          setBookData={setBookData}
          books={books}
          setBooks={setBooks}
          setIsModalActive={setIsModalActive}
          // titleHandler={titleHandler}
          // authorHandler={authorHandler}
          // pagesHandler={pagesHandler}
          booksHandler={booksHandler}
          // checkBoxHandler={checkBoxHandler}
        />
      )}
    </>
  );
}

export default App;
