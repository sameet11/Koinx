import GridElements from "./gridelements";
import Info from "./info";

const Fundamentals = () => {
  return (
    <>
      <div className="flex gap-2">
        <div className="text-2xl font-bold">Fundamentals</div>
        <Info />
      </div>
      <div className="md:flex-row flex flex-col justify-between">
        <div className="md:w-2/5 w-full mt-4">
          <GridElements name="Bitcoin Price" value="$16,877" />
          <GridElements name="24h Low/24h High" value="$46,555/$48,555" />
          <GridElements name="7d Low/7d High" value="16,877/$16,777" />
          <GridElements name="Trading Volume" value="$23,302,300.99" />
          <GridElements name="Market Cap Rank" value="#1" />
        </div>
        <div className="md:w-2/5 w-full mt-3">
          <GridElements name="Market Cap" value="$323,566,890.99" />
          <GridElements name="Market Cap Dominance" value="37.65%" />
          <GridElements name="Volume/Market Cap" value="0.78" />
          <GridElements name="All time High" value="$48,555" />
          <GridElements name="All time Low" value="$16,888" />
        </div>
      </div>
    </>
  );
};
export default Fundamentals;
