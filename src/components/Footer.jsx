import { FaFacebookF, FaInstagram, FaGithub, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      {/* Footer Section */}
      <footer className="bg-gray-900 min-h-90 text-white py-10 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {/* Left */}
          <div>
            <p className="mb-4">
              Simplify your referral process and start growing with ReferralHub
              today.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-400">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="hover:text-gray-400">
                <FaFacebookF size={20} />
              </a>
              <a href="#" className="hover:text-gray-400">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="hover:text-gray-400">
                <FaGithub size={20} />
              </a>
            </div>
          </div>

          {/* Center */}
          <div>
            <h4 className="font-semibold mb-2">Company</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Resources
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  About us
                </a>
              </li>
            </ul>
          </div>

          {/* Right */}
          <div>
            <h4 className="font-semibold mb-2">Help</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Customer Support
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm">
          © Copyright 2025, All Rights Reserved by ReferralHub
        </div>
      </footer>
    </>
  );
};

export default Footer;
