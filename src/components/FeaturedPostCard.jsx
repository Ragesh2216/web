import React from "react";
import { Link } from "react-router-dom";

const FeaturedPostCard = ({ img, title, tag, desc, date, link }) => {
  return (
    <article className="card flex max-md:flex-col shadow-[0px_3px_8px_0px_rgba(30,41,59,0.24)] rounded-xl p-4 gap-5 bg-white hover:shadow-lg transition-shadow duration-300">
      
      {/* Image Section */}
      <div className="img w-80 max-md:w-full h-56 flex-shrink-0">
        <Link to={link}>
          <img
            src={img}
            alt={title || "Featured post image"}
            loading="lazy"
            className="rounded-md w-full h-full object-cover hover:opacity-90 transition duration-300"
          />
        </Link>
      </div>

      {/* Content Section */}
      <div className="content flex flex-col justify-between gap-3">
        <div>
          <span className="bg-blue-600 text-white rounded-full w-fit px-4 font-medium py-1 text-sm tracking-wide">
            {tag}
          </span>

          <h4 className="text-2xl md:text-3xl text-slate-800 font-bold mt-2 hover:underline underline-offset-8 transition-all">
            <Link to={link}>{title}</Link>
          </h4>

          <p className="text-slate-700 text-base md:text-lg leading-relaxed mt-1">
            {desc}...
          </p>
        </div>

        <div className="dateTime text-slate-600 text-sm md:text-base flex items-center gap-3 font-medium">
          <small>{date}</small>
          <span className="text-slate-400">•</span>
          <small>2 min read</small>
        </div>
      </div>
    </article>
  );
};

export default FeaturedPostCard;
