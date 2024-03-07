import TradingHeader from "./tradingheader";
import TradingViewWidget from "./tradingview";
import Performance from "./performane";
import Navbar from "./navbar";
const Leftside = () => {
  return (
    <div className="w-4/6 mt-3 overflow-auto">
      <div className="text-gray-600 text-sm mb-3">
        Cryptocurrencies &gt;&gt;<span className="text-black"> Bitcoin</span>
      </div>
      <div className="mt-3 bg-white p-1 rounded-lg">
        <TradingHeader />
        <TradingViewWidget />
      </div>
      <div className="mt-5">
        <Navbar />
      </div>
      <div className="mt-5">
        <Performance />
      </div>
    </div>
  );
};
export default Leftside;
