import ActionButton from "./ActionButton";
interface BookFormType {
  title: string;
  author: string;
  pages: number | string;
  editFormHandler: (id: number | string) => void;
}

const BookForm = ({ title, author, pages, editFormHandler }: BookFormType) => {
  return (
    <div className="ring rounded-lg  shadow-xl text-center px-6 py-8">
      <input
        type="text"
        value={title}
        className="text-3xl pl-4 rounded-lg mb-4 w-full flex"
      ></input>
      <input
        type="text"
        value={author}
        className="text-2xl pl-4 rounded-lg mb-4 w-full flex"
      ></input>
      <input type="text" value={pages} className="text-xl rounded-lg w-full pl-4"></input>
      <div className="pt-8 flex justify-center gap-8">
        <ActionButton color="bg-sky-400" handleClick={editFormHandler}>
          Save Changes
        </ActionButton>
      </div>
    </div>
  );
};

export default BookForm;
