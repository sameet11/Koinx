import Card from "./card";
import Info from "./info";

const Keyevents = () => {
  return (
    <div className="mt-3 p-2">
      <div className="flex gap-2">
        <div className="text-gray-600 font-semibold text-lg">Key events</div>
        <Info />
      </div>
      <div className="mt-4 flex justify-between">
        <Card classnamediv="bg-blue-100" classnameicon="bg-blue-700" />
        <Card classnamediv="bg-green-100" classnameicon="bg-green-700" />
      </div>
    </div>
  );
};

export default Keyevents;
