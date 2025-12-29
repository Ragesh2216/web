import React from "react";
import { Link } from "react-router-dom";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  // Placeholder URL for the logo
  const logoPlaceholderUrl = "https://placehold.co/120x40/2563EB/ffffff?text=Stackly";
  
  return (
    <footer className="bg-gradient-to-b from-gray-50 to-gray-100 text-gray-800 py-12 border-t border-gray-200">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12 pb-12 border-b border-gray-300">
        
        {/* Logo and Description Block */}
        <div className="col-span-2 md:col-span-2 max-w-md">
          <Link to="/">
            <img 
              src={logoPlaceholderUrl} 
              width={120} 
              className="mb-6 md:mx-0 max-md:mx-auto rounded-lg shadow-sm" 
              alt="Stackly Logo" 
            />
          </Link>
          <p className="text-sm text-gray-600 leading-relaxed max-md:text-center">
            A premium platform delivering insightful content. Your source for the latest news across technology, business, and lifestyle. We believe in diverse perspectives and unbiased information.
          </p>
        </div>

        {/* Quick Links */}
        <div className="max-md:col-span-1 max-md:text-center md:text-left">
          <h5 className="text-gray-900 text-lg font-semibold mb-5 flex items-center gap-2">
            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
            Quick Links
          </h5>
          <ul className="space-y-3">
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About" },
              { to: "/services", label: "Services" },
              { to: "/contact", label: "Contact" },
            ].map((link, index) => (
              <li key={index}>
                <Link 
                  to={link.to}
                  className="text-gray-600 hover:text-blue-600 hover:pl-2 transition-all duration-200 text-base font-medium group flex items-center"
                >
                  <span className="w-1 h-1 bg-gray-300 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Archive Links */}
        <div className="max-md:col-span-1 max-md:text-center md:text-left">
          <h5 className="text-gray-900 text-lg font-semibold mb-5 flex items-center gap-2">
            <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
            Explore
          </h5>
          <ul className="space-y-3">
            {[
              { to: "/tags", label: "Tags" },
              { to: "/authors", label: "Authors" },
              { to: "/monthly-archive", label: "Monthly Archive" },
              { to: "/yearly-archive", label: "Yearly Archive" },
            ].map((link, index) => (
              <li key={index}>
                <Link 
                  to={link.to}
                  className="text-gray-600 hover:text-purple-600 hover:pl-2 transition-all duration-200 text-base font-medium group flex items-center"
                >
                  <span className="w-1 h-1 bg-gray-300 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Connect Links */}
        <div className="max-md:col-span-2 max-md:text-center md:text-left">
          <h5 className="text-gray-900 text-lg font-semibold mb-5 flex items-center gap-2">
            <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
            Connect
          </h5>
          <ul className="space-y-3">
            {[
              { to: "/404", label: "Twitter", color: "hover:text-sky-500" },
              { to: "/404", label: "Instagram", color: "hover:text-pink-500" },
              { to: "/404", label: "Google", color: "hover:text-red-500" },
              { to: "/404", label: "LinkedIn", color: "hover:text-blue-700" },
              { to: "/404", label: "WhatsApp", color: "hover:text-green-500" },
            ].map((link, index) => (
              <li key={index}>
                <Link 
                  to={link.to}
                  className={`text-gray-600 ${link.color} hover:pl-2 transition-all duration-200 text-base font-medium group flex items-center`}
                >
                  <span className="w-1 h-1 bg-gray-300 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Address Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 pb-8 border-b border-gray-300">
        <div className="max-md:text-center md:text-left">
          <h5 className="text-gray-900 text-lg font-semibold mb-5 flex items-center gap-2">
            <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
            Address
          </h5>
          <div className="text-gray-700 space-y-2">
            <p className="font-semibold text-gray-900">The Stackly Headquarters</p>
            <p className="text-gray-600">MMR Complex</p>
            <p className="text-gray-600">Salem, Tamil Nadu</p>
            <p className="text-gray-600">India - 636008</p>
          </div>
        </div>

        <div className="max-md:text-center md:text-left">
          <h5 className="text-gray-900 text-lg font-semibold mb-5 flex items-center gap-2">
            <span className="w-2 h-2 bg-cyan-500 rounded-full"></span>
            Contact
          </h5>
          <div className="space-y-3">
            <Link 
              to="/404"
              className="text-blue-600 hover:text-blue-700 hover:underline text-sm font-medium flex items-center gap-2 group"
            >
              <span className="w-1 h-1 bg-blue-400 rounded-full group-hover:w-2 transition-all"></span>
              View on Google Maps
            </Link>
            <Link 
              to="mailto:info@thestackly.com"
              className="text-gray-700 hover:text-gray-900 text-sm font-medium flex items-center gap-2 group"
            >
              <span className="w-1 h-1 bg-gray-400 rounded-full group-hover:w-2 transition-all"></span>
              info@thestackly.com
            </Link>
            <Link 
              to="tel:+919876543210"
              className="text-gray-700 hover:text-gray-900 text-sm font-medium flex items-center gap-2 group"
            >
              <span className="w-1 h-1 bg-gray-400 rounded-full group-hover:w-2 transition-all"></span>
              +91 98765 43210
            </Link>
          </div>
        </div>
      </div>

      {/* Footer Bottom: Copyright and Social Icons */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
        
        {/* Copyright Text */}
        <div className="text-center sm:text-left">
          <p className="text-sm text-gray-600">
            &copy; {currentYear} Stackly. All rights reserved.
          </p>
          <p className="text-xs text-gray-500 mt-1">
            Made with ❤️ for the community
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-3 mt-6 sm:mt-0">
          {[
            { 
              icon: <TwitterIcon className="text-sky-500" />, 
              to: "/404", 
              bg: "hover:bg-sky-50 hover:border-sky-200",
              border: "border-yellow-100"
            },
            { 
              icon: <FacebookIcon className="text-blue-600" />, 
              to: "/404", 
              bg: "hover:bg-blue-50 hover:border-blue-200",
              border: "border-red-100"
            },
            { 
              icon: <InstagramIcon className="text-pink-600" />, 
              to: "/404", 
              bg: "hover:bg-pink-50 hover:border-pink-200",
              border: "border-gray-100"
            },
            { 
              icon: <GitHubIcon className="text-gray-800" />, 
              to: "/404", 
              bg: "hover:bg-gray-100 hover:border-gray-300",
              border: "border-pink-200"
            },
          ].map((social, index) => (
            <Link
              key={index}
              to={social.to}
              className={`w-10 h-10 bg-white rounded-full flex items-center justify-center border ${social.border} ${social.bg} transition-all duration-300 shadow-sm hover:shadow-md`}
            >
              {social.icon}
            </Link>
          ))}
        </div>
      </div>

      {/* Additional Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <div className="flex flex-wrap justify-center gap-4 text-xs text-gray-500">
          <Link to="/privacy" className="hover:text-gray-700 hover:underline">Privacy Policy</Link>
          <span className="text-gray-300">•</span>
          <Link to="/terms" className="hover:text-gray-700 hover:underline">Terms of Service</Link>
          <span className="text-gray-300">•</span>
          <Link to="/cookies" className="hover:text-gray-700 hover:underline">Cookie Policy</Link>
          <span className="text-gray-300">•</span>
          <Link to="/faq" className="hover:text-gray-700 hover:underline">FAQ</Link>
          <span className="text-gray-300">•</span>
          <Link to="/sitemap" className="hover:text-gray-700 hover:underline">Sitemap</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;