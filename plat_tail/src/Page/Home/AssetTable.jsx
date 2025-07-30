import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { useNavigate } from "react-router-dom";

const AssetTable = ({ coin, category }) => {
  const navigate = useNavigate();

  return (
    <Table>
      <ScrollArea className={`${category=="all" ?"h-[77vh]":"h-[82vh]"}`}>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px] text-center">Coin</TableHead>
            <TableHead>SYMBOL</TableHead>
            <TableHead>VOLUME</TableHead>
            <TableHead className="text-left">MARKET CAP</TableHead>
            <TableHead className="text-center">24H</TableHead>
            <TableHead className="text-center">PRICE</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {coin.map((item, index) => (
            <TableRow key={item.id}>
              <TableCell
                onClick={() => navigate(`/market/${item.id}`)}
                className="font-medium flex items-center gap-2"
              >
                <Avatar className="-z-50">
                  <AvatarImage className="w-[80px]" src={item.image} />
                </Avatar>
                <span>{item.name}</span>
              </TableCell>
              <TableCell className="text-center">{item.symbol.toUpperCase()}</TableCell>
              <TableCell>{item.total_volume}</TableCell>
              <TableCell>{item.market_cap}</TableCell>
              <TableCell>{item.price_change_percentage_24h}%</TableCell>
              <TableCell className="text-right">
                ${item.current_price}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </ScrollArea>
    </Table>
  );
};
export default AssetTable;
