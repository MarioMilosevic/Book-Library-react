const Book = ({ title, author, pages, isRead, id, books, setBooks }) => {
  const toggleIsRead = (id) => {
    setBooks(
      books.map((book) =>
        book.id === id ? { ...book, isRead: !book.isRead } : book
      )
    );
  };

  

  return (
    <div className="ring rounded-lg  shadow-xl text-center py-8">
      <h1 className="text-3xl pb-4">{title}</h1>
      <h2 className="text-2xl pb-4">{author}</h2>
      <span className="text-xl">{pages} pages</span>
      <div className="pt-8 flex justify-center gap-12">
        <button
          className="bg-sky-500 text-xl text-sky-50 rounded-lg px-4 py-2 duration-300 hover:scale-110"
          onClick={() => toggleIsRead(id)}
        >
          {isRead ? "Read ✅" : "Not Read ❌"}
        </button>
        <button className="bg-fuchsia-400 text-xl text-fuchsia-50 rounded-lg px-4 py-2 duration-300 hover:scale-110">
          Delete
        </button>
      </div>
    </div>
  );
};

export default Book;
