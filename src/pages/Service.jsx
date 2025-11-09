import React, { useState } from "react";
import { Link } from "react-router-dom";
import Subscribe from "../components/Subscribe";

export default function Service() {
  const [activeService, setActiveService] = useState(0);
  const [isHovered, setIsHovered] = useState(null);

  const services = [
    {
      title: "Advertising & Brand Partnerships",
      icon: "🎯",
      description: "Connect your brand with our highly engaged and influential readership. We offer bespoke native content creation, sponsored sections, and high-impact digital advertising across our platforms.",
      detailsLink: "/advertise",
      buttonText: "View Media Kit",
      features: [
        "Native content integration",
        "Sponsored articles and sections",
        "Display advertising placements",
        "Newsletter sponsorships",
        "Social media amplification"
      ],
      stats: "Reach 500K+ monthly readers",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Content Licensing & Syndication",
      icon: "📰",
      description: "License our world-class, award-winning journalism for use on your corporate website, internal newsletters, or in educational materials. Access our archives and new content feeds.",
      detailsLink: "/licensing",
      buttonText: "Inquire About Licensing",
      features: [
        "Full article syndication",
        "Archive access",
        "Real-time content feeds",
        "Custom content packages",
        "White-label solutions"
      ],
      stats: "2,000+ articles available",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Custom Research & Data Services",
      icon: "📊",
      description: "Leverage our proprietary survey data, investigative resources, and expert analysts for in-depth reports tailored to your industry. Ideal for financial firms and policymakers.",
      detailsLink: "/data-services",
      buttonText: "Request a Consultation",
      features: [
        "Custom market research",
        "Industry analysis reports",
        "Data visualization",
        "Expert interviews",
        "Trend forecasting"
      ],
      stats: "50+ industry reports delivered",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Events, Webinars & Speaking",
      icon: "🎤",
      description: "Sponsor or co-host major industry conferences, executive briefings, or webinars. Our journalists are available for keynote speaking engagements and expert panels.",
      detailsLink: "/events",
      buttonText: "Explore Opportunities",
      features: [
        "Keynote speaking engagements",
        "Panel moderation",
        "Webinar hosting",
        "Event sponsorship",
        "Executive briefings"
      ],
      stats: "100+ events annually",
      color: "from-orange-500 to-red-500"
    },
  ];

  const testimonials = [
    {
      quote: "Working with Stackly News transformed our brand's visibility. Their audience engagement is exceptional.",
      author: "Sarah Chen",
      company: "Marketing Director, TechCorp",
      rating: 5
    },
    {
      quote: "The research insights provided by their team helped shape our product strategy significantly.",
      author: "Michael Rodriguez",
      company: "CEO, DataInsights",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Header Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Partner with Stackly News to reach engaged audiences, leverage our journalistic expertise, 
            and create meaningful impact through innovative media solutions.
          </p>
        </section>

        {/* Stats Section */}
        <section className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: "500K+", label: "Monthly Readers" },
              { number: "2K+", label: "Articles Published" },
              { number: "95%", label: "Reader Engagement" },
              { number: "50+", label: "Industry Partners" }
            ].map((stat, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
                <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Services Grid */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-l-4 ${
                  isHovered === index ? 'border-blue-500' : 'border-transparent'
                }`}
                onMouseEnter={() => setIsHovered(index)}
                onMouseLeave={() => setIsHovered(null)}
              >
                <div className={`p-8 bg-gradient-to-r ${service.color} text-white`}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-3xl">{service.icon}</div>
                    <h2 className="text-2xl font-bold">{service.title}</h2>
                  </div>
                  <p className="text-blue-100 text-lg leading-relaxed">{service.description}</p>
                </div>
                
                <div className="p-6">
                  <div className="mb-6">
                    <h3 className="font-semibold text-gray-900 mb-3">Key Features:</h3>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-3 text-gray-700">
                          <span className="text-green-500">✓</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500 font-medium">{service.stats}</span>
                    <Link
                      to={service.detailsLink}
                      className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
                    >
                      {service.buttonText}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Process Section */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Partnership Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Discovery Call",
                  description: "Understand your goals and requirements",
                  icon: "📞"
                },
                {
                  step: "02",
                  title: "Custom Proposal",
                  description: "Tailored solution designed for your needs",
                  icon: "📋"
                },
                {
                  step: "03",
                  title: "Implementation",
                  description: "Seamless integration and execution",
                  icon: "⚡"
                },
                {
                  step: "04",
                  title: "Optimization",
                  description: "Continuous improvement and reporting",
                  icon: "📊"
                }
              ].map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">{step.icon}</span>
                  </div>
                  <div className="text-sm font-semibold text-blue-600 mb-2">{step.step}</div>
                  <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Trusted by Industry Leaders</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              See what our partners say about working with Stackly News
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
                <blockquote className="text-gray-700 text-lg italic mb-4">
                  "{testimonial.quote}"
                </blockquote>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.author}</div>
                  <div className="text-gray-600 text-sm">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section>
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-12 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Partner with Us?</h2>
            <p className="text-blue-100 text-xl mb-8 max-w-2xl mx-auto">
              Whether you're looking to advertise, license content, or explore custom solutions, 
              our team is here to help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact-business"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-200"
              >
                Contact Business Team
              </Link>
              <Link
                to="/schedule-demo"
                className="border border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors duration-200"
              >
                Schedule a Demo
              </Link>
            </div>
            <p className="text-blue-200 mt-6 text-sm">
              Typically respond within 2 business hours
            </p>
          </div>
        </section>
      </main>

      <Subscribe />
    </div>
  );
}