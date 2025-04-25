import React from "react";
import Sidebar from '../components/SideBar';


const Leads = () => {
  const leads = [
    {
      name: "Emery Dokidis",
      email: "emerydoki@gmail.com",
      contact: "+979970174715",
      coupon: "SAVE10NOW",
      status: "Pending",
    },
    {
      name: "Kadin Lipshutz",
      email: "kadinlipshutz@gmail.com",
      contact: "+971501948279",
      coupon: "WELCOME15",
      status: "Pending",
    },
    {
      name: "Randy Culhane",
      email: "randyculhane@gmail.com",
      contact: "+971501598978",
      coupon: "EXCLUSIVE20",
      status: "Pending",
    },
    {
      name: "Jaxson Vaccaro",
      email: "jaxonvaccaro@gmail.com",
      contact: "+971522503635",
      coupon: "GETDEAL25",
      status: "Completed",
    },
    {
      name: "Jocelyn Levin",
      email: "jocelynlevin@gmail.com",
      contact: "+971554315300",
      coupon: "FIRSTORDER10",
      status: "Pending",
    },
    {
      name: "Maren Septimus",
      email: "marenseptimus@gmail.com",
      contact: "+971525620832",
      coupon: "SPECIALSAVE15",
      status: "Completed",
    },
    {
      name: "Haylie Saris",
      email: "hayliesaris@gmail.com",
      contact: "+971503328228",
      coupon: "LIMITED20",
      status: "Completed",
    },
    {
      name: "Randy Herwitz",
      email: "randyherwitz@gmail.com",
      contact: "+971554231522",
      coupon: "TRYUS10",
      status: "Pending",
    },
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md p-4 flex flex-col justify-between">
        <Sidebar/>
      </aside>

      {/* Main Content */}
      <div className="flex-1 p-6 overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-xl font-semibold">
            Manage and monitor your leads
          </h1>
          <div className="flex items-center space-x-3">
          <img
              src="https://i.pravatar.cc/40"
              alt="Profile"
              className="rounded-full w-10 h-10"
            />
            <div className="text-sm text-right">
              <p className="font-semibold">Kadin Stanton</p>
              <p className="text-gray-500 text-xs">kadinstanton@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-4 shadow">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-medium">Leads</h2>
            <div className="flex items-center space-x-2">
              <input
                type="text"
                placeholder="Search"
                className="border px-3 py-1 rounded-md text-sm w-48"
              />
              <select className="border px-2 py-1 rounded-md text-sm">
                <option>Change Status</option>
              </select>
              <button className="border px-3 py-1 rounded-md text-sm">Filter</button>
            </div>
          </div>

          <table className="w-full text-sm text-left">
            <thead className="border-b">
              <tr>
                <th className="p-2">
                  <input type="checkbox" />
                </th>
                <th className="p-2">Lead Name</th>
                <th className="p-2">Email ID</th>
                <th className="p-2">Contact No.</th>
                <th className="p-2">Coupon Code</th>
                <th className="p-2">Status</th>
                <th className="p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {leads.map((lead, index) => (
                <tr key={index} className="border-b hover:bg-gray-50">
                  <td className="p-2">
                    <input type="checkbox" />
                  </td>
                  <td className="p-2">{lead.name}</td>
                  <td className="p-2">{lead.email}</td>
                  <td className="p-2">{lead.contact}</td>
                  <td className="p-2">{lead.coupon}</td>
                  <td className="p-2">
                    <span
                      className={`text-xs font-medium px-2 py-1 rounded-full ${
                        lead.status === "Completed"
                          ? "bg-green-100 text-green-700"
                          : "bg-orange-100 text-orange-700"
                      }`}
                    >
                      {lead.status}
                    </span>
                  </td>
                  <td className="p-2 space-x-2">
                    <button title="View Profile">
                      <span role="img" aria-label="eye">
                        👁️
                      </span>
                    </button>
                    <button title="Send follow-up message">
                      <span role="img" aria-label="message">
                        💬
                      </span>
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

export default Leads;