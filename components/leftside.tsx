import TradingHeader from "./tradingheader";
import TradingViewWidget from "./tradingview";
import Performance from "./performane";
import Navbar from "./navbar";
import Sentiment from "./sentiment";
import About from "./Aboutbtc";
import Tokenomics from "./tokenomics";
import Team from "./team";
import Like from "./Like";
import GetStarted from "./getstarted";
import Trending from "./trendingright";
const Leftside = () => {
  return (
    <div className="lg:w-4/6 mt-3 overflow-auto w-full">
      <div className="text-gray-600 text-sm mb-3 font-semibold">
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
      <div className="mt-5">
        <Sentiment />
      </div>
      <div className="mt-5">
        <About />
      </div>
      <div className="mt-5 md:block hidden">
        <Tokenomics />
      </div>
      <div className="mt-5">
        <Team />
      </div>
      <div className="mt-5">
        <Like text="You May Also Like" />
        <Like text="Trending Coins" />
      </div>
      <div className="mt-5 lg:hidden">
        <GetStarted />
        <Trending />
      </div>
    </div>
  );
};
export default Leftside;
