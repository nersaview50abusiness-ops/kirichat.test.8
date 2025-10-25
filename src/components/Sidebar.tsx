import {
  BarChart3Icon,
  ChevronRightIcon,
  LayoutDashboardIcon,
  MessageSquareIcon,
  SettingsIcon,
  UsersIcon,
} from "lucide-react";
import React from "react";
import { Button } from "./ui/button";

const navigationItems = [
  { icon: LayoutDashboardIcon, label: "Dashboard", active: false },
  { icon: UsersIcon, label: "Agents", active: true },
  { icon: BarChart3Icon, label: "Usage", active: false },
  { icon: MessageSquareIcon, label: "Chat Log", active: false },
  {
    icon: SettingsIcon,
    label: "Framework Settings",
    active: false,
    hasSubmenu: true,
  },
];

const submenuItems = [
  { label: "Generals", active: false },
  { label: "Team", active: true },
  { label: "Billings", active: false },
  { label: "Plan", active: false },
];

export const Sidebar = (): JSX.Element => {
  return (
    <aside className="flex flex-col w-[245px] h-full px-5 py-4 bg-white border-r border-[#e0e2e7]">
      <nav className="flex flex-col gap-5">
        <div className="flex flex-col gap-1">
          {navigationItems.map((item, index) => (
            <React.Fragment key={index}>
              <Button
                variant={item.active ? "outline" : "ghost"}
                className={`w-full h-[34px] justify-start gap-2.5 px-3 py-1.5 rounded-[10px] ${
                  item.active ? "bg-white border-[#cdcccc]" : ""
                }`}
              >
                <item.icon className="w-[17px] h-[17px]" />
                <span
                  className={`flex-1 text-left [font-family:'Inter',Helvetica] font-medium text-[14px] tracking-[0.17px] leading-5 ${
                    item.active ? "text-[#1b1d23]" : "text-[#3d4350]"
                  }`}
                >
                  {item.label}
                </span>
                {item.hasSubmenu && <ChevronRightIcon className="w-[17px] h-[17px]" />}
              </Button>

              {item.hasSubmenu && (
                <div className="flex gap-[19px]">
                  <div className="w-0.5 bg-[#d9d9d9] ml-[15px]" />
                  <div className="flex flex-col gap-[2px] flex-1">
                    {submenuItems.map((subitem, subindex) => (
                      <Button
                        key={subindex}
                        variant="ghost"
                        className={`w-full h-auto justify-start px-2.5 py-1.5 rounded-lg ${
                          subitem.active ? "bg-[#f7f8f9]" : ""
                        }`}
                      >
                        <span className="[font-family:'Inter',Helvetica] font-semibold text-[#5c5e64] text-[10px] tracking-[-0.20px] leading-[14px]">
                          {subitem.label}
                        </span>
                      </Button>
                    ))}
                  </div>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </nav>
    </aside>
  );
};
