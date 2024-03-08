import GetStarted from "./getstarted";
import Trending from "./trendingright";
const Rightside = () => {
  return (
    <div className="lg:w-2/6 lg:ml-5 hidden lg:block">
      <GetStarted />
      <Trending />
    </div>
  );
};
export default Rightside;
