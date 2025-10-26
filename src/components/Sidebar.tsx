import {
  BarChart3Icon,
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  LayoutDashboardIcon,
  MessageSquareIcon,
  SettingsIcon,
  UsersIcon,
} from "lucide-react";
import React, { useState } from "react";
import { Button } from "./ui/button";

const navigationItems = [
  { icon: "/dashboard-icon.svg", label: "Dashboard", active: false, isCustomIcon: true },
  { icon: "/agents-icon.svg", label: "Agents", active: true, isCustomIcon: true },
  { icon: "/usage-icon.svg", label: "Usage", active: false, isCustomIcon: true },
  { icon: "/chat-log-icon.svg", label: "Chat Log", active: false, isCustomIcon: true },
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

interface SidebarProps {
  isCollapsed: boolean;
  onToggleCollapse: () => void;
}

export const Sidebar = ({ isCollapsed, onToggleCollapse }: SidebarProps): JSX.Element => {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  return (
    <div className="relative h-full">
      <aside
        className={`absolute left-0 top-0 flex flex-col h-full px-5 py-4 bg-white border-r border-[#e0e2e7] transition-all duration-300 ease-in-out z-10 shadow-lg ${
          isCollapsed ? "w-[70px]" : "w-[245px]"
        }`}
      >
      <nav className="flex flex-col gap-5">
        <div className="flex flex-col gap-1">
          {navigationItems.map((item, index) => (
            <React.Fragment key={index}>
              <Button
                variant={item.active ? "outline" : "ghost"}
                className={`w-full h-[39px] gap-2.5 rounded-[10px] ${
                  isCollapsed ? "justify-center px-2" : "justify-start px-3 py-1.5"
                } ${
                  item.active ? "bg-white border-[#cdcccc]" : ""
                }`}
                onClick={() => {
                  if (item.hasSubmenu && !isCollapsed) {
                    setIsSettingsOpen(!isSettingsOpen);
                  }
                }}
              >
                <div className="w-[17px] h-[17px] flex items-center justify-center flex-shrink-0">
                  {item.isCustomIcon ? (
                    <img src={item.icon as string} alt="" className="w-[17px] h-[17px]" />
                  ) : (
                    <item.icon className="w-[17px] h-[17px]" />
                  )}
                </div>
                {!isCollapsed && (
                  <>
                    <span
                      className={`flex-1 text-left [font-family:'Inter',Helvetica] font-medium text-[14px] tracking-[0.17px] leading-5 whitespace-nowrap ${
                        item.active ? "text-[#1b1d23]" : "text-[#3d4350]"
                      }`}
                    >
                      {item.label}
                    </span>
                    {item.hasSubmenu && (
                      <ChevronDownIcon
                        className={`w-[17px] h-[17px] transition-transform duration-200 ${
                          isSettingsOpen ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </>
                )}
              </Button>

              {item.hasSubmenu && !isCollapsed && (
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isSettingsOpen ? "max-h-[200px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="flex gap-[19px] pt-1">
                    <div className="w-0.5 bg-[#d9d9d9] ml-[20px]" />
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
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </nav>
    </aside>

    <div className={`absolute h-full flex items-center justify-center transition-all duration-300 ease-in-out ${
      isCollapsed ? "left-[70px]" : "left-[245px]"
    }`}>
      <button
        onClick={onToggleCollapse}
        className="absolute z-10 w-6 h-6 bg-white border border-[#e0e2e7] rounded-full flex items-center justify-center shadow-sm hover:shadow-md hover:bg-gray-50 transition-all duration-200"
        aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
      >
        {isCollapsed ? (
          <ChevronRightIcon className="w-4 h-4 text-[#3d4350]" />
        ) : (
          <ChevronLeftIcon className="w-4 h-4 text-[#3d4350]" />
        )}
      </button>
      <div className="w-[3px] h-5 bg-[#d9d9d9] rounded-[33554400px]" />
    </div>
  </div>
  );
};
