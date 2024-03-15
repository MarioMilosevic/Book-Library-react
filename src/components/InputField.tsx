interface InputFieldType {
  heading: string;
  placeholder: string;
  id: string;
  value: string;
  inputHandler: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const InputField = ({ heading, placeholder, id, value, inputHandler}: InputFieldType) => {
  
  return (
    <div className="w-full flex justify-between mb-4">
      <label htmlFor={id}>{heading}</label>
      <input
        id={id}
        type="text"
        placeholder={placeholder}
        className="rounded-lg w-[60%] pl-3"
        value={value}
        onChange={inputHandler}
        required
      />
    </div>
  );
};

export default InputField;
