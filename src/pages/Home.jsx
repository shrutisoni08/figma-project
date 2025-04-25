// Home.jsx
import React from "react";
import Footer from "../components/Footer";
import Dashboard from "../assets/dashboard.png";
import About from "../assets/about.png";
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
        style={{ backgroundColor: "#2f3349" }}
        className="py-10 px-8 md:px-16 rounded-lg mx-6 md:mx-16 mt-10"
      >
        <h3 className="text-white text-center text-sm font-semibold mb-6">
          Trusted by Leading Global Brands
        </h3>
        <div className="flex flex-wrap justify-center items-center gap-6">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Stripe_Logo%2C_revised_2016.svg/2560px-Stripe_Logo%2C_revised_2016.svg.png"
            className="h-6"
            alt="Stripe"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
            className="h-6"
            alt="Google"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg"
            className="h-6"
            alt="Samsung"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Visa_2021.svg/1200px-Visa_2021.svg.png"
            className="h-6"
            alt="Visa"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg"
            className="h-6"
            alt="Spotify"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
            className="h-6"
            alt="LinkedIn"
          />
        </div>
      </div>

      {/* About Us Section */}
      <div className="px-8 md:px-16 py-16 min-h-[600px]">
        <h1 className="text-gray-700 text-center text-3xl font-semibold mb-4">
          Built for Brands That Want Simplicity, <br /> Loyalty, and Results
        </h1>
        <div
          style={{ backgroundColor: "#12141d" }}
          className=" text-white rounded-xl p-8 flex flex-col lg:flex-row gap-8 items-center"
        >
          <div className="flex gap-4">
            <img
              src={About}
              alt="Office work"
              className="w-96 h-full min-h-[400px] object-cover rounded-lg shadow-md"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              Know More About it
            </h2>
            <p className="text-gray-300 mb-4">
              ReferralHub is an AI-powered referral platform built to help
              businesses turn their loyal customers into their most powerful
              marketing channel. Whether you're a growing startup or an
              established brand, ReferralHub simplifies campaign creation
              through intelligent chat, making it easy to launch, share, and
              track referral programs in minutes — not hours. By combining smart
              automation with human connection, ReferralHub helps you drive real
              growth while rewarding the people who already love your brand.
            </p>
            <p className="text-blue-500 text-xl font-bold">4.5/5</p>
            <p className="text-sm text-gray-400">
              Customer ratings based on 250+ businesses growing with ReferralHub
            </p>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="px-8 md:px-16 py-16 bg-white">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
          How it Works
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          It simplifies the entire referral process — from building campaigns
          with AI to tracking every lead and rewarding your loyal customers in
          real-time.
        </p>

        <div className="grid md:grid-cols-3 gap-12 items-start text-center">
          {/* Step 1 */}
          <div className="flex flex-col items-center">
            <div className="bg-blue-600 text-white w-20 h-20 rounded-full flex items-center justify-center text-2xl font-bold relative">
              AI
              <span className="absolute -top-2 -right-2 bg-white text-blue-600 w-6 h-6 text-sm font-semibold rounded-full border border-blue-600">
                1
              </span>
            </div>
            <h3 className="text-lg font-semibold mt-6 text-gray-900">
              Let ReferralHub AI Guide You
            </h3>
            <p className="text-gray-600 mt-2 text-sm max-w-xs">
              Start by chatting with our AI agent or get instant help from the
              AI assistant as you set up your referral campaign.
            </p>
          </div>

          {/* Arrow */}
          <div className="hidden md:block absolute left-1/3 top-[40%]">
            <span className="text-3xl text-gray-400">→</span>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center">
            <div className="bg-purple-500 text-white w-20 h-20 rounded-full flex items-center justify-center text-2xl font-bold relative">
              <span className="text-xl">✈️</span>
              <span className="absolute -top-2 -right-2 bg-white text-purple-500 w-6 h-6 text-sm font-semibold rounded-full border border-purple-500">
                2
              </span>
            </div>
            <h3 className="text-lg font-semibold mt-6 text-gray-900">
              Share Referral Link
            </h3>
            <p className="text-gray-600 mt-2 text-sm max-w-xs">
              Once the campaign is active, your promoters receive personalized
              links they can share anywhere — helping you grow faster.
            </p>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center">
            <div className="bg-gray-800 text-white w-20 h-20 rounded-full flex items-center justify-center text-2xl font-bold relative">
              🏆
              <span className="absolute -top-2 -right-2 bg-white text-gray-800 w-6 h-6 text-sm font-semibold rounded-full border border-gray-800">
                3
              </span>
            </div>
            <h3 className="text-lg font-semibold mt-6 text-gray-900">
              Give Rewards
            </h3>
            <p className="text-gray-600 mt-2 text-sm max-w-xs">
              Watch your leads grow in real-time and reward your loyal customers
              with points.
            </p>
          </div>
        </div>
      </div>

      <div className="">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
