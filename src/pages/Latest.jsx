import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useInView, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import karthi from '../images/investigation.webp';
import Footer from "../components/Footer";
import { Search, Menu, X, Bookmark, Share2, Heart, Clock, ChevronRight, Play, Users, TrendingUp, Star, Zap, Award, Calendar, Eye, MessageCircle, Filter, BookOpen, Camera, Music, Palette, Film, Coffee } from 'lucide-react';

const Latest = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('featured');
  const [savedArticles, setSavedArticles] = useState([]);
  const [likedArticles, setLikedArticles] = useState([]);
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
  const y = useTransform(smoothProgress, [0, 1], ['0%', '30%']);
  const scale = useTransform(smoothProgress, [0, 1], [1, 1.1]);

  // Categories
  const categories = [
    { id: 'featured', label: 'Featured', icon: <Star size={16} />, color: 'from-yellow-500 to-orange-500' },
    { id: 'culture', label: 'Culture', icon: <Palette size={16} />, color: 'from-purple-500 to-pink-500' },
    { id: 'lifestyle', label: 'Lifestyle', icon: <Coffee size={16} />, color: 'from-emerald-500 to-teal-500' },
    { id: 'art', label: 'Art & Design', icon: <Camera size={16} />, color: 'from-rose-500 to-red-500' },
    { id: 'music', label: 'Music', icon: <Music size={16} />, color: 'from-blue-500 to-indigo-500' },
    { id: 'cinema', label: 'Cinema', icon: <Film size={16} />, color: 'from-violet-500 to-purple-500' }
  ];

  // Featured Articles
  const featuredArticles = [
    {
      id: 1,
      title: "The Renaissance of Slow Living in a Fast World",
      excerpt: "How millennials are redefining success through intentional living and mindfulness practices.",
      category: "Lifestyle",
      author: "Emma Wilson",
      authorImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&auto=format&fit=crop",
      readTime: "8 min read",
      date: "Today",
      image: karthi,
      featured: true,
      trending: true,
      likes: "2.4K",
      comments: "428"
    },
    {
      id: 2,
      title: "Minimalism in Modern Architecture",
      excerpt: "Exploring how contemporary architects are embracing simplicity and sustainability.",
      category: "Art & Design",
      author: "David Chen",
      authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop",
      readTime: "12 min read",
      date: "Yesterday",
      image: "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?w=1200&auto=format&fit=crop",
      featured: true,
      trending: false,
      likes: "1.8K",
      comments: "312"
    }
  ];

  // Trending Articles
  const trendingArticles = [
    {
      id: 3,
      title: "The Rise of Independent Music Labels",
      excerpt: "How digital platforms are empowering indie artists worldwide.",
      category: "Music",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&auto=format&fit=crop",
      readTime: "6 min",
      views: "124K"
    },
    {
      id: 4,
      title: "Sustainable Fashion Revolution",
      excerpt: "Designers embracing eco-friendly materials and ethical production.",
      category: "Culture",
      image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&auto=format&fit=crop",
      readTime: "10 min",
      views: "89K"
    },
    {
      id: 5,
      title: "Virtual Art Galleries",
      excerpt: "How technology is transforming the art viewing experience.",
      category: "Art & Design",
      image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&auto=format&fit=crop",
      readTime: "7 min",
      views: "76K"
    }
  ];

  // Latest Articles
  const latestArticles = [
    {
      id: 6,
      title: "Coffee Culture Around the World",
      excerpt: "From Italian espresso bars to Japanese kissaten traditions.",
      category: "Lifestyle",
      author: "Sophia Martinez",
      date: "2 hours ago",
      image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&auto=format&fit=crop",
      readTime: "5 min"
    },
    {
      id: 7,
      title: "The Future of Film Photography",
      excerpt: "Why analog photography is making a surprising comeback.",
      category: "Cinema",
      author: "Alex Johnson",
      date: "4 hours ago",
      image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&auto=format&fit=crop",
      readTime: "9 min"
    },
    {
      id: 8,
      title: "Urban Gardening Movement",
      excerpt: "City dwellers transforming rooftops into green oases.",
      category: "Lifestyle",
      author: "Michael Brown",
      date: "6 hours ago",
      image: "https://images.unsplash.com/photo-1417733403748-83bbc7c05140?w=800&auto=format&fit=crop",
      readTime: "7 min"
    },
    {
      id: 9,
      title: "Digital Nomad Lifestyle",
      excerpt: "Balancing work and travel in the remote work era.",
      category: "Culture",
      author: "Lisa Wang",
      date: "8 hours ago",
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&auto=format&fit=crop",
      readTime: "11 min"
    }
  ];

  // Editor's Picks
  const editorsPicks = [
    {
      id: 10,
      title: "The Psychology of Color in Design",
      excerpt: "How colors influence emotions and consumer behavior.",
      editor: "Maria Gonzalez",
      badge: "Editor's Choice"
    },
    {
      id: 11,
      title: "Meditation in the Digital Age",
      excerpt: "Finding mindfulness amidst constant connectivity.",
      editor: "James Wilson",
      badge: "Must Read"
    },
    {
      id: 12,
      title: "The Art of Japanese Tea Ceremony",
      excerpt: "A centuries-old tradition of mindfulness and beauty.",
      editor: "Sarah Chen",
      badge: "Cultural Insight"
    }
  ];

  // Featured Collections
  const collections = [
    {
      id: 1,
      title: "Modern Architecture",
      count: 24,
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&auto=format&fit=crop",
      color: "from-blue-500/20 to-cyan-500/20"
    },
    {
      id: 2,
      title: "Street Photography",
      count: 18,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop",
      color: "from-purple-500/20 to-pink-500/20"
    },
    {
      id: 3,
      title: "Minimalist Interiors",
      count: 32,
      image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=800&auto=format&fit=crop",
      color: "from-emerald-500/20 to-teal-500/20"
    }
  ];

  // Magazine Issues
  const magazineIssues = [
    {
      id: 1,
      title: "Issue #42: The Future of Creativity",
      month: "December 2024",
      cover: "https://images.unsplash.com/photo-1544716278-e513176f20b5?w-800&auto=format&fit=crop",
      featured: true
    },
    {
      id: 2,
      title: "Issue #41: Urban Renaissance",
      month: "November 2024",
      cover: "https://images.unsplash.com/photo-1545235617-9465d2a55698?w=800&auto=format&fit=crop"
    },
    {
      id: 3,
      title: "Issue #40: Digital Harmony",
      month: "October 2024",
      cover: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&auto=format&fit=crop"
    }
  ];

  // Toggle save article
  const toggleSaveArticle = (articleId) => {
    setSavedArticles(prev => 
      prev.includes(articleId) 
        ? prev.filter(id => id !== articleId)
        : [...prev, articleId]
    );
  };

  // Toggle like article
  const toggleLikeArticle = (articleId) => {
    setLikedArticles(prev => 
      prev.includes(articleId) 
        ? prev.filter(id => id !== articleId)
        : [...prev, articleId]
    );
  };

  return (
    <div 
      ref={containerRef}
      className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-100 text-gray-900 overflow-y-auto"
      style={{ height: '100vh' }}
    >
     


      {/* Hero Section */}
      <section ref={heroRef} className="relative px-4 pt-8 pb-16 overflow-hidden">
        {/* Background Pattern */}
        <motion.div
          style={{ y, scale }}
          className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100"
        />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-grid-gray-900/10 bg-grid-16"></div>
        </div>
        
        <div className="container mx-auto relative z-10">
          {/* Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 max-w-3xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", delay: 0.2 }}
              className="inline-block mb-4"
            >
              <span className="inline-block px-4 py-1 bg-gradient-to-r from-yellow-100 to-orange-100 text-orange-700 rounded-full text-sm font-semibold">
                ISSUE #42 • DECEMBER 2024
              </span>
            </motion.div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 bg-clip-text text-transparent">
                Redefining
              </span>
              <br />
              <span className="bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 bg-clip-text text-transparent">
                Modern Culture
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Exploring the intersection of art, design, and contemporary lifestyle through thoughtful storytelling.
            </p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link to="/subscribe">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-gradient-to-r from-gray-900 to-gray-700 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-shadow"
                >
                  Subscribe Now
                </motion.button>
              </Link>
              <Link to="/latest-issue">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-white border-2 border-gray-200 text-gray-700 rounded-full font-semibold hover:border-gray-300 transition-colors"
                >
                  Read Latest Issue
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Featured Articles Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {featuredArticles.map((article, index) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                whileHover={{ y: -10 }}
                className="group relative overflow-hidden rounded-3xl bg-white shadow-xl border border-gray-100"
              >
                <div className="relative h-64 md:h-80 overflow-hidden">
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.8 }}
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  
                  {/* Badges */}
                  <div className="absolute top-6 left-6 flex gap-2">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm font-semibold">
                      {article.category}
                    </span>
                    {article.trending && (
                      <span className="px-3 py-1 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full text-sm font-semibold flex items-center gap-1">
                        <TrendingUp size={12} />
                        Trending
                      </span>
                    )}
                  </div>
                  
                  {/* Author */}
                  <div className="absolute bottom-6 left-6 flex items-center gap-3">
                    <img 
                      src={article.authorImage} 
                      alt={article.author}
                      className="w-10 h-10 rounded-full border-2 border-white/50"
                    />
                    <div className="text-white">
                      <div className="font-semibold">{article.author}</div>
                      <div className="text-sm opacity-90">{article.date}</div>
                    </div>
                  </div>
                </div>
                
                <div className="p-8">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-gray-700 transition-colors leading-tight">
                    {article.title}
                  </h2>
                  <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-6 text-gray-500">
                      <span className="flex items-center gap-2">
                        <Clock size={16} />
                        {article.readTime}
                      </span>
                      <span className="flex items-center gap-2">
                        <Heart size={16} />
                        {article.likes}
                      </span>
                      <span className="flex items-center gap-2">
                        <MessageCircle size={16} />
                        {article.comments}
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => toggleLikeArticle(article.id)}
                        className={`p-2 rounded-full transition-colors ${
                          likedArticles.includes(article.id)
                            ? 'text-red-500 bg-red-50'
                            : 'hover:bg-gray-100'
                        }`}
                      >
                        <Heart size={20} fill={likedArticles.includes(article.id) ? 'currentColor' : 'none'} />
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => toggleSaveArticle(article.id)}
                        className={`p-2 rounded-full transition-colors ${
                          savedArticles.includes(article.id)
                            ? 'text-blue-500 bg-blue-50'
                            : 'hover:bg-gray-100'
                        }`}
                      >
                        <Bookmark size={20} fill={savedArticles.includes(article.id) ? 'currentColor' : 'none'} />
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Section */}
      <section className="px-4 py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-between mb-10">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg">
                  <TrendingUp className="text-white" size={24} />
                </div>
                <h2 className="text-3xl font-bold">Trending Now</h2>
              </div>
              <Link to="/trending">
                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-2 text-gray-600 hover:text-gray-900 font-medium"
                >
                  View all
                  <ChevronRight size={16} />
                </motion.div>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {trendingArticles.map((article, index) => (
                <motion.article
                  key={article.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8 }}
                  className="group"
                >
                  <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg border border-gray-100 h-full">
                    <div className="relative h-48 overflow-hidden">
                      <motion.img
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm font-semibold">
                          {article.category}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-3 group-hover:text-gray-700 transition-colors line-clamp-2">
                        {article.title}
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-2">
                        {article.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <span className="flex items-center gap-2">
                          <Clock size={14} />
                          {article.readTime}
                        </span>
                        <span className="flex items-center gap-2">
                          <Eye size={14} />
                          {article.views}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="px-4 py-16 bg-white">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-between mb-10">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg">
                  <Zap className="text-white" size={24} />
                </div>
                <h2 className="text-3xl font-bold">Latest Articles</h2>
              </div>
              <div className="flex items-center gap-2">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors text-sm"
                >
                  <Filter size={16} />
                </motion.button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {latestArticles.map((article, index) => (
                <motion.article
                  key={article.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="group"
                >
                  <div className="relative overflow-hidden rounded-xl bg-white shadow-md border border-gray-100 h-full hover:shadow-lg transition-shadow">
                    <div className="relative h-40 overflow-hidden">
                      <motion.img
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    </div>
                    
                    <div className="p-5">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-semibold text-gray-500">
                          {article.category}
                        </span>
                        <span className="text-xs text-gray-400">
                          {article.date}
                        </span>
                      </div>
                      
                      <h3 className="font-bold text-lg mb-2 group-hover:text-gray-700 transition-colors line-clamp-2">
                        {article.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                        {article.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="text-sm text-gray-500">
                          By {article.author}
                        </div>
                        <div className="text-sm text-gray-500 flex items-center gap-1">
                          <Clock size={12} />
                          {article.readTime}
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

      {/* Collections Section */}
      <section className="px-4 py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Featured Collections</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Curated selections exploring specific themes and artistic movements
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {collections.map((collection, index) => (
                <motion.div
                  key={collection.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  className="group relative"
                >
                  <div className="relative h-64 rounded-2xl overflow-hidden">
                    <motion.img
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.8 }}
                      src={collection.image}
                      alt={collection.title}
                      className="w-full h-full object-cover"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-b ${collection.color}`} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    
                    <div className="absolute bottom-6 left-6">
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {collection.title}
                      </h3>
                      <div className="text-white/80">
                        {collection.count} articles
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Editor's Picks */}
      <section className="px-4 py-16 bg-white">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg">
                <Award className="text-white" size={24} />
              </div>
              <h2 className="text-3xl font-bold">Editor's Picks</h2>
            </div>
            
            <div className="space-y-6">
              {editorsPicks.map((pick, index) => (
                <motion.div
                  key={pick.id}
                  initial={{ x: -50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 5 }}
                  className="group p-4 rounded-xl hover:bg-white/50 transition-colors cursor-pointer"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-yellow-100 to-orange-100 flex items-center justify-center">
                        <Award className="text-orange-500" size={20} />
                      </div>
                    </div>
                    <div className="flex-1">
                      <span className="inline-block px-3 py-1 bg-yellow-100 text-yellow-700 text-xs font-semibold rounded-full mb-2">
                        {pick.badge}
                      </span>
                      <h3 className="text-xl font-bold mb-2 group-hover:text-gray-800 transition-colors">
                        {pick.title}
                      </h3>
                      <p className="text-gray-600 mb-2">
                        {pick.excerpt}
                      </p>
                      <div className="text-sm text-gray-500">
                        Recommended by {pick.editor}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Magazine Issues */}
      <section className="px-4 py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Magazine Issues</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Browse our collection of beautifully designed print and digital editions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {magazineIssues.map((issue, index) => (
                <motion.div
                  key={issue.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                  className={`relative rounded-2xl overflow-hidden shadow-xl ${
                    issue.featured ? 'md:col-span-2' : ''
                  }`}
                >
                  <div className={`relative ${issue.featured ? 'h-96' : 'h-64'}`}>
                    <motion.img
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.8 }}
                      src={issue.cover}
                      alt={issue.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                    
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="text-white/80 text-sm mb-2">{issue.month}</div>
                      <h3 className="text-2xl font-bold text-white mb-4">
                        {issue.title}
                      </h3>
                      <Link to="/404">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-6 py-2 bg-white text-gray-900 rounded-full font-semibold"
                      >
                        Read Issue
                      </motion.button>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="px-4 py-16">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="container mx-auto max-w-4xl"
        >
          <div className="text-center bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 md:p-12 text-white overflow-hidden relative">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-grid-white/10 bg-grid-16"></div>
            </div>
            
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="relative z-10"
            >
              <div className="inline-block mb-4 p-2 bg-white/10 rounded-full">
                <Mail className="text-white" size={24} />
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Subscribe to Our Newsletter
              </h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Get weekly curated stories, exclusive interviews, and behind-the-scenes content delivered to your inbox.
              </p>
              
              <motion.form
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
              >
                <input
                  type="email"
                  placeholder="Your email address"
                  required
                  className="flex-1 px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                <Link to="/404">
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="px-8 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-orange-500/25 transition-shadow"
                >
                  Subscribe
                </motion.button>
                </Link>
              </motion.form>
              
              <p className="text-gray-400 text-sm mt-6">
                Join 50,000+ readers who receive our weekly edition
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

     <Footer />

      {/* Scroll Progress Bar */}
      <motion.div
        style={{ scaleX: smoothProgress }}
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-gray-800 to-gray-600 origin-left z-50"
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
            className="fixed bottom-6 right-6 w-12 h-12 bg-gradient-to-br from-gray-800 to-gray-900 rounded-full flex items-center justify-center shadow-xl z-40"
          >
            <ChevronRight size={24} className="text-white transform -rotate-90" />
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
          background: #f1f1f1;
          border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #6b7280, #4b5563);
          border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #4b5563, #374151);
        }

        /* Grid background pattern */
        .bg-grid-gray-900\/10 {
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(17 24 39 / 0.1)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e");
        }

        .bg-grid-16 {
          background-size: 16px 16px;
        }
      `}</style>
    </div>
  );
};

// Add missing Mail icon component
const Mail = ({ size = 24 }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

export default Latest;