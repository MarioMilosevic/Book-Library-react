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
  isEditing,
  editFormHandler,
  id,
  isRead,
  books,
  setBooks,
  bookData,
  setValue,
  titleHandler,
  authorHandler,
  pagesHandler,
  editBook,
  book,
}: BookFormType) => {

  const initialFormState = {
    title,
    author,
    pages,
    isRead,
    isEditing,
    id,
  }
  const [formValue, setFormValue] = useState(initialFormState
  );

  const updateBook = (id: number | string) => {
    setBooks((books) =>
      books.map((book) =>
        book.id === id ? { ...formValue } : book
      )
    );
    console.log(formValue)
    setFormValue(initialFormState)
    editFormHandler(id);
  };

  const toggleIsRead = (id: number | string) => {
    console.log(books)
    setBooks(
      books.map((book) =>
        book.id === id ? { ...book, isRead: !book.isRead } : book
      )
    );
  };

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
        <ActionButton handleClick={() => toggleIsRead(id)} color={`bg-sky-400`}>
          {isRead ? "Read ✔" : "Not Read ❌"}
        </ActionButton>
        <ActionButton color="bg-sky-400" handleClick={() => updateBook(id)}>
          Save Changes
        </ActionButton>
      </div>
    </div>
  );
};

export default BookForm;
