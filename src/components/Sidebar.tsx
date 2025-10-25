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
    <aside className="flex flex-col w-72 h-full px-6 py-5 bg-white border-r border-[#e0e2e7]">
      <nav className="flex flex-col gap-6">
        <div className="flex flex-col gap-1">
          {navigationItems.map((item, index) => (
            <React.Fragment key={index}>
              <Button
                variant={item.active ? "outline" : "ghost"}
                className={`w-full h-10 justify-start gap-3 px-4 py-2 rounded-[10px] ${
                  item.active ? "bg-white border-[#cdcccc]" : ""
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span
                  className={`flex-1 text-left [font-family:'Inter',Helvetica] font-medium text-base tracking-[0.20px] leading-6 ${
                    item.active ? "text-[#1b1d23]" : "text-[#3d4350]"
                  }`}
                >
                  {item.label}
                </span>
                {item.hasSubmenu && <ChevronRightIcon className="w-5 h-5" />}
              </Button>

              {item.hasSubmenu && (
                <div className="flex gap-[22px] mt-1">
                  <div className="w-0.5 bg-[#d9d9d9]" />
                  <div className="flex flex-col gap-[3px] flex-1">
                    {submenuItems.map((subitem, subindex) => (
                      <Button
                        key={subindex}
                        variant="ghost"
                        className={`w-full h-auto justify-start px-3 py-2 rounded-lg ${
                          subitem.active ? "bg-[#f7f8f9]" : ""
                        }`}
                      >
                        <span className="[font-family:'Inter',Helvetica] font-semibold text-[#5c5e64] text-xs tracking-[-0.24px] leading-4">
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
