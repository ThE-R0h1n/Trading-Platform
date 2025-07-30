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
import { useDispatch, useSelector } from "react-redux";
import { getAllOrdersForUser } from "@/State/Order/Action";
import { calculateProfit } from "@/utils/calculateProfit";

const Activity = () => {
  const dispatch = useDispatch();
  const { order } = useSelector((store) => store);

  useEffect(() => {
    dispatch(getAllOrdersForUser({ jwt: localStorage.getItem("jwt") }));
  }, []);
  return (
    <div className="p-5 lg:px-20">
      <h1 className="fond-bold text-3xl pb-5">Activity</h1>
      <Table className="border">
        <TableHeader>
          <TableRow>
            <TableHead className="py-5 w-[100px] text-center">
              Date & time
            </TableHead>
            <TableHead className="text-center">Trading Pair</TableHead>
            <TableHead>Buy Price</TableHead>
            <TableHead className="text-left">Selling Price</TableHead>
            <TableHead className="text-left">Order Type</TableHead>
            <TableHead className="text-center">Profit/Loss</TableHead>
            <TableHead className="text-right">Value</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {order.orders.map((item, index) => (
            <TableRow key={index}>
              <TableCell>
                <p>{new Date(item.timeStamp).toLocaleDateString("en-IN")}</p>
                <p className="text-gray-400">
                  {new Date(item.timeStamp).toLocaleTimeString("en-IN", {
                    hour: "2-digit",
                    minute: "2-digit",
                    second: "2-digit",
                    hour12: true,
                  })}
                </p>
              </TableCell>
              <TableCell className="font-medium flex items-center gap-2">
                <Avatar className=" w-[50px]">
                  <AvatarImage
                    className="items-right"
                    src={item.orderItem.coin.image}
                  />
                </Avatar>
                <span>{item.orderItem.coin.name}</span>
              </TableCell>
              <TableCell>${item.orderItem.buyPrice}</TableCell>
              <TableCell>{item.orderItem.sellPrice}</TableCell>
              <TableCell>{item.orderType}</TableCell>
              <TableCell>{calculateProfit(item)}</TableCell>

              <TableCell className="text-right">{item.price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
export default Activity;
