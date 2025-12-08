import React from "react";
import { Link } from "react-router-dom";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  // Placeholder URL for the logo since local paths like '../images/Logo.png' won't work in the canvas.
  const logoPlaceholderUrl = "https://placehold.co/100x40/0E7490/ffffff?text=Stackly";
  
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-5 gap-10 lg:gap-16 pb-12 border-b border-gray-700">
        
        {/* Logo and Description Block */}
        <div className="col-span-2 md:col-span-2 max-w-md">
          <Link to="/">
            <img src={logoPlaceholderUrl} width={100} className="mb-4 md:mx-0 max-md:mx-auto" alt="Logo" />
          </Link>
          <p className="text-sm text-gray-400 leading-relaxed max-md:text-center">
            A premium Gatsby theme. Your source for the latest news across the globe, business, and lifestyle. Personalized algorithms (like those used by social media and search engines) can restrict the news people see, confirming their existing beliefs and leading to a lack of exposure to diverse viewpoints.
          </p>
        </div>

        {/* Quick Links */}
        <div className="max-md:col-span-1 max-md:text-center md:text-left">
          <h5 className="text-white text-lg font-semibold tracking-wider uppercase mb-5">Quick Links</h5>
          <ul className="space-y-3">
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About" },
              { to: "/services", label: "Service" },
              { to: "/contact", label: "Contact" },
            ].map((link, index) => (
              <li key={index}>
                <Link 
                  to={link.to}
                  className="text-gray-400 hover:text-indigo-400 transition-colors duration-200 text-base font-normal"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Archive Links */}
        <div className="max-md:col-span-1 max-md:text-center md:text-left">
          <h5 className="text-white text-lg font-semibold tracking-wider uppercase mb-5">Archive</h5>
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
                  className="text-gray-400 hover:text-indigo-400 transition-colors duration-200 text-base font-normal"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Connect Links */}
        <div className="max-md:col-span-2 max-md:text-center md:text-left">
          <h5 className="text-white text-lg font-semibold tracking-wider uppercase mb-5">Connect</h5>
          <ul className="space-y-3">
            {[
              { to: "/404", label: "Twitter" },
              { to: "/404", label: "Instagram" },
              { to: "/404", label: "Google" },
              { to: "/404", label: "Linkedin" },
              { to: "/404", label: "Whatsapp" },
            ].map((link, index) => (
              <li key={index}>
                <Link 
                  to={link.to}
                  className="text-gray-400 hover:text-indigo-400 transition-colors duration-200 text-base font-normal"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Address Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 grid grid-cols-1 md:grid-cols-2 gap-10 pb-8 border-b border-gray-700">
        <div className="max-md:text-center md:text-left">
          <h5 className="text-white text-lg font-semibold tracking-wider uppercase mb-5">Address</h5>
          <p className="text-slate-100 text-sm leading-relaxed">
            <span className="block font-medium text-white">The Stackly</span>
            MMR COMPLEX,
            Salem, Tamil Nadu,
            India, 636008.
          </p>
        </div>

        <div className="max-md:text-center md:text-left">
          <h5 className="text-white text-lg font-semibold tracking-wider uppercase mb-5">Contact</h5>
          <div className="space-y-3">
            <Link 
              to="/404"
              className="text-sky-400 hover:text-sky-300 underline text-sm block"
            >
              View on Google Maps
            </Link>
            <Link 
              to="/404"
              className="text-slate-300 hover:text-white text-sm block"
            >
              info@thestackly.com
            </Link>
            <Link 
              to="/404"
              className="text-slate-300 hover:text-white text-sm block"
            >
              +91 98765 43210
            </Link>
          </div>
        </div>
      </div>

      {/* Footer Bottom: Copyright and Social Icons */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 flex flex-col sm:flex-row justify-between items-center text-gray-400">
        
        {/* Copyright Text */}
        <p className="text-sm">
          &copy; {currentYear} Stackly. All rights reserved.
        </p>

        {/* Social Icons */}
        <div className="flex space-x-4 mt-4 sm:mt-0">
          {[
            { icon: <TwitterIcon />, to: "/404" },
            { icon: <FacebookIcon />, to: "/404" },
            { icon: <InstagramIcon />, to: "/404" },
            { icon: <GitHubIcon />, to: "/404" },
          ].map((social, index) => (
            <Link
              key={index}
              to={social.to}
              className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors duration-200"
            >
              {social.icon}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;