import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// --- Icon Components (Lucide Icons - simple white/blue versions) ---
const SharedIconProps = {
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
};

const ConsultantLogo = (props) => (
    <svg className="h-7 w-7 text-[#4C51F9] icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" {...SharedIconProps} {...props}>
        <path d="M12 2A10 10 0 1 0 12 22A10 10 0 0 0 12 2ZM9 12H15ZM12 9V15Z" strokeWidth="2" fill="currentColor" fillOpacity="0.2" />
        <path d="M10 10a4 4 0 1 1 4 4" strokeWidth="2" />
    </svg>
);

// --- Custom Components ---

// Service Card Component with Colorful Animations
const ServiceCard = ({ icon, title, description, index }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div 
            className={`bg-gradient-to-r from-rose-300 to-yellow-300 p-8 rounded-lg shadow-xl border border-gray-100 transition-all duration-500 transform hover:-translate-y-3 hover:shadow-2xl hover:shadow-[#4C51F9]/20 relative overflow-hidden animate-card-in ${
                isHovered ? 'animate-pulse-glow' : ''
            }`}
            style={{ animationDelay: `${index * 100}ms` }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Animated background particles */}
            {isHovered && (
                <>
                    <div className="absolute top-2 right-2 w-2 h-2 bg-purple-500 rounded-full animate-float" style={{ animationDelay: '0s' }}></div>
                    <div className="absolute bottom-2 left-2 w-1.5 h-1.5 bg-cyan-500 rounded-full animate-float" style={{ animationDelay: '0.3s' }}></div>
                    <div className="absolute top-1/2 right-4 w-1 h-1 bg-pink-500 rounded-full animate-float" style={{ animationDelay: '0.6s' }}></div>
                </>
            )}
            
            <div className="text-[#4C51F9] mb-4 transform group-hover:scale-110 transition-transform duration-300">
                {icon}
            </div>
            <h4 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-[#4C51F9] transition-colors duration-300">{title}</h4>
            <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
            
            {/* Animated border */}
            <div className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-[#4C51F9] transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
        </div>
    );
};

// Icon placeholders for Service Cards
const BriefcaseIcon = <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" {...SharedIconProps}><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>;
const ChartIcon = <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" {...SharedIconProps}><path d="M12 20V10"></path><path d="M18 20V4"></path><path d="M6 20v-4"></path></svg>;
const LightbulbIcon = <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" {...SharedIconProps}><path d="M15 14c.2-1 .2-2 0-3a5 5 0 0 0-5-5a5 5 0 0 0-3 1.3v-1.3"></path><path d="M12 22v-4"></path><path d="M10 22h4"></path></svg>;

// Floating Particles Background Component
const FloatingParticles = () => {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(15)].map((_, i) => (
                <div
                    key={i}
                    className="absolute rounded-full animate-float-slow opacity-60"
                    style={{
                        width: `${Math.random() * 8 + 4}px`,
                        height: `${Math.random() * 8 + 4}px`,
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        backgroundColor: ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFE66D', '#FF9FF3'][i % 6],
                        animationDelay: `${Math.random() * 5}s`,
                        animationDuration: `${Math.random() * 10 + 10}s`
                    }}
                />
            ))}
        </div>
    );
};

