const Book = () => {
  return (
    <div className="bg-sky-300 rounded-lg  shadow-xl w-[400px] text-center py-8">
        <h1 className="text-3xl pb-4">The Lord of The Rings</h1>
        <h2 className="text-2xl pb-4">J.R.R. Tolkien</h2>
        <span className="text-xl">1208 pages</span>
        <div className="border border-black pt-4 flex justify-center gap-12">
            <button className="border border-black">
                <span>❌Not Read ❌</span>
            </button>
            <button>Delete</button>
        </div>
    </div>
  )
}

export default Book
