/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF, FaXTwitter, FaLinkedinIn } from "react-icons/fa6";
import { EyeOff, Eye } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [role, setRole] = useState("BusinessOwner");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = async () => {
    setError("");

    // Basic validation
    if (!email || !password || !confirmPassword || !fullName) {
      setError("All required fields must be filled out");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    // No password strength validation, just check if it's at least 6 characters
    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    const requestBody = {
      email,
      password,
      role,
      full_name: fullName,
    };

    try {
      setLoading(true);
      const response = await fetch("http://34.10.166.233/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      const data = await response.json();

      if (response.status === 201) {
        // Registration successful
        navigate("/login");
      } else {
        // Handle specific error responses
        setError(
          data?.email
            ? "This email is already registered."
            : data?.detail || "Registration failed. Please try again."
        );
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f5f9fc] flex flex-col">
      <header className="bg-gray-800 text-white p-2 px-4 text-sm">
        Registration Page
      </header>

      <div className="flex flex-col items-center justify-center flex-grow p-4">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-700 mb-4 text-center">
          Register for ReferralHub
        </h2>

        <div className="w-full max-w-md bg-white p-6 rounded-2xl shadow-md">
          {/* Full Name */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              placeholder="John Doe"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Id
            </label>
            <input
              type="email"
              placeholder="robert.fox@myemail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Create Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Confirm Password */}
          <div className="mb-4 relative">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Confirm Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Re-enter password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full border border-gray-300 rounded-md p-2 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              type="button"
              className="absolute right-3 top-[38px] text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          {/* Error Message */}
          {error && (
            <div className="text-red-500 text-sm mb-3 text-center">{error}</div>
          )}

          {/* Register Button */}
          <button
            disabled={loading}
            className="w-full bg-gradient-to-r from-blue-500 to-blue-400 text-white font-medium py-2 rounded-md text-sm hover:opacity-90 transition"
            onClick={handleRegister}
          >
            {loading ? "Registering..." : "Register"}
          </button>

          {/* Divider */}
          <div className="flex items-center my-4">
            <hr className="flex-grow border-t border-gray-300" />
            <span className="mx-2 text-gray-400 text-sm">or</span>
            <hr className="flex-grow border-t border-gray-300" />
          </div>

          {/* Social Icons */}
          <div className="flex justify-center gap-4 mb-4">
            <FcGoogle size={22} className="cursor-pointer" />
            <FaFacebookF size={18} className="text-blue-600 cursor-pointer" />
            <FaXTwitter size={18} className="text-black cursor-pointer" />
            <FaLinkedinIn size={18} className="text-blue-700 cursor-pointer" />
          </div>

          {/* Link to Login */}
          <p className="text-center text-sm text-gray-600">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-500 hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
