import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Tag1 from "../images/tag-inspiration-cover.webp.jpeg";
import Tag2 from "../images/tag-nature-cover.webp.jpeg";
import Tag3 from "../images/tag-lifestyle-cover.webp.jpeg";
import Tag4 from "../images/tag-health-cover.webp.jpeg";
import Tag5 from "../images/tag-technology-cover.webp.jpeg";
import Tag6 from "../images/tag-travel-cover.webp.jpeg";
import Tag7 from "../images/tag-food-cover.webp.jpeg";

const Tags = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("name");
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredTag, setHoveredTag] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Enhanced tags data with realistic post counts and descriptions
  const tagsData = [
    {
      id: 1,
      name: "Inspiration",
      slug: "inspiration",
      image: Tag1,
      postCount: 24,
      description: "Stories that motivate and uplift",
      color: "from-purple-500 to-pink-500",
      hoverColor: "from-purple-600 to-pink-600",
      icon: "✨"
    },
    {
      id: 2,
      name: "Nature",
      slug: "nature",
      image: Tag2,
      postCount: 18,
      description: "Exploring the beauty of our natural world",
      color: "from-green-500 to-teal-500",
      hoverColor: "from-green-600 to-teal-600",
      icon: "🌿"
    },
    {
      id: 3,
      name: "Lifestyle",
      slug: "lifestyle",
      image: Tag3,
      postCount: 32,
      description: "Daily living, habits, and personal growth",
      color: "from-blue-500 to-cyan-500",
      hoverColor: "from-blue-600 to-cyan-600",
      icon: "🌟"
    },
    {
      id: 4,
      name: "Health",
      slug: "health",
      image: Tag4,
      postCount: 15,
      description: "Wellness, fitness, and mental health",
      color: "from-red-500 to-orange-500",
      hoverColor: "from-red-600 to-orange-600",
      icon: "💪"
    },
    {
      id: 5,
      name: "Technology",
      slug: "technology",
      image: Tag5,
      postCount: 42,
      description: "Innovation, gadgets, and digital trends",
      color: "from-gray-700 to-blue-600",
      hoverColor: "from-gray-800 to-blue-700",
      icon: "💻"
    },
    {
      id: 6,
      name: "Travel",
      slug: "travel",
      image: Tag6,
      postCount: 28,
      description: "Adventures and destinations worldwide",
      color: "from-yellow-500 to-orange-500",
      hoverColor: "from-yellow-600 to-orange-600",
      icon: "✈️"
    },
    {
      id: 7,
      name: "Food",
      slug: "food",
      image: Tag7,
      postCount: 21,
      description: "Recipes, cooking, and culinary experiences",
      color: "from-amber-500 to-red-500",
      hoverColor: "from-amber-600 to-red-600",
      icon: "🍴"
    },
    {
      id: 8,
      name: "Business",
      slug: "business",
      image: Tag1,
      postCount: 19,
      description: "Entrepreneurship and career development",
      color: "from-indigo-500 to-purple-600",
      hoverColor: "from-indigo-600 to-purple-700",
      icon: "💼"
    },
    {
      id: 9,
      name: "Art & Design",
      slug: "art-design",
      image: Tag2,
      postCount: 16,
      description: "Creativity, design, and visual arts",
      color: "from-pink-500 to-rose-500",
      hoverColor: "from-pink-600 to-rose-600",
      icon: "🎨"
    },
    {
      id: 10,
      name: "Science",
      slug: "science",
      image: Tag3,
      postCount: 12,
      description: "Discoveries and scientific breakthroughs",
      color: "from-cyan-500 to-blue-500",
      hoverColor: "from-cyan-600 to-blue-600",
      icon: "🔬"
    }
  ];

  // Filter and sort tags
  const filteredTags = tagsData
    .filter(tag => 
      tag.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tag.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      switch (sortBy) {
        case "posts":
          return b.postCount - a.postCount;
        case "name":
        default:
          return a.name.localeCompare(b.name);
      }
    });

  const totalPosts = tagsData.reduce((sum, tag) => sum + tag.postCount, 0);
  const totalTags = tagsData.length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Header Section */}
        <section className={`text-center mb-12 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-gradient">
            Explore Topics
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Discover content organized by categories and interests
          </p>
          
          {/* Stats */}
          <div className="flex justify-center gap-8 mt-8">
            {[
              { number: totalTags, label: "Topics", color: "from-blue-500 to-cyan-500" },
              { number: totalPosts, label: "Total Posts", color: "from-green-500 to-emerald-500" }
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
            <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
              <div className="flex-1 w-full">
                <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-2">
                  Search Topics
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="search"
                    placeholder="Search by topic name or description..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-4 py-3 pl-11 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:shadow-md group"
                  />
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500 transition-colors duration-200">
                    🔍
                  </div>
                </div>
              </div>
              
              <div className="w-full md:w-48">
                <label htmlFor="sort" className="block text-sm font-medium text-gray-700 mb-2">
                  Sort By
                </label>
                <div className="relative">
                  <select
                    id="sort"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full px-4 py-3 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white appearance-none hover:shadow-md transition-all duration-200"
                  >
                    <option value="name">Alphabetical</option>
                    <option value="posts">Most Posts</option>
                  </select>
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none">
                    ⬇️
                  </div>
                </div>
              </div>
            </div>
            
            {/* Active Search Indicator */}
            {searchTerm && (
              <div className="mt-4 flex items-center gap-2 animate-fadeIn">
                <span className="text-sm text-gray-600">Showing results for:</span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 transform hover:scale-105 transition-all duration-200">
                  "{searchTerm}"
                  <button
                    onClick={() => setSearchTerm("")}
                    className="ml-2 hover:text-blue-600 text-lg transition-colors duration-200"
                  >
                    ×
                  </button>
                </span>
              </div>
            )}
          </div>
        </section>

        {/* Tags Grid */}
        <section className="max-w-7xl mx-auto">
          {filteredTags.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-2xl shadow-lg animate-pulse">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">No topics found</h3>
              <p className="text-gray-600">Try adjusting your search criteria</p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredTags.map((tag, index) => (
                  <Link
                    key={tag.id}
                    to={`/tags/${tag.slug}`}
                    className="group block"
                    onMouseEnter={() => setHoveredTag(tag.id)}
                    onMouseLeave={() => setHoveredTag(null)}
                  >
                    <div 
                      className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 h-full flex flex-col relative"
                      style={{ 
                        animationDelay: `${index * 100}ms`,
                        animation: 'fadeInUp 0.6s ease-out forwards'
                      }}
                    >
                      {/* Animated gradient border */}
                      <div className={`absolute inset-0 bg-gradient-to-r ${tag.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl -m-0.5`}></div>
                      
                      <div className="relative bg-white rounded-2xl flex-1 flex flex-col m-0.5 overflow-hidden">
                        {/* Image Container */}
                        <div className="relative h-32 overflow-hidden">
                          <img 
                            src={tag.image} 
                            alt={tag.name}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          />
                          <div className={`absolute inset-0 bg-gradient-to-r ${tag.color} opacity-30 group-hover:opacity-40 transition-opacity duration-500`}></div>
                          
                          {/* Icon overlay */}
                          <div className="absolute top-3 right-3 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                            <span className="text-lg">{tag.icon}</span>
                          </div>
                          
                          {/* Post count badge */}
                          <div className="absolute top-3 left-3">
                            <span className="bg-black/70 text-white px-2 py-1 rounded-full text-xs font-medium backdrop-blur-sm transform group-hover:scale-105 transition-transform duration-300">
                              {tag.postCount} {tag.postCount === 1 ? 'post' : 'posts'}
                            </span>
                          </div>
                        </div>
                        
                        {/* Content */}
                        <div className="p-5 flex-1 flex flex-col">
                          <div className="flex-1">
                            <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-gray-800 transition-colors duration-300 flex items-center gap-2">
                              {tag.name}
                              <span className="text-blue-600 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-300">
                                →
                              </span>
                            </h3>
                            <p className="text-gray-600 text-sm mb-4 line-clamp-2 group-hover:text-gray-700 transition-colors duration-300">
                              {tag.description}
                            </p>
                          </div>
                          
                          <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-100 group-hover:border-gray-200 transition-colors duration-300">
                            <span className={`text-sm font-medium bg-gradient-to-r ${tag.color} bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300 inline-block`}>
                              Explore Topic
                            </span>
                            <div className="w-8 h-8 bg-gray-100 group-hover:bg-blue-100 rounded-full flex items-center justify-center transition-all duration-300 transform group-hover:scale-110 group-hover:translate-x-1">
                              <span className="text-gray-600 group-hover:text-blue-600 transition-colors duration-300">→</span>
                            </div>
                          </div>
                        </div>

                        {/* Hover effect overlay */}
                        <div className={`absolute inset-0 bg-gradient-to-r ${tag.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`}></div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Results Count */}
              <div className="mt-8 text-center animate-fadeIn">
                <p className="text-gray-600 bg-white/80 backdrop-blur-sm inline-block px-4 py-2 rounded-full border border-gray-200">
                  Showing <span className="font-semibold text-blue-600">{filteredTags.length}</span> of{" "}
                  <span className="font-semibold text-gray-900">{tagsData.length}</span> topics
                </p>
              </div>
            </>
          )}
        </section>

        {/* Quick Stats Section */}
        <section className="mt-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Topic Distribution
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {tagsData.slice(0, 5).map((tag, index) => (
                <div 
                  key={tag.id}
                  className="text-center group cursor-pointer transform hover:scale-105 transition-all duration-300"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${tag.color} rounded-2xl flex items-center justify-center mx-auto mb-2 group-hover:shadow-lg transition-all duration-500`}>
                    <span className="text-2xl text-white">{tag.icon}</span>
                  </div>
                  <div className="text-sm font-semibold text-gray-900">{tag.name}</div>
                  <div className="text-xs text-gray-500">{tag.postCount} posts</div>
                </div>
              ))}
            </div>
          </div>
        </section>

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
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-gradient {
            background-size: 200% 200%;
            animation: gradient 3s ease infinite;
          }
          .animate-fadeIn {
            animation: fadeIn 0.5s ease-out;
          }
        `}</style>
      </main>
    </div>
  );
};

export default Tags;