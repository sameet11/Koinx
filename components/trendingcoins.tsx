import React, { FC } from "react";
import Image from "next/image";
import Percentchange from "./percentchange";
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

export const Coinrender: FC<Coin> = ({ item }) => {
  const priceChangeValues = Object.values(
    item.data.price_change_percentage_24h
  );
  const averagePercentageChange =
    priceChangeValues.reduce((sum, value) => sum + value, 0) /
    priceChangeValues.length;
  return (
    <div className="flex justify-between mb-4">
      <div className="flex gap-2 ">
        <div className="rounded-full">
          <Image
            src={item.large}
            alt="icon"
            height={30}
            width={30}
            className="rounded-full"
          />
        </div>
        <div className="font-semibold text-base">
          {item.name}({item.symbol})
        </div>
      </div>
      <Percentchange dollarchange={averagePercentageChange} />
    </div>
  );
};

interface ApiResponse {
  coins: Coin[] | undefined;
}

const TrendingCoins: FC<ApiResponse> = ({ coins }) => {
  const displayedCoins = coins?.slice(0, 3);

  return (
    <>
      {displayedCoins?.map((coin, index) => (
        <Coinrender key={index} item={coin.item} />
      ))}
    </>
  );
};

export default TrendingCoins;
