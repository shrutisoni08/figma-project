import React from "react";
import { Search, Eye } from "lucide-react";
import Sidebar from "../components/SideBar";

const payouts = [
  {
    id: "#P-1048",
    name: "Emery Dokidis",
    points: 500,
    date: "28-4-2024",
    reward: "Spring Boost",
    status: "Paid",
  },
  {
    id: "#P-1047",
    name: "Kadin Lipshutz",
    points: 250,
    date: "27-5-2024",
    reward: "Summer Referral Program",
    status: "Paid",
  },
  {
    id: "#P-1046",
    name: "Randy Culhane",
    points: 300,
    date: "29-5-2024",
    reward: "Early Bird Special",
    status: "Disputed",
  },
  {
    id: "#P-1045",
    name: "Jaxson Vaccaro",
    points: 100,
    date: "30-6-2024",
    reward: "Early Bird Special",
    status: "Paid",
  },
  {
    id: "#P-1044",
    name: "Jocelyn Levin",
    points: 200,
    date: "01-7-2024",
    reward: "Summer Referral Program",
    status: "Disputed",
  },
  {
    id: "#P-1043",
    name: "Maren Septimus",
    points: 300,
    date: "03-7-2024",
    reward: "Summer Referral Program",
    status: "Paid",
  },
  {
    id: "#P-1042",
    name: "Haylie Saris",
    points: 220,
    date: "05-7-2024",
    reward: "Spring Boost",
    status: "Paid",
  },
  {
    id: "#P-1041",
    name: "Randy Herwitz",
    points: 400,
    date: "10-7-2024",
    reward: "Spring Boost",
    status: "Disputed",
  },
];

const Badge = ({ status }) => {
  const colors = {
    Paid: "bg-green-100 text-green-700",
    Disputed: "bg-orange-100 text-orange-700",
  };
  return (
    <span className={`px-2 py-1 text-xs rounded-full ${colors[status]}`}>
      {status}
    </span>
  );
};

const Tabs = () => {
  return (
    <div className="flex gap-2 bg-gray-100 p-1 rounded-md w-fit">
      <button className="px-4 py-2 text-sm font-medium bg-white rounded shadow-sm">
        All Payouts
      </button>
      <button className="px-4 py-2 text-sm font-medium text-gray-600">
        Disputes
      </button>
      <button className="px-4 py-2 text-sm font-medium text-gray-600">
        Payout Settings
      </button>
    </div>
  );
};

const HeaderProfile = () => {
  return (
    <div className="flex items-center gap-3">
      <img
        src="https://i.pravatar.cc/40"
        alt="avatar"
        className="w-9 h-9 rounded-full border"
      />
      <div className="text-right">
        <div className="font-medium text-sm">Kadin Stanton</div>
        <div className="text-xs text-gray-500">kadinstanton@gmail.com</div>
      </div>
    </div>
  );
};

const Payouts = () => {
  return (
    <div className="flex">
      {/* Sidebar - Fixed */}
      <div className="w-56 fixed top-0 left-0 h-full bg-white border-r p-4 space-y-4">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 ml-56 bg-gray-50 p-6 overflow-y-auto min-h-screen">
        <div className="flex justify-between items-start mb-6">
          <h2 className="text-2xl font-semibold">
            Manage and monitor your payouts
          </h2>
          <HeaderProfile />
        </div>

        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="p-4 bg-white shadow rounded">
            <p className="text-gray-500 text-sm">Total Points Given</p>
            <p className="text-xl font-semibold">12,500</p>
          </div>
          <div className="p-4 bg-white shadow rounded">
            <p className="text-gray-500 text-sm">Current Point Balance</p>
            <p className="text-xl font-semibold">1,250</p>
          </div>
          <div className="p-4 bg-white shadow rounded">
            <p className="text-gray-500 text-sm">Last Points Transfer</p>
            <p className="text-xl font-semibold">April 9, 2025</p>
          </div>
        </div>

        <Tabs />

        <div className="flex justify-between items-center mb-4 mt-6">
          <div className="relative w-full max-w-xs">
            <input
              type="text"
              placeholder="Search"
              className="w-full pl-10 pr-4 py-2 border rounded"
            />
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
          </div>
          <button className="px-4 py-2 border rounded bg-white">Filter</button>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full text-sm bg-white rounded shadow">
            <thead>
              <tr className="text-left border-b">
                <th className="py-2 px-3">Payout ID</th>
                <th>Promoter Name</th>
                <th>Points</th>
                <th>Reward Date</th>
                <th>Reward Earned For</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {payouts.map((item) => (
                <tr key={item.id} className="border-b hover:bg-gray-50">
                  <td className="py-2 px-3">{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.points} pts</td>
                  <td>{item.date}</td>
                  <td>{item.reward}</td>
                  <td>
                    <Badge status={item.status} />
                  </td>
                  <td className="flex items-center gap-2 py-2">
                    <Eye className="h-4 w-4 cursor-pointer text-gray-500" />
                    <button className="text-blue-600 text-xs underline">
                      {item.status === "Disputed"
                        ? "Track Dispute"
                        : "Request Dispute"}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Payouts;
