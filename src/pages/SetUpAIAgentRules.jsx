import { useState } from "react";
import ProfileSection from "../components/ProfileSection";
import Button from "../components/Button";
import Sidebar from "../components/SideBar";
import { Link } from "react-router-dom";

export default function SetUpAIAgentRules() {
  const [autoOffer, setAutoOffer] = useState(true);
  const [userInitiated, setUserInitiated] = useState(true);

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r px-4 py-6">
        <Sidebar />
      </aside>

      {/* Main */}
      <main className="flex-1 p-6 overflow-y-auto">
        <ProfileSection />

        <div className="flex gap-6 mt-6">
          {/* Steps Panel */}
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
                    status="completed"
                    title="Sync Your Customer Data"
                  />
                </Link>
              </li>
              <li>
                <Link to="/set-up-ai-agent-rules" className="block">
                  <StepItem status="inProgress" title="Set Up AI Agent Rules" />
                </Link>
              </li>
              <li>
                <Link to="/set-up-first-campaign" className="block">
                  <StepItem status="notStarted" title="Set Up First Campaign" />
                </Link>
              </li>
            </ul>
          </div>

          {/* AI Agent Rules Form */}
          <div className="flex-1 bg-white rounded-xl shadow p-8 space-y-6">
            <h2 className="text-xl font-semibold mb-2">
              Set Up AI Agent Rules
            </h2>

            <div>
              <label className="text-sm font-medium">
                Tone of Communication
              </label>
              <select className="mt-1 w-full border rounded-lg p-2 text-sm">
                <option>Select</option>
                <option>Professional</option>
                <option>Friendly</option>
                <option>Casual</option>
              </select>
            </div>

            <div>
              <label className="text-sm font-medium">Response Style</label>
              <select className="mt-1 w-full border rounded-lg p-2 text-sm">
                <option>Select</option>
                <option>Short & Direct</option>
                <option>Detailed</option>
              </select>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium">Auto-offer help</p>
                <p className="text-xs text-gray-500">
                  AI pops up suggestions automatically when user lands on a
                  page.
                </p>
              </div>
              <ToggleSwitch
                checked={autoOffer}
                onChange={() => setAutoOffer(!autoOffer)}
              />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium">User-initiated only</p>
                <p className="text-xs text-gray-500">
                  AI only responds when clicked or messaged.
                </p>
              </div>
              <ToggleSwitch
                checked={userInitiated}
                onChange={() => setUserInitiated(!userInitiated)}
              />
            </div>

            <div className="text-right">
              <Link to="/set-up-first-campaign">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg">
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

function SidebarItem({ icon, label }) {
  return (
    <div className="flex items-center gap-2 text-sm px-3 py-2 rounded-lg cursor-pointer text-gray-600 hover:bg-gray-100">
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

function ToggleSwitch({ checked, onChange }) {
  return (
    <label className="inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="sr-only"
      />
      <span
        className={`w-10 h-5 flex items-center rounded-full p-1 duration-300 ease-in-out ${
          checked ? "bg-blue-500" : "bg-gray-300"
        }`}
      >
        <span
          className={`bg-white w-4 h-4 rounded-full shadow-md transform duration-300 ease-in-out ${
            checked ? "translate-x-5" : ""
          }`}
        ></span>
      </span>
    </label>
  );
}
