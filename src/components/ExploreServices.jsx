import React, { useState } from "react";
import investigationImage from "../images/investigation.webp";
import broadcastImage from "../images/broadcast.webp";
import digitalstoryImage from "../images/digitalstory.webp";
import photojournalismImage from "../images/photojournalism.webp";
import editorialImage from "../images/editorial.webp";
import trainingImage from "../images/training.webp";
import prImage from "../images/pr.webp";
import podcastImage from "../images/podcast.webp";
   

// Example service data (replace with your actual data or API)

  const servicesData = [
  {
    id: 1,
    title: "Investigative Journalism",
    category: "Reporting",
    description:
      "Uncover untold stories through deep research, data analysis, and fact-based investigation that brings truth to light.",
    image: investigationImage,
  },
  {
    id: 2,
    title: "Broadcast Production",
    category: "Media",
    description:
      "End-to-end TV and digital news production, from scripting and camera work to on-air editing and delivery.",
    image: broadcastImage,
  },
  {
    id: 3,
    title: "Digital Storytelling",
    category: "Creative",
    description:
      "Transform complex topics into engaging multimedia experiences using visuals, sound, and interactive storytelling.",
    image: digitalstoryImage,
  },
  {
    id: 4,
    title: "Photojournalism",
    category: "Photography",
    description:
      "Capture powerful, emotion-driven visuals that define moments and shape public perception through imagery.",
    image: photojournalismImage,
  },
  {
    id: 5,
    title: "Editorial Consulting",
    category: "Strategy",
    description:
      "Plan, structure, and refine your newsroom workflows for efficiency, ethical reporting, and consistent quality.",
    image: editorialImage,
  },
  {
    id: 6,
    title: "Media Training & Workshops",
    category: "Training",
    description:
      "Empower journalists and media professionals with skills in investigative reporting, data journalism, and storytelling.",
    image: trainingImage,
  },
  {
    id: 7,
    title: "Public Relations & Communication",
    category: "Strategy",
    description:
      "Bridge the gap between media houses and organizations through impactful messaging, press releases, and outreach campaigns.",
    image: prImage,
  },
  {
    id: 8,
    title: "Podcast Production",
    category: "Audio",
    description:
      "Conceptualize, record, and produce professional podcasts that amplify voices and stories across digital platforms.",
    image: podcastImage,
  },
];


const ExploreServices = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("All");

  const category = ["All", "Reporting", "Media", "Creative", "Photography", "Strategy", "Training", "Audio"];

  const filteredServices = servicesData.filter((service) => {
    const matchesCategory = filter === "All" || service.category === filter;
    const matchesSearch = service.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className=" bg-gradient-to-r from-violet-500 to-green-300 max-w-7xl mx-auto px-6 py-10">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-4">Explore Our Services</h1>
        <p className="text-gray-600">
          Discover the range of solutions we offer to help your business grow.
        </p>
      </div>

      {/* Search & Filter */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
        <input
          type="text"
          placeholder="Search services..."
          className="border border-gray-300 rounded-xl px-4 py-2 w-full md:w-1/2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <select
          className="border border-gray-800 rounded-xl px-4 py-2 w-full md:w-1/4 focus:outline-none focus:ring-5 focus:ring-blue-500"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          {category.map((cat) => (
            <option key={cat}>{cat}</option>
          ))}
        </select>
      </div>

      {/* Service Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredServices.length > 0 ? (
          filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-blue-100 shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition duration-300"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
                <p className="text-gray-800 mb-4">{service.description}</p>
                <span className="inline-block bg-blue-100 text-blue-600 text-sm px-3 py-1 rounded-full">
                  {service.category}
                </span>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center col-span-full">
            No services found.
          </p>
        )}
      </div>
    </div>
  );
};

export default ExploreServices;
