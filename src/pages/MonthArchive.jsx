import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Subscribe from "../components/Subscribe";

function MonthArchive() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Sample data - replace with actual data from your API or CMS
  const archiveData = [
    {
      year: "2024",
      months: [
        {
          month: "May 2024",
          posts: [
            { 
              date: "May 15, 2024", 
              title: "Global Summit Addresses AI Regulation: World Leaders Reach Historic Agreement", 
              slug: "/post/ai-regulation-global-summit",
              category: "Politics",
              excerpt: "International consensus reached on artificial intelligence governance framework after marathon negotiations.",
              color: "from-blue-500 to-cyan-500"
            },
            { 
              date: "May 08, 2024", 
              title: "Breakthrough in Renewable Energy: Scientists Achieve Nuclear Fusion Milestone", 
              slug: "/post/nuclear-fusion-breakthrough",
              category: "Science",
              excerpt: "Researchers announce sustained fusion reaction that could revolutionize clean energy production worldwide.",
              color: "from-green-500 to-emerald-500"
            },
            { 
              date: "May 01, 2024", 
              title: "Major Tech Merger Shakes Industry: Two Giants Announce $50 Billion Deal", 
              slug: "/post/tech-merger-50-billion",
              category: "Business",
              excerpt: "Stock markets react as two technology behemoths reveal plans for largest merger of the decade.",
              color: "from-purple-500 to-pink-500"
            }
          ]
        },
        {
          month: "April 2024",
          posts: [
            { 
              date: "April 22, 2024", 
              title: "Climate Accord Expanded: 150 Nations Commit to Accelerated Emissions Cuts", 
              slug: "/post/climate-accord-expanded",
              category: "Environment",
              excerpt: "New targets set as scientific community warns of approaching climate tipping points.",
              color: "from-teal-500 to-green-500"
            },
            { 
              date: "April 14, 2024", 
              title: "Central Banks Coordinate Unprecedented Interest Rate Moves Amid Inflation Concerns", 
              slug: "/post/central-banks-interest-rates",
              category: "Economy",
              excerpt: "Global financial authorities take synchronized action to combat persistent inflationary pressures.",
              color: "from-orange-500 to-red-500"
            }
          ]
        }
      ]
    },
    {
      year: "2023",
      months: [
        {
          month: "December 2023",
          posts: [
            { 
              date: "Dec 20, 2023", 
              title: "Year in Review: The Conflicts and Diplomacy That Shaped Global Politics", 
              slug: "/post/2023-global-conflicts-diplomacy",
              category: "World Affairs",
              excerpt: "Analysis of major geopolitical shifts and peace negotiations that defined the international landscape.",
              color: "from-indigo-500 to-purple-500"
            },
            { 
              date: "Dec 10, 2023", 
              title: "Healthcare Revolution: FDA Approves Groundbreaking Gene Therapy Treatment", 
              slug: "/post/gene-therapy-fda-approval",
              category: "Health",
              excerpt: "New treatment offers hope for rare genetic disorders, marking significant advancement in medical science.",
              color: "from-pink-500 to-rose-500"
            }
          ]
        },
        {
          month: "November 2023",
          posts: [
            { 
              date: "Nov 25, 2023", 
              title: "Election Results Signal Major Political Realignment Across Multiple Nations", 
              slug: "/post/election-results-political-realignment",
              category: "Politics",
              excerpt: "Voters deliver surprising outcomes in key elections, indicating shifting political preferences globally.",
              color: "from-blue-500 to-cyan-500"
            },
            { 
              date: "Nov 15, 2023", 
              title: "Space Exploration Milestone: International Mission Successfully Lands on Mars", 
              slug: "/post/mars-landing-international-mission",
              category: "Science",
              excerpt: "Historic achievement as multinational crew becomes first humans to set foot on the red planet.",
              color: "from-purple-500 to-pink-500"
            }
          ]
        }
      ]
    }
  ];

  // Get unique months for filter
  const allMonths = archiveData.flatMap(yearData => 
    yearData.months.map(monthData => monthData.month)
  );
  const uniqueMonths = [...new Set(allMonths)];

  // Filter data based on search and month selection
  const filteredData = archiveData
    .map(yearData => ({
      ...yearData,
      months: yearData.months
        .filter(monthData => !selectedMonth || monthData.month === selectedMonth)
        .map(monthData => ({
          ...monthData,
          posts: monthData.posts.filter(post => 
            post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            post.date.toLowerCase().includes(searchTerm.toLowerCase()) ||
            post.category.toLowerCase().includes(searchTerm.toLowerCase())
          )
        }))
        .filter(monthData => monthData.posts.length > 0)
    }))
    .filter(yearData => yearData.months.length > 0);

  const totalPosts = filteredData.reduce((total, yearData) => {
    return total + yearData.months.reduce((monthTotal, month) => monthTotal + month.posts.length, 0);
  }, 0);

  const yearColors = [
    "from-blue-500 to-cyan-500",
    "from-green-500 to-emerald-500",
    "from-purple-500 to-pink-500",
    "from-orange-500 to-red-500",
    "from-indigo-500 to-purple-500"
  ];

  const getYearColor = (year) => {
    const years = [...new Set(archiveData.map(item => item.year))];
    const index = years.indexOf(year) % yearColors.length;
    return yearColors[index];
  };

  const monthColors = [
    "from-blue-500 to-cyan-500",
    "from-green-500 to-emerald-500",
    "from-purple-500 to-pink-500",
    "from-orange-500 to-red-500",
    "from-indigo-500 to-purple-500",
    "from-teal-500 to-blue-500",
    "from-pink-500 to-rose-500",
    "from-yellow-500 to-orange-500",
    "from-cyan-500 to-blue-500",
    "from-emerald-500 to-green-500",
    "from-violet-500 to-purple-500",
    "from-amber-500 to-red-500"
  ];

  const getMonthColor = (month) => {
    const index = uniqueMonths.indexOf(month) % monthColors.length;
    return monthColors[index];
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-100">
      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Header Section */}
        <section className={`text-center mb-12 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-gradient">
            Monthly Archive
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Browse through all our published articles organized by month and year
          </p>
          
          {/* Stats */}
          <div className="flex justify-center gap-8 mt-8">
            {[
              { number: archiveData.length, label: "Years", color: "from-blue-500 to-cyan-500" },
              { number: archiveData.reduce((total, year) => total + year.months.length, 0), label: "Months", color: "from-green-500 to-emerald-500" },
              { number: totalPosts, label: "Articles", color: "from-purple-500 to-pink-500" }
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
          <div className={`bg-white rounded-2xl shadow-lg p-6 max-w-4xl mx-auto transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
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
                    className="w-full px-4 py-3 pl-11 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:shadow-md"
                  />
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                    🔍
                  </div>
                </div>
              </div>
              
              <div className="w-full sm:w-48">
                <label htmlFor="month-filter" className="block text-sm font-medium text-gray-700 mb-2">
                  Filter by Month
                </label>
                <div className="relative">
                  <select
                    id="month-filter"
                    value={selectedMonth}
                    onChange={(e) => setSelectedMonth(e.target.value)}
                    className="w-full px-4 py-3 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white appearance-none hover:shadow-md transition-all duration-200"
                  >
                    <option value="">All Months</option>
                    {uniqueMonths.map(month => (
                      <option key={month} value={month}>{month}</option>
                    ))}
                  </select>
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none">
                    ⬇️
                  </div>
                </div>
              </div>
            </div>
            
            {/* Active Filters */}
            {(searchTerm || selectedMonth) && (
              <div className="mt-4 flex items-center gap-2 flex-wrap animate-fadeIn">
                <span className="text-sm text-gray-600">Active filters:</span>
                {searchTerm && (
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 transform hover:scale-105 transition-transform duration-200">
                    Search: "{searchTerm}"
                    <button
                      onClick={() => setSearchTerm("")}
                      className="ml-2 hover:text-blue-600 transition-colors duration-200"
                    >
                      ×
                    </button>
                  </span>
                )}
                {selectedMonth && (
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 transform hover:scale-105 transition-transform duration-200">
                    Month: {selectedMonth}
                    <button
                      onClick={() => setSelectedMonth("")}
                      className="ml-2 hover:text-green-600 transition-colors duration-200"
                    >
                      ×
                    </button>
                  </span>
                )}
                <button
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedMonth("");
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
        <section className="max-w-4xl mx-auto">
          {filteredData.length === 0 ? (
            <div className="text-center py-12 animate-pulse">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">No articles found</h3>
              <p className="text-gray-600">Try adjusting your search or filter criteria</p>
            </div>
          ) : (
            <div className="space-y-8">
              {filteredData.map((yearData, yearIndex) => (
                <div 
                  key={yearData.year} 
                  className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
                  style={{ animationDelay: `${yearIndex * 200}ms` }}
                >
                  {/* Year Header */}
                  <div className={`bg-gradient-to-r ${getYearColor(yearData.year)} px-6 py-4 relative overflow-hidden group`}>
                    <div className="absolute inset-0 bg-white/10 group-hover:bg-white/20 transition-all duration-500"></div>
                    <div className="relative">
                      <h2 className="text-2xl font-bold text-white transform group-hover:scale-105 transition-transform duration-300">
                        {yearData.year} Archive
                      </h2>
                      <p className="text-blue-100 group-hover:text-white transition-colors duration-300">
                        {yearData.months.reduce((total, month) => total + month.posts.length, 0)} articles
                      </p>
                    </div>
                  </div>
                  
                  {/* Months */}
                  <div className="p-6 space-y-6">
                    {yearData.months.map((monthData, monthIndex) => (
                      <div 
                        key={monthData.month} 
                        className="border-l-4 border-blue-500 pl-6 transform hover:translate-x-2 transition-transform duration-300 group/month"
                        style={{ animationDelay: `${(yearIndex + monthIndex) * 100}ms` }}
                      >
                        <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover/month:text-gray-800 transition-colors duration-300">
                          {monthData.month}
                          <span className="ml-2 text-sm font-normal text-gray-500 bg-gray-100 px-2 py-1 rounded-full group-hover/month:bg-blue-100 group-hover/month:text-blue-700 transition-all duration-300">
                            {monthData.posts.length} {monthData.posts.length === 1 ? 'article' : 'articles'}
                          </span>
                        </h3>
                        
                        <div className="space-y-3">
                          {monthData.posts.map((post, postIndex) => (
                            <div 
                              key={postIndex} 
                              className="group flex items-start gap-4 p-3 rounded-lg hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 transition-all duration-300 transform hover:scale-[1.02] border border-transparent hover:border-blue-200"
                              style={{ animationDelay: `${(yearIndex + monthIndex + postIndex) * 50}ms` }}
                            >
                              <time className="text-sm text-gray-500 whitespace-nowrap mt-1 min-w-24 group-hover:text-gray-700 transition-colors duration-300">
                                {post.date}
                              </time>
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
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Quick Navigation */}
        {filteredData.length > 0 && (
          <section className="mt-12">
            <div className="bg-white rounded-2xl shadow-lg p-6 max-w-4xl mx-auto">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Quick Jump to Month</h3>
              <div className="flex flex-wrap gap-3 justify-center">
                {uniqueMonths.map((month, index) => (
                  <button
                    key={month}
                    onClick={() => setSelectedMonth(month)}
                    className={`px-4 py-2 rounded-lg font-medium text-white bg-gradient-to-r ${getMonthColor(month)} transform hover:scale-105 hover:shadow-lg transition-all duration-300 ${
                      selectedMonth === month ? 'ring-2 ring-white ring-opacity-50' : ''
                    }`}
                  >
                    {month}
                  </button>
                ))}
              </div>
            </div>
          </section>
        )}

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
}

export default MonthArchive;