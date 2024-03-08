import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { FaArrowRightLong } from "react-icons/fa6";
import { FC } from "react";

interface AboutCardProps {
  classname: string;
}
const AboutCard: FC<AboutCardProps> = ({ classname }) => {
  return (
    <div className="mt-2 w-1/2">
      <div className={twMerge("flex p-3 gap-10 rounded-lg", classname)}>
        <Image
          src={"/mobile-hand.jpg"}
          alt="icon"
          className="rounded-lg"
          height={100}
          width={120}
        />
        <div>
          <div className="text-white font-semibold text-xl">Calculate Your</div>
          <div className="text-white font-semibold text-xl">Profits</div>
          <div className="flex bg-white gap-2 rounded-lg mt-2 pl-2 p-1 hover:bg-gray-200 transition duration-300 ease-out">
            <button className="font-semibold">Check Now</button>
            <FaArrowRightLong className="mt-1" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutCard;
