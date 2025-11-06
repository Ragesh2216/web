import React from "react";
// Assuming these imports work in your environment
// Removed: import { Link } from "react-router-dom"; to fix the routing context error
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  // Placeholder URL for the logo since local paths like '../images/Logo.png' won't work in the canvas.
  const logoPlaceholderUrl = "https://placehold.co/100x40/0E7490/ffffff?text=Stackly";
  
  return (
    // 1. Footer Container: Dark background, reduced vertical padding (py-12) and full width
    <footer className="bg-gray-900 text-gray-300 py-12">
      
      {/* 2. Top Section: Grid layout for better column control and a max width */}
      {/* Added responsive horizontal padding to the content wrapper */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-5 gap-10 lg:gap-16 pb-12 border-b border-gray-700">
        
        {/* Logo and Description Block */}
        <div className="col-span-2 md:col-span-2 max-w-md">
          <img src={logoPlaceholderUrl} width={100} className="mb-4 md:mx-0 max-md:mx-auto" alt="Logo" />
          <p className="text-sm text-gray-400 leading-relaxed max-md:text-center">
            A premium Gatsby theme. Your source for the latest news across the globe, business, and lifestyle. Personalized algorithms (like those used by social media and search engines) can restrict the news people see, confirming their existing beliefs and leading to a lack of exposure to diverse viewpoints.
          </p>
        </div>

        {/* Quick Links */}
        <div className="max-md:col-span-1 max-md:text-center md:text-left">
          {/* Enhanced header style */}
          <h5 className="text-white text-lg font-semibold tracking-wider uppercase mb-5">Quick Links</h5>
          <ul className="space-y-3">
            {[
              { to: "/", label: "Home" },
              { to: "/404", label: "404 Page" },
              { to: "/about", label: "About" },
              { to: "/services", label: "Service" },
              { to: "/contact", label: "Contact" },
            ].map((link, index) => (
              <li key={index}>
                {/* FIXED: Replaced <Link> with standard <a> tag */}
                <a 
                  href={link.to} 
                  className="text-gray-400 hover:text-indigo-400 transition-colors duration-200 text-base font-normal"
                >
                  {link.label}
                </a>
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
                {/* FIXED: Replaced <Link> with standard <a> tag */}
                <a 
                  href={link.to} 
                  className="text-gray-400 hover:text-indigo-400 transition-colors duration-200 text-base font-normal"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Connect Links */}
        <div className="max-md:col-span-2 max-md:text-center md:text-left">
          <h5 className="text-white text-lg font-semibold tracking-wider uppercase mb-5">Connect</h5>
          <ul className="space-y-3">
            {[
              { to: "/twitter", label: "Twitter" },
              { to: "/facebook", label: "Facebook" },
              { to: "/linkedin", label: "Linkedin" },
              { to: "/github", label: "Github" },
            ].map((link, index) => (
              <li key={index}>
                {/* FIXED: Replaced <Link> with standard <a> tag */}
                <a 
                  href={link.to} 
                  className="text-gray-400 hover:text-indigo-400 transition-colors duration-200 text-base font-normal"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer Bottom: Copyright and Social Icons */}
      {/* Added responsive horizontal padding to the content wrapper */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 flex flex-col sm:flex-row justify-between items-center text-gray-400">
        
        {/* Social Links Container */}
        <div className="socialLinkContainer flex space-x-4 items-center mb-4 sm:mb-0">
          <h5 className="text-sm uppercase font-medium tracking-wider text-white">Follow:</h5>
          <ul className="flex space-x-3">
            {[
              { to: "/twitter", Icon: TwitterIcon },
              { to: "/facebook", Icon: FacebookIcon },
              { to: "/instagram", Icon: InstagramIcon },
              { to: "/github", Icon: GitHubIcon },
            ].map((social, index) => (
              <li key={index}>
                {/* FIXED: Replaced <Link> with standard <a> tag */}
                <a href={social.to}>
                  {/* Styled icons with hover animation */}
                  <social.Icon className="text-gray-400 hover:text-indigo-400 transition-colors duration-200 text-xl" />
                </a>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Copyright Text */}
        <p className="text-sm">
          &copy; {currentYear} Stackly. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;