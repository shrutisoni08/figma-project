import { useState } from "react";
import { Inbox, Zap } from "lucide-react";
import Button from "../components/Button";
import ProfileSection from "../components/ProfileSection";
import Sidebar from "../components/SideBar";
import { Link } from "react-router-dom";

export default function SyncCustomerData() {
  const [dragActive, setDragActive] = useState(false);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(e.type === "dragenter" || e.type === "dragover");
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    const files = e.dataTransfer.files;
    console.log(files);
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r px-4 py-6">
        <Sidebar />
      </aside>

      {/* Main content */}
      <main className="flex-1 p-6 overflow-auto">
        {/* Profile Section */}
        <ProfileSection />

        <div className="flex gap-6">
          {/* Left steps */}
          <div className="w-72 bg-[#F8FAFF] rounded-xl p-4 shadow">
            <h3 className="text-sm font-semibold text-blue-600">
              Get Started with ReferralHub
            </h3>
            <p className="text-xs text-gray-500 mt-1 mb-4">
              To get started with better referrals & rewards, complete your
              account setup in a few easy steps.
            </p>
            <ul className="space-y-4">
              <li>
                <Link to="/dashboard" className="block">
                  <StepItem
                    status="completed"
                    title="Set Up Business Profile"
                  />
                </Link>
              </li>
              <li>
                <Link to="/sync-customer-data" className="block">
                  <StepItem
                    status="inProgress"
                    title="Sync Your Customer Data"
                  />
                </Link>
              </li>
              <li>
                <Link to="/set-up-ai-agent-rules" className="block">
                  <StepItem status="notStarted" title="Set Up AI Agent Rules" />
                </Link>
              </li>
              <li>
                <Link to="/set-up-first-campaign" className="block">
                  <StepItem status="notStarted" title="Set Up First Campaign" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Right content */}
          <div className="flex-1 bg-white rounded-xl shadow p-6">
            <h2 className="text-lg font-semibold mb-6">
              Import Customer Data: Sync with Zapier or Upload CSV
            </h2>

            <div className="flex flex-col items-center gap-4">
              <Button
                variant="outline"
                className="text-blue-600 border-blue-600 w-full max-w-md"
              >
                Connect with Zapier
              </Button>
              <div className="text-gray-400">or</div>
              <div
                className={`border-2 border-dashed rounded-xl w-full max-w-md p-8 text-center transition ${
                  dragActive ? "border-blue-500 bg-blue-50" : "border-gray-300"
                }`}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
              >
                <Inbox className="mx-auto text-blue-600" size={40} />
                <p className="mt-2 text-sm">Drag and drop files here</p>
                <p className="text-xs text-gray-500">or</p>
                <Button
                  variant="outline"
                  className="mt-2 border-blue-600 text-blue-600"
                >
                  Click to Upload CSV File
                </Button>
              </div>
              <Link to="/set-up-ai-agent-rules">
                <Button className="bg-gradient-to-r from-blue-500 to-blue-400 text-white px-10 mt-6">
                  Next
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function SidebarItem({ icon, label, active }) {
  return (
    <div
      className={`flex items-center gap-2 text-sm px-3 py-2 rounded-lg cursor-pointer ${
        active
          ? "bg-blue-100 text-blue-600 font-medium"
          : "text-gray-600 hover:bg-gray-100"
      }`}
    >
      <span>{icon}</span>
      {label}
    </div>
  );
}

function StepItem({ status, title }) {
  const getCircle = () => {
    if (status === "completed")
      return (
        <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center text-white text-xs">
          ✓
        </div>
      );
    if (status === "inProgress")
      return <div className="w-5 h-5 rounded-full border-4 border-blue-500" />;
    return <div className="w-5 h-5 rounded-full border border-gray-300" />;
  };

  const getText = () => {
    if (status === "completed")
      return <span className="text-xs text-green-600">Completed</span>;
    if (status === "inProgress")
      return <span className="text-xs text-blue-500">In Progress</span>;
    return <span className="text-xs text-gray-400">Not Started</span>;
  };

  return (
    <li className="flex items-start gap-3">
      {getCircle()}
      <div>
        <p className="text-sm font-medium text-gray-800">{title}</p>
        {getText()}
      </div>
    </li>
  );
}
