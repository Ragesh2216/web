import React from "react";
import author1 from "../images/suravi.webp";
import travelImg from "../images/window-blue-wall.webp";
import FormatQuoteOutlinedIcon from "@mui/icons-material/FormatQuoteOutlined";
import { Link } from "react-router-dom";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import PinterestIcon from "@mui/icons-material/Pinterest";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import LinkOutlinedIcon from "@mui/icons-material/LinkOutlined";
import Subscribe from "../components/Subscribe";

const SingleBlog2 = () => {
  return (
    <main className="mt-0 px-4 sm:px-8 lg:px-24 py-12 bg-red-50">
      <section className="w-full max-w-4xl mx-auto">
        {/* Blog Header */}
        <div className="blogHeader text-center sm:text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl text-slate-800 font-bold leading-tight mb-6">
            Never let your memories be greater than your dreams
          </h1>
          <div className="metaData flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 justify-center sm:justify-start">
            <div className="author flex items-center gap-3 justify-center sm:justify-start">
              <img
                src={author1}
                width={40}
                height={40}
                className="rounded-full border-2 border-white shadow-sm"
                alt="Surabhi Gupta"
                loading="lazy"
              />
              <h4 className="text-base font-semibold text-slate-800 hover:text-red-600 transition-colors">
                <Link to="/author/surabhi-gupta">Surabhi Gupta</Link>
              </h4>
            </div>
            <ul className="flex items-center gap-4 sm:gap-8 text-sm sm:text-base text-neutral-600 justify-center sm:justify-start">
              <li className="flex items-center gap-1">
                <span className="w-1 h-1 bg-neutral-400 rounded-full"></span>
                March 16, 2022
              </li>
              <li className="flex items-center gap-1">
                <span className="w-1 h-1 bg-neutral-400 rounded-full"></span>
                15 min read
              </li>
            </ul>
          </div>
        </div>

        {/* Blog Cover Image */}
        <div className="blogCoverImg mt-8 rounded-2xl overflow-hidden shadow-lg">
          <img
            src={travelImg}
            className="w-full h-auto max-h-96 object-cover"
            alt="Window with blue wall - representing travel dreams and perspectives"
          />
        </div>

        {/* Blog Content */}
        <div className="blogContent mt-8 max-w-3xl mx-auto">
          <p className="text-slate-700 text-lg leading-relaxed mb-6">
            Almost instantly the whole truth of the transaction seemed to rush
            upon her mind, and her wrath was inconceivably violent. She asked me
            a thousand questions in a breath; but, fortunately, was too vehement
            to attend to my embarrassment, which must otherwise have betrayed my
            knowledge of the deceit. Revenge was her first wish; and she vowed
            she would go the next morning to Justice Fielding, and inquire what
            punishment she might lawfully inflict upon the Captain for his
            assault.
          </p>
          <p className="text-slate-700 text-lg leading-relaxed mb-6">
            I believe we were an hour at Bishopsgate Street before poor Madame
            Duval could allow any thing to be mentioned but her own story; at
            any length, however, Mr. Branghton told her, that M. Du Bois, and
            all his own family, were waiting for her at his house. A
            hackney-coach was then called, and we proceeded to Snow Hill.
          </p>
          
          <h3 className="text-2xl sm:text-3xl text-slate-800 font-bold mt-8 mb-4">
            I'll never forget the advice my father gave me
          </h3>
          
          <p className="text-slate-700 text-lg leading-relaxed mb-6">
            Mr. Branghton's house is small and inconvenient; though his shop,
            which takes in all the ground floor, is large and commodious. I
            believe I told you before, that he is a silver-smith.
          </p>

          {/* Blockquote */}
          <div className="blockquote relative px-6 py-8 rounded-xl mt-6 bg-gradient-to-r from-red-500 to-pink-600 text-white shadow-lg">
            <FormatQuoteOutlinedIcon className="absolute -top-2 -left-2 text-white opacity-20 !text-6xl" />
            <p className="text-lg sm:text-xl font-light italic relative z-10">
              "Inspiration is a message from your unconscious wisdom telling you
              to go out there and be the fullest, most positive expression of
              you who you REALLY are"
            </p>
          </div>

          {/* List */}
          <ul className="list-none text-slate-700 text-lg leading-relaxed mt-8 space-y-4">
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0"></span>
              <span>We were conducted up two pairs of stairs: for the dining-room, Mr. Branghton told us, was let. His two daughters, their brother, M. Du Bois, and a young man, were at tea.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0"></span>
              <span>They had waited some time for Madame Duval, but I found they had not any expectation that I should accompany her; and the young ladies.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0"></span>
              <span>I believe, were rather more surprised than pleased when I made my appearance; for they seemed hurt that I should see their apartment.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0"></span>
              <span>Indeed, I would willingly have saved them that pain, had it been in my power.</span>
            </li>
          </ul>

          {/* Travel Inspiration Section */}
          <div className="mt-8 p-6 bg-blue-50 border border-blue-200 rounded-xl">
            <h4 className="text-lg font-semibold text-blue-800 mb-2">✈️ Travel Inspiration</h4>
            <p className="text-blue-700 text-sm">
              This article reminds us that travel is not just about visiting new places, 
              but about expanding our horizons and dreaming bigger. Every journey begins 
              with a dream and the courage to pursue it.
            </p>
          </div>

          {/* Share Section */}
          <div className="share text-center mt-12 pt-8 border-t border-gray-200">
            <h4 className="text-xl text-slate-800 font-semibold mb-6">
              Share This Article
            </h4>
            <ul className="flex flex-wrap justify-center gap-3 sm:gap-4">
              {[
                { icon: FacebookOutlinedIcon, color: "hover:bg-blue-600 hover:text-white", label: "Facebook" },
                { icon: TwitterIcon, color: "hover:bg-blue-400 hover:text-white", label: "Twitter" },
                { icon: PinterestIcon, color: "hover:bg-red-600 hover:text-white", label: "Pinterest" },
                { icon: WhatsAppIcon, color: "hover:bg-green-500 hover:text-white", label: "WhatsApp" },
                { icon: LinkedInIcon, color: "hover:bg-blue-700 hover:text-white", label: "LinkedIn" },
                { icon: MailOutlineOutlinedIcon, color: "hover:bg-gray-600 hover:text-white", label: "Email" },
                { icon: LinkOutlinedIcon, color: "hover:bg-purple-600 hover:text-white", label: "Copy Link" }
              ].map((social, index) => (
                <li key={index}>
                  <Link 
                    to="./404" 
                    className={`bg-white p-3 flex justify-center items-center w-12 h-12 text-slate-600 rounded-full shadow-sm border border-gray-200 transition-all duration-200 ${social.color} hover:scale-110`}
                    aria-label={`Share on ${social.label}`}
                  >
                    <social.icon />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      
      {/* Subscribe Component */}
      <div className="mt-16">
        <Subscribe />
      </div>
    </main>
  );
};

export default SingleBlog2;