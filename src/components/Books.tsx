import Book from "./Book";
const Books = () => {
  return (
    <>
      <div className="w-[1200px] mx-auto grid grid-cols-3 gap-8">
        <Book />
        <Book />
        <Book />
      </div>
    </>
  );
};

export default Books;
