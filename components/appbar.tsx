import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";
const Appbar = () => {
  return (
    <div className="flex justify-between p-5 shadow-lg">
      <div
        className="mt-2
    "
      >
        <Image src={"/logo.jpg"} alt="Logo" width={60} height={60} />
      </div>
      <div className="md:flex gap-4 text-sm font-semibold hidden">
        <div className="mt-2">Crypto Taxes</div>
        <div className="mt-2">Free Tools</div>
        <div className="mt-2">Resource Center</div>
        <div>
          <button className="w-full h-full bg-gradient-to-r from-blue-500 to-blue-700 rounded-lg text-white p-2 hover:bg-blue-800 transition duration-300 ease-out">
            Get Started
          </button>
        </div>
      </div>
      <div className="md:hidden block">
        <GiHamburgerMenu size={20} />
      </div>
    </div>
  );
};
export default Appbar;
