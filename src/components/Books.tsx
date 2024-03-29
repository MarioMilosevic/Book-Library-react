import Book from "./Book";
import BookForm from "./BookForm";
import { Dispatch, SetStateAction, useState } from "react";
import { Book as BookType } from "../App";

interface Books {
  setBooks: Dispatch<SetStateAction<BookType[]>>;
  books: BookType[];
}
const Books = ({ books, setBooks }: Books) => {

  const toggleIsRead = (id: number | string) => {
    console.log(books);
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

  return (
    <>
      <div className="w-[1200px] mx-auto grid grid-cols-3 gap-8">
        {books.map((book) => {
          {
            console.log(book);
          }
          return book.isEditing ? (
            <BookForm
              key={book.id}
              {...book}
              editFormHandler={editFormHandler}
              toggleIsRead={toggleIsRead}
              books={books}
              setBooks={setBooks}
            />
          ) : (
            <Book
              key={book.id}
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