// Main App Component
const Latest = () => {
    const [isVisible, setIsVisible] = useState(false);
    
    useEffect(() => {
        setIsVisible(true);
    }, []);

    const serviceData = [
        { icon: BriefcaseIcon, title: '🖊️ News Reporting', description: 'Covering national and global events with accuracy, integrity, and real-time updates. Our reporters are committed to uncovering the truth behind every story.' },
        { icon: ChartIcon, title: '📈 Business & Economy', description: 'Timely updates and deep dives into market trends, entrepreneurship, and financial strategies that shape the world economy.' },
        { icon: BriefcaseIcon, title: '🔬 Tech & Innovation', description: 'Spotlighting the future — from AI and startups to breakthroughs changing how we live and work.' },
        { icon: ChartIcon, title: '🌍 Culture & Lifestyle', description: 'Exploring art, fashion, travel, and daily life — stories that celebrate creativity and human connection.' },
        { icon: LightbulbIcon, title: '⚖️ Politics & Governance', description: 'Uncovering policies, decisions, and power shifts that influence societies — offering balanced perspectives on national and international affairs.' },
        { icon: LightbulbIcon, title: '💡  Editorial & Opinions', description: 'Thought-provoking commentary and expert analysis from leading voices across industries — helping readers see the bigger picture.' },
    ];

    return (
        <div className="font-sans min-h-screen relative overflow-hidden">
            {/* Global CSS Animations */}
            <style>{`
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
                
                @keyframes slideInLeft {
                    0% {
                        opacity: 0;
                        transform: translateX(-30px);
                    }
                    100% {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }
                
                @keyframes slideInRight {
                    0% {
                        opacity: 0;
                        transform: translateX(30px);
                    }
                    100% {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }
                
                @keyframes scaleIn {
                    0% {
                        opacity: 0;
                        transform: scale(0.8);
                    }
                    100% {
                        opacity: 1;
                        transform: scale(1);
                    }
                }
                
                @keyframes float {
                    0%, 100% {
                        transform: translateY(0px);
                    }
                    50% {
                        transform: translateY(-10px);
                    }
                }
                
                @keyframes float-slow {
                    0%, 100% {
                        transform: translateY(0px) translateX(0px);
                    }
                    33% {
                        transform: translateY(-20px) translateX(10px);
                    }
                    66% {
                        transform: translateY(10px) translateX(-10px);
                    }
                }
                
                @keyframes pulse-glow {
                    0%, 100% {
                        box-shadow: 0 0 20px rgba(76, 81, 249, 0.3);
                    }
                    50% {
                        box-shadow: 0 0 30px rgba(76, 81, 249, 0.6);
                    }
                }
                
                @keyframes color-shift {
                    0% {
                        background-position: 0% 50%;
                    }
                    50% {
                        background-position: 100% 50%;
                    }
                    100% {
                        background-position: 0% 50%;
                    }
                }
                
                @keyframes card-in {
                    0% {
                        opacity: 0;
                        transform: translateY(40px) scale(0.9);
                    }
                    100% {
                        opacity: 1;
                        transform: translateY(0) scale(1);
                    }
                }
                
                .animate-fade-in-up {
                    animation: fadeInUp 0.8s ease-out forwards;
                }
                
                .animate-slide-in-left {
                    animation: slideInLeft 0.8s ease-out forwards;
                }
                
                .animate-slide-in-right {
                    animation: slideInRight 0.8s ease-out forwards;
                }
                
                .animate-scale-in {
                    animation: scaleIn 0.6s ease-out forwards;
                }
                
                .animate-float {
                    animation: float 3s ease-in-out infinite;
                }
                
                .animate-float-slow {
                    animation: float-slow 8s ease-in-out infinite;
                }
                
                .animate-pulse-glow {
                    animation: pulse-glow 2s ease-in-out infinite;
                }
                
                .animate-color-shift {
                    background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
                    background-size: 400% 400%;
                    animation: color-shift 6s ease infinite;
                }
                
                .animate-card-in {
                    animation: card-in 0.6s ease-out forwards;
                    opacity: 0;
                }
            `}</style>

            {/* Hero Section with Colorful Animations */}
            <section className="relative h-[85vh] flex items-center bg-gradient-to-br from-[#4C51F9] via-[#667eea] to-[#764ba2] overflow-hidden animate-color-shift">
                <FloatingParticles />
                
                {/* Animated Background Elements */}
                <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-400 rounded-full opacity-20 animate-float"></div>
                <div className="absolute bottom-20 right-20 w-16 h-16 bg-cyan-400 rounded-full opacity-30 animate-float" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-pink-400 rounded-full opacity-25 animate-float" style={{ animationDelay: '2s' }}></div>

                <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-white flex flex-col lg:flex-row items-center justify-between">
                    {/* Text Content - Left Side */}
                    <div className="max-w-xl text-center lg:text-left pt-16 lg:pt-0 animate-fade-in-up">
                        <p className="text-2xl sm:text-3xl font-light mb-4 text-[#FFD900] uppercase tracking-wider animate-pulse">
                            Consult with Experts
                        </p>
                        <h1 className="text-5xl sm:text-7xl font-extrabold mb-6 leading-none">
                            The <span className="text-[#FFD900] animate-pulse">best</span><br />Journalist
                        </h1>
                        <div className="w-24 h-1 bg-white mb-6 mx-auto lg:mx-0 animate-scale-in"></div>
                        <p className="text-lg mb-10 max-w-lg font-light opacity-0 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
                            innovation storytelling and strategic communication the drive real impact .
                        </p>

                        <Link
                            to="/explore-services"
                            className="inline-block bg-[#FFD900] text-gray-900 font-bold py-3 px-10 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 hover:bg-yellow-400 hover:shadow-2xl opacity-0 animate-fade-in-up"
                            style={{ animationDelay: '600ms' }}
                        >
                            Explore 
                        </Link>
                    </div>

                    {/* Abstract Visual Element - Right Side */}
                    <div className="hidden lg:flex justify-center items-center w-full lg:w-1/2 mt-12 lg:mt-0 animate-scale-in" style={{ animationDelay: '900ms' }}>
                        <div className="relative w-64 h-64">
                            <div className="absolute inset-0 bg-[#B0FF00] rounded-full opacity-60 filter blur-xl animate-pulse"></div>
                            <div className="relative w-full h-full bg-gradient-to-br from-[#B0FF00] to-[#00FF88] rounded-full filter saturate-150 animate-float" style={{
                                clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
                                transform: 'scale(1.2) rotate(10deg)'
                            }}>
                                <div className="absolute inset-0 bg-green-900 opacity-20"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section with Colorful Animations */}
            <section className="bg-gradient-to-r from-red-600 via-purple-600 to-blue-600 py-20 sm:py-32 relative overflow-hidden">
                <FloatingParticles />
                
                <div className='main-bg'>
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            {/* Image/Mock Content Left */}
                            <div className="relative h-96 rounded-xl overflow-hidden shadow-2xl animate-slide-in-left">
                                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-500 opacity-80"></div>
                                <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold">
                                    Breaking News Visual
                                </div>
                                {/* Animated border */}
                                <div className="absolute inset-0 border-4 border-transparent animate-pulse rounded-xl"></div>
                            </div>

                            {/* Text and Services Right */}
                            <div className="space-y-6 animate-slide-in-right">
                                <h2 className="text-sm uppercase tracking-widest text-[#FFD900] font-semibold animate-fade-in-up">Our Expertise</h2>
                                <h3 className="text-4xl font-extrabold text-white mb-6 animate-fade-in-up" style={{ animationDelay: '200ms' }}>What We Do</h3>
                                <p className="text-white text-lg mb-8 border-l-4 border-[#FFD900] pl-4 italic animate-fade-in-up" style={{ animationDelay: '400ms' }}>
                                    We bring you in-depth stories, investigative reports, and expert insights from across the world.
                                </p>

                                {/* Animated Service Grid */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {serviceData.map((item, index) => (
                                        <ServiceCard key={index} {...item} index={index} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section with Gradient Animation */}
            <section className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 py-20 text-center relative overflow-hidden animate-color-shift">
                <FloatingParticles />
                <div className="relative z-10">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fade-in-up">
                        Your Daily Source for Trusted News
                    </h1>
                    <p className="text-white max-w-2xl mx-auto mb-6 opacity-0 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
                        Stay informed with the latest headlines, in-depth analysis, and stories that shape our world.
                    </p>
                    <div className="flex justify-center gap-4 opacity-0 animate-fade-in-up" style={{ animationDelay: '600ms' }}>
                        <Link 
                            to="./subscribe"
                            className="inline-block border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl animate-pulse"
                        >
                            Subscribe Now
                        </Link>
                    </div>
                </div>
            </section>

            {/* Editorial Section */}
            <section className="py-16 px-4 bg-gradient-to-r from-red-200 via-orange-200 to-yellow-200 relative overflow-hidden">
                <FloatingParticles />
                <div className="max-w-6xl mx-auto text-center mb-12 relative z-10">
                    <h2 className="text-3xl font-extrabold text-gray-900 mb-4 border-b-2 border-red-600 pb-2 inline-block animate-fade-in-up">
                        Editorial & Opinions
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto opacity-0 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
                        Thought-provoking commentary and expert analysis from leading voices.
                    </p>
                </div>
            </section>

            {/* Video Section with Colorful Background */}
            <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-cyan-600 py-20 px-4 relative overflow-hidden">
                <FloatingParticles />
                <div className="max-w-6xl mx-auto text-center text-white relative z-10">
                    <h2 className="text-3xl md:text-4xl font-extrabold mb-4 border-b-2 border-white pb-2 inline-block animate-fade-in-up">
                        Watch Now: Exclusive Interviews
                    </h2>
                    <p className="text-blue-200 max-w-3xl mx-auto mb-10 opacity-0 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
                        Dive deeper with our exclusive video interviews and documentary shorts.
                    </p>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-left">
                        {/* Main Video Feature */}
                        <div className="lg:col-span-2 animate-scale-in">
                            <div className="aspect-w-16 aspect-h-9 bg-gradient-to-br from-gray-900 to-gray-700 rounded-lg overflow-hidden shadow-2xl relative">
                                <div className="h-64 flex items-center justify-center text-white text-xl font-bold">
                                    Video Player Placeholder
                                </div>
                                {/* Animated play button */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-20 h-20 bg-red-500 rounded-full flex items-center justify-center animate-pulse cursor-pointer hover:scale-110 transition-transform duration-300">
                                        <div className="w-0 h-0 border-l-[20px] border-l-white border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent ml-2"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Video Playlist/Sidebar */}
                        <div className="lg:col-span-1 bg-blue-700 p-6 rounded-lg shadow-xl animate-slide-in-right">
                            <h4 className="text-xl font-bold mb-4 border-b border-blue-500 pb-2">
                                More Videos
                            </h4>
                            <ul className="space-y-4">
                                {['The Tech Stock Bubble', 'Foreign Policy Interview', 'Future of Food'].map((title, index) => (
                                    <li 
                                        key={index}
                                        className="hover:text-blue-300 transition-all duration-300 transform hover:translate-x-2 cursor-pointer p-2 rounded hover:bg-blue-600"
                                    >
                                        <p className="font-semibold">{title}</p>
                                        <p className="text-xs text-blue-400">Category</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Newsletter Section with Animated Form */}
            <section className="bg-gradient-to-r from-blue-700 via-purple-700 to-pink-700 py-16 px-4 relative overflow-hidden animate-color-shift">
                <FloatingParticles />
                <div className="max-w-4xl mx-auto text-center text-white relative z-10">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in-up">
                        Never Miss an Essential Update
                    </h2>
                    <p className="text-blue-100 max-w-3xl mx-auto mb-8 opacity-0 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
                        Get the most important stories delivered straight to your inbox every morning.
                    </p>
                    <form 
                        onSubmit={(e) => {
                            e.preventDefault();
                            window.location.href = '/thank-you';
                        }} 
                        className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto opacity-0 animate-fade-in-up"
                        style={{ animationDelay: '600ms' }}
                    >
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            required
                            className="flex-1 px-4 py-3 rounded-lg border-2 border-transparent text-gray-800 focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 focus:outline-none transition-all duration-300 transform hover:scale-105"
                        />
                        <button 
                            type="submit"
                            className="bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 font-bold px-6 py-3 rounded-lg hover:from-yellow-500 hover:to-orange-500 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl animate-pulse"
                        >
                            Sign Up for Free
                        </button>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default Latest;