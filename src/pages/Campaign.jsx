import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  Legend,
  PieChart,
  Pie,
  Cell
} from "recharts";
import Sidebar from "../components/SideBar";
import { ChevronLeft } from "lucide-react";

const barData = [
  { name: "Jan", clicks: 2800 },
  { name: "Feb", clicks: 2300 },
  { name: "Mar", clicks: 900 },
  { name: "Apr", clicks: 3000 },
  { name: "May", clicks: 1600 },
  { name: "Jun", clicks: 1200 },
  { name: "Jul", clicks: 2700 },
  { name: "Aug", clicks: 2000 },
  { name: "Sep", clicks: 3000 },
  { name: "Oct", clicks: 1000 },
  { name: "Nov", clicks: 1800 },
  { name: "Dec", clicks: 2400 },
];

const lineData = [
  { name: "Jan", revenue: 450, conversion: 35 },
  { name: "Feb", revenue: 480, conversion: 30 },
  { name: "Mar", revenue: 420, conversion: 32 },
  { name: "Apr", revenue: 600, conversion: 38 },
  { name: "May", revenue: 700, conversion: 45 },
  { name: "Jun", revenue: 650, conversion: 40 },
  { name: "Jul", revenue: 820, conversion: 50 },
  { name: "Aug", revenue: 790, conversion: 48 },
  { name: "Sep", revenue: 740, conversion: 42 },
  { name: "Oct", revenue: 720, conversion: 41 },
  { name: "Nov", revenue: 710, conversion: 39 },
  { name: "Dec", revenue: 750, conversion: 43 },
];

const pieData = [
  { name: "Referrals sent", value: 57 },
  { name: "Converted", value: 42 },
];

const COLORS = ["#6366F1", "#E5E7EB"];

export default function Campaign() {
  return (
    <div className="flex min-h-screen bg-white text-gray-900">
  
      <main className="flex-1 px-6 py-4">
        <div className="flex items-center space-x-2 mb-4">
          <ChevronLeft className="w-5 h-5 text-gray-500" />
          <h1 className="text-xl font-semibold">Summer Referral Program</h1>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-white rounded-xl shadow p-4">
            <p className="text-sm text-gray-500">Total Promoters</p>
            <h2 className="text-2xl font-bold">1,234</h2>
            <p className="text-xs text-green-500">+12% vs last month</p>
          </div>
          <div className="bg-white rounded-xl shadow p-4">
            <p className="text-sm text-gray-500">Conversion rate</p>
            <h2 className="text-2xl font-bold text-red-500">23.5%</h2>
            <p className="text-xs text-red-400">-2.4% vs last month</p>
          </div>
          <div className="bg-white rounded-xl shadow p-4">
            <p className="text-sm text-gray-500">Revenue Generated</p>
            <h2 className="text-2xl font-bold">$12,345</h2>
            <p className="text-xs text-green-500">+8.7% vs last month</p>
          </div>
          <div className="bg-white rounded-xl shadow p-4">
            <p className="text-sm text-gray-500">New Leads</p>
            <h2 className="text-2xl font-bold">500</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="col-span-2 bg-white rounded-xl shadow p-4">
            <h3 className="text-md font-medium mb-2">Total Link Clicks</h3>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={barData}>
                <XAxis dataKey="name" stroke="#CBD5E1" />
                <YAxis stroke="#CBD5E1" />
                <Tooltip />
                <Bar dataKey="clicks" fill="#A5B4FC" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="bg-white rounded-xl shadow p-4">
            <h3 className="text-md font-medium mb-4">Conversion Success Rate</h3>
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  data={pieData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={60}
                  innerRadius={40}
                  fill="#8884d8"
                  label
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow p-4">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-md font-medium">Campaign Performance</h3>
            <select className="text-sm border border-gray-300 rounded px-2 py-1">
              <option>Last 1 year</option>
              <option>Last 6 months</option>
              <option>Last 3 months</option>
            </select>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={lineData}>
              <XAxis dataKey="name" stroke="#CBD5E1" />
              <YAxis yAxisId="left" stroke="#6366F1" />
              <YAxis yAxisId="right" orientation="right" stroke="#FBBF24" />
              <Tooltip />
              <Legend />
              <Line
                yAxisId="left"
                type="monotone"
                dataKey="revenue"
                stroke="#6366F1"
                strokeWidth={2}
                dot={{ r: 4 }}
                activeDot={{ r: 6 }}
              />
              <Line
                yAxisId="right"
                type="monotone"
                dataKey="conversion"
                stroke="#FBBF24"
                strokeWidth={2}
                dot={{ r: 4 }}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </main>
    </div>
  );
}
