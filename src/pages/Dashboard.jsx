import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { ChevronDown } from "lucide-react";
import { User, Activity, DollarSign, Briefcase } from "lucide-react";
import Sidebar from "../components/SideBar";

import ProfileHeader from "../components/ProfileSection";

const sampleChartData = [
  { name: "Jan", value: 20 },
  { name: "Feb", value: 25 },
  { name: "Mar", value: 30 },
  { name: "Apr", value: 28 },
  { name: "May", value: 36 },
  { name: "Jun", value: 40 },
];

const Dashboard = () => {
  const stats = [
    {
      icon: <User className="w-6 h-6 text-gray-600" />, // FIXED
      title: "Total Promoters",
      value: "1,234",
      subtext: "+12% vs last month",
      change: "positive",
    },
    {
      icon: <Activity className="w-6 h-6 text-gray-600" />, // FIXED
      title: "Conversion Rate",
      value: "23.5%",
      subtext: "-2.4% vs last month",
      change: "negative",
    },
    {
      icon: <DollarSign className="w-6 h-6 text-gray-600" />, // FIXED
      title: "Revenue Generated",
      value: "$12,345",
      subtext: "+8.7% vs last month",
      change: "positive",
    },
    {
      icon: <Briefcase className="w-6 h-6 text-gray-600" />, // FIXED
      title: "Active Campaigns",
      value: "3",
      subtext: "",
      change: "neutral",
    },
  ];

  const kpis = [
    { title: "Repeat Referral Rate", value: "42%", color: "text-green-400" },
    { title: "Referral Engagement Rate", value: "67%", color: "text-pink-400" },
    { title: "Churn Rate of Leads", value: "28%", color: "text-blue-400" },
    { title: "Upsell Rate of Leads", value: "19%", color: "text-purple-400" },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-60 bg-white p-4">
        <Sidebar />
      </aside>

      {/* Main content */}
      <main className="flex-1 p-6 overflow-y-auto">
        <div className="text-lg font-semibold mb-4">
          <ProfileHeader />
        </div>

        <div className="p-6">
          {/* Stats Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
  {stats.map((stat, idx) => (
    <div
      key={idx}
      className="rounded-2xl shadow-md hover:shadow-lg transition p-4 flex flex-col bg-white"
    >
      <div className="flex items-center gap-4">
        {/* Icon on the left */}
        <div className="bg-gray-100 p-3 rounded-full">
          {stat.icon}
        </div>

        {/* Title, Value, Subtext on the right */}
        <div className="flex flex-col">
          <h4 className="text-sm font-medium text-gray-500">{stat.title}</h4>
          <h2 className="text-xl font-bold">{stat.value}</h2>
          {stat.subtext && (
            <p
              className={`text-xs ${
                stat.change === "positive"
                  ? "text-green-500"
                  : stat.change === "negative"
                  ? "text-red-500"
                  : "text-gray-500"
              }`}
            >
              {stat.subtext}
            </p>
          )}
        </div>
      </div>
    </div>
  ))}
