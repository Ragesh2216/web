import React from "react";
import Logo from "../images/Logo.png";
import { Link } from "react-router-dom";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="my-section">
      <div className="footertop flex justify-between max-md:flex-col max-md:gap-5 max-md:text-center flex-wrap">
        <div className="logoDesc">
          <img src={Logo} width={100} className=" mx-auto" alt="" />
          <p>A premium gastby  Your source for the latest news across the globe, business, and lifestyle.
            Personalized algorithms (like those used by social media and search engines)
             can restrict the news people see, 
            confirming their existing beliefs and leading to a lack of exposure to diverse viewpoints.
          </p>
        </div>

        <div className="quickLinks">
          <h5 className="text-zinc-600 text-sm">Quick Links</h5>
          <ul className="text-slate-800 font-medium mt-3 gap-3 flex flex-col">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/404 ">404 Page</Link>
            </li>
             <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/services">Service</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="ArchiveLinks">
          <h5 className="text-zinc-600 text-sm">Archive</h5>
          <ul className="text-slate-800 font-medium mt-3 gap-3 flex flex-col">
            <li>
              <Link to="/tags">Tags</Link>
            </li>
            <li>
              <Link to="/authors">Authors</Link>
            </li>
            <li>
              <Link to="/monthly-archive">Monthly Archive</Link>
            </li>
            <li>
              <Link to="/yearly-archive">Yearly Archive</Link>
            </li>
           
          </ul>
        </div>
        <div className="connectLinks">
          <h5 className="text-zinc-600 text-sm">Connect</h5>
          <ul className="text-slate-800 font-medium mt-3 gap-3 flex flex-col">
            <li>
              <Link to="/twitter">Twitter</Link>
            </li>
            <li>
              <Link to="/facebook">Facebook</Link>
            </li>
            <li>
              <Link to="/linkedin">Linkedin</Link>
            </li>
            <li>
              <Link to="/github">Github</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="footerBootom mt-12 flex max-sm:flex-col max-sm:items-center max-sm:gap-3 justify-between">
        <div className="socialLinkContainer flex gap-3 items-center">
          <h5>Follow:</h5>
          <ul className="flex gap-3 text-slate-800">
            <li>
              <Link to="/twitter">
                <TwitterIcon />
              </Link>
            </li>
            <li>
              <Link to="/facebook">
                <FacebookIcon />
              </Link>
            </li>
            <li>
              <Link to="/instagram">
                <InstagramIcon />
              </Link>
            </li>
            <li>
              <Link to="/github">
                <GitHubIcon />
              </Link>
            </li>
          </ul>
        </div>
        <p className="text-slate-800 text-sm">
          &copy; {currentYear} stackly. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
