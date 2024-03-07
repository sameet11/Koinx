import Image from "next/image";
const Appbar = () => {
  return (
    <div className="flex justify-between p-5 shadow-lg">
      <div
        className="mt-2
      "
      >
        <Image src={"/logo.jpg"} alt="Logo" width={60} height={60} />
      </div>
      <div className="flex gap-4 text-sm font-semibold">
        <div className="mt-2">Crypto Taxes</div>
        <div className="mt-2">Free Tools</div>
        <div className="mt-2">Resource Center</div>
        <div>
          <button className="w-full h-full bg-gradient-to-r from-blue-500 to-blue-700 rounded-lg text-white p-2 hover:bg-blue-800 transition duration-300 ease-out">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};
export default Appbar;
