import React, { useState } from "react";
import { Filter, Eye, Trash2 } from "lucide-react";
import Sidebar from "../components/SideBar";
import ProfileHeader from "../components/ProfileSection";

const initialCampaigns = [
  {
    title: "Summer Referral Program",
    date: "5/31/2024 - 8/30/2024",
    status: "Active",
    referrals: 245,
    conversion: "32%",
    roi: "287%",
    note: "Increase reward by 10% to boost conversion rates during peak season",
  },
  {
    title: "Early Bird Special",
    date: "8/20/2024 - 9/19/2024",
    status: "Inactive",
    referrals: 300,
    conversion: "40%",
    roi: "320%",
    note: "Extend your campaign! Strong engagement suggests higher conversions with more time.",
  },
];

export default function CampaignPage() {
  const [campaigns, setCampaigns] = useState(initialCampaigns);
  const [loading, setLoading] = useState(false);

  const verifyToken = async (token) => {
    const response = await fetch("http://34.10.166.233/auth/verify-token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `JWT ${token}`, // ✅ Add this line
      },
      body: JSON.stringify({ token }),
    });
  
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.detail || "Token verification failed");
    }
  
    return await response.json();
  };
  

  const handleCreateCampaign = async () => {
    const accessToken = localStorage.getItem("accessToken");
    console.log("Access Token:", accessToken);
  
    if (!accessToken) {
      alert("You're not logged in.");
      return;
    }
  
    setLoading(true);
  
    try {
      // Step 1: Verify the token
      const verified = await verifyToken(accessToken);
      console.log("Token verified:", verified);
  
      // Step 2: Optional API call (can remove this block if not needed)
      const createResponse = await fetch("http://34.10.166.233/campaigns/create-campaign", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `JWT ${accessToken}`, // Important
          Accept: "application/json",
        },
        body: JSON.stringify({
          campaign_name: "Test Campaign",
          campaign_description: "A sample AI-driven campaign for showcase.",
          campaign_start_date: "2025-04-23",
          campaign_end_date: "2025-04-30",
          promoter_reward_points: 1000,
          lead_reward_discount: "10%",
          target_promoter_type: "Influencers",
        }),
      });
  
      if (!createResponse.ok) {
        const errorData = await createResponse.json();
        throw new Error(errorData.detail || "Campaign creation failed.");
      }
  
      await createResponse.json(); // optional: ignore returned data
      alert("Campaign created successfully!");
  
      // Step 3: Add static campaign card after success
      const newCampaign = {
        title: "Early Bird Special",
        date: "8/20/2024 - 9/19/2024",
        status: "Inactive",
        referrals: 300,
        conversion: "40%",
        roi: "320%",
        note: "Extend your campaign! Strong engagement suggests higher conversions with more time.",
      };
  
      setCampaigns([newCampaign, ...campaigns]);
    } catch (err) {
      console.error("Campaign error:", err);
      alert(err.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };
  
  

  return (
    <div className="flex min-h-screen bg-[#f8f9fc]">
      <aside className="w-64 bg-white shadow-sm hidden md:block">
        <Sidebar />
      </aside>

      <main className="flex-1 p-6">
        <ProfileHeader />

        <div className="flex justify-between items-center mb-5 flex-wrap gap-4">
          <h1 className="text-xl font-semibold">Create & Manage Referral Campaigns</h1>
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

        <div className="flex space-x-4 mb-4">
          {["Past Promoters", "New Promoters", "New Leads"].map((tab, idx) => (
            <button
              key={idx}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                idx === 0
                  ? "bg-blue-100 text-blue-600"
                  : "bg-gray-100 text-gray-600 hover:bg-blue-50 hover:text-blue-600"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <button
          className="mb-4 px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 disabled:opacity-60"
          onClick={handleCreateCampaign}
          disabled={loading}
        >
          {loading ? "Creating..." : "+ Create New Campaign"}
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {campaigns.map((campaign, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md p-4">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h2 className="font-semibold text-lg">{campaign.title}</h2>
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
                  <strong className="text-black">{campaign.referrals}</strong>
                  <br />Referrals
                </div>
                <div>
                  <strong className="text-black">{campaign.conversion}</strong>
                  <br />Conversion
                </div>
                <div>
                  <strong className="text-black">{campaign.roi}</strong>
                  <br />ROI
                </div>
              </div>
              <div className="bg-purple-50 p-3 rounded-lg text-sm text-purple-700">
                {campaign.note}
              </div>
              <div className="flex justify-end space-x-3 mt-4">
                <Trash2 className="w-5 h-5 text-red-500 cursor-pointer" />
                <Eye className="w-5 h-5 text-gray-600 cursor-pointer" />
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
