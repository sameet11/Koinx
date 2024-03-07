import TradingHeader from "./tradingheader";
import TradingViewWidget from "./tradingview";
import Performance from "./performane";
const Leftside = () => {
  return (
    <div className="w-4/6 mt-3 h-screen">
      <div className="text-gray-600 text-sm mb-3">
        Cryptocurrencies<span className="text-black"> &gt;&gt; Bitcoin</span>
      </div>
      <div className="mt-3 bg-white p-1 rounded-lg">
        <TradingHeader />
        <TradingViewWidget />
      </div>
    </div>
  );
};
export default Leftside;
