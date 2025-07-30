import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { VerifiedIcon } from "lucide-react";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button";
import AccountVerificationForm from "./AccountVerificationForm";
import { useSelector } from "react-redux";

const Profile = () => {
  const {auth} = useSelector(store => store);
  const handleEnableTwoStepVerification = () => {
    console.log("Enable two-step verification");
  }

  return (
    <div className="flex flex-col items-center mb-5">
      <div className="pt-10 w-full lg:w-[60%]">
        <Card>
          <CardHeader className="pb-9">
            <CardTitle className="font-bold">Your Information</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="lg:flex gap-32">
              <div className="space-y-7">
                <div className="flex">
                  <p className="w-[9rem] font-semibold">Email :</p>
                  <p className="text-gray-500">{auth.user?.email}</p>
                </div>
                <div className="flex">
                  <p className="w-[9rem] font-semibold">Full Name :</p>
                  <p className="text-gray-500">{auth.user?.fullName}</p>
                </div>
                <div className="flex">
                  <p className="w-[9rem] font-semibold">Date of Birth :</p>
                  <p className="text-gray-500">--not born yet--</p>
                </div>
                <div className="flex">
                  <p className="w-[9rem] font-semibold">Nationality :</p>
                  <p className="text-gray-500">Indian</p>
                </div>
              </div>

              <div className="space-y-7">
                <div className="flex">
                  <p className="w-[9rem] font-semibold">Address :</p>
                  <p className="text-gray-500">--your address--</p>
                </div>
                <div className="flex">
                  <p className="w-[9rem] font-semibold">City :</p>
                  <p className="text-gray-500">--city--</p>
                </div>
                <div className="flex">
                  <p className="w-[9rem] font-semibold">PostCode :</p>
                  <p className="text-gray-500">144008</p>
                </div>
                <div className="flex">
                  <p className="w-[9rem] font-semibold">Country :</p>
                  <p className="text-gray-500">India</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        <div className="mt-6">
          <Card className="w-full">
            <CardHeader className="pb-7">
              <div className="flex items-center gap-3">
                <CardTitle>2 Step Verification</CardTitle>
                {true ? (
                  <Badge className={"space-x-text-white bg-green-600"}>
                    <VerifiedIcon />
                    <span>Enabled</span>
                  </Badge>
                ) : (
                  <Badge className="bg-orange-600">Disabled</Badge>
                )}
              </div>
            </CardHeader>
            <CardContent>
              <div>
                <Dialog>
                  <DialogTrigger>
                    <Button>Enabled Two step Verification</Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Verify your account</DialogTitle>
                       
                    </DialogHeader>
                    <AccountVerificationForm handleSubmit={handleEnableTwoStepVerification} />
                  </DialogContent>
                </Dialog>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
export default Profile;
