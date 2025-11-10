import React, { useState } from "react";
import Subscribe from "../components/Subscribe";
import { Link } from "react-router-dom";

const About = () => {
  const [activeSection, setActiveSection] = useState(0);

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
      ]
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
      ]
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
      ]
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
      ]
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
      ]
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
      ]
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
      ]
    },
  ];

  const teamMembers = [
    {
      name: "Sarah Chen",
      role: "Editor-in-Chief",
      bio: "15 years of experience in investigative journalism, former senior editor at Global News Network.",
      expertise: ["Investigative Reporting", "Editorial Leadership", "Media Ethics"]
    },
    {
      name: "Marcus Johnson",
      role: "Senior Political Correspondent",
      bio: "Covering national politics for over a decade, known for incisive analysis and balanced reporting.",
      expertise: ["Political Analysis", "Policy Reporting", "Election Coverage"]
    },
    {
      name: "Dr. Aisha Patel",
      role: "Science & Health Editor",
      bio: "PhD in Biomedical Science, bringing scientific rigor to health and medical reporting.",
      expertise: ["Medical Research", "Public Health", "Science Communication"]
    },
    {
      name: "David Kim",
      role: "Technology & Innovation Reporter",
      bio: "Former tech entrepreneur turned journalist, covering the intersection of technology and society.",
      expertise: ["Tech Innovation", "Digital Policy", "Startup Ecosystem"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Header Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            About Stackly News
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We are an independent news organization committed to delivering accurate, 
            impartial, and impactful journalism that serves our community and holds power accountable.
          </p>
        </section>

        {/* Stats Section */}
        <section className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: "50K+", label: "Monthly Readers" },
              { number: "2K+", label: "Articles Published" },
              { number: "15+", label: "Awards Won" },
              { number: "24/7", label: "News Coverage" }
            ].map((stat, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-6 text-center">
                <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Interactive Sections */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-4">
              {/* Navigation */}
              <div className="lg:col-span-1 bg-gray-50 p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Our Foundation</h2>
                <nav className="space-y-2">
                  {sections.map((item, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveSection(index)}
                      className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 ${
                        activeSection === index
                          ? 'bg-blue-600 text-white shadow-md'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-lg">{item.icon}</span>
                        <span className="font-medium">{item.section}</span>
                      </div>
                    </button>
                  ))}
                </nav>
              </div>

              {/* Content */}
              <div className="lg:col-span-3 p-8">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl">{sections[activeSection].icon}</span>
                  <h2 className="text-2xl font-bold text-gray-900">{sections[activeSection].section}</h2>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Overview</h3>
                    <p className="text-gray-700 leading-relaxed">{sections[activeSection].content}</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Why It Matters</h3>
                    <p className="text-gray-700 leading-relaxed">{sections[activeSection].importance}</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Details</h3>
                    <ul className="space-y-2">
                      {sections[activeSection].details.map((detail, index) => (
                        <li key={index} className="flex items-start gap-3 text-gray-700">
                          <span className="text-green-500 mt-1">✓</span>
                          <span>{detail}</span>
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The dedicated journalists and editors behind Stackly News
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-semibold mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{member.bio}</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {member.expertise.map((skill, skillIndex) => (
                    <span key={skillIndex} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Commitment Section */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 text-white">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Commitment to You</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    icon: "🔍",
                    title: "Fact-Based Reporting",
                    description: "Every story undergoes rigorous verification and fact-checking"
                  },
                  {
                    icon: "⚖️",
                    title: "Impartial Coverage",
                    description: "We maintain balance and fairness in all our reporting"
                  },
                  {
                    icon: "🛡️",
                    title: "Accountability",
                    description: "We hold power accountable and serve as a watchdog for our community"
                  }
                ].map((commitment, index) => (
                  <div key={index} className="text-center">
                    <div className="text-4xl mb-4">{commitment.icon}</div>
                    <h3 className="text-xl font-bold mb-3">{commitment.title}</h3>
                    <p className="text-blue-100 leading-relaxed">{commitment.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Stay Informed with Stackly News
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Join thousands of readers who trust us for accurate, timely, and impactful journalism.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
  <button 
    onClick={() => window.location.href = './404'}
    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
  >
    Subscribe to Our Newsletter
  </button>
  <button 
    onClick={() => window.location.href = './404'}
    className="border border-gray-300 hover:border-gray-400 text-gray-700 px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
  >
    Contact Our Team
  </button>
</div>
          </div>
        </section>
      </main>

      <Subscribe />
    </div>
  );
};

export default About;