import React, { useState } from "react";
import { Link } from "react-router-dom";

const FeaturedPostCard = ({ img, title, tag, desc, date, link, index = 0 }) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  // Inline styles for animation
  const fadeInUpStyle = {
    animation: `fadeInUp 0.6s ease-out ${index * 100}ms forwards`,
    opacity: 0
  };

  const tagStyle = {
    animation: `fadeInUp 0.6s ease-out ${150 + index * 100}ms forwards`,
    opacity: 0
  };

  const titleStyle = {
    animation: `fadeInUp 0.6s ease-out ${200 + index * 100}ms forwards`,
    opacity: 0
  };

  const descStyle = {
    animation: `fadeInUp 0.6s ease-out ${250 + index * 100}ms forwards`,
    opacity: 0
  };

  const footerStyle = {
    animation: `fadeInUp 0.6s ease-out ${300 + index * 100}ms forwards`,
    opacity: 0
  };

  return (
    <>
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
      
      <article 
        className="group bg-white rounded-2xl border-2 border-gray-100 hover:border-blue-200 transition-all duration-500 p-6 shadow-lg hover:shadow-2xl transform hover:-translate-y-2"
        style={fadeInUpStyle}
      >
        <div className="flex flex-col lg:flex-row gap-6 items-start">
          
          {/* Enhanced Image Container */}
          <div className="img w-full lg:w-72 h-48 flex-shrink-0 rounded-xl overflow-hidden relative">
            {/* Loading Skeleton */}
            {!isImageLoaded && (
              <div className="absolute inset-0 bg-gradient-to-r from-gray-200 to-gray-300 animate-pulse rounded-xl"></div>
            )}
            
            {/* Shimmer Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 z-10"></div>
            
            <Link to={link} className="block h-full overflow-hidden rounded-xl">
              <img
                src={img}
                alt={title}
                className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-110 ${
                  isImageLoaded ? 'opacity-100' : 'opacity-0'
                }`}
                onLoad={() => setIsImageLoaded(true)}
              />
            </Link>
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
          </div>

          {/* Content Section */}
          <div className="flex-1 space-y-4">
            {/* Tag and Date */}
            <div 
              className="flex items-center gap-3"
              style={tagStyle}
            >
              <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium border border-blue-200 group-hover:bg-blue-100 group-hover:border-blue-300 group-hover:scale-105 transition-all duration-300 shadow-sm hover:shadow-md">
                {tag}
              </span>
              <span className="text-sm text-gray-500 group-hover:text-gray-700 transition-colors duration-300 flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {date}
              </span>
            </div>

            {/* Animated Title */}
            <h4 
              className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 relative"
              style={titleStyle}
            >
              <Link to={link} className="relative inline-block pb-1">
                {title}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-500 ease-out"></span>
              </Link>
            </h4>

            {/* Expandable Description */}
            <p 
              className="text-gray-600 leading-relaxed line-clamp-3 group-hover:line-clamp-none transition-all duration-500"
              style={descStyle}
            >
              {desc}...
            </p>

            {/* Interactive Footer */}
            <div 
              className="flex items-center gap-2 text-sm text-gray-500"
              style={footerStyle}
            >
              <span className="flex items-center gap-1 group-hover:text-gray-700 transition-colors duration-300">
                <svg className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                2 min read
              </span>
              <span className="text-gray-300 group-hover:text-gray-400 transition-colors duration-300">•</span>
              <Link 
                to={link} 
                className="text-blue-600 font-medium hover:text-blue-700 transition-colors duration-300 relative group/readmore flex items-center gap-1"
              >
                Read more
                <svg 
                  className="w-4 h-4 transform group-hover/readmore:translate-x-1 transition-transform duration-300" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover/readmore:w-full transition-all duration-300"></span>
              </Link>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default FeaturedPostCard;