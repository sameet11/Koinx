import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { FC } from "react";

import Button from "./button";

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
          <Button text="Check Now" classname="" />
        </div>
      </div>
    </div>
  );
};
export default AboutCard;
