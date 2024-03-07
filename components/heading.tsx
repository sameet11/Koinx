import Image from "next/image";
const Heading = () => {
  return (
    <div className="flex w-full gap-10">
      <div className="flex gap-3">
        <Image src={"/bitcoin.jpeg"} alt="bitcoin" height={20} width={30} />
        <h1 className="text-black font-semibold text-xl">
          Bitcoin <span className="text-gray-400 text-base">BTC</span>
        </h1>
      </div>
      <div className="p-1 bg-gray-500 text-white rounded-lg">Rank #1</div>
    </div>
  );
};
export default Heading;
