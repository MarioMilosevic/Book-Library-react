import ActionButton from "./ActionButton";
interface Book {
  title: string;
  author: string;
  pages: number | string;
  isRead: boolean;
  isEditing: boolean;
  id: number | string;
  toggleIsRead: (id: number | string) => void;
  deleteBook: (id: number | string) => void;
  editFormHandler: (id: number | string) => void;
}

const Book = ({
  title,
  author,
  pages,
  isRead,
  id,
  deleteBook,
  editFormHandler,
}: Book) => {
  return (
    <div className="ring rounded-lg  shadow-xl text-center py-8">
      <h1 className="text-3xl pb-4">{title}</h1>
      <h2 className="text-2xl pb-4">{author}</h2>
      <span className="text-xl">{pages} pages</span>
      <div className="pt-8 flex justify-center gap-8">
        <button
          className={
            "bg-sky-400 text-xl text-sky-50 rounded-lg px-4 py-2 duration-300"
          }
        >
          {isRead ? "Read ✔" : "Not Read ❌"}
        </button>

        <ActionButton
          handleClick={() => editFormHandler(id)}
          color={`bg-emerald-400`}
        >
          Edit
        </ActionButton>
        <ActionButton
          handleClick={() => deleteBook(id)}
          color={"bg-fuchsia-400"}
        >
          Delete
        </ActionButton>
      </div>
    </div>
  );
};

export default Book;
