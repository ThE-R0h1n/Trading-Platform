import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { DotFilledIcon } from "@radix-ui/react-icons";
import React from "react";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useDispatch } from "react-redux";
import { paymentHandler } from "@/State/Wallet/Action";

const TopUpForm = ()=> {

  const [amount, setAmount] = React.useState('');
  
  const [paymentMethod, setPaymentMethod] = React.useState("RAZORPAY");
  const dispatch = useDispatch();

  const handlePaymentMethodChange = (value) => {
    setPaymentMethod(value);
  };

  const handleChange = (e) => {
    setAmount(e.target.value);
  };

 const handleSubmit = () => {
   console.log(amount , paymentMethod);
   dispatch(paymentHandler({jwt: localStorage.getItem("jwt"),
      paymentMethod,
      amount
    }));
 };

  return (
    <div className="pt-10 space-y-5">
      <div>
        <h1 className="pb-1">Enter Amount</h1>
        <Input onChange={handleChange} value={amount} className="py-7 text-lg" placeholder="$9999" />
      </div>
      <div>
        <h1 className="pb-1">Select payment Method</h1>
        <RadioGroup onValueChange={(value)=>handlePaymentMethodChange(value)} className="flex " defaultValue="RAZORPAY">
          <div className="flex items-center space-x-2 border p-3 px-5 rounded-md ">
              <RadioGroupItem icon={DotFilledIcon}
              className="h-9 w-9"
              value="RAZORPAY"
              id="r1" />
              <Label htmlFor="r1">
                <div className="bg-white rounded-md px-5 py-2 w-32">
                  <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxEPEBAQDRIQEBUQGRUZDxYQEBARGBUQGxgYFhUYHRUYHSggGR0xGxcYLTEtMSkrLi4uGR8zODMtNygtLisBCgoKDg0OGhAQGzclICY1NS0yLS8tKy0vLy0wLS0tLSstLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAKgBKwMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABgcEBQgBAwL/xABHEAABAwIDBQQGBwMJCQAAAAABAAIDBBEFEiEGBxMxQSJRYYEUMnGRoaIjQlJygpKxFTPBFhckVGJzlNLjCCU0U4OTo7LT/8QAGQEBAAMBAQAAAAAAAAAAAAAAAAECAwUE/8QAKBEBAAICAgEDAgcBAAAAAAAAAAECAxESITEEIkEjcQUTMlGhwfEU/9oADAMBAAIRAxEAPwC8UREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBEXhcBz6c0HqL40tUyVuaJwe25AI5Eg2Nj11X2Q3sREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQF5delQ7afawwvfBTDtt0e92oabXsB1OvX4rXDhvmtxpDLLmrirys3+MY1DStvK7U+q1urnewfxVe45tJNVXb+7j6Maef3j1/Ra6eOV7fSJczg91s7z6ztTpfny8l99n6TjVUEfQuBd91vaP6Lu4PR4sFJyW7mP4cbN6rJmtFI6iVoYLScCnhj6taM33ubvjdZyw8VrW00E08mjYWPe72NBd/Bc1R7b4tI4BtZVFzzo1hvqegaBdcKtLZZmztbikRDqFFzP/KTHf8Am4l/2pf8i+dPvAxaF9/TJiWntNlax49ha5tx8Cr/APPb4mEfmxHw6cRQ/dptgcWpnPla1k0BDZw2+Uki7XtvqAddOhBUwWExMTqWkTuNiIihIiIgIiICIiAiIgIi8ug9REQEREBERAReXS6D1ERAREQEREBEWDjGLwUcTpquRkLG8y48z3Ac3HwGqDNcdCqf2jxqjw58klYRV1Ti5wponDJGSbjiydOf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" alt=""></img>
                </div>
              </Label>
          </div>

          <div className="flex items-center space-x-2 border p-3 px-5 rounded-md ">
              <RadioGroupItem icon={DotFilledIcon}
              className="h-9 w-9"
              value="STRIPE"
              id="r2" />
              <Label htmlFor="r2">
                <div className="bg-white rounded-md px-5 py-2 w-32">
                  <img src="data:image/png;base64,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" alt=""></img>
                </div>
              </Label>
          </div>
          
        </RadioGroup>
      </div>
      <Button onClick={handleSubmit} className="w-full py-7">
        Submit
      </Button>
    </div>
  )
}
export default TopUpForm;