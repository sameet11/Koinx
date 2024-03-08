import Leftside from "./leftside";
import Rightside from "./rightside";
const Body = () => {
  return (
    <div className="flex w-full bg-gray-100 p-5 mt-1">
      <Leftside />
      <Rightside />
    </div>
  );
};

export default Body;
