import React, { useState } from 'react';

// --- Icon Components (Lucide Icons - simple white/blue versions) ---
const SharedIconProps = {
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
};

// Logo Icon: Abstract C (Consultancy)
const ConsultantLogo = (props) => (
    <svg className="h-7 w-7 text-[#4C51F9] icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" {...SharedIconProps} {...props}>
        <path d="M12 2A10 10 0 1 0 12 22A10 10 0 0 0 12 2ZM9 12H15ZM12 9V15Z" strokeWidth="2" fill="currentColor" fillOpacity="0.2"/>
        <path d="M10 10a4 4 0 1 1 4 4" strokeWidth="2"/>
    </svg>
);

const UserIcon = (props) => (
    <svg className="w-5 h-5 icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" {...SharedIconProps} {...props}><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
);

const MenuIcon = (props) => (
    <svg className="w-6 h-6 icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" {...SharedIconProps} {...props}><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
);

const XIcon = (props) => (
    <svg className="w-6 h-6 icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" {...SharedIconProps} {...props}><path d="M18 6L6 18"></path><path d="M6 6l12 12"></path></svg>
);

// --- Custom Components ---

// Header Component
const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    // Using a light, clean header based on the image
   
};

// Hero Section Component (The big blue area)
const Hero = () => {
    // Custom colors used: Primary Blue (#4C51F9), Accent Yellow (#B0FF00)
    return (
        <section className="relative h-[85vh] flex items-center bg-[#4C51F9] overflow-hidden">
            {/* Background Geometric Pattern - Mimicking shapes in the image */}
            <div className="absolute inset-0 opacity-10">
                <svg width="100%" height="100%">
                    <defs>
                        <pattern id="diagonalLines" patternUnits="userSpaceOnUse" width="40" height="40">
                            <path d="M-10,10 L40,-40 M0,40 L40,0 M10,50 L50,10" stroke="#FFFFFF" strokeWidth="1" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#diagonalLines)" />
                </svg>
            </div>

            <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-white flex flex-col lg:flex-row items-center justify-between">
                
                {/* Text Content - Left Side */}
                <div className="max-w-xl text-center lg:text-left pt-16 lg:pt-0">
                    <p className="text-2xl sm:text-3xl font-light mb-4 text-[#FFD900] uppercase tracking-wider">
                        Consult with Experts 
                    </p>
                    <h1 className="text-5xl sm:text-7xl font-extrabold mb-6 leading-none">
                        The <span className="text-[#FFD900]">best</span><br/>Journalist
                    </h1>
                    <div className="w-24 h-1 bg-white mb-6 mx-auto lg:mx-0"></div>
                    <p className="text-lg mb-10 max-w-lg font-light">
                        innovation storytelling and strategic communication the drive real impact .
                    </p>
                    <button className="bg-[#FFD900] text-gray-900 font-bold py-3 px-10 rounded-full shadow-lg transition duration-300 transform hover:scale-105 hover:bg-yellow-400">
                        Explore Services
                    </button>
                </div>

                {/* Abstract Visual Element - Right Side (The spiky green sphere) */}
                <div className="hidden lg:flex justify-center items-center w-full lg:w-1/2 mt-12 lg:mt-0">
                    <div className="relative w-64 h-64">
                        {/* Base Sphere */}
                        <div className="absolute inset-0 bg-[#B0FF00] rounded-full opacity-60 filter blur-xl animate-pulse"></div>
                        {/* Abstract Spiky Shape (using clip-path for an irregular shape) */}
                        <div className="relative w-full h-full bg-[#B0FF00] rounded-full filter saturate-150" style={{
                            clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
                            transform: 'scale(1.2) rotate(10deg)'
                        }}>
                            <div className="absolute inset-0 bg-green-900 opacity-20"></div>
                        </div>
                        {/* Small decorative triangle */}
                        <div className="absolute bottom-10 left-10 w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-b-[20px] border-b-white transform rotate-45"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// Service Card Component (For the "What We Do" section)
const ServiceCard = ({ icon, title, description }) => {
    return (
        <div className="bg-white p-8 rounded-lg shadow-xl border border-gray-100 transition duration-300 hover:shadow-2xl hover:shadow-[#4C51F9]/10">
            <div className="text-[#4C51F9] mb-4">
                {icon}
            </div>
            <h4 className="text-xl font-bold mb-3 text-gray-900">{title}</h4>
            <p className="text-gray-600 text-sm">{description}</p>
        </div>
    );
};

// Icon placeholders for Service Cards
const BriefcaseIcon = <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" {...SharedIconProps}><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>;
const ChartIcon = <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" {...SharedIconProps}><path d="M12 20V10"></path><path d="M18 20V4"></path><path d="M6 20v-4"></path></svg>;
const LightbulbIcon = <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" {...SharedIconProps}><path d="M15 14c.2-1 .2-2 0-3a5 5 0 0 0-5-5a5 5 0 0 0-3 1.3v-1.3"></path><path d="M12 22v-4"></path><path d="M10 22h4"></path></svg>;

// Main App Component
const Latest = () => {
    const serviceData = [
        { icon: BriefcaseIcon, title: '🖊️ News Reporting', description: 'Covering national and global events with accuracy, integrity, and real-time updates. Our reporters are committed to uncovering the truth behind every story.' },
        { icon: ChartIcon, title: '📈 Business & Economy', description: 'Timely updates and deep dives into market trends, entrepreneurship, and financial strategies that shape the world economy.' },
       { icon: BriefcaseIcon, title: '🔬 Tech & Innovation', description: 'Spotlighting the future — from AI and startups to breakthroughs changing how we live and work.' },
        { icon: ChartIcon, title: '🌍 Culture & Lifestyle', description: 'Exploring art, fashion, travel, and daily life — stories that celebrate creativity and human connection.' },
        { icon: LightbulbIcon, title: '💡  Editorial & Opinions', description: 'Thought-provoking commentary and expert analysis from leading voices across industries — helping readers see the bigger picture.' },
    ];

    return (
        <div className="bg-white font-sans min-h-screen">
            <Header />
            <Hero />
            
           
            <section className="bg-white py-20 sm:py-32"> 
              <div className='main-bg'>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        
                        {/* Image/Mock Content Left */}
                        <div className="relative h-96 rounded-xl overflow-hidden shadow-2xl">
                             <img 
                                src="https://placehold.co/800x600/F0F0F5/4C51F9?text=Business+Meeting" 
                                alt="Professionals discussing business strategy" 
                                className="absolute inset-0 w-full h-full object-cover"
                                onError={(e) => {
                                    e.target.style.display = 'none'; 
                                    e.target.parentNode.style.backgroundColor = '#F0F0F5';
                                    e.target.parentNode.innerHTML = '<div class="flex items-center justify-center h-full text-gray-500 font-medium">Business Image Placeholder</div>';
                                }}
                            />
                        </div>
                        

                        {/* Text and Services Right */}
                        <div className="space-y-6">
                            <h2 className="text-sm uppercase tracking-widest text-[#4C51F9] font-semibold">Our Expertise</h2>
                            <h3 className="text-4xl font-extrabold text-gray-900 mb-6">What We Do</h3>
                            <p className="text-gray-600 text-lg mb-8 border-l-4 border-[#4C51F9] pl-4 italic">
                              We bring you in-depth stories, investigative reports, and expert insights from across the world. Our editorial team is dedicated to delivering credible journalism that informs, inspires, and empowers our readers.
                            </p>
                            
                            {/* Simple Feature Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {serviceData.map((item, index) => (
                                    <ServiceCard key={index} {...item} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                <section className="hero py-24 text-center text-white bg-opacity-80 bg-black">
  <h1 className="text-5xl font-bold mb-4">Your Daily Source for Trusted News </h1>
  <p className="text-lg max-w-2xl mx-auto mb-6">
    In-depth stories, investigative journalism, and the latest updates that matter to you.
  </p>
  <button className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-medium hover:bg-yellow-500 transition">
    Explore Articles
  </button>
</section>

<section className="bg-blue-50 py-20 text-center">
  <h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-4">
    Your Daily Source for Trusted News and Bold Perspectives
  </h1>
  <p className="text-gray-600 max-w-2xl mx-auto mb-6">
    Stay informed with the latest headlines, in-depth analysis, and stories that shape our world.
    At <span className="font-semibold">Stackly News</span>, we go beyond breaking news — delivering facts,
    context, and insight you can rely on.
  </p>
  <div className="flex justify-center gap-4">
    <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
      Read Latest News
    </button>
    <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition">
      Subscribe Now
    </button>
  </div>
</section>
            </section>
            </div>
            
        
    );
};

export default Latest;