import { twMerge } from "tailwind-merge";
import { FC } from "react";
interface BarProps {
  classname: string;
}
const Bar: FC<BarProps> = ({ classname }) => {
  return <div className={twMerge("rounded-lg mt-3", classname)}></div>;
};
export default Bar;
