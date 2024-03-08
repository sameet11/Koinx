import Image from "next/image";
import Button from "./button";
const GetStarted = () => {
  return (
    <div className="mt-10">
      <div className="p-8 bg-[#0052FE] rounded-xl">
        <div className="text-white font-bold text-center text-2xl mb-2">
          Get started with KoinX
        </div>
        <div className="text-center text-white font-bold text-2xl mb-4">
          for FREE
        </div>
        <div className="text-white text-center mb-4 text-sm">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus,
          nostrum! Quidem quaerat, consequuntur porro, culpa iure sint nostrum
        </div>
        <div className="mb-4 text-center">
          <Image
            src={"/getstarted.png"}
            alt="getstarted"
            height={250}
            width={250}
            className="m-auto rounded-lg"
          />
        </div>
        <div className="mb-6 text-center">
          <Button text="Get Started For Free" classname="w-3/5 m-auto p-5" />
        </div>
      </div>
    </div>
  );
};
export default GetStarted;
