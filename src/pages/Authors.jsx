import React from "react";
import data from "../data/data";

const Authors = () => {
  const AuthorData = data.AuthorData;
  return (
    <div className="authors-bg">
      <section className="px-8 sm:px- lg:px-28 py-16">
        {/* Heading with line */}
        <div className="text-center mb-12">
          <h2 className="text-4xl mt-8 md:text-2xl lg:text-5xl text-slate-800 font-semibold mb-1">
            Meet Our Authors
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        {/* Authors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {AuthorData &&
            AuthorData.map((item, index) => {
              return (
                <div
                  className="group bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100"
                  key={index}
                >
                  <div className="flex flex-col items-center text-center gap-3">
                    <img 
                      src={item.img} 
                      className="rounded-full w-20 h-20 object-cover border-2 border-gray-200"
                      alt={item.name}
                    />
                    <h4 className="text-lg font-semibold text-gray-800">
                      {item.name}
                    </h4>
                    <small className="text-gray-500 text-sm">
                      {item.location} • {item.posts} posts
                    </small>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
        </div>
      </section>
    </div>
  );
};

export default Authors;