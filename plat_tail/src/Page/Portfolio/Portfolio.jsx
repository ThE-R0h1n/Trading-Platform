import React, { useEffect } from "react";
import { Avatar , AvatarImage } from "@radix-ui/react-avatar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useDispatch, useSelector } from "react-redux";
import { getUserAssets } from "@/State/Asset/Action";

const Portfolio = () => {
  const dispatch = useDispatch();
  const {asset} = useSelector( store=> store)
  useEffect(()=>{
    dispatch(getUserAssets(localStorage.getItem("jwt")));
  },[])
  return (
    <div className="p-5 lg:px-20">
      <h1 className="fond-bold text-3xl pb-5">Portfolio</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px] text-center">Assets</TableHead>
            <TableHead className="text-center">Price</TableHead>
            <TableHead>Unit</TableHead>
            <TableHead className="text-left">Change 24H</TableHead>
            <TableHead className="text-left">Change(%) 24H</TableHead>
            <TableHead className="text-right">Value</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {asset.userAssets.map((item, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium flex items-center gap-2">
                <Avatar className="-z-50">
                  <AvatarImage src={item.coin.image} />
                </Avatar>
                <span>{item.coin.name}</span>
              </TableCell>
              <TableCell className="text-center">{item.coin.symbol.toUpperCase()}</TableCell>
              <TableCell>{item.quantity}</TableCell>
              <TableCell>{item.coin.price_change_24h}</TableCell>
              <TableCell>{item.coin.price_change_percentage_24h}%</TableCell>
              <TableCell className="text-right">{item.coin.current_price * item.quantity}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
export default Portfolio;
