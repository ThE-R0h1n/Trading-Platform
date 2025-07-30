import Navbar from "./Page/Navbar/Navbar";
import { Button } from "@/components/ui/button";
import "./index.css";
import Home from "./Page/Home/Home";
import { Route, Routes } from "react-router-dom";
import Portfolio from "./Page/Portfolio/Portfolio";
import Activity from "./Page/Activity/Activity";
import Wallet from "./Page/Wallet/Wallet";
import Withdrawal from "./Page/Withdrawal/Withdrawal";
import PaymentDetails from "./Page/Payment Details/PaymentDetails";
import StockDetails from "./Page/Stock Details/StockDetails";
import Watchlist from "./Page/Watchlist/Watchlist";
import Profile from "./Page/Profile/profile";
import SearchCoin from "./Page/Search/SearchCoin";
import NotFound from "./Page/NotFound/NotFound";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUser } from "./State/Auth/Action";
import Auth from "./Page/Auth/Auth";

function App() {

  const {auth} = useSelector(store=>store);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getUser(auth.jwt || localStorage.getItem("jwt")))
  } , [auth.jwt])

  return (
    <>
      {auth.user ? <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/activity" element={<Activity />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/wallet" element={<Wallet />} />
            <Route path="/payment-details" element={<PaymentDetails />} />
            <Route path="/withdrawal" element={<Withdrawal />} />
            <Route path="/market/:id" element={<StockDetails />} />
            <Route path="/watchlist" element={<Watchlist />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/search" element={<SearchCoin />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div> : <Auth /> }
    </>
  );
}

export default App;
