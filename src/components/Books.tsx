import Book from "./Book";
import BookForm from "./BookForm";
import { Dispatch, SetStateAction, useState } from "react";
import { Book as BookType } from "../App";

interface Books {
  setBooks: Dispatch<SetStateAction<BookType[]>>;
  books: BookType[];
}
const Books = ({
  books,
  setBooks,
  bookData,
  setBookData,
  titleHandler,
  authorHandler,
  pagesHandler,
  booksHandler,
  checkBoxHandler,
}: Books) => {

  // const [bookState, setBookState] = useState(bookData)

  const toggleIsRead = (id: number | string) => {
    setBooks(
      books.map((book) =>
        book.id === id ? { ...book, isRead: !book.isRead } : book
      )
    );
  };

  const editFormHandler = (id: number | string) => {
    setBooks(
      books.map((book) =>
        book.id === id ? { ...book, isEditing: !book.isEditing } : book
      )
    );
  };

  const deleteBook = (id: number | string) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  const editBook = (mario, id) => {
    setBooks(books.map(book => book.id === id ? {...book, mario, isEditing:!book.isEditing} : book))
  }

  return (
    <>
      <div className="w-[1200px] mx-auto grid grid-cols-3 gap-8">
        {books.map((book) => {
          {console.log(book)}
           return book.isEditing ? (
            <BookForm
              key={book.id}
              mario={book}
              {...book}
              editFormHandler={editFormHandler}
              toggleIsRead={toggleIsRead}
              bookData={bookData}
              setBookData={setBookData}
              titleHandler={titleHandler}
              authorHandler={authorHandler}
              books={books}
              setBooks={setBooks}
              pagesHandler={pagesHandler}
              editBook={editBook}
            />
          ) : (
            <Book
              key={book.id}
              mario={book}
              {...book}
              deleteBook={deleteBook}
              editFormHandler={editFormHandler}
            />
          );
        })}
      </div>
    </>
  );
};

export default Books;
