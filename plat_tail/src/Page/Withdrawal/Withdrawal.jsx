import React, { useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useDispatch, useSelector } from "react-redux";
import { getWithdrawalHistory } from "@/State/Withdrawal/Action";

const Withdrawal = ()=> {
  const dispatch = useDispatch();
      const {wallet,withdrawal} = useSelector(store => store);

  useEffect(()=>{
    dispatch(getWithdrawalHistory(localStorage.getItem("jwt")))
  },[dispatch])

  return (
    <div className="p-5 lg:px-20">
          <h1 className="fond-bold text-3xl pb-5">Withdrawal</h1>
          <Table className="border">
            <TableHeader>
              <TableRow>
                <TableHead className="py-5 w-[100px] text-center">Date</TableHead>
                <TableHead className="text-center">Method</TableHead>
                <TableHead className="text-center"> Amount</TableHead>
                <TableHead className="text-right">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {withdrawal.history.map((item, index) => (
                <TableRow key={index}>
                  <TableCell className="text-center">
                    <p>{item.date.toString()}</p>
                  </TableCell>
                  
                  <TableCell className="text-center">Bank</TableCell>
                  <TableCell className="text-center">${item.amount}</TableCell>
    
                  <TableCell className="text-right">{item.status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
  )
}
export default Withdrawal;