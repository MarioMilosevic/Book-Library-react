const InputField = ({ heading, placeholder, id }) => {
  return (
    <div className="w-full flex justify-between mb-4">
      <label htmlFor={id}>{heading}</label>
      <input
        id={id}
        type="text"
        placeholder={placeholder}
        className="rounded-lg w-[60%] pl-3"
        required
      />
    </div>
  );
};

export default InputField;