import Book from "./Book";
import { Dispatch, SetStateAction } from "react";
import {Book as BookType} from '../App'

interface Books {
  setBooks: Dispatch<SetStateAction<BookType[]>>;
  books: BookType[];
}
const Books = ({books, setBooks}:Books) => {
  return (
    <>
      <div className="w-[1200px] mx-auto grid grid-cols-3 gap-8">
        {books.map(book => <Book key={book.id} title={book.title} author={book.author} pages={book.pages} isRead={book.isRead} id={book.id} books={books} setBooks={setBooks}/>)}
      </div>
    </>
  );
};

export default Books;
