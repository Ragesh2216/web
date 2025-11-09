import React, { useState } from "react";
import { Link } from "react-router-dom";
import Tag1 from "../images/tag-inspiration-cover.webp";
import Tag2 from "../images/tag-nature-cover.webp";
import Tag3 from "../images/tag-lifestyle-cover.webp";
import Tag4 from "../images/tag-health-cover.webp";
import Tag5 from "../images/tag-technology-jpg.webp";
import Tag6 from "../images/tag-travel-cover.webp";
import Tag7 from "../images/tag-food-cover.webp";

const Tags = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("name");

  // Enhanced tags data with realistic post counts and descriptions
  const tagsData = [
    {
      id: 1,
      name: "Inspiration",
      slug: "inspiration",
      image: Tag1,
      postCount: 24,
      description: "Stories that motivate and uplift",
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 2,
      name: "Nature",
      slug: "nature",
      image: Tag2,
      postCount: 18,
      description: "Exploring the beauty of our natural world",
      color: "from-green-500 to-teal-500"
    },
    {
      id: 3,
      name: "Lifestyle",
      slug: "lifestyle",
      image: Tag3,
      postCount: 32,
      description: "Daily living, habits, and personal growth",
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 4,
      name: "Health",
      slug: "health",
      image: Tag4,
      postCount: 15,
      description: "Wellness, fitness, and mental health",
      color: "from-red-500 to-orange-500"
    },
    {
      id: 5,
      name: "Technology",
      slug: "technology",
      image: Tag5,
      postCount: 42,
      description: "Innovation, gadgets, and digital trends",
      color: "from-gray-700 to-blue-600"
    },
    {
      id: 6,
      name: "Travel",
      slug: "travel",
      image: Tag6,
      postCount: 28,
      description: "Adventures and destinations worldwide",
      color: "from-yellow-500 to-orange-500"
    },
    {
      id: 7,
      name: "Food",
      slug: "food",
      image: Tag7,
      postCount: 21,
      description: "Recipes, cooking, and culinary experiences",
      color: "from-amber-500 to-red-500"
    },
    {
      id: 8,
      name: "Business",
      slug: "business",
      image: Tag1, // You can add more images
      postCount: 19,
      description: "Entrepreneurship and career development",
      color: "from-indigo-500 to-purple-600"
    },
    {
      id: 9,
      name: "Art & Design",
      slug: "art-design",
      image: Tag2,
      postCount: 16,
      description: "Creativity, design, and visual arts",
      color: "from-pink-500 to-rose-500"
    },
    {
      id: 10,
      name: "Science",
      slug: "science",
      image: Tag3,
      postCount: 12,
      description: "Discoveries and scientific breakthroughs",
      color: "from-cyan-500 to-blue-500"
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
        <section className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            Explore Topics
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Discover content organized by categories and interests
          </p>
          
          {/* Stats */}
          <div className="flex justify-center gap-8 mt-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">{totalTags}</div>
              <div className="text-gray-500">Topics</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">{totalPosts}</div>
              <div className="text-gray-500">Total Posts</div>
            </div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-6 max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
              <div className="flex-1 w-full">
                <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-2">
                  Search Topics
                </label>
                <input
                  type="text"
                  id="search"
                  placeholder="Search by topic name or description..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                />
              </div>
              
              <div className="w-full md:w-48">
                <label htmlFor="sort" className="block text-sm font-medium text-gray-700 mb-2">
                  Sort By
                </label>
                <select
                  id="sort"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                >
                  <option value="name">Alphabetical</option>
                  <option value="posts">Most Posts</option>
                </select>
              </div>
            </div>
            
            {/* Active Search Indicator */}
            {searchTerm && (
              <div className="mt-4 flex items-center gap-2">
                <span className="text-sm text-gray-600">Showing results for:</span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                  "{searchTerm}"
                  <button
                    onClick={() => setSearchTerm("")}
                    className="ml-2 hover:text-blue-600 text-lg"
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
            <div className="text-center py-16 bg-white rounded-2xl shadow-lg">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">No topics found</h3>
              <p className="text-gray-600">Try adjusting your search criteria</p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredTags.map((tag) => (
                  <Link
                    key={tag.id}
                    to={`/tags/${tag.slug}`}
                    className="group block"
                  >
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col">
                      {/* Image Container */}
                      <div className="relative h-32 overflow-hidden">
                        <img 
                          src={tag.image} 
                          alt={tag.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className={`absolute inset-0 bg-gradient-to-r ${tag.color} opacity-20`}></div>
                      </div>
                      
                      {/* Content */}
                      <div className="p-5 flex-1 flex flex-col">
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                            {tag.name}
                          </h3>
                          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                            {tag.description}
                          </p>
                        </div>
                        
                        <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-100">
                          <span className="text-sm text-gray-500">
                            {tag.postCount} {tag.postCount === 1 ? 'post' : 'posts'}
                          </span>
                          <span className="text-blue-600 group-hover:text-blue-700 font-medium text-sm">
                            Explore →
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Results Count */}
              <div className="mt-8 text-center">
                <p className="text-gray-600">
                  Showing {filteredTags.length} of {tagsData.length} topics
                </p>
              </div>
            </>
          )}
        </section>

        {/* Call to Action */}
        <section className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Suggest new topics or explore our complete article archive
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Suggest a Topic
              </Link>
              <Link
                to="/archive"
                className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Browse All Articles
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Tags;