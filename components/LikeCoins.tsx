import { FC } from "react";
import LikeCoin from "./Likecoin";
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
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
  coins: Coin[] | undefined;
}

const LikeCoins: FC<ApiResponse> = ({ coins }) => {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-11/12"
    >
      <CarouselContent>
        {coins?.map((coin, index) => (
          <LikeCoin key={index} item={coin.item} />
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};
export default LikeCoins;
