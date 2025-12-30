import React, { useState, useEffect, useRef } from 'react';
import Footer from "../components/Footer";
import { motion, useScroll, useTransform, useSpring, useInView, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Search, Menu, X, Clock, Share2, Bookmark, ChevronRight, TrendingUp, Users, Globe, Video, Filter, Calendar, Eye, MessageCircle, ThumbsUp, Play, Newspaper, Briefcase, Code, Music, Star, Zap, Award, Target } from 'lucide-react';
import web from '../images/broadcast.webp';
import ram from '../images/editorial.webp';
import yuva from '../images/harini.webp';
 import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeFilter, setActiveFilter] = useState('trending');
  const [savedArticles, setSavedArticles] = useState([]);
   const navigate = useNavigate();
  const containerRef = useRef(null);
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    container: containerRef
  });

  // Smooth scroll progress
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Parallax transforms
  const y = useTransform(smoothProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(smoothProgress, [0, 0.5, 1], [1, 0.5, 0]);

  // Categories with icons
  const categories = [
    { id: 'all', label: 'All News', count: 42, icon: <Newspaper size={16} /> },
    { id: 'tech', label: 'Technology', count: 12, icon: <Code size={16} /> },
    { id: 'business', label: 'Business', count: 8, icon: <Briefcase size={16} /> },
    { id: 'politics', label: 'Politics', count: 6, icon: <Globe size={16} /> },
    { id: 'sports', label: 'Sports', count: 10, icon: <Target size={16} /> },
    { id: 'entertainment', label: 'Entertainment', count: 6, icon: <Music size={16} /> }
  ];

  // Top Stories
  const topStories = [
    {
      id: 1,
      title: "AI Breakthrough Revolutionizes Medical Diagnostics",
      excerpt: "New AI system achieves 98% accuracy in early disease detection, potentially saving millions of lives annually.",
      category: "Technology",
      time: "2 hours ago",
      readTime: "5 min read",
      views: "124K",
      comments: "2.4K",
      likes: "8.7K",
      image: web,
      author: "Dr. Sarah Chen",
      authorImage: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&auto=format&fit=crop",
      trending: true,
      premium: true
    },
    {
      id: 2,
      title: "Global Markets React to New Economic Policies",
      excerpt: "Stock markets surge following unexpected policy announcements by central banks worldwide.",
      category: "Business",
      time: "4 hours ago",
      readTime: "4 min read",
      views: "89K",
      comments: "1.8K",
      likes: "5.2K",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&auto=format&fit=crop",
      author: "Michael Rodriguez",
      authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop",
      trending: true,
      premium: false
    }
  ];

  // Latest News
  const latestNews = [
    {
      id: 3,
      title: "Climate Summit Reaches Historic Agreement",
      excerpt: "World leaders commit to ambitious carbon reduction targets in landmark climate deal.",
      category: "Politics",
      time: "6 hours ago",
      readTime: "6 min read",
      views: "76K",
      comments: "3.1K",
      image: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=800&auto=format&fit=crop",
      author: "Emma Wilson",
      premium: false
    },
    {
      id: 4,
      title: "New Smartphone Features Revolutionary Camera Tech",
      excerpt: "Latest flagship device introduces never-seen-before photography capabilities with AI enhancements.",
      category: "Technology",
      time: "8 hours ago",
      readTime: "3 min read",
      views: "142K",
      comments: "4.2K",
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&auto=format&fit=crop",
      author: "Alex Johnson",
      premium: true
    },
    {
      id: 5,
      title: "Olympic Athlete Breaks World Record",
      excerpt: "Stunning performance at the international championship sets new world standard.",
      category: "Sports",
      time: "10 hours ago",
      readTime: "2 min read",
      views: "210K",
      comments: "5.7K",
      image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&auto=format&fit=crop",
      author: "David Lee",
      premium: false
    },
    {
      id: 6,
      title: "Award-Winning Film Director Announces New Project",
      excerpt: "Highly anticipated collaboration with top industry talent promises groundbreaking cinema.",
      category: "Entertainment",
      time: "12 hours ago",
      readTime: "4 min read",
      views: "98K",
      comments: "2.9K",
      image: ram,
      author: "Sophia Martinez",
      premium: false
    }
  ];

  // Trending News
  const trendingNews = [
    {
      id: 7,
      title: "Web3 Startup Raises $50M in Series A Funding",
      rank: 1,
      trend: "up",
      change: "+42%",
      category: "Technology"
    },
    {
      id: 8,
      title: "New Renewable Energy Source Discovered by Scientists",
      rank: 2,
      trend: "up",
      change: "+38%",
      category: "Science"
    },
    {
      id: 9,
      title: "Space Tourism Company Announces Mars Mission",
      rank: 3,
      trend: "new",
      change: "NEW",
      category: "Space"
    },
    {
      id: 10,
      title: "Cybersecurity Breach Affects Major Tech Firm",
      rank: 4,
      trend: "down",
      change: "-15%",
      category: "Security"
    }
  ];

  // Video News
  const videoNews = [
    {
      id: 11,
      title: "Live: Tech Conference Keynote",
      duration: "24:18",
      views: "1.2M",
      thumbnail: "https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?w=800&auto=format&fit=crop",
      channel: "Tech Today"
    },
    {
      id: 12,
      title: "Exclusive Interview with Industry Leader",
      duration: "18:42",
      views: "890K",
      thumbnail: "https://images.unsplash.com/photo-1545235617-9465d2a55698?w=800&auto=format&fit=crop",
      channel: "Business Insider"
    },
    {
      id: 13,
      title: "Behind the Scenes: Documentary Premiere",
      duration: "32:15",
      views: "2.1M",
      thumbnail: "https://images.unsplash.com/photo-1536240478700-b869070f9279?w=800&auto=format&fit=crop",
      channel: "Entertainment Now"
    }
  ];

  // Editors Pick
  const editorsPick = [
    {
      id: 14,
      title: "The Future of Remote Work",
      excerpt: "How companies are adapting to the new normal of distributed teams.",
      editor: "Maria Gonzalez",
      badge: "Editor's Choice"
    },
    {
      id: 15,
      title: "Sustainable Tech Innovations",
      excerpt: "Breakthrough technologies that are making the world greener.",
      editor: "James Wilson",
      badge: "Must Read"
    },
    {
      id: 16,
      title: "Mental Health in Digital Age",
      excerpt: "Navigating wellbeing in an always-connected world.",
      editor: "Lisa Chen",
      badge: "Deep Dive"
    }
  ];

  // Popular Authors
  const popularAuthors = [
    {
      id: 1,
      name: "Dr. Sarah Chen",
      role: "Tech Analyst",
      articles: 142,
      followers: "124K",
      image: yuva,
      verified: true
    },
    {
      id: 2,
      name: "Michael Rodriguez",
      role: "Business Editor",
      articles: 89,
      followers: "89K",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop",
      verified: true
    },
    {
      id: 3,
      name: "Emma Wilson",
      role: "Political Correspondent",
      articles: 76,
      followers: "76K",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&auto=format&fit=crop",
      verified: true
    }
  ];

  // Stats
  const stats = [
    { label: "Daily Readers", value: "2.5M+", icon: <Eye size={20} />, color: "text-blue-400" },
    { label: "Articles Published", value: "45K+", icon: <Newspaper size={20} />, color: "text-purple-400" },
    { label: "Countries Reached", value: "180+", icon: <Globe size={20} />, color: "text-green-400" },
    { label: "Author Network", value: "850+", icon: <Users size={20} />, color: "text-pink-400" }
  ];

  // Toggle save article
  const toggleSaveArticle = (articleId) => {
    setSavedArticles(prev => 
      prev.includes(articleId) 
        ? prev.filter(id => id !== articleId)
        : [...prev, articleId]
    );
  };

  return (
    <div 
      ref={containerRef}
      className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white overflow-y-auto"
      style={{ height: '100vh' }}
    >
      {/* Header */}
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="sticky top-0 z-50 bg-gray-900/90 backdrop-blur-md border-b border-gray-700/50"
      >
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2"
            >
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg"></div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                NewsHub
              </span>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              {categories.slice(0, 4).map((cat) => (
                <motion.button
                  key={cat.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                    activeCategory === cat.id
                      ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {cat.icon}
                  {cat.label}
                  <span className="text-xs bg-gray-700 px-1.5 py-0.5 rounded-full">
                    {cat.count}
                  </span>
                </motion.button>
              ))}
            </nav>

            {/* Search and Menu */}
            <div className="flex items-center gap-3">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 hover:bg-gray-700/50 rounded-lg transition-colors relative"
              >
                <Search size={20} />
                {savedArticles.length > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-xs rounded-full flex items-center justify-center">
                    {savedArticles.length}
                  </span>
                )}
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 hover:bg-gray-700/50 rounded-lg transition-colors"
              >
                {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </motion.button>
            </div>
          </div>

          {/* Mobile Categories */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-4 md:hidden overflow-hidden"
              >
                <div className="flex flex-wrap gap-2">
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => {
                        setActiveCategory(cat.id);
                        setIsMenuOpen(false);
                      }}
                      className={`flex items-center gap-2 px-3 py-2 rounded-full text-sm font-medium transition-colors ${
                        activeCategory === cat.id
                          ? 'bg-blue-500 text-white'
                          : 'bg-gray-800 text-gray-300'
                      }`}
                    >
                      {cat.icon}
                      {cat.label}
                      <span className="text-xs bg-gray-700/50 px-1.5 py-0.5 rounded-full">
                        {cat.count}
                      </span>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section ref={heroRef} className="relative px-4 pt-8 pb-12 overflow-hidden">
        {/* Background Elements */}
        <motion.div
          style={{ y }}
          className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20"
        />
        
        <div className="container mx-auto relative z-10">
          {/* Hero Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Breaking News
              </span>
              <br />
              <span className="text-2xl sm:text-3xl md:text-4xl">From Around the World</span>
            </h1>
            <p className="text-gray-300 text-sm sm:text-base max-w-2xl">
              Stay informed with the latest updates, analysis, and insights from trusted sources
            </p>
          </motion.div>

          {/* Stats Bar */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-4 border border-gray-700/50"
              >
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg bg-gray-700/50 ${stat.color}`}>
                    {stat.icon}
                  </div>
                  <div>
                    <div className="text-2xl font-bold">{stat.value}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Featured News Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {topStories.map((news, index) => (
              <motion.article
                key={news.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                whileHover={{ y: -5 }}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50"
              >
                <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    src={news.image}
                    alt={news.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="px-3 py-1 bg-blue-500/90 backdrop-blur-sm rounded-full text-xs font-semibold">
                      {news.category}
                    </span>
                    {news.premium && (
                      <span className="px-3 py-1 bg-yellow-500/90 backdrop-blur-sm rounded-full text-xs font-semibold flex items-center gap-1">
                        <Star size={10} /> Premium
                      </span>
                    )}
                    {news.trending && (
                      <span className="px-3 py-1 bg-red-500/90 backdrop-blur-sm rounded-full text-xs font-semibold flex items-center gap-1">
                        <TrendingUp size={10} /> Trending
                      </span>
                    )}
                  </div>
                  <div className="absolute bottom-4 left-4 flex items-center gap-3">
                    <img 
                      src={news.authorImage} 
                      alt={news.author}
                      className="w-8 h-8 rounded-full border-2 border-white/50"
                    />
                    <div>
                      <div className="text-sm font-semibold">{news.author}</div>
                      <div className="text-xs text-gray-300">{news.time}</div>
                    </div>
                  </div>
                </div>
                
                <div className="p-5 sm:p-6">
                  <h2 className="text-lg sm:text-xl font-bold mb-3 group-hover:text-blue-300 transition-colors">
                    {news.title}
                  </h2>
                  <p className="text-gray-300 text-sm sm:text-base mb-4">
                    {news.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-xs sm:text-sm text-gray-400">
                      <span className="flex items-center gap-1">
                        <Clock size={14} />
                        {news.readTime}
                      </span>
                      <span className="flex items-center gap-1">
                        <Eye size={14} />
                        {news.views}
                      </span>
                      <span className="flex items-center gap-1">
                        <MessageCircle size={14} />
                        {news.comments}
                      </span>
                      <span className="flex items-center gap-1">
                        <ThumbsUp size={14} />
                        {news.likes}
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => toggleSaveArticle(news.id)}
                        className={`p-2 rounded-lg transition-colors ${
                          savedArticles.includes(news.id)
                            ? 'bg-blue-500/20 text-blue-400'
                            : 'hover:bg-gray-700/50'
                        }`}
                      >
                        <Bookmark size={16} />
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 hover:bg-gray-700/50 rounded-lg"
                      >
                        <Share2 size={16} />
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="px-4 py-8">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <h2 className="text-2xl sm:text-3xl font-bold flex items-center gap-2">
                  Latest Stories
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    className="w-6 h-6 border-2 border-blue-400 rounded-full border-t-transparent"
                  />
                </h2>
                <div className="hidden sm:flex gap-2">
                  {['trending', 'latest', 'popular'].map((filter) => (
                    <motion.button
                      key={filter}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setActiveFilter(filter)}
                      className={`px-3 py-1 rounded-full text-sm font-medium capitalize transition-colors ${
                        activeFilter === filter
                          ? 'bg-blue-500 text-white'
                          : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                      }`}
                    >
                      {filter}
                    </motion.button>
                  ))}
                </div>
              </div>
              <Link to="/all-news">
                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-1 text-blue-400 hover:text-blue-300 text-sm font-medium"
                >
                  View All
                  <ChevronRight size={16} />
                </motion.div>
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {latestNews.map((news, index) => (
                <motion.article
                  key={news.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true, amount: 0.3 }}
                  whileHover={{ y: -8 }}
                  className="group"
                >
                  <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 h-full">
                    <div className="relative h-40 overflow-hidden">
                      <motion.img
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                        src={news.image}
                        alt={news.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
                      <div className="absolute top-3 left-3 flex gap-2">
                        <span className="px-2 py-1 bg-gray-900/90 backdrop-blur-sm rounded text-xs font-semibold">
                          {news.category}
                        </span>
                        {news.premium && (
                          <span className="px-2 py-1 bg-yellow-500/90 backdrop-blur-sm rounded text-xs font-semibold">
                            <Star size={10} />
                          </span>
                        )}
                      </div>
                    </div>
                    
                    <div className="p-4">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs text-gray-400">{news.time}</span>
                        <span className="text-xs text-gray-400">{news.readTime}</span>
                      </div>
                      
                      <h3 className="font-bold mb-2 text-sm sm:text-base group-hover:text-blue-300 transition-colors line-clamp-2">
                        {news.title}
                      </h3>
                      <p className="text-gray-300 text-xs sm:text-sm mb-4 line-clamp-2">
                        {news.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-xs text-gray-400">
                          <span className="flex items-center gap-1">
                            <Eye size={12} />
                            {news.views}
                          </span>
                          <span className="flex items-center gap-1">
                            <MessageCircle size={12} />
                            {news.comments}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Link to={`/news/${news.id}`}>
                            <motion.div
                              whileHover={{ x: 5 }}
                              className="flex items-center gap-1 text-blue-400 hover:text-blue-300 text-xs font-medium"
                            >
                              Read
                              <ChevronRight size={12} />
                            </motion.div>
                          </Link>
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => toggleSaveArticle(news.id)}
                            className={`p-1 rounded ${
                              savedArticles.includes(news.id)
                                ? 'text-blue-400'
                                : 'text-gray-400 hover:text-white'
                            }`}
                          >
                            <Bookmark size={14} />
                          </motion.button>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trending Section */}
      <section className="px-4 py-8">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold flex items-center gap-2">
                <TrendingUp className="text-red-400" />
                Trending Now
              </h2>
              <span className="text-sm text-gray-400">Updated every hour</span>
            </div>
            
            <div className="space-y-4">
              {trendingNews.map((news, index) => (
                <motion.div
                  key={news.id}
                  initial={{ x: -50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-700/30 transition-colors group cursor-pointer"
                >
                  <div className="flex-shrink-0">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold ${
                      news.rank === 1 ? 'bg-gradient-to-br from-yellow-500 to-orange-600' :
                      news.rank === 2 ? 'bg-gradient-to-br from-gray-400 to-gray-600' :
                      news.rank === 3 ? 'bg-gradient-to-br from-amber-700 to-amber-900' :
                      'bg-gradient-to-br from-blue-500 to-purple-600'
                    }`}>
                      {news.rank}
                    </div>
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-sm sm:text-base group-hover:text-blue-300 transition-colors truncate">
                      {news.title}
                    </h3>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs px-2 py-0.5 bg-gray-700/50 rounded-full">
                        {news.category}
                      </span>
                      <span className={`text-xs font-semibold ${
                        news.trend === 'up' ? 'text-green-400' :
                        news.trend === 'down' ? 'text-red-400' :
                        'text-blue-400'
                      }`}>
                        {news.change}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex-shrink-0">
                    {news.trend === 'up' && (
                      <span className="text-xs px-2 py-1 bg-green-500/20 text-green-400 rounded-full flex items-center gap-1">
                        ▲ Trending
                      </span>
                    )}
                    {news.trend === 'new' && (
                      <span className="text-xs px-2 py-1 bg-blue-500/20 text-blue-400 rounded-full flex items-center gap-1">
                        <Zap size={10} /> New
                      </span>
                    )}
                    {news.trend === 'down' && (
                      <span className="text-xs px-2 py-1 bg-red-500/20 text-red-400 rounded-full">
                        ▼ Down
                      </span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      

      {/* Editors Pick & Authors */}
      <section className="px-4 py-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Editors Pick */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 flex items-center gap-2">
                <Award className="text-yellow-500" />
                Editor's Pick
              </h2>
              
              <div className="space-y-4">
                {editorsPick.map((pick, index) => (
                  <motion.div
                    key={pick.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 5 }}
                    className="group p-4 rounded-xl bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm border border-gray-700/50 hover:border-blue-500/30 transition-colors cursor-pointer"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-yellow-500/20 to-orange-500/20 flex items-center justify-center">
                          <Award size={24} className="text-yellow-400" />
                        </div>
                      </div>
                      <div>
                        <span className="inline-block px-2 py-1 bg-yellow-500/20 text-yellow-400 text-xs rounded-full mb-2">
                          {pick.badge}
                        </span>
                        <h3 className="font-bold mb-2 group-hover:text-blue-300 transition-colors">
                          {pick.title}
                        </h3>
                        <p className="text-gray-300 text-sm mb-2">
                          {pick.excerpt}
                        </p>
                        <div className="text-xs text-gray-400">
                          By {pick.editor}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Popular Authors */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 flex items-center gap-2">
                <Users className="text-purple-500" />
                Top Authors
              </h2>
              
              <div className="space-y-4">
                {popularAuthors.map((author, index) => (
                  <motion.div
                    key={author.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                    className="p-4 rounded-xl bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm border border-gray-700/50"
                  >
                    <div className="flex items-center gap-4">
                      <div className="relative">
                        <img 
                          src={author.image} 
                          alt={author.name}
                          className="w-14 h-14 rounded-full border-2 border-purple-500/50"
                        />
                        {author.verified && (
                          <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                            <Check size={12} />
                          </div>
                        )}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold flex items-center gap-2">
                          {author.name}
                          {author.verified && (
                            <span className="text-xs px-2 py-0.5 bg-blue-500/20 text-blue-400 rounded-full">
                              Verified
                            </span>
                          )}
                        </h3>
                        <p className="text-gray-400 text-sm">{author.role}</p>
                        <div className="flex items-center gap-4 mt-2 text-xs text-gray-400">
                          <span>{author.articles} articles</span>
                          <span>{author.followers} followers</span>
                        </div>
                      </div>
       <Link to="/404">
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="px-3 py-1 text-sm bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white font-medium"
  >
    Follow
  </motion.button>
</Link>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="px-4 py-12">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="container mx-auto max-w-4xl"
        >
          <div className="text-center bg-gradient-to-br from-blue-900/30 to-purple-900/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 overflow-hidden relative">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-grid-white/10 bg-grid-16"></div>
            </div>
            
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="relative z-10"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                Stay Updated with Daily Digest
              </h2>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Get the most important news delivered directly to your inbox every morning
              </p>
              
              <motion.form
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
                onSubmit={(e) => {
                  e.preventDefault();
                  // Get the email value
                  const formData = new FormData(e.target);
                  const email = formData.get('email');
                  
                  // Optional: Validate email
                  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                  if (!emailRegex.test(email)) {
                    alert('Please enter a valid email address');
                    return;
                  }
                  
                  // Optional: Save email to state/context/API
                  console.log('Subscribed email:', email);
                  
                  // Navigate to 404 page using React Router
                  navigate('/404');
                }}
              >
                <input
                  type="email"
                  name="email" // Add name attribute
                  placeholder="Your email address"
                  required
                  className="flex-1 px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="px-8 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-orange-500/25 transition-shadow"
                >
                  Subscribe
                </motion.button>
              </motion.form>
              
              <p className="text-gray-400 text-sm mt-4">
                Join 500,000+ readers who trust us for their daily news
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>
      <Footer/>

     

      {/* Scroll Progress Bar */}
      <motion.div
        style={{ scaleX: smoothProgress }}
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-600 origin-left z-50"
      />

      {/* Back to Top Button */}
      <AnimatePresence>
        {scrollYProgress.get() > 0.3 && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => containerRef.current.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-6 right-6 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg z-40"
          >
            <ChevronRight size={24} className="transform -rotate-90" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Styles */}
      <style jsx global>{`
        @media (min-width: 320px) {
          html, body, #root {
            height: 100%;
            overflow: hidden;
          }
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }

        ::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #3b82f6, #8b5cf6);
          border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #2563eb, #7c3aed);
        }

        /* Smooth animations */
        * {
          scroll-behavior: smooth;
        }

        /* Grid background pattern */
        .bg-grid-white\/10 {
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(255 255 255 / 0.1)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e");
        }

        .bg-grid-16 {
          background-size: 16px 16px;
        }
      `}</style>
    </div>
  );
};

// Add missing Check component
const Check = ({ size = 16 }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="3" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);


export default Home;