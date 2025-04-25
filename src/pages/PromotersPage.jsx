import React, { useState } from "react";
import { Eye, MessageCircleMore, Filter, X } from "lucide-react";
import Sidebar from "../components/SideBar";
import toast from "react-hot-toast";

const promoters = [
  {
    name: "Emery Dokidis",
    contact: "+979970174715",
    leads: 12,
    conversion: "50%",
    followUp: "28-4-2024",
    revenue: "$50",
    status: "Active",
  },
  {
    name: "Kadin Lipshutz",
    contact: "+971501948279",
    leads: 8,
    conversion: "30%",
    followUp: "27-5-2024",
    revenue: "$900",
    status: "Active",
  },
  {
    name: "Randy Culhane",
    contact: "+971501589878",
    leads: 15,
    conversion: "60%",
    followUp: "29-5-2024",
    revenue: "$1000",
    status: "Inactive",
  },
  {
    name: "Jaxson Vaccaro",
    contact: "+971522503635",
    leads: 10,
    conversion: "45%",
    followUp: "30-6-2024",
    revenue: "$500",
    status: "Completed",
  },
  {
    name: "Jocelyn Levin",
    contact: "+971554315300",
    leads: 6,
    conversion: "28%",
    followUp: "01-7-2024",
    revenue: "$1500",
    status: "Inactive",
  },
];

const statusColors = {
  Active: "bg-blue-100 text-blue-600",
  Inactive: "bg-yellow-100 text-yellow-600",
  Completed: "bg-green-100 text-green-600",
};

