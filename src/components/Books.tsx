import Book from "./Book";
const Books = ({books, setBooks}) => {
  return (
    <>
      <div className="w-[1200px] mx-auto grid grid-cols-3 gap-8">
        {books.map(book => <Book key={book.id} title={book.title} author={book.author} pages={book.pages} isRead={book.isRead} id={book.id} books={books} setBooks={setBooks}/>)}
      </div>
    </>
  );
};

export default Books;
