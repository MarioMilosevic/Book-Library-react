import { useState } from "react";
import ActionButton from "./ActionButton";
interface BookFormType {
  title: string;
  author: string;
  pages: number | string;
  editFormHandler: (id: number | string) => void;
}

const BookForm = ({
  title,
  author,
  pages,
  editFormHandler,
  id,
  isRead,
  toggleIsRead,
  books,
  setBooks,
  bookData,
  setValue,
  titleHandler,
  authorHandler,
  pagesHandler,
  editBook,
  mario,
}: BookFormType) => {
  const [formValue, setFormValue] = useState({
    title: mario.title,
    author: mario.author,
    pages: mario.pages,
    isRead: mario.isRead,
    isEditing: mario.isEditing,
    id: mario.id,
  });

  const updateBook = (id: number | string) => {
    setBooks((prevBooks) =>
      prevBooks.map((book) =>
        book.id === id ? { ...book, ...bookData } : book
      )
    );
    // setBooks([...books, bookData]);
    editFormHandler(id);
  };

  // const mario = (id) => {
  //   setBooks(
  //     books.map((book) =>
  //       book.id === id ? { ...book, isRead: !book.isRead } : book
  //     )
  //   );
  // }

  const updatePages = (e) => {
    const inputValue = e.target.value < 0 ? 0 : e.target.value;
    setFormValue((prev) => ({ ...prev, pages: inputValue }));
  };

  return (
    <div className="ring rounded-lg  shadow-xl text-center px-6 py-8">
      <input
        type="text"
        value={formValue.title}
        className="text-3xl pl-4 py-1 rounded-lg mb-4 w-full text-center"
        onInput={(e) =>
          setFormValue((prev) => ({ ...prev, title: e.target.value }))
        }
      ></input>
      <input
        type="text"
        value={formValue.author}
        className="text-2xl pl-4 py-1 rounded-lg mb-4 w-full text-center"
        onInput={(e) =>
          setFormValue((prev) => ({ ...prev, author: e.target.value }))
        }
      ></input>
      <input
        type="number"
        value={formValue.pages}
        className="text-xl py-1 rounded-lg w-full pl-4 text-center"
        onInput={updatePages}
      ></input>
      <div className="pt-8 flex justify-center gap-8">
        {/* <ActionButton handleClick={() => toggleIsRead(id)} color={`bg-sky-400`}> */}
        <ActionButton handleClick={() => mario(id)} color={`bg-sky-400`}>
          {formValue.isRead ? "Read ✔" : "Not Read ❌"}
        </ActionButton>
        <ActionButton color="bg-sky-400" handleClick={() => updateBook(id)}>
          Save Changes
        </ActionButton>
      </div>
    </div>
  );
};

export default BookForm;
