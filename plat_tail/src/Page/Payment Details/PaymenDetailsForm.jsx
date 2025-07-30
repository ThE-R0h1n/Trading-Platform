import { Button } from "@/components/ui/button";
import {
  Form,
  FormLabel,
  FormControl,
  FormDescription,
  FormItem,
  FormMessage,
  FormField,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import React from "react";
import { useForm } from "react-hook-form";
import { DialogClose } from "@/components/ui/dialog";
import { useDispatch } from "react-redux";
import { addPaymentDetails } from "@/State/Withdrawal/Action";

const PaymentDetailsForm = () => {
  const dispatch = useDispatch();
  const form = useForm({
    resolver: "",
    defaultValues: {
      accountHolderName: "",
      ifsc: "",
      accountNumber: "",
      bankName: "",
    },
  });

  const onSubmit = (data) => {
    dispatch(addPaymentDetails({
      paymentDetails : data,
      jwt : localStorage.getItem("jwt")
    }))
    console.log(data);
  };

  return (
    <div className="px-10 py-2">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="accountHolderName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Account Holder Name</FormLabel>
                <FormControl>
                  <Input
                    name="accountHolderName"
                    className="border w-full border-gray-700 p-5"
                    placeholder="Enter Name..."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="ifsc"
            render={({ field }) => (
              <FormItem>
                <FormLabel>ISFC CODE</FormLabel>
                <FormControl>
                  <Input
                    name="ifsc"
                    className="border w-full border-gray-700 p-5"
                    placeholder="Enter Ifsc code"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="accountNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Account Number</FormLabel>
                <FormControl>
                  <Input
                    name="accountNumber"
                    className="border w-full border-gray-700 p-5"
                    placeholder="Enter Account no."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="confirmAccountNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirm Account Number</FormLabel>
                <FormControl>
                  <Input
                    name="confirmAccountNumber"
                    className="border w-full border-gray-700 p-5"
                    placeholder="Confirm account no."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="bankName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Bank Name</FormLabel>
                <FormControl>
                  <Input
                    name="bankName"
                    className="border w-full border-gray-700 p-5"
                    placeholder="Enter Bank name"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <DialogClose className="w-full">
            <Button type="submit" className="w-full py-5">
              Submit
            </Button>
          </DialogClose>
        </form>
      </Form>
    </div>
  );
};
export default PaymentDetailsForm;
