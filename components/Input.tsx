import { FunctionComponent } from "react";

interface InputProps {}

const Input: FunctionComponent<InputProps> = () => {
  return (
    <input
      type="text"
      placeholder="Search for transaction, item etc"
      className="hidden w-2/5 max-w-lg text-white md:block input bg-neutral placeholder:text-white"
    />
  );
};

export default Input;
