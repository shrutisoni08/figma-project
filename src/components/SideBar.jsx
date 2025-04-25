import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Bot,
  LayoutDashboard,
  Megaphone,
  Users,
  UserPlus,
  FileText,
  ServerCog,
  HelpCircle,
} from "lucide-react";
import { MdSettings } from 'react-icons/md';

const Sidebar = () => {
  const location = useLocation();

  const menuItems = [
    { name: "Platform Setup", icon: <ServerCog size={18} />, to: "/dashboard" },
    { name: "AI Agent", icon: <Bot size={18} />, to: "/ai-agent" },
    { name: "Dashboard", icon: <LayoutDashboard size={18} />, to: "/dashboard-page" },
    { name: "Campaign", icon: <Megaphone size={18} />, to: "/campaign" },
    { name: "Promoters", icon: <Users size={18} />, to: "/promoters-page" },
    { name: "Leads", icon: <UserPlus size={18} />, to: "/leads-page" },
    { name: "Payouts", icon: <FileText size={18} />, to: "/payouts-page" },
  ];

  return (
    <div className="fixed top-0 left-0 h-screen w-60 bg-white flex flex-col justify-between py-4">
      <div className="px-4">
        <ul className="space-y-2">
          {menuItems.map((item, index) => {
            const isActive = location.pathname === item.to;
            return (
              <li key={index}>
                <Link
                  to={item.to}
                  className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium ${
                    isActive
                      ? "bg-blue-100 text-blue-600"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {item.icon}
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Optional: Settings and Help at the bottom */}
      <div className="px-4 border-t">
        <ul className="space-y-2">
          <li>
            <Link
              to="/settings-page"
              className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium ${
                location.pathname === "/settings"
                  ? "bg-blue-100 text-blue-600"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <MdSettings size={18} />
              Settings
            </Link>
          </li>
          <li>
            <Link
              to="/settings-page"
              className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium ${
                location.pathname === "/help"
                  ? "bg-blue-100 text-blue-600"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <HelpCircle size={18} />
              Help
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