export default function PromotersPage() {
  const [showModal, setShowModal] = useState(false);
  const [activeTab, setActiveTab] = useState("manual");
  const [promotersList, setPromotersList] = useState(promoters);
  const [newPromoters, setNewPromoters] = useState([]);

  const [manualForm, setManualForm] = useState({
    promoter_first_name: "",
    promoter_last_name: "",
    promoter_email: "",
    promoter_phno: "",
    cooldown_days: 0, // default
    promoter_type: "2", // default enum value
    is_lead: true,
    is_onboarded: false,
  });

  const verifyToken = async () => {
    const accessToken = localStorage.getItem("access_token");

    const res = await fetch("/api/verifyToken", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        Accept: "application/json",
      },
    });

    return res.ok;
  };

  const refreshAccessToken = async () => {
    const refresh = localStorage.getItem("refresh_token");

    const res = await fetch("/api/refreshAccessToken", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ refresh }),
    });

    if (res.ok) {
      const data = await res.json();
      localStorage.setItem("access_token", data.access);
      return data.access;
    }

    throw new Error("Refresh token invalid or expired");
  };

  const getValidAccessToken = async () => {
    const isValid = await verifyToken();

    if (isValid) {
      return localStorage.getItem("access_token");
    }

    return await refreshAccessToken();
  };

  const handleManualInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setManualForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleManualSubmit = async (formData) => {
    try {
      const accessToken = await getValidAccessToken();

      const response = await fetch("/api/createPromoter", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const responseData = await response.json();

      if (!response.ok) {
        console.error("Error response:", responseData);
        toast.error(responseData.message || "Failed to add promoter.");
        return;
      }

      const newEntry = {
        name: `${formData.promoter_first_name} ${formData.promoter_last_name}`,
        contact: formData.promoter_phno,
        leads: 0,
        conversion: "0%",
        followUp: "N/A",
        revenue: "$0",
        status: "Active",
      };

      // Update both newPromoters and promotersList
      setPromotersList((prevList) => [...prevList, newEntry]);
      setNewPromoters((prev) => {
        const updatedList = [newEntry, ...prev];
        return updatedList;
      });

      toast.success("Promoter added successfully!");
    } catch (error) {
      console.error("Error creating promoter:", error);
      toast.error(
        error?.message || "Something went wrong while creating the promoter."
      );
    }
  };

  return (
    <div className="flex min-h-screen bg-[#f8f9fc]">
      <aside className="w-64 bg-white p-4 hidden md:block">
        <Sidebar />
      </aside>

      <main className="flex-1 p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-lg md:text-xl font-semibold">
            Manage and monitor your promoter referral activities
          </h1>
          <div className="flex items-center space-x-3">
            <img
              src="https://i.pravatar.cc/40"
              alt="avatar"
              className="w-9 h-9 rounded-full border"
            />
            <div className="text-sm text-right">
              <div className="font-semibold">Kadin Stanton</div>
              <div className="text-gray-500 text-xs">
                kadinstanton@gmail.com
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-3 mb-6">
          <button
            onClick={() => setShowModal(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg"
          >
            + New Promoter
          </button>
          <button className="bg-[#f5f5f5] px-4 py-2 rounded-lg border border-gray-300 text-sm">
            Ask Past Customers For Referrals
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-white p-4 rounded-xl shadow">
            <h3 className="text-sm text-gray-500">Total Customers</h3>
            <p className="text-xl font-semibold">8</p>
            <p className="text-green-500 text-xs mt-1">+12% ↑ vs last month</p>
          </div>
          <div className="bg-white p-4 rounded-xl shadow">
            <h3 className="text-sm text-gray-500">New Customers</h3>
            <p className="text-xl font-semibold">94</p>
            <p className="text-green-500 text-xs mt-1">+8% ↑ vs last month</p>
          </div>
          <div className="bg-white p-4 rounded-xl shadow">
            <h3 className="text-sm text-gray-500">Average Conversion rate</h3>
            <p className="text-xl font-semibold text-pink-500">64%</p>
            <p className="text-pink-500 text-xs mt-1">-33% ↓ vs last month</p>
          </div>
          <div className="bg-white p-4 rounded-xl shadow">
            <h3 className="text-sm text-gray-500">Total Revenue Generated</h3>
            <p className="text-xl font-semibold text-green-600">$23,900</p>
            <p className="text-green-500 text-xs mt-1">+15% ↑ vs last month</p>
          </div>
        </div>

        <div className="bg-white p-4 rounded-xl shadow overflow-x-auto">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-md font-semibold">Promoters</h2>
            <div className="flex items-center space-x-3">
              <input
                type="text"
                placeholder="Search"
                className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="flex items-center px-3 py-2 border rounded-md text-sm hover:bg-gray-100">
                <Filter className="w-4 h-4 mr-1" /> Filter
              </button>
            </div>
          </div>
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-gray-600 border-b">
                <th className="py-2">
                  <input type="checkbox" />
                </th>
                <th className="py-2">Promoter Name</th>
                <th className="py-2">Contact No.</th>
                <th className="py-2">Leads</th>
                <th className="py-2">Conversion Rate</th>
                <th className="py-2">Last Follow-Up</th>
                <th className="py-2">Revenue Generated</th>
                <th className="py-2">Referrer Status</th>
                <th className="py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {newPromoters.length > 0 && (
                <>
                  <tr className="bg-gray-100">
                    <td
                      colSpan="9"
                      className="text-left text-sm font-semibold py-2 px-4"
                    >
                      Newly Added Promoters
                    </td>
                  </tr>
                  <tbody>
                    {promotersList.length > 0 &&
                      promotersList.map((p, index) => (
                        <tr key={index} className="border-b">
                          <td className="py-2">
                            <input
                              type="checkbox"
                              checked={index < 2}
                              readOnly
                            />
                          </td>
                          <td className="py-2">{p.name}</td>
                          <td className="py-2">{p.contact}</td>
                          <td className="py-2">{p.leads}</td>
                          <td className="py-2">{p.conversion}</td>
                          <td className="py-2">{p.followUp}</td>
                          <td className="py-2">{p.revenue}</td>
                          <td className="py-2">
                            <span
                              className={`px-2 py-1 text-xs font-medium rounded-full ${
                                statusColors[p.status]
                              }`}
                            >
                              {p.status}
                            </span>
                          </td>
                          <td className="py-2 flex space-x-2">
                            <Eye className="w-4 h-4 text-gray-500 cursor-pointer" />
                            <MessageCircleMore className="w-4 h-4 text-gray-500 cursor-pointer" />
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </>
              )}

              {/* Regular Promoter List */}
              {promotersList.map((p, index) => (
                <tr key={index} className="border-b">
                  <td className="py-2">
                    <input type="checkbox" checked={index < 2} readOnly />
                  </td>
                  <td className="py-2">{p.name}</td>
                  <td className="py-2">{p.contact}</td>
                  <td className="py-2">{p.leads}</td>
                  <td className="py-2">{p.conversion}</td>
                  <td className="py-2">{p.followUp}</td>
                  <td className="py-2">{p.revenue}</td>
                  <td className="py-2">
                    <span
                      className={`px-2 py-1 text-xs font-medium rounded-full ${
                        statusColors[p.status]
                      }`}
                    >
                      {p.status}
                    </span>
                  </td>
                  <td className="py-2 flex space-x-2">
                    <Eye className="w-4 h-4 text-gray-500 cursor-pointer" />
                    <MessageCircleMore className="w-4 h-4 text-gray-500 cursor-pointer" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/10 backdrop-blur-sm">
            <div className="bg-white rounded-2xl w-full max-w-md p-6 relative shadow-2xl">
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-black"
              >
                <X className="w-5 h-5" />
              </button>
              <h2 className="text-center text-lg font-semibold mb-6">
                Choose How You Want to Add Customers
              </h2>

              {/* Tabs */}
              <div className="flex border border-gray-200 rounded-lg overflow-hidden mb-6">
                {["manual", "csv", "zapier"].map((tab) => (
                  <button
                    key={tab}
                    className={`flex-1 py-2 text-sm font-medium text-center ${
                      activeTab === tab
                        ? "bg-blue-100 text-blue-600 border-b-2 border-blue-500"
                        : "bg-gray-100 text-gray-500"
                    }`}
                    onClick={() => setActiveTab(tab)}
                  >
                    {tab === "manual" && "Add Manually"}
                    {tab === "csv" && "Upload CSV File"}
                    {tab === "zapier" && "Sync with Zapier"}
                  </button>
                ))}
              </div>

              {/* Manual Tab */}
              {activeTab === "manual" && (
                <form className="space-y-4" onSubmit={handleManualSubmit}>
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={manualForm.name}
                      onChange={handleManualInputChange}
                      placeholder="Enter Full Name"
                      className="w-full border border-gray-300 px-3 py-2 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={manualForm.phone}
                      onChange={handleManualInputChange}
                      placeholder="Enter Phone Number"
                      className="w-full border border-gray-300 px-3 py-2 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Email ID
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={manualForm.email}
                      onChange={handleManualInputChange}
                      placeholder="Enter Email ID"
                      className="w-full border border-gray-300 px-3 py-2 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div className="flex justify-end gap-2 pt-2">
                    <button
                      type="button"
                      onClick={() => setShowModal(false)}
                      className="px-4 py-2 text-sm rounded-lg border border-gray-300 text-gray-700"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 text-sm rounded-lg bg-blue-600 text-white"
                    >
                      Save
                    </button>
                  </div>
                </form>
              )}

              {/* CSV Tab */}
              {activeTab === "csv" && (
                <div className="text-sm text-gray-700">
                  <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center relative">
                    <img
                      src="/upload-icon.svg"
                      alt="upload"
                      className="mx-auto mb-4 w-10"
                    />
                    <p className="text-gray-600 font-medium mb-2">
                      Drag and drop files here
                    </p>
                    <p className="text-gray-400 text-sm mb-4">or</p>
                    <label
                      htmlFor="fileUpload"
                      className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg text-sm cursor-pointer"
                    >
                      Browse Files
                    </label>
                    <input
                      id="fileUpload"
                      type="file"
                      accept=".csv"
                      className="hidden"
                      onChange={(e) => console.log(e.target.files[0])}
                    />
                  </div>

                  <div className="mt-6 bg-gray-100 rounded-lg p-3 flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-2">
                      <div className="bg-white p-2 rounded shadow-sm">
                        <img
                          src="/csv-icon.png"
                          alt="CSV Icon"
                          className="w-6 h-6"
                        />
                      </div>
                      <div>
                        <p className="font-medium">Leads.csv</p>
                        <p className="text-xs text-gray-500">428KB</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-blue-600 font-semibold">70%</span>
                      <button>
                        <X className="w-4 h-4 text-gray-400 hover:text-red-500" />
                      </button>
                    </div>
                  </div>

                  <div className="flex justify-end mt-6">
                    <button
                      onClick={() => setShowModal(false)}
                      className="px-4 py-2 text-sm rounded-lg bg-blue-600 text-white"
                    >
                      Save
                    </button>
                  </div>
                </div>
              )}

              {/* Zapier Tab */}
              {activeTab === "zapier" && (
                <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center text-gray-700">
                  <p className="text-sm mb-4">
                    Automatically sync your customer data from your CRM using
                    Zapier
                  </p>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg text-sm font-medium">
                    Connect with Zapier
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
