import { FaArrowRightLong } from "react-icons/fa6";
import { twMerge } from "tailwind-merge";
import { FC } from "react";
interface ButtonProps {
  classname: string;
  text: string;
}
const Button: FC<ButtonProps> = ({ classname, text }) => {
  return (
    <div
      className={twMerge(
        "flex bg-white gap-2 rounded-lg mt-2 pl-2 p-1 hover:bg-gray-200 transition duration-300 ease-out",
        classname
      )}
    >
      <button className="font-semibold">{text}</button>
      <FaArrowRightLong className="mt-1" />
    </div>
  );
};
export default Button;
