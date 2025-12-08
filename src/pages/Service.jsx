import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Subscribe from "../components/Subscribe";

export default function Service() {
  const [activeService, setActiveService] = useState(0);
  const [isHovered, setIsHovered] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

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
      color: "from-blue-500 to-cyan-500",
      hoverColor: "from-blue-600 to-cyan-600",
      iconColor: "text-blue-400"
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
      color: "from-green-500 to-emerald-500",
      hoverColor: "from-green-600 to-emerald-600",
      iconColor: "text-green-400"
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
      color: "from-purple-500 to-pink-500",
      hoverColor: "from-purple-600 to-pink-600",
      iconColor: "text-purple-400"
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
      color: "from-orange-500 to-red-500",
      hoverColor: "from-orange-600 to-red-600",
      iconColor: "text-orange-400"
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
        <section className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-gradient">
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
              { number: "500K+", label: "Monthly Readers", color: "from-blue-500 to-cyan-500" },
              { number: "2K+", label: "Articles Published", color: "from-green-500 to-emerald-500" },
              { number: "95%", label: "Reader Engagement", color: "from-purple-500 to-pink-500" },
              { number: "50+", label: "Industry Partners", color: "from-orange-500 to-red-500" }
            ].map((stat, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-all duration-500 transform hover:scale-105 group overflow-hidden relative"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                <div className="relative">
                  <div className={`text-2xl md:text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300`}>
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium group-hover:text-gray-900 transition-colors duration-300">
                    {stat.label}
                  </div>
                </div>
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
                className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-l-4 ${
                  isHovered === index ? 'border-blue-500' : 'border-transparent'
                } group relative`}
                onMouseEnter={() => setIsHovered(index)}
                onMouseLeave={() => setIsHovered(null)}
              >
                {/* Animated gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                <div className={`p-8 bg-gradient-to-r ${service.color} text-white relative overflow-hidden group-hover:bg-gradient-to-r ${service.hoverColor} transition-all duration-500`}>
                  {/* Subtle shimmer effect */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                  
                  <div className="flex items-center gap-4 mb-4 relative">
                    <div className={`text-3xl transform group-hover:scale-110 transition-transform duration-300 ${service.iconColor}`}>
                      {service.icon}
                    </div>
                    <h2 className="text-2xl font-bold">{service.title}</h2>
                  </div>
                  <p className="text-blue-100 text-lg leading-relaxed group-hover:text-white transition-colors duration-300">
                    {service.description}
                  </p>
                </div>
                
                <div className="p-6 relative">
                  <div className="mb-6">
                    <h3 className="font-semibold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors duration-300">
                      Key Features:
                    </h3>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li 
                          key={featureIndex} 
                          className="flex items-center gap-3 text-gray-700 group-hover:text-gray-900 transition-colors duration-300 transform group-hover:translate-x-1 transition-transform"
                          style={{ transitionDelay: `${featureIndex * 100}ms` }}
                        >
                          <span className={`${service.iconColor} transform group-hover:scale-125 transition-transform duration-300`}>
                            ✓
                          </span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500 font-medium group-hover:text-gray-700 transition-colors duration-300">
                      {service.stats}
                    </span>
                    <Link
                      to={service.detailsLink}
                      className={`bg-gradient-to-r ${service.color} hover:${service.hoverColor} text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg`}
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
          <div className="bg-white rounded-2xl shadow-lg p-8 relative overflow-hidden">
            {/* Background gradient */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-pulse"></div>
            
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Our Partnership Process
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Discovery Call",
                  description: "Understand your goals and requirements",
                  icon: "📞",
                  color: "from-blue-500 to-cyan-500"
                },
                {
                  step: "02",
                  title: "Custom Proposal",
                  description: "Tailored solution designed for your needs",
                  icon: "📋",
                  color: "from-green-500 to-emerald-500"
                },
                {
                  step: "03",
                  title: "Implementation",
                  description: "Seamless integration and execution",
                  icon: "⚡",
                  color: "from-purple-500 to-pink-500"
                },
                {
                  step: "04",
                  title: "Optimization",
                  description: "Continuous improvement and reporting",
                  icon: "📊",
                  color: "from-orange-500 to-red-500"
                }
              ].map((step, index) => (
                <div 
                  key={index} 
                  className="text-center group cursor-pointer transform hover:-translate-y-2 transition-all duration-500"
                >
                  <div className={`w-20 h-20 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:shadow-lg transition-all duration-500 relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-white/10 group-hover:bg-white/20 transition-colors duration-300"></div>
                    <span className="text-2xl relative z-10 transform group-hover:scale-110 transition-transform duration-300">
                      {step.icon}
                    </span>
                  </div>
                  <div className="text-sm font-semibold text-gray-500 mb-2 group-hover:text-gray-700 transition-colors duration-300">
                    {step.step}
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2 group-hover:text-gray-800 transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm group-hover:text-gray-800 transition-colors duration-300">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Trusted by Industry Leaders
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              See what our partners say about working with Stackly News
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 group relative overflow-hidden"
              >
                {/* Gradient border effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
                
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span 
                      key={i} 
                      className="text-yellow-400 transform group-hover:scale-110 transition-transform duration-300"
                      style={{ transitionDelay: `${i * 100}ms` }}
                    >
                      ★
                    </span>
                  ))}
                </div>
                <blockquote className="text-gray-700 text-lg italic mb-4 group-hover:text-gray-900 transition-colors duration-300 relative">
                  <span className="absolute -top-2 -left-2 text-4xl text-blue-200 opacity-50 group-hover:opacity-70 transition-opacity duration-300">"</span>
                  {testimonial.quote}
                  <span className="absolute -bottom-4 -right-2 text-4xl text-blue-200 opacity-50 group-hover:opacity-70 transition-opacity duration-300">"</span>
                </blockquote>
                <div className="relative">
                  <div className="font-semibold text-gray-900 group-hover:text-gray-800 transition-colors duration-300">
                    {testimonial.author}
                  </div>
                  <div className="text-gray-600 text-sm group-hover:text-gray-700 transition-colors duration-300">
                    {testimonial.company}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section>
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-12 text-white text-center relative overflow-hidden group">
            {/* Animated background elements */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-blue-400 animate-pulse"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/50 to-indigo-700/50 group-hover:from-blue-600/60 group-hover:to-indigo-700/60 transition-all duration-1000"></div>
            
            {/* Floating particles */}
            <div className="absolute inset-0 overflow-hidden">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 bg-white/20 rounded-full animate-float"
                  style={{
                    left: `${Math.random() * 100}%`,
                    animationDelay: `${i * 2}s`,
                    animationDuration: `${15 + i * 5}s`
                  }}
                ></div>
              ))}
            </div>

            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 transform group-hover:scale-105 transition-transform duration-500">
                Ready to Partner with Us?
              </h2>
              <p className="text-blue-100 text-xl mb-8 max-w-2xl mx-auto group-hover:text-white transition-colors duration-300">
                Whether you're looking to advertise, license content, or explore custom solutions, 
                our team is here to help you achieve your goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact-business"
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-xl relative overflow-hidden group/btn"
                >
                  <span className="relative z-10">Contact Business Team</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover/btn:opacity-10 transition-opacity duration-300"></div>
                </Link>
                <Link
                  to="/schedule-demo"
                  className="border border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 hover:scale-105 transform transition-all duration-300 relative overflow-hidden group/btn"
                >
                  <span className="relative z-10">Schedule a Demo</span>
                  <div className="absolute inset-0 bg-white opacity-0 group-hover/btn:opacity-10 transition-opacity duration-300"></div>
                </Link>
              </div>
              <p className="text-blue-200 mt-6 text-sm group-hover:text-blue-100 transition-colors duration-300">
                Typically respond within 2 business hours
              </p>
            </div> 
          </div>
        </section>
      </main>

      <Subscribe />
    </div>
  );
}