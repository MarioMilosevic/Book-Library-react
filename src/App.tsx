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
  const [books, setBooks] = useState<Book[]>([
    {
      id: crypto.randomUUID(),
      title: "Mario",
      author: "Milosevic",
      pages: 300,
      isRead: false,
    },
  ]);

  return (
    <>
      <Header setIsModalActive={setIsModalActive} />
      <Books books={books} />
      {isModalActive && <Modal setIsModalActive={setIsModalActive} />}
    </>
  );
}

export default App;
