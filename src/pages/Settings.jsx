import React from "react";
import Sidebar from '../components/SideBar';

const Settings = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-sm p-4 space-y-4">
        {/* <div className="font-bold text-lg text-blue-600">AI Agent</div>
        <nav className="space-y-2 text-sm">
          <div className="text-gray-600 hover:text-blue-600 cursor-pointer">Dashboard</div>
          <div className="text-gray-600 hover:text-blue-600 cursor-pointer">Campaign</div>
          <div className="text-gray-600 hover:text-blue-600 cursor-pointer">Promoters</div>
          <div className="text-gray-600 hover:text-blue-600 cursor-pointer">Leads</div>
          <div className="text-gray-600 hover:text-blue-600 cursor-pointer">Payouts</div>
          <div className="text-blue-600 font-medium cursor-pointer">Settings</div>
          <div className="text-gray-600 hover:text-blue-600 cursor-pointer">Help</div>
        </nav> */}
        <Sidebar />
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold">Settings</h1>
          <div className="flex items-center gap-4">
            <div className="text-right text-sm">
              <p className="font-semibold">Kadin Stanton</p>
              <p className="text-gray-500">kadinstanton@gmail.com</p>
            </div>
            <div className="h-10 w-10 rounded-full bg-gray-300" />
          </div>
        </div>

        {/* Tabs */}
        <div className="flex border-b mb-6">
          {['User Profile', 'Business Profile', 'AI Settings', 'Email & Phone Setup', 'Subscription & Usage'].map(tab => (
            <div key={tab} className={`px-4 py-2 cursor-pointer text-sm ${tab === 'Business Profile' ? 'border-b-2 border-blue-500 font-medium text-blue-600' : 'text-gray-500'}`}>{tab}</div>
          ))}
        </div>

        {/* Form */}
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-1">Business Logo</label>
            <button className="px-4 py-2 border rounded text-sm">Choose Image</button>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Business Description</label>
            <textarea className="w-full p-2 border rounded" rows="3" placeholder="Enter description..." />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <input className="p-2 border rounded" placeholder="Enter business name" />
            <input className="p-2 border rounded" placeholder="e.g., robert.fox@myemail.com" />
            <input className="p-2 border rounded" placeholder="Enter phone no." />
            <select className="p-2 border rounded text-gray-500">
              <option>Select</option>
              <option>Technology</option>
              <option>Retail</option>
            </select>
            <input className="p-2 border rounded" placeholder="Enter services..." />
            <input className="p-2 border rounded" placeholder="Enter products..." />
            <select className="p-2 border rounded text-gray-500">
              <option>Select</option>
              <option>1-10</option>
              <option>11-50</option>
            </select>
            <select className="p-2 border rounded text-gray-500">
              <option>Select</option>
              <option>New York</option>
              <option>San Francisco</option>
            </select>
            <select className="p-2 border rounded text-gray-500">
              <option>Select</option>
              <option>California</option>
              <option>Texas</option>
            </select>
            <input className="p-2 border rounded" placeholder="Enter zip code" />
          </div>

          <button className="px-6 py-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded">Save</button>
        </form>
      </main>
    </div>
  );
};

export default Settings;