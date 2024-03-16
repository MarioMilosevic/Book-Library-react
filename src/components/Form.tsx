import { useState, Dispatch, SetStateAction, MouseEventHandler } from "react";
import { Book } from "../App";
import InputField from "./InputField";
interface Form {
  setIsModalActive: (isActive: boolean) => void;
  setBooks: Dispatch<SetStateAction<Book[]>>;
  books: Book[];
}
const Form = ({
  setIsModalActive,
  setBooks,
  books,
  bookData,
  setBookData,
  // titleHandler,
  // authorHandler,
  // pagesHandler,
  booksHandler,
}: Form) => {
  const [value, setValue] = useState({
    title: "",
    author: "",
    pages: "",
    isRead: false,
    isEditing: false,
    id: crypto.randomUUID(),
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const newBook = {
      title: value.title,
      author: value.author,
      pages: value.pages,
      isRead: value.isRead,
      isEditing: value.isEditing,
      id: value.id,
    };

    setBooks((prev) => [...prev, newBook]);
    setValue({
      title: "",
      author: "",
      pages: "",
      isRead: false,
      id: "",
    });
    setIsModalActive(false);
  };

  const titleHandler2 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue((prev) => ({ ...prev, title: e.target.value }));
  };

  const authorHandler2 = (e) => {
    setValue((prev) => ({ ...prev, author: e.target.value }));
  };
  const pagesHandler2 = (e) => {
    setValue((prev) => ({ ...prev, pages: e.target.value }));
  };

  const checkBoxHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue((prev) => ({ ...prev, isRead: e.target.checked }));
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
          id={"title"}
          value={value.title}
          inputHandler={titleHandler2}
        />
        <InputField
          heading="Author:"
          placeholder="J.R.R. Tolkien"
          id={"author"}
          inputHandler={authorHandler2}
        />
        <InputField
          heading="Number of pages:"
          placeholder="300"
          id={"pages"}
          inputHandler={pagesHandler2}
        />

        <div className="pt-10 gap-12 flex items-center justify-between ">
          <div className="flex gap-4">
            <input type="checkbox" onChange={checkBoxHandler} />
            <span>Have you read this book ?</span>
          </div>
          <button
            className="bg-sky-500 text-sky-50 px-4 py-2 text-xl rounded-lg hover:bg-sky-600"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