</div>

          {/* KPI Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {kpis.map((kpi, idx) => (
              <div
                key={idx}
                className="rounded-2xl shadow-md hover:shadow-lg transition p-6 flex flex-col items-center justify-center bg-white"
              >
                <div
                  className={`w-24 h-24 rounded-full border-4 ${kpi.color} flex items-center justify-center text-2xl font-bold`}
                >
                  {kpi.value}
                </div>
                <h4 className="text-center text-sm font-medium text-gray-600 mt-4">
                  {kpi.title}
                </h4>
              </div>
            ))}
          </div>
        </div>

        {/* Chart and Pie */}
        <div className="grid grid-cols-3 gap-6 mb-6">
          <div className="col-span-2 bg-white p-4 rounded-xl shadow">
            <div className="flex justify-between items-center mb-2">
              <h4 className="font-semibold">Promoter Performance Over Time</h4>
              <div className="text-sm text-gray-500 flex items-center gap-1 cursor-pointer">
                Last 6 months <ChevronDown size={16} />
              </div>
            </div>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={sampleChartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#3B82F6"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="bg-white p-4 rounded-xl shadow flex flex-col justify-between">
            <div className="text-sm text-gray-500">Conversion Success Rate</div>
            <div className="text-center my-4">
              <div className="w-24 h-24 mx-auto rounded-full border-8 border-blue-500 border-t-transparent animate-spin-slow" />
              <div className="text-xs mt-2">
                Referrals sent: 57%
                <br />
                Converted: 42%
              </div>
            </div>
            <div className="text-sm font-medium">Top Performing Channel</div>
            <div className="flex gap-2 text-xs mt-2">
              <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded-full">
                Facebook 78%
              </span>
              <span className="bg-red-100 text-red-600 px-2 py-1 rounded-full">
                Twitter 45%
              </span>
              <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                LinkedIn 23%
              </span>
            </div>
          </div>
        </div>

        {/* Activities */}
        <div className="bg-white rounded-xl shadow p-4 mb-6">
          <h4 className="font-semibold mb-4">Recent Activities</h4>
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-gray-500">
                <th>Activities</th>
                <th>Date</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Julian earned $10", "29-4-2024", "10:30 AM"],
                [
                  "John Doe signed up from your referral link",
                  "29-4-2024",
                  "9:45 AM",
                ],
                ["You reached 50-referrals milestone!", "30-4-2024", "8:20 AM"],
                [
                  "You optimized your referral campaign",
                  "31-4-2024",
                  "7:00 AM",
                ],
              ].map(([activity, date, time], i) => (
                <tr key={i} className="border-t">
                  <td className="py-2">{activity}</td>
                  <td>{date}</td>
                  <td>{time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Leaderboard */}
        <div className="bg-white rounded-xl shadow p-4">
          <h4 className="font-semibold mb-4">Leaderboard Table View</h4>
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-gray-500">
                <th>Rank</th>
                <th>Promoter Name</th>
                <th>Conversion Rate</th>
                <th>Referrals Sent</th>
                <th>Successful Conversions</th>
                <th>Revenue Generated</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Emory Davido", "150", "80", "65%", "$1,200"],
                ["Kadin Upkrist", "132", "90", "65%", "$950"],
                ["Randy Ouhone", "110", "60", "60%", "$850"],
                ["Jason Vaccaro", "100", "85", "75%", "$800"],
                ["Jacalyn Leith", "90", "30", "62%", "$600"],
                ["Marvin Septimus", "80", "25", "25%", "$200"],
                ["Haylie Senta", "120", "55", "45%", "$150"],
                ["Randy Hershitz", "110", "90", "65%", "$850"],
              ].map(([name, cr, sent, sc, rev], i) => (
                <tr key={i} className="border-t">
                  <td className="py-2">{i + 1}</td>
                  <td>{name}</td>
                  <td>{cr}</td>
                  <td>{sent}</td>
                  <td>{sc}</td>
                  <td>{rev}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

const NavItem = ({ label, active }) => (
  <div
    className={`text-sm px-3 py-2 rounded-md cursor-pointer ${
      active
        ? "bg-blue-100 text-blue-600 font-medium"
        : "text-gray-600 hover:bg-gray-100"
    }`}
  >
    {label}
  </div>
);

const StatCard = ({ title, value, subtext, red }) => (
  <div className="bg-white p-4 rounded-xl shadow text-sm">
    <div className="text-gray-500 mb-1">{title}</div>
    <div className="text-lg font-bold">{value}</div>
    <div className={`text-xs ${red ? "text-red-500" : "text-green-500"}`}>
      {subtext}
    </div>
  </div>
);

const KPI = ({ title, value, color }) => {
  const colorMap = {
    green: "bg-green-100 text-green-600",
    pink: "bg-pink-100 text-pink-600",
    blue: "bg-blue-100 text-blue-600",
    purple: "bg-purple-100 text-purple-600",
  };
  return (
    <div
      className={`p-4 rounded-xl shadow text-center text-sm ${colorMap[color]} bg-opacity-20`}
    >
      <div className="font-medium text-gray-600">{title}</div>
      <div className="text-2xl font-bold">{value}</div>
    </div>
  );
};

export default Dashboard;
