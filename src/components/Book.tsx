import ActionButton from "./ActionButton";
interface Book {
  title: string;
  author: string;
  pages: number | string;
  isRead: boolean;
  id: number | string;
  toggleIsRead: (id: number | string) => void;
  deleteBook: (id: number | string) => void;
}

const Book = ({
  title,
  author,
  pages,
  isRead,
  id,
  toggleIsRead,
  deleteBook,
}: Book) => {
  return (
    <div className="ring rounded-lg  shadow-xl text-center py-8">
      <h1 className="text-3xl pb-4">{title}</h1>
      <h2 className="text-2xl pb-4">{author}</h2>
      <span className="text-xl">{pages} pages</span>
      <div className="pt-8 flex justify-center gap-8">
         <ActionButton handleClick={() => toggleIsRead(id)} color={`bg-sky-400`}> {isRead ? "Read ✔" : "Not Read ❌"}</ActionButton>
         <ActionButton handleClick={() => console.log("edit")} color={`bg-emerald-400`}>Edit</ActionButton>
         <ActionButton handleClick={() => deleteBook(id)} color={"bg-fuchsia-400"}>Delete</ActionButton>
      </div>
    </div>
  );
};

export default Book;
