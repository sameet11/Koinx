import { twMerge } from "tailwind-merge";
import { FC } from "react";
import { FaRegNewspaper } from "react-icons/fa6";

interface CardProps {
  classnamediv: string;
  classnameicon: string;
}
const Card: FC<CardProps> = ({ classnamediv, classnameicon }) => {
  return (
    <div className={twMerge("w-fit m-2 rounded-lg p-3", classnamediv)}>
      <div className="flex gap-2">
        <div
          className={twMerge(
            "1/6 h-8 w-8 rounded-full flex justify-center items-center text-white",
            classnameicon
          )}
        >
          <FaRegNewspaper />
        </div>
        <div className="w-5/6">
          <h1 className="font-semibold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto,
            optio.
          </h1>
          <p className="mt-2 mb-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            magnam assumenda delectus? Consectetur non cumque quibusdam.
            Distinctio, tenetur. Laborum hic adipisci natus facere eveniet nihil
            beatae voluptatem et, sapiente minima.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Card;
