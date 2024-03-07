"use client";
import axios from "axios";
import { useEffect, useState } from "react";

import PercentageChange from "./percentchange";
import Heading from "./heading";
import DollarRender from "./dollarrender";
import InrRender from "./inrrender";

const TradingHeader = () => {
  const [inrvalue, setinrvalue] = useState<number>(0);
  const [dollarvalue, setdollarvalue] = useState<number>(0);
  const [dollarchange, setdollarchange] = useState<number>(0);
  useEffect(() => {
    const getChange = async () => {
      const response = await axios.get(
        "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=inr%2Cusd&include_24hr_change=true"
      );
      if (response.data) {
        setinrvalue(response.data.bitcoin.inr);
        setdollarvalue(response.data.bitcoin.usd);
        setdollarchange(response.data.bitcoin.usd_24h_change);
      }
    };
    getChange();
  }, []);
  return (
    <div className="w-full p-2">
      <Heading />
      <div className="mt-10">
        <div className="flex gap-4">
          <DollarRender dollarvalue={dollarvalue} />
          <PercentageChange dollarchange={dollarchange} />
          <div className="text-gray-400 mt-1">(24H)</div>
        </div>
        <InrRender inrvalue={inrvalue} />
      </div>
      <div className="mt-5">
        <hr />
        <div className="mt-5 mb-3 font-semibold">Bitcoin Price Chart(USD)</div>
      </div>
    </div>
  );
};

export default TradingHeader;
