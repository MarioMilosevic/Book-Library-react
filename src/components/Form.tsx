import { useState, Dispatch, SetStateAction, MouseEventHandler } from "react";
import { Book } from "../App";
import InputField from "./InputField";
interface Form {
  setIsModalActive: (isActive: boolean) => void;
  setBooks: Dispatch<SetStateAction<Book[]>>;
  books: Book[];
}
const Form = ({ setIsModalActive, setBooks }: Form) => {

  const [bookInputs, setBookInputs] = useState({
    title: "",
    author: "",
    pages: "",
    isRead: false,
    isEditing: false,
    id: crypto.randomUUID(),
  });

  const handleSubmit = (e) => {
    e.preventDefault()
    setBooks((prev) => [...prev, bookInputs]);
    setBookInputs({
      title: "",
      author: "",
      pages: "",
      isRead: false,
      id: "",
    });
    setIsModalActive(false);
  };

  const titleHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBookInputs((prev) => ({ ...prev, title: e.target.value }));
  };

  const authorHandler = (e) => {
    setBookInputs((prev) => ({ ...prev, author: e.target.value }));
  };
  const pagesHandler = (e) => {
    setBookInputs((prev) => ({ ...prev, pages: e.target.value }));
  };

  const checkBoxHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBookInputs((prev) => ({ ...prev, isRead: e.target.checked }));
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
          value={bookInputs.title}
          inputHandler={titleHandler}
        />
        <InputField
          heading="Author:"
          placeholder="J.R.R. Tolkien"
          value={bookInputs.author}
          id={"author"}
          inputHandler={authorHandler}
        />
        <InputField
          heading="Number of pages:"
          placeholder="300"
          value={bookInputs.pages}
          id={"pages"}
          inputHandler={pagesHandler}
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
