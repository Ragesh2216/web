import { useState, useEffect, useRef } from 'react';
import { 
  BarChart, Bar, LineChart, Line, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer 
} from 'recharts';

// Fixed Animated Number Component
const AnimatedNumber = ({ value, duration = 2000, className = "" }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    
    // Handle different value types
    let numericValue;
    let prefix = '';
    let suffix = '';

    if (typeof value === 'string') {
      const numericMatch = value.match(/([^0-9]*)([0-9]+)([^0-9]*)/);
      if (numericMatch) {
        prefix = numericMatch[1] || '';
        numericValue = parseInt(numericMatch[2]);
        suffix = numericMatch[3] || '';
      } else {
        numericValue = 0;
      }
    } else {
      numericValue = value;
    }

    const increment = numericValue / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= numericValue) {
        setCount(numericValue);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isVisible, value, duration]);

  const displayValue = typeof value === 'string' 
    ? `${prefix}${count}${suffix}`
    : count;

  return (
    <span ref={ref} className={className}>
      {displayValue}
    </span>
  );
};

const SimpleAnimatedNumber = ({ value, duration = 2000, className = "" }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const end = typeof value === 'string' ? parseInt(value.replace(/[^0-9]/g, '')) || 0 : value;
    const increment = end / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isVisible, value, duration]);

  return (
    <span ref={ref} className={className}>
      {typeof value === 'string' ? value.replace(/[0-9]+/, count) : count}
    </span>
  );
};

