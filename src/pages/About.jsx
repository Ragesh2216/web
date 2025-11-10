import React, { useState, useEffect } from "react";
import Subscribe from "../components/Subscribe";
import { Link, useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const sections = [
    {
      section: 'Mission & Values',
      icon: '🎯',
      content: 'A clear, concise statement on why your news organization exists. What are your core journalistic values (e.g., accuracy, impartiality, holding power accountable)?',
      importance: 'This defines your purpose and commitment to your audience.',
      details: [
        'Commitment to factual, verified reporting',
        'Dedication to impartial and balanced coverage',
        'Focus on holding institutions accountable',
        'Service to our community and readers'
      ],
      color: 'from-red-400 to-orange-400'
    },
    {
      section: 'History & Story',
      icon: '📜',
      content: 'How the organization started, major milestones, and the journey of the publication.',
      importance: 'Adds depth, shows longevity (if applicable), and makes the brand feel more "human."',
      details: [
        'Founded in 2020 with a vision for independent journalism',
        'Grew from a small blog to a recognized news platform',
        'Milestone: Reached 1 million monthly readers in 2023',
        'Expanded to cover international affairs in 2024'
      ],
      color: 'from-green-400 to-emerald-400'
    },
    {
      section: 'Editorial Standards & Ethics',
      icon: '⚖️',
      content: 'A summary or link to your code of conduct, correction policy, and how you handle sourcing/anonymity.',
      importance: 'Crucial for a news site. It demonstrates transparency and a commitment to fact-checking and accountability.',
      details: [
        'All stories undergo rigorous fact-checking process',
        'Clear distinction between news and opinion content',
        'Transparent correction policy for errors',
        'Ethical guidelines for anonymous sources'
      ],
      color: 'from-blue-400 to-cyan-400'
    },
    {
      section: 'The Team',
      icon: '👥',
      content: 'Profiles (with photos!) of key leadership, editors, and prominent journalists.',
      importance: 'Puts a face to the work, establishing expertise and accountability. It\'s often where readers look to see who is behind the news.',
      details: [
        'Experienced journalists with 5+ years in the industry',
        'Diverse backgrounds and areas of expertise',
        'Award-winning investigative reporters',
        'Dedicated editorial and fact-checking team'
      ],
      color: 'from-purple-400 to-pink-400'
    },
    {
      section: 'Funding & Ownership',
      icon: '💰',
      content: 'Clear disclosure about who owns your company and how you make money (subscriptions, advertising, grants, etc.).',
      importance: 'Essential for transparency to guard against perceived bias or influence.',
      details: [
        'Reader-supported through subscriptions',
        'Transparent advertising partnerships',
        'No corporate or political ownership',
        'Independent and self-funded operation'
      ],
      color: 'from-yellow-400 to-amber-400'
    },
    {
      section: 'Contact & Feedback',
      icon: '📞',
      content: 'Separate, clear ways for people to: submit a news tip, report an error, contact an editor, or inquire about advertising.',
      importance: 'Shows you are open and accessible to the community you serve.',
      details: [
        '24/7 news tip line for urgent stories',
        'Dedicated email for corrections and feedback',
        'Direct editor contacts for specific beats',
        'Advertising and partnership inquiries'
      ],
      color: 'from-indigo-400 to-violet-400'
    },
    {
      section: 'Recognition',
      icon: '🏆',
      content: 'Any major awards, accolades, or community partnerships.',
      importance: 'Builds immediate external credibility and social proof.',
      details: [
        '2023 Excellence in Journalism Award',
        'Featured in "Top Emerging Media Platforms"',
        'Partnership with International Press Institute',
        'Community Impact Award 2022'
      ],
      color: 'from-rose-400 to-red-400'
    },
  ];

  const teamMembers = [
    {
      name: "Sarah Chen",
      role: "Editor-in-Chief",
      bio: "15 years of experience in investigative journalism, former senior editor at Global News Network.",
      expertise: ["Investigative Reporting", "Editorial Leadership", "Media Ethics"],
      color: "from-red-400 to-pink-500"
    },
    {
      name: "Marcus Johnson",
      role: "Senior Political Correspondent",
      bio: "Covering national politics for over a decade, known for incisive analysis and balanced reporting.",
      expertise: ["Political Analysis", "Policy Reporting", "Election Coverage"],
      color: "from-blue-400 to-cyan-500"
    },
    {
      name: "Dr. Aisha Patel",
      role: "Science & Health Editor",
      bio: "PhD in Biomedical Science, bringing scientific rigor to health and medical reporting.",
      expertise: ["Medical Research", "Public Health", "Science Communication"],
      color: "from-green-400 to-emerald-500"
    },
    {
      name: "David Kim",
      role: "Technology & Innovation Reporter",
      bio: "Former tech entrepreneur turned journalist, covering the intersection of technology and society.",
      expertise: ["Tech Innovation", "Digital Policy", "Startup Ecosystem"],
      color: "from-purple-400 to-violet-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 relative overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-float-slow opacity-20"
            style={{
              width: `${Math.random() * 16 + 4}px`,
              height: `${Math.random() * 16 + 4}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              backgroundColor: ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFE66D', '#FF9FF3', '#54a0ff'][i % 7],
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 20 + 10}s`
            }}
          />
        ))}
      </div>

      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <section className="text-center mb-16">
          <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6 transition-all duration-1000 ${
            isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
          }`}>
            About Stackly News
          </h1>
          <p className={`text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-300 ${
            isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
          }`}>
            We are an independent news organization committed to delivering accurate, 
            impartial, and impactful journalism that serves our community and holds power accountable.
          </p>
        </section>

        {/* Stats Section */}
        <section className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: "50K+", label: "Monthly Readers", color: "from-blue-500 to-cyan-500" },
              { number: "2K+", label: "Articles Published", color: "from-purple-500 to-pink-500" },
              { number: "15+", label: "Awards Won", color: "from-green-500 to-emerald-500" },
              { number: "24/7", label: "News Coverage", color: "from-orange-500 to-red-500" }
            ].map((stat, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl shadow-lg p-6 text-center transform hover:-translate-y-2 transition-all duration-500 hover:shadow-2xl animate-fade-in-up group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`text-2xl md:text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300`}>
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
                {/* Animated border */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-200 transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
              </div>
            ))}
          </div>
        </section>

        {/* Interactive Sections */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden transform hover:-translate-y-1 transition-all duration-500 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
            <div className="grid grid-cols-1 lg:grid-cols-4">
              {/* Navigation */}
              <div className="lg:col-span-1 bg-gradient-to-b from-gray-50 to-blue-50 p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Our Foundation
                </h2>
                <nav className="space-y-2">
                  {sections.map((item, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveSection(index)}
                      className={`w-full text-left px-4 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${
                        activeSection === index
                          ? `bg-gradient-to-r ${item.color} text-white shadow-md`
                          : 'text-gray-700 hover:bg-white hover:border-2 hover:border-gray-200'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-xl">{item.icon}</span>
                        <span className="font-medium">{item.section}</span>
                      </div>
                    </button>
                  ))}
                </nav>
              </div>

              {/* Content */}
              <div className="lg:col-span-3 p-8 bg-gradient-to-br from-white to-blue-50">
                <div className="flex items-center gap-4 mb-6 animate-fade-in-left">
                  <div className={`w-16 h-16 bg-gradient-to-r ${sections[activeSection].color} rounded-2xl flex items-center justify-center text-white text-2xl shadow-lg`}>
                    {sections[activeSection].icon}
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                    {sections[activeSection].section}
                  </h2>
                </div>
                
                <div className="space-y-6">
                  <div className="animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <div className={`w-2 h-2 bg-gradient-to-r ${sections[activeSection].color} rounded-full`}></div>
                      Overview
                    </h3>
                    <p className="text-gray-700 leading-relaxed bg-gradient-to-r from-gray-50 to-white p-4 rounded-xl border-l-4 border-blue-300">
                      {sections[activeSection].content}
                    </p>
                  </div>

                  <div className="animate-fade-in-up" style={{ animationDelay: '400ms' }}>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <div className={`w-2 h-2 bg-gradient-to-r ${sections[activeSection].color} rounded-full`}></div>
                      Why It Matters
                    </h3>
                    <p className="text-gray-700 leading-relaxed bg-gradient-to-r from-blue-50 to-cyan-50 p-4 rounded-xl border-l-4 border-green-300">
                      {sections[activeSection].importance}
                    </p>
                  </div>

                  <div className="animate-fade-in-up" style={{ animationDelay: '600ms' }}>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <div className={`w-2 h-2 bg-gradient-to-r ${sections[activeSection].color} rounded-full`}></div>
                      Key Details
                    </h3>
                    <ul className="space-y-3 bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl border-l-4 border-purple-300">
                      {sections[activeSection].details.map((detail, index) => (
                        <li 
                          key={index} 
                          className="flex items-start gap-3 text-gray-700 group hover:translate-x-2 transition-transform duration-300"
                        >
                          <span className={`w-6 h-6 bg-gradient-to-r ${sections[activeSection].color} rounded-full flex items-center justify-center text-white text-sm mt-0.5 group-hover:scale-110 transition-transform duration-300`}>
                            ✓
                          </span>
                          <span className="group-hover:text-gray-900 transition-colors duration-300">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4 animate-fade-in-up">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              The dedicated journalists and editors behind Stackly News
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 animate-fade-in-up group"
                style={{ animationDelay: `${index * 150 + 400}ms` }}
              >
                <div className={`w-20 h-20 bg-gradient-to-r ${member.color} rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  {member.name}
                </h3>
                <p className={`font-semibold mb-3 bg-gradient-to-r ${member.color} bg-clip-text text-transparent`}>
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {member.bio}
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {member.expertise.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex} 
                      className="bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs font-medium group-hover:scale-105 transition-transform duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                {/* Animated border */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-200 transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
              </div>
            ))}
          </div>
        </section>

        {/* Commitment Section */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl p-8 text-white transform hover:-translate-y-1 transition-all duration-500 animate-fade-in-up" style={{ animationDelay: '600ms' }}>
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 drop-shadow-lg">Our Commitment to You</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    icon: "🔍",
                    title: "Fact-Based Reporting",
                    description: "Every story undergoes rigorous verification and fact-checking",
                    color: "from-green-400 to-cyan-400"
                  },
                  {
                    icon: "⚖️",
                    title: "Impartial Coverage",
                    description: "We maintain balance and fairness in all our reporting",
                    color: "from-blue-400 to-indigo-400"
                  },
                  {
                    icon: "🛡️",
                    title: "Accountability",
                    description: "We hold power accountable and serve as a watchdog for our community",
                    color: "from-purple-400 to-pink-400"
                  }
                ].map((commitment, index) => (
                  <div 
                    key={index} 
                    className="text-center transform hover:scale-105 transition-all duration-300 animate-fade-in-up group"
                    style={{ animationDelay: `${800 + index * 100}ms` }}
                  >
                    <div className={`text-4xl mb-4 bg-gradient-to-r ${commitment.color} bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300`}>
                      {commitment.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-white drop-shadow">{commitment.title}</h3>
                    <p className="text-blue-100 leading-relaxed group-hover:text-white transition-colors duration-300">
                      {commitment.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-white to-blue-50 rounded-2xl shadow-2xl p-8 transform hover:-translate-y-1 transition-all duration-500 animate-fade-in-up" style={{ animationDelay: '800ms' }}>
            <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-gray-900 to-blue-600 bg-clip-text text-transparent mb-4">
              Stay Informed with Stackly News
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Join thousands of readers who trust us for accurate, timely, and impactful journalism.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => navigate('/subscription')}
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl animate-pulse-slow flex items-center justify-center gap-2"
              >
                <span>Subscribe to Our Newsletter</span>
                <span className="text-lg">✨</span>
              </button>
              
              <button 
                onClick={() => navigate('/contact')}
                className="border-2 border-blue-500 text-blue-600 hover:bg-blue-500 hover:text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2"
              >
                <span>Contact Our Team</span>
                <span className="text-lg">💬</span>
              </button>
            </div>
          </div>
        </section>
      </main>

      <Subscribe />

      {/* CSS Animations */}
      <style jsx global>{`
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInLeft {
          0% {
            opacity: 0;
            transform: translateX(-20px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes float-slow {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          33% {
            transform: translateY(-15px) translateX(10px);
          }
          66% {
            transform: translateY(10px) translateX(-10px);
          }
        }
        
        @keyframes pulse-slow {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.02);
          }
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .animate-fade-in-left {
          animation: fadeInLeft 0.6s ease-out forwards;
          opacity: 0;
        }
        
        .animate-float-slow {
          animation: float-slow 15s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 2s ease-in-out infinite;
        }
        
        .delay-300 {
          animation-delay: 300ms;
        }
      `}</style>
    </div>
  );
};

export default About;