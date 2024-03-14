import { useState } from "react";
import InputField from "./InputField";
interface Modal {
  setIsModalActive: () => void;
  setBooks: () => void;
  books: Book[];
}
const Modal = ({ setIsModalActive, setBooks, books }: Modal) => {
  const [book, setBook] = useState({
    title: "",
    author: "",
    pages: 0,
    isRead: false,
  });

  const titleHandler = (e) => {
    setBook((prev) => ({ ...prev, title: e.target.value }));
  };

  const authorHandler = (e) => {
    setBook((prev) => ({ ...prev, author: e.target.value }));
  };

  const pagesHandler = (e) => {
    setBook((prev) => ({ ...prev, pages: e.target.value }));
  };
  const checkBoxHandler = (e) => {
    setBook((prev) => ({ ...prev, isRead: e.target.checked }));
  };

  const booksHandler = (e) => {
    e.preventDefault()
    setIsModalActive(false)
    setBooks([...books, book]);
    console.log(books)
  };

  return (
    <div className="fixed top-0 right-0 w-full h-full bg-sky-900 bg-opacity-80  z-10 duration-1000 transition-all">
      <form className="mx-auto w-[650px] p-20 flex flex-col justify-center items-center fixed top-[50%] text-2xl rounded-lg right-[50%] bg-white bg-opacity-90 translate-x-[50%] translate-y-[-50%] z-20 text-center">
        <button
          className="bg-sky-500 text-sky-50 absolute top-2 right-5 px-4 py-2 rounded-2xl"
          onClick={() => setIsModalActive(false)}
        >
          X
        </button>
        <InputField
          heading="Title of the book:"
          placeholder="Lord of the Rings"
          value={book.title}
          id={"title"}
          inputHandler={titleHandler}
        />
        <InputField
          heading="Author:"
          placeholder="J.R.R. Tolkien"
          value={book.author}
          id={"author"}
          inputHandler={authorHandler}
        />
        <InputField
          heading="Number of pages:"
          placeholder="300"
          value={book.pages}
          id={"pages"}
          inputHandler={pagesHandler}
        />

        <div className="pt-10 gap-12 flex items-center justify-between ">
          <div className="flex gap-4">
            <input type="checkbox" onChange={checkBoxHandler} />
            <span>Have you read this book ?</span>
          </div>
          <button className="bg-sky-500 text-sky-50 px-4 py-2 text-xl rounded-lg hover:bg-sky-600" onClick={booksHandler}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Modal;
