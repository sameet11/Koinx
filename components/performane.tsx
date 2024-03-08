import Fundamentals from "./fundamentals";
import HighLow from "./highlow";
const Performance = () => {
  return (
    <div className="bg-white rounded-lg w-full p-3 font-semibold">
      <div className="text-2xl font-bold">Performance</div>
      <div className="mt-10">
        <HighLow
          lowtext="Today's Low"
          lowValue="$46,555"
          hightext="Todays's High"
          highvalue="$48,555"
        />
      </div>
      <div className="mt-10">
        <HighLow
          lowtext="52W Low"
          lowValue="$16,555"
          hightext="52W High"
          highvalue="$48,555"
        />
      </div>
      <div className="mt-6 w-full">
        <Fundamentals />
      </div>
    </div>
  );
};
export default Performance;
