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
        <path d="M12 2A10 10 0 1 0 12 22A10 10 0 0 0 12 2ZM9 12H15ZM12 9V15Z" strokeWidth="2" fill="currentColor" fillOpacity="0.2" />
        <path d="M10 10a4 4 0 1 1 4 4" strokeWidth="2" />
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
                        The <span className="text-[#FFD900]">best</span><br />Journalist
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
        { icon: LightbulbIcon, title: '⚖️ Politics & Governance', description: 'Uncovering policies, decisions, and power shifts that influence societies — offering balanced perspectives on national and international affairs.' },
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

                <div className="top-stories">
                    <section className="py-16 px-4 bg-white">
                        <div className="max-w-6xl mx-auto">
                            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-10 text-center">
                                Today's Top Stories
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                                {/* Article Card 1 */}
                                <div className="border border-gray-100 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
                                    <div className="h-48 bg-gray-200 flex items-center justify-center text-gray-500">
                                        <img src="data:image/png;base64,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"

                                            alt="" />
                                    </div>
                                    <div className="p-6">
                                        <p className="text-sm font-semibold text-blue-600 mb-2">POLITICS</p>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">
                                            Local Election Results Signal Shift in Urban Policy
                                        </h3>
                                        <p className="text-gray-600 text-sm mb-4">
                                            A deep dive into the unexpected outcomes of the municipal elections and what it means for infrastructure development.
                                        </p>
                                        <a href="#" className="text-blue-600 font-medium hover:text-blue-800 transition">
                                            Read More &rarr;
                                        </a>
                                    </div>
                                </div>

                                {/* Article Card 2 */}
                                <div className="border border-gray-100 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
                                    <div className="h-48 bg-gray-200 flex items-center justify-center text-gray-500">
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx08yqNWPvIAoTmkwpGTwZVvPC3Nh-55VRHw&s" alt="Breaking News" srcset="" />
                                    </div>
                                    <div className="p-6">
                                        <p className="text-sm font-semibold text-red-600 mb-2">TECH</p>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">
                                            New AI Model Achieves Near-Human Level Reasoning
                                        </h3>
                                        <p className="text-gray-600 text-sm mb-4">
                                            Experts weigh in on the latest advancements in artificial intelligence and the ethical questions they raise.
                                        </p>
                                        <a href="#" className="text-blue-600 font-medium hover:text-blue-800 transition">
                                            Read More &rarr;
                                        </a>
                                    </div>
                                </div>




                                {/* Article Card 3 */}
                                <div className="border border-gray-100 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
                                    <div className="h-48 bg-gray-200 flex items-center justify-center text-gray-500">


                                        <img src="data:image/jpeg;base64,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"
                                            alt=" bracking news" srcset="" />

                                    </div>
                                    <div className="p-6">
                                        <p className="text-sm font-semibold text-green-600 mb-2">FINANCE</p>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">
                                            Global Markets React to Central Bank Rate Hike
                                        </h3>
                                        <p className="text-gray-600 text-sm mb-4">
                                            How the recent increase in interest rates is impacting bonds, equities, and the average consumer's wallet.
                                        </p>
                                        <a href="#" className="text-blue-600 font-medium hover:text-blue-800 transition">
                                            Read More &rarr;
                                        </a>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </section>


                    <section className="py-16 px-4 bg-white">
                        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-10">

                            {/* Left Column: Main Feature/Opinion */}
                            <div className="lg:w-2/3">
                                <h2 className="text-3xl font-extrabold text-gray-900 mb-6 border-b-2 border-red-600 pb-2 inline-block">
                                    Featured Opinion
                                </h2>
                                <div className="p-6 border border-gray-100 rounded-xl shadow-lg">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                                        The Illusion of Control: Why Central Planning Always Fails
                                    </h3>
                                    <p className="text-gray-600 mb-4 leading-relaxed">
                                        In a complex, dynamic global economy, attempts by central bodies to micromanage outcomes inevitably lead to unintended consequences and economic distortion...
                                        <a href="#" className="text-blue-600 font-medium hover:text-blue-800 transition">
                                            (Read Full Article)
                                        </a>
                                    </p>
                                    <p className="text-sm text-gray-500">
                                        — By <span className="font-semibold text-gray-700">Dr. Helena Vance</span>, Chief Economic Analyst
                                    </p>
                                </div>
                            </div>

                            {/* Right Column: Sidebar (More Opinion/Links) */}
                            <div className="lg:w-1/3">
                                <h3 className="text-xl font-bold text-gray-900 mb-4 border-b pb-2">
                                    More Editorials
                                </h3>
                                <ul className="space-y-4">
                                    <li className="border-b pb-2">
                                        <a href="#" className="font-medium text-gray-800 hover:text-red-600 transition">
                                            Why Remote Work is Not the Future We Expected
                                        </a>
                                        <p className="text-xs text-gray-500 mt-1">Culture | 4 min read</p>
                                    </li>
                                    <li className="border-b pb-2">
                                        <a href="#" className="font-medium text-gray-800 hover:text-red-600 transition">
                                            The Hidden Cost of Cloud Computing Dependency
                                        </a>
                                        <p className="text-xs text-gray-500 mt-1">Tech | 6 min read</p>
                                    </li>
                                    <li>
                                        <a href="#" className="font-medium text-gray-800 hover:text-red-600 transition">
                                            Revisiting the Cold War Strategy in Modern Geopolitics
                                        </a>
                                        <p className="text-xs text-gray-500 mt-1">World | 7 min read</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </div>
                <section className="bg-blue-700 py-16 px-4">
                    <div className="max-w-4xl mx-auto text-center text-white">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Never Miss an Essential Update
                        </h2>
                        <p className="text-blue-100 max-w-3xl mx-auto mb-8">
                            Get the most important stories delivered straight to your inbox every morning. Free, fast, and factual.
                        </p>
                        <div className="flex flex-col md:flex-row justify-center gap-3">
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                className="w-full md:w-80 px-5 py-3 rounded-lg text-gray-800 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                            />
                            <button className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition">
                                Sign Up for Free
                            </button>
                        </div>
                    </div>
                </section>
            </section>
        </div>


    );
};

export default Latest;