import clsx from "clsx";

type InputFormType = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  name: string;
  placeholder: string;
  value: string | number;
};

const InputForm: React.FC<InputFormType> = ({
  onChange,
  name,
  placeholder,
  value,
  label,
}) => {
  return (
    <div className="flex flex-col space-y-2">
      <label className="text-sm" htmlFor={name}>
        {label}
      </label>
      <input
        className={clsx(
          "px-3 py-1",
          "border border-blue-300 rounded",
          "focus:outline-none",
          "focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
        )}
        onChange={onChange}
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
      />
    </div>
  );
};

export default InputForm;
