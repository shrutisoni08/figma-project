import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import DashboardPage from "./pages/DashboardPage";
import SyncCustomerData from "./pages/SyncCustomerData";
import SetUpFirstCampaign from "./pages/SetUpFirstCampaign";
import SetUpAIAgentRules from "./pages/SetUpAIAgentRules";
import Dashboard from "./pages/Dashboard";
import CampaignPage from "./pages/CampaignPage";
import PromotersPage from "./pages/PromotersPage";
import Leads from "./pages/Leads";
import Payouts from "./pages/Payouts";
import Settings from "./pages/Settings";
import Home from "./pages/Home";
import AIAgent from "./pages/AIAgent";
import Campaign from "./pages/Campaign";
const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
        {/* <Route path="/" element={<LoginPage />} /> */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/campaign" element={<Campaign />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/ai-agent" element={<AIAgent />} />
        <Route path="/sync-customer-data" element={<SyncCustomerData />} />
        <Route path="/set-up-first-campaign" element={<SetUpFirstCampaign />} />
        <Route path="/set-up-ai-agent-rules" element={<SetUpAIAgentRules />} />
        <Route path="/dashboard-page" element={<Dashboard />} />
        <Route path="/campaign-page" element={<CampaignPage />} />
        <Route path="/promoters-page" element={<PromotersPage />} />
        <Route path="/leads-page" element={<Leads />} />
        <Route path="/payouts-page" element={<Payouts />} />
        <Route path="/settings-page" element={<Settings />} />
      </Routes>
    </Router>
  );
};

export default App;
