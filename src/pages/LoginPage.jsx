import React, { useState } from "react";
import { Mail, Lock } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF, FaXTwitter, FaLinkedinIn } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
 
  const handleLogin = async () => {
    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Basic U2hydXRpIFNvbmk6N3FKczVIZzJMUXFEWmJO",
          "X-CSRFTOKEN":
            "oLVwMlyLxG0j6wmJhTIjJY8K1onWJQ6TCaae3pFrnr0eJsxBOZBCWsApBh6DGIr5",
        },
        body: JSON.stringify({ email, password }),
      });

      const responseData = await response.json();

      if (response.ok) {
        // Assuming you have tokens in the response
        localStorage.setItem("accessToken", responseData.access);
        localStorage.setItem("refreshToken", responseData.refresh);
        localStorage.setItem("userEmail", email);
        navigate("/dashboard");
      } else {
        const errorMessage =
          responseData.detail || "Invalid credentials. Please try again.";
        setError(errorMessage);
      }
    } catch (error) {
      console.error("Login error:", error);
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="bg-[#f5f9fc] min-h-screen flex flex-col items-center justify-start pt-6 px-4">
      <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">
        Login to ReferralHub
      </h2>

      <div className="w-full max-w-md bg-white p-6 rounded-2xl shadow-md">
        <button className="w-full border border-blue-500 text-blue-600 text-sm font-medium py-2 rounded-lg mb-4 hover:bg-blue-50 transition">
          Continue with Google/Microsoft
        </button>

        <div className="mb-3">
          <label className="block text-sm text-gray-600 mb-1">
            Magic Link Login
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full border border-gray-300 rounded-lg p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <button className="w-full bg-blue-500 text-white text-sm font-medium py-2 rounded-lg hover:bg-blue-600 transition mb-4">
          Send Magic Link
        </button>

        <div className="flex items-center my-3">
          <hr className="flex-grow border-t border-gray-300" />
          <span className="mx-2 text-gray-500 text-xs">or</span>
          <hr className="flex-grow border-t border-gray-300" />
        </div>

        <div className="mb-3">
          <label className="block text-sm text-gray-600 mb-1">Email</label>
          <div className="relative">
            <Mail className="absolute left-3 top-2.5 text-gray-400" size={16} />
            <input
              type="email"
              placeholder="robert.fox@myemail.com"
              className="w-full pl-10 border border-gray-300 rounded-lg p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>

        <div className="mb-3">
          <label className="block text-sm text-gray-600 mb-1">Password</label>
          <div className="relative">
            <Lock className="absolute left-3 top-2.5 text-gray-400" size={16} />
            <input
              type="password"
              placeholder="Enter password"
              className="w-full pl-10 border border-gray-300 rounded-lg p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="text-right mt-1">
            <a href="#" className="text-xs text-blue-500 hover:underline">
              Forgot password?
            </a>
          </div>
        </div>

        <div className="flex items-center mb-3">
          <input type="checkbox" id="remember" className="mr-2" />
          <label htmlFor="remember" className="text-sm text-gray-700">
            Remember Me
          </label>
        </div>

        <button
          className="w-full bg-blue-500 text-white text-sm font-medium py-2 rounded-lg hover:bg-blue-600 transition"
          onClick={handleLogin}
        >
          Login
        </button>

        {error && (
          <div className="text-red-500 text-sm mt-2 text-center">{error}</div>
        )}

        <div className="flex items-center my-3">
          <hr className="flex-grow border-t border-gray-300" />
          <span className="mx-2 text-gray-500 text-xs">or</span>
          <hr className="flex-grow border-t border-gray-300" />
        </div>

        <div className="flex justify-center gap-3 mb-3">
          <FcGoogle size={20} className="cursor-pointer" />
          <FaFacebookF size={16} className="text-blue-600 cursor-pointer" />
          <FaXTwitter size={16} className="text-black cursor-pointer" />
          <FaLinkedinIn size={16} className="text-blue-700 cursor-pointer" />
        </div>

        <p className="text-center text-xs text-gray-600">
          Don’t have an account?{" "}
          <Link
            to="/register"
            className="text-blue-500 font-medium hover:underline"
          >
            Register now
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
