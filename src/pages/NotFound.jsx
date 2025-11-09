import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Subscribe from "../components/Subscribe";

export default function NotFound() {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    document.title = "404 — Page Not Found | Stackly News";
    setIsVisible(true);
  }, []);

  // Suggested pages based on common navigation patterns
  const suggestedPages = [
    { path: "/", name: "Home", description: "Back to homepage" },
    { path: "/archive", name: "Archive", description: "Browse all articles" },
    { path: "/tags", name: "Topics", description: "Explore by category" },
    { path: "/about", name: "About", description: "Learn about us" },
  ];

  // Fun 404 messages
  const errorMessages = [
    "Looks like this page went on an adventure without us!",
    "This page is taking a coffee break. Maybe it's time for one too?",
    "We searched high and low, but this page is playing hide and seek.",
    "This page must have joined the witness protection program.",
    "Even our best detectives couldn't find this page!",
  ];

  const randomMessage = errorMessages[Math.floor(Math.random() * errorMessages.length)];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className={`pt-24 pb-16 px-4 sm:px-6 lg:px-8 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className="max-w-4xl mx-auto">
          {/* Main 404 Content */}
          <div className="text-center mb-16">
            {/* Animated 404 Number */}
            <div className="relative mb-8">
              <h1 className="text-9xl md:text-[12rem] font-bold text-gray-900 opacity-10 select-none">
                404
              </h1>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-8xl md:text-[10rem] font-bold text-blue-600 mb-4 animate-bounce">
                    404
                  </div>
                  <div className="w-24 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-6"></div>
                </div>
              </div>
            </div>

            {/* Error Message */}
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Page Not Found
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              {randomMessage}
            </p>
            <p className="text-gray-500 mb-8">
              The page <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono">"{location.pathname}"</code> doesn't exist or may have been moved.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                Back to Homepage
              </Link>
              <button
                onClick={() => window.history.back()}
                className="border-2 border-gray-300 hover:border-gray-400 text-gray-700 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 hover:shadow-lg transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Go Back
              </button>
            </div>
          </div>

          {/* Suggested Pages */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
              While you're here, explore some popular pages
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {suggestedPages.map((page, index) => (
                <Link
                  key={index}
                  to={page.path}
                  className="group block p-6 border-2 border-gray-100 rounded-xl hover:border-blue-300 hover:bg-blue-50 transition-all duration-200 transform hover:scale-[1.02]"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors duration-200">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                        {page.name}
                      </h4>
                      <p className="text-gray-600 text-sm">{page.description}</p>
                    </div>
                    <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Help Section */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Need Help Finding Something?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Can't find what you're looking for? Our team is here to help you navigate the site and find the information you need.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
              >
                Contact Support
              </Link>
              <Link
                to="/search"
                className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200"
              >
                Try Search
              </Link>
            </div>
          </div>

          {/* Fun Stats */}
          <div className="text-center mt-12">
            <div className="inline-flex items-center gap-6 text-sm text-gray-500 bg-white rounded-full px-6 py-3 shadow-lg">
              <span>📊</span>
              <span>You're one of the few who discovered our secret 404 page!</span>
              <span>🎉</span>
            </div>
          </div>
        </div>
      </div>

      <Subscribe />
    </div>
  );
}