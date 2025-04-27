import React, { useState } from "react";
import { Filter, Eye, Trash2 } from "lucide-react";
import Sidebar from "../components/SideBar";
import ProfileHeader from "../components/ProfileSection";
import Campaign from "./Campaign";

const initialCampaigns = [
  {
    id: 1,
    title: "Summer Referral Program",
    date: "5/31/2024 - 8/30/2024",
    status: "Active",
    referrals: 245,
    conversion: "32%",
    roi: "287%",
    note: "Increase reward by 10% to boost conversion rates during peak season",
    isDeletable: false, // Cannot be deleted
  },
  {
    id: 2,
    title: "Early Bird Special",
    date: "8/20/2024 - 9/19/2024",
    status: "Inactive",
    referrals: 300,
    conversion: "40%",
    roi: "320%",
    note: "Extend your campaign! Strong engagement suggests higher conversions with more time.",
    isDeletable: false, // Cannot be deleted
  },
];

export default function CampaignPage() {
  const [campaigns, setCampaigns] = useState(initialCampaigns);
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("Past Promoters");

  const handleCreateCampaign = () => {
    setLoading(true);
    setTimeout(() => {
      const newCampaign = {
        id: Date.now(), // Unique ID
        title: "New AI Campaign",
        date: "4/26/2025 - 5/26/2025",
        status: "Active",
        referrals: 0,
        conversion: "0%",
        roi: "0%",
        note: "Your new AI-driven referral campaign has been created!",
        isDeletable: true, // Only this can be deleted
      };
      setCampaigns([newCampaign, ...campaigns]);
      setLoading(false);
    }, 1000);
  };

  const deleteCampaign = (id) => {
    setCampaigns((prevCampaigns) =>
      prevCampaigns.filter((campaign) => campaign.id !== id)
    );
  };

  // const handleTabClick = (tab) => {
  //   if (tab === "New Promoters") {
  //     navigate("/campaign");
  //   } else if (tab === "New Leads") {
  //     navigate("/leads-page");
  //   }
  // };

  const followUpSteps = [
    { type: "SMS", icon: "💬" },
    { type: "Wait", time: "5 days", icon: "⏳" },
    { type: "Email", icon: "📧" },
    { type: "Wait", time: "2 days", icon: "⏳" },
    { type: "SMS", icon: "💬" },
    { type: "Wait", time: "3 days", icon: "⏳" },
    { type: "SMS", icon: "💬" },
  ];

  return (
    <div className="flex min-h-screen bg-[#f8f9fc]">
      <aside className="w-64 bg-white shadow-sm hidden md:block">
        <Sidebar />
      </aside>

      <main className="flex-1 p-6">
        <ProfileHeader />

        <div className="flex justify-between items-center mb-5 mt-6 flex-wrap gap-4">
          <h1 className="text-xl font-semibold">
            Create & Manage Referral Campaigns
          </h1>
          <div className="flex items-center space-x-4 w-full md:w-auto">
            <input
              type="text"
              placeholder="Search campaigns..."
              className="px-4 py-2 border border-gray-300 rounded-lg shadow-sm text-sm w-full max-w-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="flex items-center px-4 py-2 border rounded-lg text-sm text-gray-700 hover:bg-gray-100">
              <Filter className="w-4 h-4 mr-2" /> Filter
            </button>
          </div>
        </div>

        {/* Top Buttons */}
        <div className="flex space-x-4 mb-6 py-1 pl-2 bg-white w-2xl rounded-xl">
          {["Past Promoters", "New Promoters", "New Leads"].map((tab, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(tab)}
              className={`px-10 py-2 text-sm font-medium ${
                activeTab === tab
                  ? "bg-blue-100 text-blue-600"
                  : "bg-gray-100 text-gray-600 hover:bg-blue-50 hover:text-blue-600"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Conditional Content */}
        {activeTab === "New Leads" && (
          <div className="bg-blue-50 p-6 rounded-lg mb-6">
            <h3 className="font-semibold text-lg mb-6">
              Follow-Up Strategy <span className="text-red-500">*</span>
            </h3>
            <div className="space-y-6 relative">
              {followUpSteps.map((step, idx) => (
                <div key={idx} className="relative flex flex-col items-center">
                  <div className="flex items-center justify-between bg-white px-6 py-4 w-full max-w-md rounded-lg shadow-sm">
                    <div className="flex items-center space-x-3">
                      <div className="text-2xl">{step.icon}</div>
                      <div className="text-base font-medium text-gray-800">
                        {step.type}
                        {step.type === "Wait" && ` - ${step.time}`}
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <button className="text-blue-600 hover:text-blue-800">
                        ✏️
                      </button>
                      <button className="text-red-500 hover:text-red-700">
                        🗑️
                      </button>
                    </div>
                  </div>
                  {idx !== followUpSteps.length - 1 && (
                    <div className="h-8 w-px bg-gray-400"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "Past Promoters" && (
          <>
            <button
              className="mb-4 px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 disabled:opacity-60"
              onClick={handleCreateCampaign}
              disabled={loading}
            >
              {loading ? "Creating..." : "+ Create New Campaign"}
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {campaigns.map((campaign) => (
                <div
                  key={campaign.id}
                  className="bg-white rounded-xl shadow-md p-4"
                >
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h2 className="font-semibold text-lg">
                        {campaign.title}
                      </h2>
                      <p className="text-sm text-gray-500">{campaign.date}</p>
                    </div>
                    <span
                      className={`text-xs font-medium px-2 py-1 rounded-full ${
                        campaign.status === "Active"
                          ? "bg-blue-100 text-blue-600"
                          : "bg-gray-200 text-gray-600"
                      }`}
                    >
                      {campaign.status}
                    </span>
                  </div>
                  <div className="flex justify-between mb-3 text-sm text-gray-600">
                    <div>
                      <strong className="text-black">
                        {campaign.referrals}
                      </strong>
                      <br />
                      Referrals
                    </div>
                    <div>
                      <strong className="text-black">
                        {campaign.conversion}
                      </strong>
                      <br />
                      Conversion
                    </div>
                    <div>
                      <strong className="text-black">{campaign.roi}</strong>
                      <br />
                      ROI
                    </div>
                  </div>
                  <div className="bg-purple-50 p-3 rounded-lg text-sm text-purple-700">
                    {campaign.note}
                  </div>
                  <div className="flex justify-end space-x-3 mt-4">
                    {campaign.isDeletable && (
                      <Trash2
                        className="w-5 h-5 text-red-500 cursor-pointer"
                        onClick={() => deleteCampaign(campaign.id)}
                      />
                    )}
                    <Eye className="w-5 h-5 text-gray-600 cursor-pointer" />
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {activeTab === "New Promoters" && <Campaign />}
      </main>
    </div>
  );
}
