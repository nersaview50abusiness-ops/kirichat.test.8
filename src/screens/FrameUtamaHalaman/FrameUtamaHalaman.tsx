import { PlusIcon } from "lucide-react";
import React from "react";
import { Button } from "../../components/ui/button";
import { Topbar } from "../../components/Topbar";
import { Sidebar } from "../../components/Sidebar";

export const FrameUtamaHalaman = (): JSX.Element => {
  return (
    <div className="flex flex-col h-screen bg-white">
      <Topbar />

      <div className="flex flex-1 overflow-hidden">
        <Sidebar />

        <div className="flex w-6 h-full items-center justify-center">
          <div className="w-[3px] h-6 bg-wwwchatbasecoiron rounded-[33554400px]" />
        </div>

        <main className="flex flex-col flex-1 overflow-hidden">
          <div className="flex flex-col p-6 bg-white">
            <h1 className="[font-family:'Inter',Helvetica] font-semibold text-[#1b1d23] text-2xl tracking-[0] leading-[31.9px]">
              Agents
            </h1>
            <p className="[font-family:'Inter',Helvetica] font-medium text-[#3d4350] text-base tracking-[0.30px] leading-[24.0px]">
              Here you can see agents that you build
            </p>
          </div>

          <div className="flex flex-col items-center justify-center flex-1 bg-white">
            <div className="flex flex-col items-center gap-[21px] w-full max-w-[415.37px]">
              <div
                className="flex flex-col w-full h-[146px] items-start gap-2.5 px-[91px] py-[31px] rounded-[18.65px] overflow-hidden bg-cover bg-center"
                style={{ backgroundImage: "url(/foto-no-agent.png)" }}
              >
                <div className="relative w-[239.68px] h-[83.5px]">
                  <div className="absolute w-[77.57%] h-[76.28%] top-[23.72%] left-[9.96%] bg-[#ffffffcc] rounded-[7.25px] shadow-[0px_1px_11px_1px_#6363631f]" />
                  <div className="absolute w-[90.08%] h-[76.28%] top-[11.86%] left-[3.71%] bg-[#ffffffcc] rounded-[7.25px] shadow-[0px_1px_11px_1px_#6363631f]" />
                  <div className="absolute w-[97.50%] h-[76.28%] top-0 left-0 bg-[#ffffffd9] rounded-[7.25px] shadow-[0px_1px_11px_1px_#6363631f]" />
                  <div className="absolute w-[25.06%] h-[12.28%] top-[15.71%] left-[67.31%] [font-family:'Inter',Helvetica] font-normal text-[#bcbcbc] text-[6px] text-right tracking-[0] leading-[normal]">
                    42 min ago
                  </div>
                  <div className="absolute w-[32.96%] h-[11.98%] top-[16.17%] left-[22.82%] [font-family:'Urbanist',Helvetica] font-semibold text-black text-[10px] tracking-[0] leading-[normal] whitespace-nowrap">
                    Kirichat
                  </div>
                  <div className="absolute w-[58.06%] h-[25.54%] top-[33.78%] left-[22.80%] [font-family:'Urbanist',Helvetica] font-semibold text-[#838383] text-[7px] tracking-[0] leading-[normal]">
                    Hi im your AI customer service , what can i help you with?
                  </div>
                  <img
                    className="absolute w-[15.14%] h-[46.56%] top-[14.86%] left-[4.04%] object-cover"
                    alt="Rectangle"
                    src="/rectangle-28.svg"
                  />
                </div>
              </div>

              <h2 className="[font-family:'Inter',Helvetica] font-bold text-[#3d4350] text-2xl text-center tracking-[0.30px] leading-6 whitespace-nowrap">
                No Agents yet..
              </h2>

              <p className="[font-family:'Inter',Helvetica] font-normal text-[#3d4350] text-base text-center tracking-[0.30px] leading-6">
                Build your first AI agents to answering <br />
                customer question, book meetings, and more.
              </p>

              <Button className="w-[182px] h-10 bg-[#316afe] hover:bg-[#2557d9] rounded-[10px] border border-solid shadow-[inset_0px_2px_8px_#ffffff8f,inset_-2px_-2px_12px_#ffffff8f]">
                <span className="[font-family:'Inter',Helvetica] font-semibold text-white text-sm tracking-[0.30px] leading-5">
                  Create new agent
                </span>
                <PlusIcon className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};
