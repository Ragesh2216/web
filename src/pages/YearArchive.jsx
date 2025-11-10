import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Subscribe from "../components/Subscribe";

const YearArchive = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [expandedYears, setExpandedYears] = useState(new Set(["2024", "2023"]));
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Sample realistic data structure
  const yearlyData = [
    {
      year: "2024",
      totalPosts: 45,
      color: "from-blue-500 to-cyan-500",
      months: [
        { 
          month: "May 2024", 
          posts: [
            { 
              date: "May 15, 2024", 
              title: "The Future of Digital Publishing: How AI is Transforming Magazine Journalism", 
              slug: "/post/future-digital-publishing-ai", 
              readTime: "8 min",
              category: "Technology",
              excerpt: "Exploring how artificial intelligence is revolutionizing the way we create and consume magazine content in the digital age.",
              color: "from-blue-500 to-cyan-500"
            },
            { 
              date: "May 08, 2024", 
              title: "Sustainable Fashion: The Rise of Eco-Conscious Designers", 
              slug: "/post/sustainable-fashion-designers", 
              readTime: "6 min",
              category: "Fashion",
              excerpt: "Meet the designers leading the charge in sustainable fashion and changing the industry from the ground up.",
              color: "from-green-500 to-emerald-500"
            }
          ]
        },
        { 
          month: "April 2024", 
          posts: [
            { 
              date: "April 22, 2024", 
              title: "Minimalist Living: The Art of Decluttering Your Space and Mind", 
              slug: "/post/minimalist-living-decluttering", 
              readTime: "7 min",
              category: "Lifestyle",
              excerpt: "How embracing minimalism can lead to greater clarity, reduced stress, and a more intentional way of living.",
              color: "from-purple-500 to-pink-500"
            }
          ]
        }
      ]
    },
    {
      year: "2023",
      totalPosts: 89,
      color: "from-green-500 to-emerald-500",
      months: [
        { 
          month: "December 2023", 
          posts: [
            { 
              date: "Dec 20, 2023", 
              title: "2023 in Review: The Year That Redefined Creative Industries", 
              slug: "/post/2023-creative-industries-review", 
              readTime: "14 min",
              category: "Culture",
              excerpt: "A comprehensive look at how art, design, music, and literature evolved in a post-pandemic world.",
              color: "from-orange-500 to-red-500"
            }
          ]
        }
      ]
    },
    {
      year: "2022",
      totalPosts: 67,
      color: "from-purple-500 to-pink-500",
      months: [
        { 
          month: "September 2022", 
          posts: [
            { 
              date: "Sep 12, 2022", 
              title: "Sustainable Architecture: Building for Tomorrow's Climate", 
              slug: "/post/sustainable-architecture-climate", 
              readTime: "13 min",
              category: "Architecture",
              excerpt: "How architects are designing buildings that not only withstand climate change but actively combat it.",
              color: "from-teal-500 to-cyan-500"
            }
          ]
        }
      ]
    },
    {
      year: "2021",
      totalPosts: 52,
      color: "from-orange-500 to-red-500",
      months: [
        { 
          month: "July 2021", 
          posts: [
            { 
              date: "July 19, 2021", 
              title: "Urban Gardening: Transforming City Spaces into Green Oases", 
              slug: "/post/urban-gardening-city-spaces", 
              readTime: "7 min",
              category: "Lifestyle",
              excerpt: "How urban dwellers are creating lush gardens in small spaces, from balcony containers to rooftop farms.",
              color: "from-lime-500 to-green-500"
            }
          ]
        }
      ]
    }
  ];

  // Get unique years for filter
  const years = yearlyData.map(item => item.year);

  // Toggle year expansion
  const toggleYear = (year) => {
    const newExpanded = new Set(expandedYears);
    if (newExpanded.has(year)) {
      newExpanded.delete(year);
    } else {
      newExpanded.add(year);
    }
    setExpandedYears(newExpanded);
  };

  // Expand/Collapse all
  const toggleAllYears = () => {
    if (expandedYears.size === yearlyData.length) {
      setExpandedYears(new Set());
    } else {
      setExpandedYears(new Set(years));
    }
  };

  // Filter data based on search and year selection
  const filteredData = yearlyData
    .filter(yearData => !selectedYear || yearData.year === selectedYear)
    .map(yearData => ({
      ...yearData,
      months: yearData.months.map(monthData => ({
        ...monthData,
        posts: monthData.posts.filter(post => 
          post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.date.toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.category.toLowerCase().includes(searchTerm.toLowerCase())
        )
      })).filter(monthData => monthData.posts.length > 0)
    }))
    .filter(yearData => yearData.months.length > 0);

  const totalArticles = filteredData.reduce((total, year) => total + year.totalPosts, 0);

  const yearColors = [
    "from-blue-500 to-cyan-500",
    "from-green-500 to-emerald-500",
    "from-purple-500 to-pink-500",
    "from-orange-500 to-red-500",
    "from-indigo-500 to-purple-500"
  ];

  const getYearColor = (year) => {
    const yearData = yearlyData.find(y => y.year === year);
    return yearData?.color || yearColors[years.indexOf(year) % yearColors.length];
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-100">
      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        {/* Header Section */}
        <section className={`text-center mb-12 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-gradient">
            Yearly Archive
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our complete collection of articles organized by year
          </p>
          
          {/* Stats */}
          <div className="flex justify-center gap-8 mt-8">
            {[
              { number: filteredData.length, label: "Years", color: "from-blue-500 to-cyan-500" },
              { number: filteredData.reduce((total, year) => total + year.months.length, 0), label: "Months", color: "from-green-500 to-emerald-500" },
              { number: totalArticles, label: "Articles", color: "from-purple-500 to-pink-500" }
            ].map((stat, index) => (
              <div 
                key={index}
                className="text-center group cursor-pointer transform hover:scale-110 transition-all duration-500"
              >
                <div className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300`}>
                  {stat.number}
                </div>
                <div className="text-gray-500 group-hover:text-gray-700 transition-colors duration-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="mb-12">
          <div className={`bg-white rounded-2xl shadow-lg p-6 transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex flex-col lg:flex-row gap-4 justify-between items-center">
              <div className="flex-1 w-full">
                <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-2">
                  Search Articles
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="search"
                    placeholder="Search by title, date, or category..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-4 py-3 pl-11 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:shadow-md group"
                  />
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500 transition-colors duration-200">
                    🔍
                  </div>
                </div>
              </div>
              
              <div className="w-full lg:w-48">
                <label htmlFor="year-filter" className="block text-sm font-medium text-gray-700 mb-2">
                  Filter by Year
                </label>
                <div className="relative">
                  <select
                    id="year-filter"
                    value={selectedYear}
                    onChange={(e) => setSelectedYear(e.target.value)}
                    className="w-full px-4 py-3 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white appearance-none hover:shadow-md transition-all duration-200"
                  >
                    <option value="">All Years</option>
                    {years.map(year => (
                      <option key={year} value={year}>{year}</option>
                    ))}
                  </select>
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none">
                    ⬇️
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-auto">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Actions
                </label>
                <button
                  onClick={toggleAllYears}
                  className="w-full lg:w-auto px-6 py-3 bg-gradient-to-r from-gray-600 to-gray-700 text-white rounded-lg hover:from-gray-700 hover:to-gray-800 transform hover:scale-105 transition-all duration-300 font-medium shadow-lg hover:shadow-xl"
                >
                  {expandedYears.size === yearlyData.length ? 'Collapse All' : 'Expand All'}
                </button>
              </div>
            </div>
            
            {/* Active Filters */}
            {(searchTerm || selectedYear) && (
              <div className="mt-4 flex items-center gap-2 flex-wrap animate-fadeIn">
                <span className="text-sm text-gray-600">Active filters:</span>
                {searchTerm && (
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 transform hover:scale-105 transition-all duration-200">
                    Search: "{searchTerm}"
                    <button
                      onClick={() => setSearchTerm("")}
                      className="ml-2 hover:text-blue-600 transition-colors duration-200"
                    >
                      ×
                    </button>
                  </span>
                )}
                {selectedYear && (
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 transform hover:scale-105 transition-all duration-200">
                    Year: {selectedYear}
                    <button
                      onClick={() => setSelectedYear("")}
                      className="ml-2 hover:text-green-600 transition-colors duration-200"
                    >
                      ×
                    </button>
                  </span>
                )}
                <button
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedYear("");
                  }}
                  className="text-sm text-gray-600 hover:text-gray-800 underline transition-colors duration-200 transform hover:scale-105"
                >
                  Clear all
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Archive Content */}
        <section>
          {filteredData.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-2xl shadow-lg animate-pulse">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">No articles found</h3>
              <p className="text-gray-600 mb-4">Try adjusting your search or filter criteria</p>
              <button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedYear("");
                }}
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg hover:from-blue-700 hover:to-cyan-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {filteredData.map((yearData, yearIndex) => (
                <div 
                  key={yearData.year} 
                  className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
                  style={{ animationDelay: `${yearIndex * 200}ms` }}
                >
                  {/* Year Header - Clickable */}
                  <button
                    onClick={() => toggleYear(yearData.year)}
                    className={`w-full bg-gradient-to-r ${getYearColor(yearData.year)} px-6 py-6 text-left hover:shadow-lg transition-all duration-300 group relative overflow-hidden`}
                  >
                    {/* Animated background overlay */}
                    <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-500"></div>
                    
                    <div className="flex justify-between items-center relative">
                      <div>
                        <h2 className="text-2xl md:text-3xl font-bold text-white transform group-hover:scale-105 transition-transform duration-300">
                          {yearData.year}
                        </h2>
                        <p className="text-blue-100 mt-1 group-hover:text-white transition-colors duration-300">
                          {yearData.totalPosts} articles across {yearData.months.length} months
                        </p>
                      </div>
                      <div className="text-white text-2xl transform group-hover:scale-125 transition-transform duration-300">
                        {expandedYears.has(yearData.year) ? '−' : '+'}
                      </div>
                    </div>
                  </button>
                  
                  {/* Months - Collapsible */}
                  {expandedYears.has(yearData.year) && (
                    <div className="p-6 space-y-8 animate-fadeIn">
                      {yearData.months.map((monthData, monthIndex) => (
                        <div 
                          key={monthData.month} 
                          className="border-l-4 border-green-500 pl-6 transform hover:translate-x-2 transition-all duration-300 group/month"
                          style={{ animationDelay: `${(yearIndex + monthIndex) * 100}ms` }}
                        >
                          <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-3 group-hover/month:text-gray-800 transition-colors duration-300">
                            {monthData.month}
                            <span className="text-sm font-normal text-gray-500 bg-gray-100 px-3 py-1 rounded-full group-hover/month:bg-green-100 group-hover/month:text-green-700 transition-all duration-300">
                              {monthData.posts.length} {monthData.posts.length === 1 ? 'article' : 'articles'}
                            </span>
                          </h3>
                          
                          <div className="space-y-4">
                            {monthData.posts.map((post, postIndex) => (
                              <div 
                                key={postIndex} 
                                className="group flex flex-col sm:flex-row sm:items-start gap-3 p-4 rounded-lg hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 border border-transparent hover:border-blue-200 transition-all duration-300 transform hover:scale-[1.02]"
                                style={{ animationDelay: `${(yearIndex + monthIndex + postIndex) * 50}ms` }}
                              >
                                <div className="flex sm:flex-col gap-2 sm:gap-0 sm:min-w-32">
                                  <time className="text-sm text-gray-500 font-medium group-hover:text-gray-700 transition-colors duration-300">
                                    {post.date}
                                  </time>
                                  <span className="text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded sm:mt-1 group-hover:bg-blue-100 group-hover:text-blue-700 transition-all duration-300">
                                    {post.readTime}
                                  </span>
                                </div>
                                <div className="flex-1">
                                  <Link
                                    to={post.slug}
                                    className="text-lg font-medium text-gray-900 hover:text-blue-600 transition-colors duration-200 flex items-center gap-2 group-hover:underline"
                                  >
                                    {post.title}
                                    <span className="text-blue-600 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-300">
                                      →
                                    </span>
                                  </Link>
                                  <p className="text-gray-600 text-sm mt-1 group-hover:text-gray-700 transition-colors duration-300">
                                    {post.excerpt}
                                  </p>
                                  <span className={`inline-block mt-2 px-2 py-1 text-xs font-medium bg-gradient-to-r ${post.color} text-white rounded-full transform group-hover:scale-105 transition-transform duration-300`}>
                                    {post.category}
                                  </span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Navigation Helpers */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-12">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="px-6 py-3 bg-gradient-to-r from-gray-600 to-gray-700 text-white rounded-lg hover:from-gray-700 hover:to-gray-800 transform hover:scale-105 transition-all duration-300 font-medium shadow-lg hover:shadow-xl"
          >
            Back to Top
          </button>
          
          <Link
            to="/monthly-archive"
            className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg hover:from-blue-700 hover:to-cyan-700 transform hover:scale-105 transition-all duration-300 font-medium shadow-lg hover:shadow-xl text-center"
          >
            View Monthly Archive
          </Link>
        </div>

        {/* Subscribe Section */}
        <section className="mt-16">
          <Subscribe />
        </section>
      </main>

      <style jsx>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
    </div>
  );
};

export default YearArchive;