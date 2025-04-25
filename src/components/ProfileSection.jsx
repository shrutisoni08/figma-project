import React from "react";
import { Bell } from "lucide-react";

const ProfileHeader = () => {
  return (
    <div className="flex justify-between items-center px-6 py-4 border-b bg-white">
      <h1 className="text-sm font-semibold">Platform Setup</h1>
      <div className="flex items-center gap-4">
        <Bell className="h-5 w-5 text-gray-500" />
        <div className="flex items-center gap-2">
          <img
            src="https://i.pravatar.cc/32"
            alt="User avatar"
            className="w-8 h-8 rounded-full"
          />
          <div className="text-xs">
            <p className="font-semibold text-gray-800">Kadin Stanton</p>
            <p className="text-gray-500">kadinstanton@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
