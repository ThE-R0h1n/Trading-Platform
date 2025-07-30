import { Button } from "@/components/ui/button";
import React, { useEffect } from "react";
import AssetTable from "./AssetTable";
import Chart from "./Chart";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { DotIcon } from "@radix-ui/react-icons";
import { MessageCircle } from "lucide-react";
import { getCoinList, getTop50CoinList } from "@/State/Coin/Action";
import { useDispatch, useSelector } from "react-redux";
import { Pagination,PaginationContent,PaginationEllipsis,PaginationItem,PaginationLink,PaginationNext,
  PaginationPrevious} from "@/components/ui/pagination"

const Home = () => {
  const [category, setCategory] = React.useState("all");
  const { coin } = useSelector((store) => store);
  const dispatch = useDispatch();

  const handleCategory = (value) => {
    setCategory(value);
  };

  const bitcoin =
  (category === "all" ? coin.coinList : coin.top50)?.find(
    (c) => c.id === "bitcoin"
  );

  useEffect(() => {
    dispatch(getTop50CoinList());
  }, [category]);

  useEffect(() => {
    dispatch(getCoinList(1));
  }, []);

  return (
    <div className="relative">
      <div className="lg:flex">
        <div className="lg:w-[50%] lg:border-r">
          <div className="p-3 flex itms-center gap-4">
            <Button
              onClick={() => handleCategory("all")}
              variant={category == "all" ? "default" : "outline"}
              className="rounded-full"
            >
              All
            </Button>
            <Button
              onClick={() => handleCategory("top50")}
              variant={category == "top50" ? "default" : "outline"}
              className="rounded-full"
            >
              Top50
            </Button>
            <Button
              onClick={() => handleCategory("topGainers")}
              variant={category == "topGainers" ? "default" : "outline"}
              className="rounded-full"
            >
              Top Gainers
            </Button>
            <Button
              onClick={() => handleCategory("topLosers")}
              variant={category == "topLosers" ? "default" : "outline"}
              className="rounded-full"
            >
              Top Losers
            </Button>
          </div>
          <AssetTable
            coin={category == "all" ? coin.coinList : coin.top50

            }
            category={category}
          />
          <div>
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </div>
        <div className=" hidden lg:block lg:w-[50%] p-5">
          <Chart coinId={"bitcoin"} />

          <div className="flex gap-5 items-center">
            <div>
              <Avatar className="w-[100px]">
                <AvatarImage src="data:image/png;base64,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" />
              </Avatar>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <p>BTC</p>
                <DotIcon className="text-gray-400" />
                <p className="text-gray-400">Bitcoin</p>
              </div>
              <div className="flex items-end gap-2">
                <p className="text-xl font-bold">${bitcoin?.current_price}</p>
                <p className={bitcoin?.price_change_24h < 0 ? "text-red-500" : "text-green-500"}>
                  <span>{bitcoin?.price_change_24h_in_currency}</span>
                  <span>({bitcoin?.price_change_percentage_24h}%)</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="absolute bottom-5 right-5 z-40 flex flex-col justify-end items-end gap-2">
        <div className="relative w-[10rem] cursor-pointer group">
          <Button className="w-full h-[3rem] gap-2 items-center">
            <MessageCircle
              size={30}
              className="fill-[#1e293b] -rotate-90 stroke-none group-hover:fill-[#C0C0C0]"
            />
            <span className="text-2xl">Contact</span>
          </Button>
        </div>
      </section>
    </div>
  );
};
export default Home;
