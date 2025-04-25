import { FaFacebookF, FaInstagram, FaGithub, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0A0A0A] text-gray-400 px-8 md:px-20 py-12">
      <div className="grid md:grid-cols-3 gap-10 mb-8">
        {/* Left Section */}
        <div>
          <p className="text-lg text-white font-medium mb-4">
            Simplify your referral process and start growing with ReferralHub today.
          </p>
          <div className="flex gap-4 mt-4">
            <a href="#" className="hover:text-white transition-colors">
              <FaTwitter size={20} />
            </a>
            <a href="#" className="hover:text-white transition-colors">
              <FaFacebookF size={20} />
            </a>
            <a href="#" className="hover:text-white transition-colors">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="hover:text-white transition-colors">
              <FaGithub size={20} />
            </a>
          </div>
        </div>

        {/* Company Links */}
        <div className="md:ml-auto">
          <h4 className="text-white font-semibold mb-4">Company</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">Service</a></li>
            <li><a href="#" className="hover:text-white">Resources</a></li>
            <li><a href="#" className="hover:text-white">About us</a></li>
          </ul>
        </div>

        {/* Help Links */}
        <div>
          <h4 className="text-white font-semibold mb-4">Help</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">Customer Support</a></li>
            <li><a href="#" className="hover:text-white">Terms & Conditions</a></li>
            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
          </ul>
        </div>
      </div>

      {/* Divider and Copyright */}
      <div className="border-t border-gray-700 pt-6 text-center text-sm">
        © Copyright 2025, All Rights Reserved by <span className="text-white font-medium">ReferralHub</span>
      </div>
    </footer>
  );
};

export default Footer;