const MonthArchive = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // News Analytics Data
  const trafficData = [
    { day: 'Mon', views: 125000, engagement: 65 },
    { day: 'Tue', views: 145000, engagement: 72 },
    { day: 'Wed', views: 165000, engagement: 81 },
    { day: 'Thu', views: 158000, engagement: 78 },
    { day: 'Fri', views: 172000, engagement: 85 },
    { day: 'Sat', views: 189000, engagement: 92 },
    { day: 'Sun', views: 210000, engagement: 88 }
  ];

  const categoryDistribution = [
    { name: 'Politics', value: 25, color: '#3B82F6' },
    { name: 'Technology', value: 20, color: '#10B981' },
    { name: 'Business', value: 18, color: '#F59E0B' },
    { name: 'Sports', value: 15, color: '#EF4444' },
    { name: 'Entertainment', value: 12, color: '#8B5CF6' },
    { name: 'Lifestyle', value: 10, color: '#EC4899' }
  ];

  const articlePerformance = [
    { status: 'Published', count: 42, color: '#10B981' },
    { status: 'Trending', count: 28, color: '#3B82F6' },
    { status: 'Draft', count: 15, color: '#F59E0B' },
    { status: 'Scheduled', count: 8, color: '#8B5CF6' }
  ];

  const COLORS = ['#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6', '#EC4899'];

  const quickStats = [
    { title: 'Daily Readers', value: '2.5M+', change: '+15.5%', trend: 'up', icon: '👁️' },
    { title: 'Articles Published', value: '45K+', change: '+8.2%', trend: 'up', icon: '📰' },
    { title: 'Engagement Rate', value: '78%', change: '+4.1%', trend: 'up', icon: '💬' },
    { title: 'Avg. Read Time', value: '4.2m', change: '-2.2%', trend: 'down', icon: '⏱️' }
  ];

  const trendingArticles = [
    { id: 1, title: 'AI Breakthrough in Medicine', author: 'Tech Review', views: '124K', time: '2h ago', icon: '⚕️' },
    { id: 2, title: 'Global Market Update', author: 'Business Daily', views: '89K', time: '5h ago', icon: '📈' },
    { id: 3, title: 'Climate Summit Results', author: 'Eco News', views: '76K', time: '1d ago', icon: '🌍' },
    { id: 4, title: 'Olympic Records Broken', author: 'Sports Network', views: '210K', time: '1d ago', icon: '🏅' }
  ];

  const topAuthors = [
    { name: 'Sarah Chen', role: 'Tech Editor', articles: 142, rate: 94, status: 'Active', avatar: 'SC', color: 'from-blue-500 to-cyan-500' },
    { name: 'Mike Johnson', role: 'Politics Lead', articles: 89, rate: 91, status: 'Active', avatar: 'MJ', color: 'from-purple-500 to-pink-500' },
    { name: 'Emma Wilson', role: 'Business Analyst', articles: 76, rate: 89, status: 'Active', avatar: 'EW', color: 'from-green-500 to-teal-500' },
    { name: 'David Lee', role: 'Sports Writer', articles: 210, rate: 92, status: 'Away', avatar: 'DL', color: 'from-orange-500 to-red-500' }
  ];

  const platformPerformance = [
    { platform: 'Website', users: 1250000, growth: '+18%', color: '#3B82F6' },
    { platform: 'Mobile App', users: 980000, growth: '+25%', color: '#10B981' },
    { platform: 'Newsletter', users: 540000, growth: '+12%', color: '#F59E0B' },
    { platform: 'Social Media', users: 760000, growth: '+15%', color: '#8B5CF6' }
  ];

  return (
    <div className="min-h-screen mt-16 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-float-slow opacity-10"
            style={{
              width: `${Math.random() * 100 + 20}px`,
              height: `${Math.random() * 100 + 20}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              backgroundColor: ['#3B82F6', '#8B5CF6', '#EC4899', '#F59E0B', '#10B981'][Math.floor(Math.random() * 5)],
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${Math.random() * 20 + 10}s`
            }}
          />
        ))}
      </div>

      {/* Header */}
     

      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 py-4 sm:py-6 relative z-10">
        {/* Quick Stats with Animated Numbers */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6">
          {quickStats.map((stat, index) => (
            <div 
              key={index}
              className="bg-white/80 backdrop-blur-md rounded-2xl shadow-sm p-4 sm:p-6 border border-white/20 hover:shadow-lg transition-all duration-500 transform hover:-translate-y-1 animate-fade-in-up group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center justify-between">
                <div className="min-w-0 flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="text-xl">{stat.icon}</span>
                    <p className="text-xs sm:text-sm font-medium text-gray-600 truncate">{stat.title}</p>
                  </div>
                  <p className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mt-1 sm:mt-2 truncate">
                    <SimpleAnimatedNumber value={stat.value} duration={1500} />
                  </p>
                </div>
                <div className={`p-2 sm:p-3 rounded-full flex-shrink-0 ml-2 transition-all duration-300 group-hover:scale-110 ${
                  stat.trend === 'up' ? 'bg-green-100/80' : 'bg-red-100/80'
                }`}>
                  <svg className={`w-4 h-4 sm:w-6 sm:h-6 ${
                    stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
                  }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                      d={stat.trend === 'up' ? "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" : "M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"} />
                  </svg>
                </div>
              </div>
              <p className={`text-xs mt-1 sm:mt-2 truncate flex items-center space-x-1 ${
                stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
              }`}>
                <span>{stat.change}</span>
                <span>from yesterday</span>
              </p>
            </div>
          ))}
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-6">
          {/* Traffic & Engagement Chart */}
          <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-sm p-4 sm:p-6 border border-white/20 hover:shadow-lg transition-all duration-500 animate-fade-in-up">
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-4 flex items-center">
              📈 Weekly Traffic & Engagement
            </h3>
            <div className="h-64 sm:h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={trafficData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="day" fontSize={12} />
                  <YAxis fontSize={12} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'rgba(255, 255, 255, 0.9)',
                      backdropFilter: 'blur(10px)',
                      border: 'none',
                      borderRadius: '12px',
                      boxShadow: '0 10px 25px rgba(0,0,0,0.1)'
                    }}
                  />
                  <Legend />
                  <Line 
                    type="monotone" 
                    dataKey="views" 
                    stroke="url(#viewsGradient)" 
                    strokeWidth={3}
                    dot={{ fill: '#3B82F6', strokeWidth: 2, r: 4 }}
                    activeDot={{ r: 6, fill: '#3B82F6' }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="engagement" 
                    stroke="url(#engagementGradient)" 
                    strokeWidth={3}
                    dot={{ fill: '#10B981', strokeWidth: 2, r: 4 }}
                    activeDot={{ r: 6, fill: '#10B981' }}
                  />
                  <defs>
                    <linearGradient id="viewsGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#3B82F6" stopOpacity={1}/>
                      <stop offset="100%" stopColor="#3B82F6" stopOpacity={0.3}/>
                    </linearGradient>
                    <linearGradient id="engagementGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#10B981" stopOpacity={1}/>
                      <stop offset="100%" stopColor="#10B981" stopOpacity={0.3}/>
                    </linearGradient>
                  </defs>
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Category Distribution */}
          <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-sm p-4 sm:p-6 border border-white/20 hover:shadow-lg transition-all duration-500 animate-fade-in-up">
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-4 flex items-center">
              🏷️ News Category Distribution
            </h3>
            <div className="h-64 sm:h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={categoryDistribution}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    animationBegin={0}
                    animationDuration={1500}
                  >
                    {categoryDistribution.map((entry, index) => (
                      <Cell 
                        key={`cell-${index}`} 
                        fill={entry.color}
                        stroke="white"
                        strokeWidth={2}
                      />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'rgba(255, 255, 255, 0.9)',
                      backdropFilter: 'blur(10px)',
                      border: 'none',
                      borderRadius: '12px'
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Platform Performance & Trending Articles */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          {/* Platform Performance */}
          <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-sm p-4 sm:p-6 border border-white/20 hover:shadow-lg transition-all duration-500 animate-fade-in-up">
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-4 flex items-center">
              📱 Platform Performance
            </h3>
            <div className="space-y-4">
              {platformPerformance.map((platform, index) => (
                <div 
                  key={index} 
                  className="flex items-center justify-between p-3 rounded-xl bg-gradient-to-r from-white to-gray-50/50 hover:shadow-md transition-all duration-300 transform hover:scale-[1.02] group"
                >
                  <div className="flex items-center min-w-0 flex-1">
                    <div 
                      className="w-3 h-3 rounded-full mr-3 flex-shrink-0 animate-pulse"
                      style={{ backgroundColor: platform.color }}
                    ></div>
                    <span className="text-sm font-medium text-gray-700 truncate group-hover:text-gray-900">
                      {platform.platform}
                    </span>
                  </div>
                  <div className="flex items-center space-x-4 ml-2">
                    <span className="text-sm font-semibold text-gray-900 whitespace-nowrap">
                      <SimpleAnimatedNumber value={`${(platform.users/1000000).toFixed(1)}M`} duration={1000} />
                    </span>
                    <div className="w-24 bg-gray-200 rounded-full h-2 overflow-hidden">
                      <div 
                        className="h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ 
                          width: `${(platform.users / 1250000) * 100}%`,
                          backgroundColor: platform.color
                        }}
                      ></div>
                    </div>
                    <span className="text-xs font-medium text-green-600 whitespace-nowrap">
                      {platform.growth}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Trending Articles */}
          <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-sm p-4 sm:p-6 border border-white/20 hover:shadow-lg transition-all duration-500 animate-fade-in-up">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 flex items-center">
                🔥 Trending Articles
              </h3>
              <button className="text-xs sm:text-sm text-blue-600 hover:text-blue-700 font-medium transition-all duration-300 transform hover:scale-105">
                View All →
              </button>
            </div>
            <div className="space-y-3">
              {trendingArticles.map((article, index) => (
                <div 
                  key={article.id} 
                  className="flex items-center justify-between p-3 rounded-xl bg-gradient-to-r from-white to-gray-50/50 hover:shadow-md transition-all duration-300 transform hover:scale-[1.02] group animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center min-w-0 flex-1 pr-2">
                    <span className="text-lg mr-3 group-hover:scale-110 transition-transform duration-300">
                      {article.icon}
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="font-medium text-gray-900 text-sm sm:text-base truncate group-hover:text-blue-600 transition-colors">
                        {article.title}
                      </p>
                      <p className="text-gray-500 text-xs sm:text-sm truncate">{article.author}</p>
                    </div>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 transition-all duration-300 group-hover:scale-105">
                      🔥 Hot
                    </span>
                    <p className="text-gray-500 text-xs mt-1 whitespace-nowrap flex items-center gap-1 group-hover:text-gray-700">
                      <span>👁️ {article.views}</span>
                      <span>•</span>
                      <span>{article.time}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Article Performance */}
        <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-sm p-4 sm:p-6 mt-6 border border-white/20 hover:shadow-lg transition-all duration-500 animate-fade-in-up">
          <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-4 flex items-center">
            📊 Article Performance Status
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {articlePerformance.map((article, index) => (
              <div 
                key={index}
                className="p-4 rounded-xl bg-gradient-to-br from-white to-gray-50/50 hover:shadow-md transition-all duration-300 transform hover:scale-[1.02] group"
              >
                <div className="flex items-center justify-between mb-3">
                  <div 
                    className="w-3 h-3 rounded-full animate-pulse"
                    style={{ backgroundColor: article.color }}
                  ></div>
                  <span className="text-lg">{['📰','🔥','📝','⏰'][index]}</span>
                </div>
                <h4 className="text-sm font-medium text-gray-700 mb-2 group-hover:text-gray-900">
                  {article.status}
                </h4>
                <div className="flex items-end justify-between">
                  <span className="text-xl sm:text-2xl font-bold text-gray-900">
                    <SimpleAnimatedNumber value={article.count} duration={1000} />
                  </span>
                  <div className="text-right">
                    <div className="text-xs text-gray-500">Articles</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Authors Performance */}
        <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-sm p-4 sm:p-6 mt-6 border border-white/20 hover:shadow-lg transition-all duration-500 animate-fade-in-up">
          <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-4 flex items-center">
            👥 Top Authors Performance
          </h3>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200/50 text-sm">
              <thead>
                <tr>
                  <th className="px-3 py-2 sm:px-4 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Author</th>
                  <th className="px-3 py-2 sm:px-4 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
                  <th className="px-3 py-2 sm:px-4 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Articles</th>
                  <th className="px-3 py-2 sm:px-4 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Engagement</th>
                  <th className="px-3 py-2 sm:px-4 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200/50">
                {topAuthors.map((author, index) => (
                  <tr 
                    key={index}
                    className="hover:bg-white/50 transition-all duration-300 transform hover:scale-[1.01] animate-fade-in-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <td className="px-3 py-2 sm:px-4 sm:py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className={`w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r ${author.color} rounded-full flex items-center justify-center text-white font-semibold text-xs sm:text-sm mr-2 sm:mr-3 shadow-lg`}>
                          {author.avatar}
                        </div>
                        <div className="min-w-0">
                          <div className="text-sm font-medium text-gray-900 truncate group-hover:text-blue-600 transition-colors">
                            {author.name}
                          </div>
                          <div className="text-gray-500 text-xs truncate">{author.name.toLowerCase().replace(' ', '.')}@news.com</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-3 py-2 sm:px-4 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-gray-900 truncate">
                      {author.role}
                    </td>
                    <td className="px-3 py-2 sm:px-4 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-gray-900 font-semibold">
                      <SimpleAnimatedNumber value={author.articles} duration={1200} />
                    </td>
                    <td className="px-3 py-2 sm:px-4 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-gray-900 font-semibold">
                      <SimpleAnimatedNumber value={`${author.rate}%`} duration={1200} />
                    </td>
                    <td className="px-3 py-2 sm:px-4 sm:py-4 whitespace-nowrap">
                      <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium transition-all duration-300 hover:scale-105 ${
                        author.status === 'Active' 
                          ? 'bg-green-100 text-green-800 animate-pulse-slow'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {author.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Enhanced CSS Animations */}
      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes floatSlow {
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
        
        @keyframes pulseSlow {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.7;
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
        }
        
        .animate-float-slow {
          animation: floatSlow 20s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulseSlow 2s ease-in-out infinite;
        }

        @keyframes ping {
          75%, 100% {
            transform: scale(2);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default MonthArchive;