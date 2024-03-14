import InputField from "./InputField";
interface Modal {
  setIsModalActive:() => void
}

const Modal = ({setIsModalActive}:Modal) => {
  return (
    <div className="fixed top-0 right-0 w-full h-full bg-sky-900 bg-opacity-80  z-10 duration-1000 transition-all">
      <form className="mx-auto w-[650px] p-20 flex flex-col justify-center items-center fixed top-[50%] text-2xl rounded-lg right-[50%] bg-white bg-opacity-90 translate-x-[50%] translate-y-[-50%] z-20 text-center">
        <button className="bg-sky-500 text-sky-50 absolute top-2 right-5 px-4 py-2 rounded-2xl" onClick={() => setIsModalActive(false)}>
          X
        </button>
        <InputField
          heading="Title of the book:"
          placeholder="Lord of the Rings"
          id={"title"}
        />
        <InputField
          heading="Author:"
          placeholder="J.R.R. Tolkien"
          id={"author"}
        />
        <InputField heading="Number of pages:" placeholder="300" id={"pages"} />

        <div className="pt-10 gap-12 flex items-center justify-between ">
          <div className="flex gap-4">
            <input type="checkbox" />
            <span>Have you read this book ?</span>
          </div>
          <button className="bg-sky-500 text-sky-50 px-4 py-2 text-xl rounded-lg hover:bg-sky-600">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Modal;
