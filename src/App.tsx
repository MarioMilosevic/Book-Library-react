import Header from "./components/Header";
import Books from "./components/Books";
import Modal from "./components/Modal";
import { useState } from "react";
function App() {
  const [isModalActive, setIsModalActive] = useState(false);
  const [books, setBooks] = useState([]);
  return (
    <>
      <Header setIsModalActive={setIsModalActive}/>
      <Books />
      {isModalActive && <Modal setIsModalActive={setIsModalActive} />}
    </>
  );
}

export default App;
