// Home.jsx
import React from "react";
import Footer from "../components/Footer";
import Dashboard from "../assets/dashboard.png";
import About from "../assets/about.png";
import AI from "../assets/AI.png";
import Group from "../assets/group.png";
import Graph from "../assets/graph.png";

import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-gradient-to-br from-white to-blue-100 min-h-screen font-sans">
      {/* Navigation */}
      <nav className="flex justify-between items-center py-6 px-8 md:px-16">
        <div className="text-xl font-bold text-gray-900">ReferralHub</div>
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <li>
            <a href="#">Features</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">How It Works</a>
          </li>
          <li>
            <a href="#">Pricing</a>
          </li>
        </ul>
        <Link to="/register">
          <button className="ml-6 bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 text-sm font-semibold">
            Get Started
          </button>
        </Link>
      </nav>

      {/* Hero Section */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-between px-8 md:px-16 py-16">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            AI-Powered Referral <br /> Platform for{" "}
            <span className="text-blue-600">Growing Brands</span>
          </h1>
          <p className="mt-6 text-gray-600 text-lg">
            Empower your existing customer base to spread the word, while our
            smart AI assistant guides you through creating and managing referral
            campaigns that actually convert.
          </p>
          <Link to="/register">
            <button className="mt-8 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 font-semibold">
              Get STARTED →
            </button>
          </Link>
        </div>

        {/* Dashboard Image Placeholder */}
        <div className="md:w-1/2 mb-10 md:mb-0">
          <img
            src={Dashboard}
            alt="Dashboard Screenshot"
            className="rounded-xl shadow-xl"
          />
        </div>
      </div>

      {/* Trusted Brands Section */}
      <div
        style={{ backgroundColor: "#2F3349" }}
        className="py-12 px-10 md:px-20 rounded-2xl mx-6 md:mx-16 mt-16"
      >
        <h3 className="text-white text-center text-xl md:text-2xl font-semibold mb-10">
          Trusted by Leading Global Brands
        </h3>

        <div className="flex flex-wrap justify-center items-center gap-10">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Stripe_Logo%2C_revised_2016.svg/2560px-Stripe_Logo%2C_revised_2016.svg.png"
            className="h-10 object-contain"
            alt="Stripe"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
            className="h-10 object-contain"
            alt="Google"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg"
            className="h-10 object-contain"
            alt="Samsung"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Visa_2021.svg/1200px-Visa_2021.svg.png"
            className="h-10 object-contain"
            alt="Visa"
          />

          <div className="flex gap-3 items-center justify-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg"
              className="h-10 object-contain mb-2"
              alt="Spotify"
            />
            <span className="text-white text-2xl font-medium">Spotify</span>
          </div>

          {/* LinkedIn */}
          <div className="flex gap-3 items-center justify-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
              className="h-10 object-contain mb-2"
              alt="LinkedIn"
            />
            <span className="text-white text-2xl font-medium">LinkedIn</span>
          </div>
        </div>
      </div>

      {/* Features */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          {/* Main Heading */}
          <h2 className="text-3xl md:text-5xl font-medium text-gray-800 mb-16">
            Built for Brands That Want Simplicity, <br /> Loyalty, and Results
          </h2>

          {/* 3 Columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Card 1 */}
            <div className="flex flex-col items-center">
              {/* Replace src with your own image later */}
              <div className="w-60 h-60 bg-gray rounded-lg shadow-md flex items-center justify-center">
                <img
                  src={AI}
                  alt="AI Powered Simplicity"
                  className="object-contain p-4"
                />
              </div>
              <p className="text-lg font-medium text-gray-700 mt-6">
                AI-Powered Simplicity
              </p>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col items-center">
              <div className="w-60 h-60 bg-gray rounded-lg shadow-md flex items-center justify-center">
                <img
                  src={Group}
                  alt="Your Customers, Not Strangers"
                  className="object-contain p-4"
                />
              </div>
              <p className="text-lg font-medium text-gray-700 mt-6">
                Your Customers, Not Strangers
              </p>
            </div>

            {/* Card 3 */}
            <div className="flex flex-col items-center">
              <div className="w-60 h-60 bg-gray rounded-lg shadow-md flex items-center justify-center">
                <img
                  src={Graph}
                  alt="Real-Time Results & Rewards"
                  className="object-contain p-4"
                />
              </div>
              <p className="text-lg font-medium text-gray-700 mt-6">
                Real-Time Results & Rewards
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="relative bg-[#0F172A] py-20">
        {/* Blur Circle Top Left */}
        <div className="absolute top-0 left-0 w-28 h-28 bg-blue-500 rounded-br-full blur-1xl opacity-70"></div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Images */}
          <div className="relative">
            <img src={About} alt="Team working" className="rounded-xl" />
          </div>

          {/* Right Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Know More About it
            </h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              ReferralHub is an AI-powered referral platform built to help
              businesses turn their loyal customers into their most powerful
              marketing channel. Whether you're a growing startup or an
              established brand, ReferralHub simplifies campaign creation
              through intelligent chat, making it easy to launch, share, and
              track referral programs in minutes — not hours. By combining smart
              automation with human connection, ReferralHub helps you drive real
              growth while rewarding the people who already love your brand.
            </p>
            <div className="flex items-center space-x-4">
              <h3 className="text-4xl font-bold text-[#3B82F6]">4.5/5</h3>
              <p className="text-gray-400">
                Customer ratings based on 250+ businesses growing with
                ReferralHub
              </p>
              <div className="bg-green-500 p-2 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="w-full bg-white py-20 px-4 flex flex-col items-center">
        <div className="max-w-6xl w-full text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            How it Works
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto mb-16">
            It simplifies the entire referral process — from building campaigns
            with AI to tracking every lead and rewarding your loyal customers in
            real-time.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center relative">
              <div className="relative">
                <div className="w-36 h-36 bg-[#295BFF] rounded-full flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">AI</span>
                </div>
                <div className="absolute top-4 right-0 w-6 h-6 rounded-full bg-[#295BFF]  border-2 border-[#FFFFF] flex items-center justify-center text-sm text-[#FFFFFF] font-bold">
                  1
                </div>
              </div>
              <h3 className="text-lg font-bold mt-6 text-gray-900">
                Let ReferralHub AI Guide You
              </h3>
              <p className="text-gray-500 mt-2 max-w-xs">
                Start by chatting with our AI agent or get instant help from the
                AI assistant as you set up your referral campaign.
              </p>
            </div>

            {/* Arrow */}
            <div className="hidden md:flex items-center justify-center">
              <div className="w-24 h-1 bg-[#8B3DFF] relative flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-[#8B3DFF] absolute -right-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center text-center relative">
              <div className="relative">
                <div className="w-36 h-36 bg-[#8B3DFF] rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                  </svg>
                </div>
                <div className="absolute top-4 right-0 w-6 h-6 rounded-full bg-[#8B3DFF] border-2 border-[#FFFFFF] flex items-center justify-center text-sm text-[#FFFFFF] font-bold">
                  2
                </div>
              </div>
              <h3 className="text-lg font-bold mt-6 text-gray-900">
                Share Referral Link
              </h3>
              <p className="text-gray-500 mt-2 max-w-xs">
                Once the campaign is active, your promoters receive personalized
                links they can share anywhere — helping you grow faster.
              </p>
            </div>

            {/* Arrow */}
            <div className="hidden md:flex items-center justify-center">
              <div className="w-24 h-1 bg-[#8B3DFF] relative flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-[#8B3DFF] absolute -right-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center text-center relative">
              <div className="relative">
                <div className="w-36 h-36 bg-black rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 21h8m-4-4v4m5-12V5a1 1 0 00-1-1h-8a1 1 0 00-1 1v4a5 5 0 0010 0zm0 0h1a3 3 0 003-3V5h-4m-6 4H6a3 3 0 01-3-3V5h4"
                    />
                  </svg>
                </div>
                <div className="absolute top-4 right-0 w-6 h-6 rounded-full bg-black border-2 border-white flex items-center justify-center text-sm text-white font-bold">
                  3
                </div>
              </div>
              <h3 className="text-lg font-bold mt-6 text-gray-900">
                Give Rewards
              </h3>
              <p className="text-gray-500 mt-2 max-w-xs">
                Watch your leads grow in real-time and reward your loyal
                customers with points. Earn Rewards and more Watch your leads
                grow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full flex justify-center items-center py-20 pb-0 bg-white px-4">
        <div className="max-w-6xl min-h-[400px] w-full bg-gradient-to-r from-indigo-500 to-blue-400 rounded-2xl p-20 text-center shadow-lg">
          <h2 className="text-4xl md:text-5xl text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-white text-lg md:text-xl mb-8">
            Start building referral campaigns in just a few clicks — no
            complicated setup.
            <br />
            Just intelligent automation designed to grow your business
            effortlessly.
          </p>
          <Link to="#">
            <button className="bg-black text-white px-8 py-4 rounded-full text-lg hover:bg-gray-800 transition duration-300">
              Get Started
            </button>
          </Link>
        </div>
      </section>

      <div className="">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
