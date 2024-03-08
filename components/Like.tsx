"use client";
import { FC } from "react";
import axios from "axios";
import { useEffect, useState } from "react";

import LikeCoins from "./LikeCoins";

interface LikeProps {
  text: string;
}

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

const Like: FC<LikeProps> = ({ text }) => {
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
    <div>
      <div className="text-2xl font-bold w-full">{text}</div>
      <div className="mt-3 w-full">
        <LikeCoins coins={coins?.coins} />
      </div>
    </div>
  );
};

export default Like;
