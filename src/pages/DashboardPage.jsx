import React from "react";
import {
  FaUserCog,
  FaRobot,
  FaChartBar,
  FaBullhorn,
  FaUsers,
  FaMoneyBillWave,
  FaCog,
  FaQuestionCircle,
} from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import Sidebar from "../components/SideBar";
import ProfileHeader from "../components/ProfileSection";
import { Link } from "react-router-dom";

const DashboardPage = () => {
  return (
    <div className="flex min-h-screen bg-[#f9f9fb] font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md border-r border-gray-100 flex flex-col justify-between">
        <Sidebar />
      </aside>

      {/* Main Content */}
      <main className="flex-1 px-8 py-6">
        {/* Top bar */}
        <div>
          <ProfileHeader />
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-2xl shadow p-6 flex gap-6">
          {/* Left Checklist */}
          <div className="w-1/3 bg-[#f3f7fe] rounded-xl p-5">
            <h3 className="text-sm font-semibold text-blue-600 mb-2">
              Get Started with ReferralHub
            </h3>
            <p className="text-sm text-gray-600 mb-5">
              To get started with better referrals & rewards, complete your
              account setup in a few easy steps.
            </p>

            <div className="space-y-5">
              {[
                { text: "Set Up Business Profile", path: "/dashboard" },
                {
                  text: "Sync Your Customer Data",
                  path: "/sync-customer-data",
                },
                {
                  text: "Set Up AI Agent Rules",
                  path: "/set-up-ai-agent-rules",
                },
                {
                  text: "Set Up First Campaign",
                  path: "/set-up-first-campaign",
                },
              ].map((step, idx) => (
                <Link
                  to={step.path}
                  key={idx}
                  className="flex items-center gap-3 hover:opacity-80"
                >
                  <div className="w-5 h-5 border-2 border-gray-400 rounded-full" />
                  <div>
                    <p className="text-sm font-medium text-gray-800">
                      {step.text}
                    </p>
                    <p className="text-xs text-gray-500">Not Started</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Right Form */}
          <div className="flex-1">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Build Your Business Identity
            </h2>
            <p className="text-sm text-gray-500 mb-6">
              Help us tailor the referral experience by adding key details about
              your business
            </p>

            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="col-span-2">
                <label className="block mb-1">Business Logo</label>
                <button className="px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-600">
                  Choose Image
                </button>
              </div>

              <div className="col-span-2">
                <label className="block mb-1">Business Description</label>
                <textarea
                  rows="2"
                  className="w-full border border-gray-300 rounded-lg p-2 resize-none"
                  placeholder="Enter business description..."
                />
              </div>

              <div>
                <label className="block mb-1">Business Name</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg p-2"
                  placeholder="Enter business name"
                />
              </div>
              <div>
                <label className="block mb-1">Business Email</label>
                <input
                  type="email"
                  className="w-full border border-gray-300 rounded-lg p-2"
                  placeholder="e.g., robert.fox@myemail.com"
                />
              </div>

              <div>
                <label className="block mb-1">Business Phone No.</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg p-2"
                  placeholder="Enter phone no."
                />
              </div>
              <div>
                <label className="block mb-1">Industry</label>
                <select className="w-full border border-gray-300 rounded-lg p-2">
                  <option>Select</option>
                </select>
              </div>

              <div>
                <label className="block mb-1">Services</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg p-2"
                  placeholder="Enter services..."
                />
              </div>
              <div>
                <label className="block mb-1">Products</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg p-2"
                  placeholder="Enter products..."
                />
              </div>

              <div>
                <label className="block mb-1">Company Size (Optional)</label>
                <select className="w-full border border-gray-300 rounded-lg p-2">
                  <option>Select</option>
                </select>
              </div>
              <div>
                <label className="block mb-1">City</label>
                <select className="w-full border border-gray-300 rounded-lg p-2">
                  <option>Select</option>
                </select>
              </div>

              <div>
                <label className="block mb-1">State</label>
                <select className="w-full border border-gray-300 rounded-lg p-2">
                  <option>Select</option>
                </select>
              </div>
              <div>
                <label className="block mb-1">Zip Code</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg p-2"
                  placeholder="Enter zip code"
                />
              </div>
            </div>

            <div className="mt-6 flex justify-end">
              <Link to="/sync-customer-data">
                <button className="px-6 py-2 bg-gradient-to-r from-blue-500 to-blue-400 text-white font-semibold rounded-lg">
                  Next
                </button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardPage;
