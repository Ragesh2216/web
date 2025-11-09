import React, { useState } from "react";
import { Link } from "react-router-dom";
import Subscribe from "../components/Subscribe";

const YearArchive = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [expandedYears, setExpandedYears] = useState(new Set(["2024", "2023"]));

  // Sample realistic data structure
  const yearlyData = [
  {
    year: "2024",
    totalPosts: 45,
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
            excerpt: "Exploring how artificial intelligence is revolutionizing the way we create and consume magazine content in the digital age."
          },
          { 
            date: "May 08, 2024", 
            title: "Sustainable Fashion: The Rise of Eco-Conscious Designers", 
            slug: "/post/sustainable-fashion-designers", 
            readTime: "6 min",
            category: "Fashion",
            excerpt: "Meet the designers leading the charge in sustainable fashion and changing the industry from the ground up."
          },
          { 
            date: "May 01, 2024", 
            title: "Culinary Adventures: Exploring the Hidden Food Markets of Southeast Asia", 
            slug: "/post/southeast-asia-food-markets", 
            readTime: "12 min",
            category: "Travel",
            excerpt: "A gastronomic journey through the vibrant street food scenes and hidden culinary gems across Thailand, Vietnam, and Malaysia."
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
            excerpt: "How embracing minimalism can lead to greater clarity, reduced stress, and a more intentional way of living."
          },
          { 
            date: "April 14, 2024", 
            title: "The Renaissance of Independent Bookstores: Community Hubs in the Digital Age", 
            slug: "/post/independent-bookstores-renaissance", 
            readTime: "9 min",
            category: "Culture",
            excerpt: "Why independent bookstores are thriving despite Amazon's dominance and becoming cultural centers in their communities."
          }
        ]
      },
      { 
        month: "March 2024", 
        posts: [
          { 
            date: "March 28, 2024", 
            title: "Architectural Marvels: The World's Most Sustainable Buildings", 
            slug: "/post/sustainable-architecture-marvels", 
            readTime: "11 min",
            category: "Architecture",
            excerpt: "From Singapore's vertical gardens to Copenhagen's carbon-neutral districts, explore buildings that harmonize with nature."
          },
          { 
            date: "March 15, 2024", 
            title: "The Psychology of Color in Interior Design: Creating Mood and Atmosphere", 
            slug: "/post/color-psychology-interior-design", 
            readTime: "8 min",
            category: "Design",
            excerpt: "How different colors affect our emotions and behavior, and how to use them effectively in your home design."
          }
        ]
      }
    ]
  },
  {
    year: "2023",
    totalPosts: 89,
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
            excerpt: "A comprehensive look at how art, design, music, and literature evolved in a post-pandemic world."
          },
          { 
            date: "Dec 10, 2023", 
            title: "Winter Wellness: Ancient Healing Traditions for Modern Times", 
            slug: "/post/winter-wellness-ancient-traditions", 
            readTime: "10 min",
            category: "Wellness",
            excerpt: "Rediscovering traditional healing practices from around the world to maintain balance during the winter months."
          }
        ]
      },
      { 
        month: "November 2023", 
        posts: [
          { 
            date: "Nov 25, 2023", 
            title: "Photography Spotlight: Capturing the Soul of Urban Landscapes", 
            slug: "/post/urban-landscape-photography", 
            readTime: "9 min",
            category: "Photography",
            excerpt: "How photographers are finding beauty and storytelling opportunities in the concrete jungles of our cities."
          },
          { 
            date: "Nov 15, 2023", 
            title: "The Art of Slow Travel: Immersive Experiences Over Tourist Checklists", 
            slug: "/post/slow-travel-immersive-experiences", 
            readTime: "12 min",
            category: "Travel",
            excerpt: "Why spending more time in fewer places leads to deeper connections and more meaningful travel memories."
          }
        ]
      },
      { 
        month: "October 2023", 
        posts: [
          { 
            date: "Oct 30, 2023", 
            title: "Craft Cocktails: The Science and Art of Modern Mixology", 
            slug: "/post/craft-cocktails-mixology-science", 
            readTime: "8 min",
            category: "Food & Drink",
            excerpt: "Behind the bar with master mixologists who are pushing the boundaries of flavor and presentation."
          },
          { 
            date: "Oct 18, 2023", 
            title: "The Return of Analog: Why Vinyl Records and Film Photography Are Thriving", 
            slug: "/post/analog-revival-vinyl-film", 
            readTime: "11 min",
            category: "Culture",
            excerpt: "In our digital world, discover why tactile, physical media is experiencing an unexpected and powerful resurgence."
          }
        ]
      }
    ]
  },
  {
    year: "2022",
    totalPosts: 67,
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
            excerpt: "How architects are designing buildings that not only withstand climate change but actively combat it."
          },
          { 
            date: "Sep 05, 2022", 
            title: "The Renaissance of Artisanal Crafts in the Digital Marketplace", 
            slug: "/post/artisanal-crafts-digital-marketplace", 
            readTime: "10 min",
            category: "Business",
            excerpt: "How traditional craftspeople are using digital platforms to reach global audiences and preserve cultural heritage."
          }
        ]
      },
      { 
        month: "August 2022", 
        posts: [
          { 
            date: "Aug 22, 2022", 
            title: "Coastal Living: Designing Homes That Embrace the Ocean", 
            slug: "/post/coastal-living-ocean-homes", 
            readTime: "9 min",
            category: "Architecture",
            excerpt: "Architectural principles for creating homes that harmonize with coastal environments while respecting nature."
          },
          { 
            date: "Aug 08, 2022", 
            title: "The Future of Work: Redesigning Office Spaces for Hybrid Models", 
            slug: "/post/future-work-office-design", 
            readTime: "11 min",
            category: "Design",
            excerpt: "How companies are reimagining office spaces to accommodate flexible work arrangements and enhance collaboration."
          }
        ]
      }
    ]
  },
  {
    year: "2021",
    totalPosts: 52,
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
            excerpt: "How urban dwellers are creating lush gardens in small spaces, from balcony containers to rooftop farms."
          },
          { 
            date: "July 05, 2021", 
            title: "The Art of Japanese Tea Ceremony: Mindfulness in a Cup", 
            slug: "/post/japanese-tea-ceremony-mindfulness", 
            readTime: "8 min",
            category: "Culture",
            excerpt: "Exploring the ancient tradition of Japanese tea ceremony and its relevance in our modern, fast-paced world."
          }
        ]
      }
    ]
  }
]

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
          post.date.toLowerCase().includes(searchTerm.toLowerCase())
        )
      })).filter(monthData => monthData.posts.length > 0)
    }))
    .filter(yearData => yearData.months.length > 0);

  const totalArticles = filteredData.reduce((total, year) => total + year.totalPosts, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        {/* Header Section */}
        <section className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            Yearly Archive
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our complete collection of articles organized by year
          </p>
          
          {/* Stats */}
          <div className="flex justify-center gap-8 mt-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">{filteredData.length}</div>
              <div className="text-gray-500">Years</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">
                {filteredData.reduce((total, year) => total + year.months.length, 0)}
              </div>
              <div className="text-gray-500">Months</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">
                {totalArticles}
              </div>
              <div className="text-gray-500">Articles</div>
            </div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex flex-col lg:flex-row gap-4 justify-between items-center">
              <div className="flex-1 w-full">
                <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-2">
                  Search Articles
                </label>
                <input
                  type="text"
                  id="search"
                  placeholder="Search by title, date, or content..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                />
              </div>
              
              <div className="w-full lg:w-48">
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

              <div className="w-full lg:w-auto">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Actions
                </label>
                <button
                  onClick={toggleAllYears}
                  className="w-full lg:w-auto px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200 font-medium"
                >
                  {expandedYears.size === yearlyData.length ? 'Collapse All' : 'Expand All'}
                </button>
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
        <section>
          {filteredData.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-2xl shadow-lg">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">No articles found</h3>
              <p className="text-gray-600 mb-4">Try adjusting your search or filter criteria</p>
              <button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedYear("");
                }}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {filteredData.map((yearData) => (
                <div key={yearData.year} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  {/* Year Header - Clickable */}
                  <button
                    onClick={() => toggleYear(yearData.year)}
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 px-6 py-6 text-left hover:from-blue-700 hover:to-indigo-800 transition-all duration-200"
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <h2 className="text-2xl md:text-3xl font-bold text-white">
                          {yearData.year}
                        </h2>
                        <p className="text-blue-100 mt-1">
                          {yearData.totalPosts} articles across {yearData.months.length} months
                        </p>
                      </div>
                      <div className="text-white text-2xl">
                        {expandedYears.has(yearData.year) ? '−' : '+'}
                      </div>
                    </div>
                  </button>
                  
                  {/* Months - Collapsible */}
                  {expandedYears.has(yearData.year) && (
                    <div className="p-6 space-y-8">
                      {yearData.months.map((monthData) => (
                        <div key={monthData.month} className="border-l-4 border-green-500 pl-6">
                          <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-3">
                            {monthData.month}
                            <span className="text-sm font-normal text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                              {monthData.posts.length} {monthData.posts.length === 1 ? 'article' : 'articles'}
                            </span>
                          </h3>
                          
                          <div className="space-y-4">
                            {monthData.posts.map((post, index) => (
                              <div 
                                key={index} 
                                className="group flex flex-col sm:flex-row sm:items-start gap-3 p-4 rounded-lg hover:bg-gray-50 border border-transparent hover:border-gray-200 transition-all duration-200"
                              >
                                <div className="flex sm:flex-col gap-2 sm:gap-0 sm:min-w-32">
                                  <time className="text-sm text-gray-500 font-medium">
                                    {post.date}
                                  </time>
                                  <span className="text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded sm:mt-1">
                                    {post.readTime}
                                  </span>
                                </div>
                                <Link
                                  to={post.slug}
                                  className="text-lg font-medium text-gray-900 hover:text-blue-600 transition-colors duration-200 flex-1 group-hover:underline"
                                >
                                  {post.title}
                                </Link>
                                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 self-center">
                                  <span className="text-blue-600 text-lg">→</span>
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
        <div className="flex justify-between items-center mt-12">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200 font-medium"
          >
            Back to Top
          </button>
          
          <Link
            to="/monthly-archive"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
          >
            View Monthly Archive
          </Link>
        </div>

        {/* Subscribe Section */}
        <section className="mt-16">
          <Subscribe />
        </section>
      </main>
    </div>
  );
};

export default YearArchive;