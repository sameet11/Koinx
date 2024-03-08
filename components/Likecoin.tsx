import { FC } from "react";
import Image from "next/image";
import Percentchange from "./percentchange";
import { CarouselItem } from "./ui/carousel";
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
const LikeCoin: FC<Coin> = ({ item }) => {
  const priceChangeValues = Object.values(
    item.data.price_change_percentage_24h
  );
  const averagePercentageChange =
    priceChangeValues.reduce((sum, value) => sum + value, 0) /
    priceChangeValues.length;
  return (
    <div className="m-1">
      <CarouselItem className="md:basis-1/2 lg:basis-1/3">
        <div className="border rounded-lg p-5">
          <div className="flex gap-1">
            <div className="rounded-full">
              <Image
                src={item.large}
                alt="icon"
                height={30}
                width={30}
                className="rounded-full"
              />
            </div>
            <div className="font-semibold">{item.symbol}</div>
            <Percentchange dollarchange={averagePercentageChange} />
          </div>
          <div className="font-semibold text-lg mt-2">{item.data.price}</div>
          <div className="mt-4 text-center">
            <Image
              src={item.data.sparkline}
              alt="graph"
              height={70}
              width={70}
              className="m-auto"
            />
          </div>
        </div>
      </CarouselItem>
    </div>
  );
};
export default LikeCoin;
