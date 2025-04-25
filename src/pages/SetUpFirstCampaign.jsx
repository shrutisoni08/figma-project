import ProfileSection from "../components/ProfileSection";
import Button from "../components/Button";
import Sidebar from '../components/SideBar';

export default function SetUpFirstCampaign() {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r px-4 py-6">
        {/* <h2 className="text-lg font-semibold mb-6">Platform Setup</h2>
        <nav className="space-y-3">
          <SidebarItem icon="🏁" label="Platform Setup" />
          <SidebarItem icon="🤖" label="AI Agent" />
          <SidebarItem icon="📊" label="Dashboard" />
          <SidebarItem icon="📣" label="Campaign" />
          <SidebarItem icon="🧑‍🤝‍🧑" label="Promoters" />
          <SidebarItem icon="👥" label="Leads" />
          <SidebarItem icon="📄" label="Payouts" />
        </nav>
        <div className="mt-auto pt-6 border-t space-y-2">
          <SidebarItem icon="⚙️" label="Settings" />
          <SidebarItem icon="❓" label="Help" />
        </div> */}
        <Sidebar/>
      </aside>

      {/* Main */}
      <main className="flex-1 p-6 overflow-y-auto">
        <ProfileSection />
        <div className="flex gap-6 mt-4">
          {/* Steps */}
          <div className="w-72 bg-[#F8FAFF] rounded-xl p-4 shadow">
            <h3 className="text-sm font-semibold text-blue-600">Get Started with ReferralHub</h3>
            <p className="text-xs text-gray-500 mt-1 mb-4">
              To get started with better referrals & rewards, complete your account setup in a few easy steps.
            </p>
            <ul className="space-y-4">
              <StepItem status="completed" title="Set Up Business Profile" />
              <StepItem status="completed" title="Sync Your Customer Data" />
              <StepItem status="completed" title="Set Up AI Agent Rules" />
              <StepItem status="inProgress" title="Set Up First Campaign" />
            </ul>
          </div>

          {/* Campaign Form */}
          <div className="flex-1 space-y-6">
            <SectionCard title="Create New Campaign">
              <label className="text-sm font-medium">Campaign Name</label>
              <input
                type="text"
                placeholder="Ex. Newsletter Referrals Special"
                className="mt-2 w-full border rounded-lg p-2 text-sm"
              />
            </SectionCard>

            <SectionCard title="Partner Settings">
              <div className="flex items-center gap-4">
                <div>
                  <label className="text-sm font-medium">Reward Type</label>
                  <select className="w-full border rounded-lg p-2 text-sm mt-1">
                    <option>Points</option>
                    <option>Discount</option>
                    <option>Cash</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium">Reward Value</label>
                  <input type="text" className="w-full border rounded-lg p-2 text-sm mt-1" placeholder="Ex: $20, 20%" />
                </div>
              </div>
              <label className="text-sm font-medium mt-4 block">Partner Message</label>
              <textarea
                className="mt-1 w-full border rounded-lg p-2 text-sm"
                placeholder="Ex. ‘Invite your friends and get $25 for each.’"
              />
            </SectionCard>

            <FollowUpSection title="Follow-up Strategy (Partners)" />
            <SectionCard title="Leads Settings">
              <div className="flex items-center gap-4">
                <div>
                  <label className="text-sm font-medium">Reward Type</label>
                  <select className="w-full border rounded-lg p-2 text-sm mt-1">
                    <option>Discount</option>
                    <option>Points</option>
                    <option>Gift</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium">Reward Value</label>
                  <input type="text" className="w-full border rounded-lg p-2 text-sm mt-1" placeholder="Ex: 10%" />
                </div>
              </div>
              <label className="text-sm font-medium mt-4 block">Notified Message</label>
              <textarea
                className="mt-1 w-full border rounded-lg p-2 text-sm"
                placeholder="Ex. ‘You’ve been invited! Sign up now & get 10% off your first order.’"
              />
              <div className="flex gap-4 mt-4 text-sm">
                <label><input type="checkbox" className="mr-1" /> Full Name</label>
                <label><input type="checkbox" className="mr-1" /> Email</label>
                <label><input type="checkbox" className="mr-1" /> Phone</label>
                <label><input type="checkbox" className="mr-1" /> Agree</label>
              </div>
            </SectionCard>

            <FollowUpSection title="Follow-up Strategy (Leads)" />
            <div className="text-center">
              <Button className="bg-gradient-to-r from-blue-500 to-blue-400 text-white px-12 mt-4">Launch</Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function SectionCard({ title, children }) {
  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h2 className="text-base font-semibold mb-4">{title}</h2>
      {children}
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
    if (status === 'completed') return <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center text-white text-xs">✓</div>;
    if (status === 'inProgress') return <div className="w-5 h-5 rounded-full border-4 border-blue-500" />;
    return <div className="w-5 h-5 rounded-full border border-gray-300" />;
  };

  const getText = () => {
    if (status === 'completed') return <span className="text-xs text-green-600">Completed</span>;
    if (status === 'inProgress') return <span className="text-xs text-blue-500">In Progress</span>;
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

function FollowUpSection({ title }) {
  return (
    <SectionCard title={title}>
      <div className="flex items-center gap-2 mb-3">
        <label className="text-sm font-medium">💬 SMS</label>
        <label className="text-sm font-medium">📧 Email</label>
      </div>
      <div className="flex items-center gap-4">
        <div>
          <label className="text-sm">Allow this after</label>
          <select className="border rounded-lg p-2 text-sm mt-1 w-40">
            <option>One Week</option>
            <option>Two Days</option>
          </select>
        </div>
        <div>
          <label className="text-sm">Follow-up Message</label>
          <textarea className="w-full border rounded-lg p-2 text-sm mt-1" placeholder="Ex. Reminder: invite your friends" />
        </div>
      </div>
    </SectionCard>
  );
}
