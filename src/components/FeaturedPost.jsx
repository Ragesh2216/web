import React from "react";
import FeaturedPostCard from "./FeaturedPostCard";
import data from "../data/data";

const FeaturedPost = () => {
  const BlogPosts = data.BlogPosts || [];

  const featuredBlogs = BlogPosts.filter((blog) => blog.posttype === "feature");
  const latestBlogs = BlogPosts.filter((blog) => blog.posttype === "latest");

  return (
    <section className="featuredPost mt-2 px-4 md:px-0 top-0 left-0 w-full shadow-md z-[9999]">
      {/* Featured Section */}
      <h2 className="text-2xl font-semibold border-b-4 w-fit border-b-blue-600 text-slate-800">
        Featured Posts
      </h2>
      <div className="cardContainer mt-8 flex flex-col gap-12">
        {featuredBlogs.length > 0 ? (
          featuredBlogs.map((blog) => (
            <FeaturedPostCard key={blog.title} {...blog} />
          ))
        ) : (
          <p className="text-gray-500">No featured posts found.</p>
        )}
      </div>

      {/* Latest Section */}
      <h2 className="text-2xl font-semibold border-b-4 w-fit border-b-green-600 text-slate-800 mt-12">
        Latest Posts
      </h2>
      <div className="cardContainer mt-8 flex flex-col gap-12">
        {latestBlogs.length > 0 ? (
          latestBlogs.map((blog) => (
            <FeaturedPostCard key={blog.title} {...blog} />
          ))
        ) : (
          <p className="text-gray-500">No latest posts found.</p>
        )}
      </div>
    </section>
  );
};

export default FeaturedPost;
