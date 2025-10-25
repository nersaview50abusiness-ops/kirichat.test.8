import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

export const Topbar = (): JSX.Element => {
  return (
    <header className="flex items-center justify-between w-full h-20 px-5 py-2.5 bg-white border-b border-[#e0e2e7]">
      <div className="flex items-center gap-[50px]">
        <div className="flex items-center gap-3">
          <img
            className="w-9 h-9"
            alt="Symbol kirichat"
            src="/symbol-kirichat.svg"
          />
          <div className="[font-family:'Urbanist',Helvetica] font-bold text-[#1b1d23] text-[32px] tracking-[-0.32px] leading-[48px] whitespace-nowrap">
            Kirichat
          </div>
          <Badge
            variant="outline"
            className="h-7 px-1.5 py-0.5 bg-white rounded-lg border-[#e0e2e7] shadow-innere-shadow-gray-large"
          >
            <span className="[font-family:'Urbanist',Helvetica] font-semibold text-[#3d4350] text-base tracking-[0.20px]">
              Pro
            </span>
          </Badge>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex flex-col justify-center w-[231px] h-10 px-4 py-1.5 bg-white rounded-[10px] border border-[#e0e2e7]">
            <span className="[font-family:'Inter',Helvetica] font-semibold text-[#3d4350] text-xs tracking-[0] leading-[15px] truncate">
              Kirichat Framework Nama
            </span>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="h-5 w-5 p-0.5 rounded-lg"
          >
            <img className="w-4 h-4" alt="Component" src="/component-1.svg" />
          </Button>
        </div>
      </div>

      <div className="flex items-center gap-6">
        <img className="h-auto" alt="Button group" src="/button-group.svg" />
        <Avatar className="w-10 h-10">
          <AvatarImage src="/ellipse-2082.png" alt="User avatar" />
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
};
