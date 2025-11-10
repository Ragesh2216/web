import React from "react";
import { Link } from "react-router-dom";

const FeaturedPostCard = ({ img, title, tag, desc, date, link }) => {
  return (
    <article className="group bg-white rounded-2xl border-2 border-gray-100 hover:border-blue-200 transition-all duration-300 p-6">
      <div className="flex flex-col lg:flex-row gap-6 items-start">
        
        {/* Image */}
        <div className="img w-full lg:w-72 h-48 flex-shrink-0 rounded-xl overflow-hidden">
          <Link to={link}>
            <img
              src={img}
              alt={title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </Link>
        </div>

        {/* Content */}
        <div className="flex-1 space-y-4">
          <div className="flex items-center gap-3">
            <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium border border-blue-200">
              {tag}
            </span>
            <span className="text-sm text-gray-500">{date}</span>
          </div>

          <h4 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
            <Link to={link}>{title}</Link>
          </h4>

          <p className="text-gray-600 leading-relaxed">
            {desc}...
          </p>

          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span>2 min read</span>
            <span>•</span>
            <Link to={link} className="text-blue-600 font-medium hover:underline">
              Read more
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
};

export default FeaturedPostCard;