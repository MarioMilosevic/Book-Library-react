import Header from "./components/Header";
import Books from "./components/Books";
import Modal from "./components/Modal";
import { useState } from "react";
interface Book {
  title: string;
  author: string;
  pages: number;
  isRead: boolean;
  id: string;
}
function App() {
  const [isModalActive, setIsModalActive] = useState(false);
  const [books, setBooks] = useState<Book[]>([]);

  return (
    <>
      <Header setIsModalActive={setIsModalActive} />
      <Books books={books} setBooks={setBooks}/>
      {isModalActive && <Modal books={books} setBooks={setBooks} setIsModalActive={setIsModalActive} />}
    </>
  );
}

export default App;
