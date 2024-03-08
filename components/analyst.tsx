import Info from "./info";
import Bar from "./bar";
const Analysts = () => {
  return (
    <div className="mt-3 p-2 w-full">
      <div className="flex gap-2">
        <div className="text-gray-600 font-semibold text-lg">Key events</div>
        <Info />
      </div>
      <div className="flex mt-4 gap-5 w-full">
        <div className="p-3 rounded-full h-20 w-20 text-xl font-semibold text-green-600 bg-green-100 flex items-center justify-center">
          76%
        </div>
        <div className="w-4/6">
          <div className="flex gap-3">
            <div className="mr-1">Buy</div>
            <Bar classname="h-2 bg-green-400 w-4/6" />
            <div>76%</div>
          </div>
          <div className="flex gap-3">
            <div>Hold</div>
            <Bar classname="h-2 bg-gray-400 w-1/6" />
            <div>8%</div>
          </div>
          <div className="flex gap-3">
            <div className="mr-1">Sell</div>
            <Bar classname="h-2 bg-red-400 w-2/6" />
            <div>16%</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Analysts;
