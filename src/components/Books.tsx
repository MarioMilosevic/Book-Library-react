import Book from "./Book";
import { Dispatch, SetStateAction } from "react";
import {Book as BookType} from '../App'

interface Books {
  setBooks: Dispatch<SetStateAction<BookType[]>>;
  books: BookType[];
}
const Books = ({books, setBooks}:Books) => {
  const toggleIsRead = (id: number | string) => {
    setBooks(
      books.map((book) =>
        book.id === id ? { ...book, isRead: !book.isRead } : book
      )
    );
  };

  const deleteBook = (id: number | string) => {
    setBooks(books.filter((book) => book.id !== id));
  };
  return (
    <>
      <div className="w-[1200px] mx-auto grid grid-cols-3 gap-8">
        {books.map(book => <Book key={book.id} {...book} deleteBook={deleteBook} toggleIsRead={toggleIsRead}/>)}
      </div>
    </>
  );
};

export default Books;
