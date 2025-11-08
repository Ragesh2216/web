import React from "react";
import { Link } from "react-router-dom";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import HeroImg from "../images/hero.png";

import Subscribe from "../components/Subscribe";
import FeaturedPost from "../components/FeaturedPost";
const Home = () => {
  return (
    <>
      <main className="px-24 mt-5 max-sm:px-5">
        <div className="hero-image">
  
       

        <FeaturedPost />
        
        <Subscribe />
         </div>
      </main>
    </>
  );
};

export default Home;
