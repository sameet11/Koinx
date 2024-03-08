import Analysts from "./analyst";
import Keyevents from "./keyevents";

const Sentiment = () => {
  return (
    <div className="p-1 mt-3 rounded-lg bg-white">
      <div className="text-2xl font-bold p-2">Sentiments</div>
      <Keyevents />
      <Analysts />
    </div>
  );
};

export default Sentiment;
