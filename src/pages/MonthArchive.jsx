import React, { useState } from "react";
import { Link } from "react-router-dom";
import Subscribe from "../components/Subscribe";

function MonthArchive() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedYear, setSelectedYear] = useState("");

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
            excerpt: "International consensus reached on artificial intelligence governance framework after marathon negotiations."
          },
          { 
            date: "May 08, 2024", 
            title: "Breakthrough in Renewable Energy: Scientists Achieve Nuclear Fusion Milestone", 
            slug: "/post/nuclear-fusion-breakthrough",
            category: "Science",
            excerpt: "Researchers announce sustained fusion reaction that could revolutionize clean energy production worldwide."
          },
          { 
            date: "May 01, 2024", 
            title: "Major Tech Merger Shakes Industry: Two Giants Announce $50 Billion Deal", 
            slug: "/post/tech-merger-50-billion",
            category: "Business",
            excerpt: "Stock markets react as two technology behemoths reveal plans for largest merger of the decade."
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
            excerpt: "New targets set as scientific community warns of approaching climate tipping points."
          },
          { 
            date: "April 14, 2024", 
            title: "Central Banks Coordinate Unprecedented Interest Rate Moves Amid Inflation Concerns", 
            slug: "/post/central-banks-interest-rates",
            category: "Economy",
            excerpt: "Global financial authorities take synchronized action to combat persistent inflationary pressures."
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
            excerpt: "Analysis of major geopolitical shifts and peace negotiations that defined the international landscape."
          },
          { 
            date: "Dec 10, 2023", 
            title: "Healthcare Revolution: FDA Approves Groundbreaking Gene Therapy Treatment", 
            slug: "/post/gene-therapy-fda-approval",
            category: "Health",
            excerpt: "New treatment offers hope for rare genetic disorders, marking significant advancement in medical science."
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
            excerpt: "Voters deliver surprising outcomes in key elections, indicating shifting political preferences globally."
          },
          { 
            date: "Nov 15, 2023", 
            title: "Space Exploration Milestone: International Mission Successfully Lands on Mars", 
            slug: "/post/mars-landing-international-mission",
            category: "Science",
            excerpt: "Historic achievement as multinational crew becomes first humans to set foot on the red planet."
          }
        ]
      },
      {
        month: "October 2023",
        posts: [
          { 
            date: "Oct 28, 2023", 
            title: "Global Supply Chain Crisis Eases as New Trade Agreements Take Effect", 
            slug: "/post/supply-chain-crisis-eases",
            category: "Economy",
            excerpt: "Manufacturing and shipping sectors show signs of recovery after years of disruption and delays."
          },
          { 
            date: "Oct 15, 2023", 
            title: "Cybersecurity Summit: Nations Pledge Cooperation Against Rising Digital Threats", 
            slug: "/post/cybersecurity-summit-cooperation",
            category: "Technology",
            excerpt: "International agreement reached on coordinated response to sophisticated state-sponsored cyber attacks."
          }
        ]
      }
    ]
  },
  {
    year: "2022",
    months: [
      {
        month: "September 2022",
        posts: [
          { 
            date: "Sep 18, 2022", 
            title: "Queen's Funeral: World Leaders Gather for Historic State Ceremony", 
            slug: "/post/queen-funeral-world-leaders",
            category: "World Affairs",
            excerpt: "Global dignitaries pay respects in one of the largest diplomatic gatherings in modern history."
          },
          { 
            date: "Sep 05, 2022", 
            title: "Energy Crisis Deepens: European Nations Announce Emergency Winter Plans", 
            slug: "/post/europe-energy-crisis-winter",
            category: "Economy",
            excerpt: "Governments implement unprecedented measures to address looming energy shortages and price surges."
          }
        ]
      },
      {
        month: "August 2022",
        posts: [
          { 
            date: "Aug 22, 2022", 
            title: "Climate Change Legislation: Senate Passes Landmark Environmental Bill", 
            slug: "/post/climate-change-landmark-bill",
            category: "Politics",
            excerpt: "After decades of debate, comprehensive climate package sets nation on path to carbon neutrality."
          },
          { 
            date: "Aug 08, 2022", 
            title: "Breakthrough in Quantum Computing: Scientists Achieve Quantum Supremacy Milestone", 
            slug: "/post/quantum-computing-supremacy",
            category: "Technology",
            excerpt: "Research team demonstrates computational power previously thought impossible with classical computers."
          }
        ]
      }
    ]
  },
  {
    year: "2021",
    months: [
      {
        month: "July 2021",
        posts: [
          { 
            date: "July 19, 2021", 
            title: "Olympics Proceed Under Unprecedented Health Protocols Amid Pandemic", 
            slug: "/post/olympics-pandemic-health-protocols",
            category: "Sports",
            excerpt: "Athletes compete in largely empty venues as Tokyo hosts most unusual Games in modern history."
          },
          { 
            date: "July 05, 2021", 
            title: "Global COVID-19 Vaccination Efforts Reach Critical Milestone", 
            slug: "/post/covid-vaccination-global-milestone",
            category: "Health",
            excerpt: "World Health Organization announces three billion vaccine doses administered worldwide."
          }
        ]
      }
    ]
  }
]

  // Get unique years for filter
  const years = [...new Set(archiveData.map(item => item.year))];

  // Filter data based on search and year selection
  const filteredData = archiveData
    .filter(item => !selectedYear || item.year === selectedYear)
    .map(item => ({
      ...item,
      months: item.months.map(monthData => ({
        ...monthData,
        posts: monthData.posts.filter(post => 
          post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.date.toLowerCase().includes(searchTerm.toLowerCase())
        )
      })).filter(monthData => monthData.posts.length > 0)
    }))
    .filter(item => item.months.length > 0);

  const totalPosts = filteredData.reduce((total, yearData) => {
    return total + yearData.months.reduce((monthTotal, month) => monthTotal + month.posts.length, 0);
  }, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Header Section */}
        <section className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            Monthly Archive
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Browse through all our published articles organized by month and year
          </p>
          
          {/* Stats */}
          <div className="flex justify-center gap-8 mt-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">{archiveData.length}</div>
              <div className="text-gray-500">Years</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">
                {archiveData.reduce((total, year) => total + year.months.length, 0)}
              </div>
              <div className="text-gray-500">Months</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">
                {totalPosts}
              </div>
              <div className="text-gray-500">Articles</div>
            </div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-6 max-w-4xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
              <div className="flex-1 w-full">
                <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-2">
                  Search Articles
                </label>
                <input
                  type="text"
                  id="search"
                  placeholder="Search by title or date..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                />
              </div>
              
              <div className="w-full sm:w-48">
                <label htmlFor="year-filter" className="block text-sm font-medium text-gray-700 mb-2">
                  Filter by Year
                </label>
                <select
                  id="year-filter"
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                >
                  <option value="">All Years</option>
                  {years.map(year => (
                    <option key={year} value={year}>{year}</option>
                  ))}
                </select>
              </div>
            </div>
            
            {/* Active Filters */}
            {(searchTerm || selectedYear) && (
              <div className="mt-4 flex items-center gap-2 flex-wrap">
                <span className="text-sm text-gray-600">Active filters:</span>
                {searchTerm && (
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    Search: "{searchTerm}"
                    <button
                      onClick={() => setSearchTerm("")}
                      className="ml-2 hover:text-blue-600"
                    >
                      ×
                    </button>
                  </span>
                )}
                {selectedYear && (
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    Year: {selectedYear}
                    <button
                      onClick={() => setSelectedYear("")}
                      className="ml-2 hover:text-green-600"
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
                  className="text-sm text-gray-600 hover:text-gray-800 underline"
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
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">No articles found</h3>
              <p className="text-gray-600">Try adjusting your search or filter criteria</p>
            </div>
          ) : (
            <div className="space-y-8">
              {filteredData.map((yearData) => (
                <div key={yearData.year} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  {/* Year Header */}
                  <div className="bg-gradient-to-r from-blue-600 to-indigo-700 px-6 py-4">
                    <h2 className="text-2xl font-bold text-white">
                      {yearData.year} Archive
                    </h2>
                    <p className="text-blue-100">
                      {yearData.months.reduce((total, month) => total + month.posts.length, 0)} articles
                    </p>
                  </div>
                  
                  {/* Months */}
                  <div className="p-6 space-y-6">
                    {yearData.months.map((monthData) => (
                      <div key={monthData.month} className="border-l-4 border-blue-500 pl-6">
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">
                          {monthData.month}
                          <span className="ml-2 text-sm font-normal text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                            {monthData.posts.length} {monthData.posts.length === 1 ? 'article' : 'articles'}
                          </span>
                        </h3>
                        
                        <div className="space-y-3">
                          {monthData.posts.map((post, index) => (
                            <div 
                              key={index} 
                              className="group flex items-start gap-4 p-3 rounded-lg hover:bg-gray-50 transition-all duration-200"
                            >
                              <time className="text-sm text-gray-500 whitespace-nowrap mt-1 min-w-24">
                                {post.date}
                              </time>
                              <Link
                                to={post.slug}
                                className="text-lg font-medium text-gray-900 hover:text-blue-600 transition-colors duration-200 flex-1 group-hover:underline"
                              >
                                {post.title}
                              </Link>
                              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                <span className="text-blue-600">→</span>
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

        {/* Load More Button (if you have pagination) */}
        
       

        {/* Subscribe Section */}
        <section className="mt-16">
          <Subscribe />
        </section>
      </main>
    </div>
  );
}

export default MonthArchive;