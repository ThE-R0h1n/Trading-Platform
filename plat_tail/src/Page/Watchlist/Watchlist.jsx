import React, { useEffect } from "react";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { BookmarkFilledIcon } from "@radix-ui/react-icons";
import { useDispatch, useSelector } from "react-redux";
import { addItemToWatchlist, getUserWatchlist } from "@/State/Watchlist/Action";

const Watchlist = () => {
   const {watchlist} = useSelector(store => store)
  const dispatch = useDispatch();
  const handleRemoveToWatchlist = (value) => {
    dispatch(
        addItemToWatchlist({
          coinId: value,
          jwt: localStorage.getItem("jwt"),
        })
      );
    console.log(value);
  };

  useEffect(()=>{
    dispatch(getUserWatchlist(localStorage.getItem("jwt")));
  },[])

  return (
    <div className="p-5 lg:px-20">
      <h1 className="fond-bold text-3xl pb-5">Watchlist</h1>
      <Table className="border">
        <TableHeader>
          <TableRow>
            <TableHead className="py-5 w-[100px] text-center">Coin</TableHead>
            <TableHead className="text-center">SYMBOL</TableHead>
            <TableHead>VOLUME</TableHead>
            <TableHead className="text-left">MARKET CAP</TableHead>
            <TableHead className="text-left">24H</TableHead>
            <TableHead className="text-center">PRICE</TableHead>
            <TableHead className="text-right text-red-600">REMOVE</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {watchlist.items.map((item, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium flex items-right gap-2">
                <Avatar className="w-full md:w-1/3 p-4">
                  <AvatarImage src = {item.image} />
                </Avatar>
                <span>{item.name}</span>
              </TableCell>
              <TableCell className="text-center">{item.symbol.toUpperCase()}</TableCell>
              <TableCell>{item.total_volume}</TableCell>
              <TableCell>{item.market_cap}</TableCell>
              <TableCell>{item.price_change_percentage_24h}%</TableCell>
              <TableCell className="text-center">${item.current_price}</TableCell>
              <TableCell className="text-right">
                <Button
                  variant="ghost"
                  onClick={() => handleRemoveToWatchlist(item.id)}
                  size="icon"
                  className="h-10 w-10"
                  
                >
                  <BookmarkFilledIcon className="w-6 h-6" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
export default Watchlist;
