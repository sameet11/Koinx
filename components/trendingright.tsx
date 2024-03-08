"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import TrendingCoins from "./trendingcoins";

interface Coin {
  item: {
    id: string;
    coin_id: number;
    name: string;
    symbol: string;
    market_cap_rank: number;
    thumb: string;
    small: string;
    large: string;
    slug: string;
    price_btc: number;
    score: number;
    data: {
      price: string;
      price_btc: string;
      price_change_percentage_24h: {
        [currency: string]: number;
      };
      market_cap: string;
      market_cap_btc: string;
      total_volume: string;
      total_volume_btc: string;
      sparkline: string;
      content: null;
    };
  };
}

interface ApiResponse {
  coins: Coin[];
}

const Trending = () => {
  const [coins, setCoins] = useState<ApiResponse>();

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get<ApiResponse>(
          "https://api.coingecko.com/api/v3/search/trending"
        );
        setCoins(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    getData();
  }, []);

  return (
    <div className="mt-5">
      <div className="bg-white rounded-lg p-5">
        <div className="text-2xl font-bold">Trending Coins(24H)</div>
        <div className="mt-5">
          <TrendingCoins coins={coins?.coins} />
        </div>
      </div>
    </div>
  );
};

export default Trending;
