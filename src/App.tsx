import Header from "./components/Header";
import Books from "./components/Books";
import Form from "./components/Form";
import { useState } from "react";

export interface Book {
  title: string;
  author: string;
  pages: number | string;
  isRead: boolean;
  isEditing:boolean;
  id: string;
}
function App() {
  const [isModalActive, setIsModalActive] = useState(false);
  const [books, setBooks] = useState<Book[]>([]);

  return (
    <>
      <Header setIsModalActive={setIsModalActive} />
      <Books books={books} setBooks={setBooks}/>
      {isModalActive && <Form books={books} setBooks={setBooks} setIsModalActive={setIsModalActive} />}
    </>
  );
}

export default App;
