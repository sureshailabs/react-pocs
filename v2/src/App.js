import React, { useState, useEffect } from 'react';
import { 
  Smartphone, 
  Zap, 
  Eye, 
  CheckCircle, 
  ArrowRight, 
  Bot, 
  Camera, 
  CreditCard, 
  TrendingUp,
  Shield,
  Sparkles,
  MessageCircle,
  User,
  Banknote,
  FileText,
  Home,
  BarChart3,
  Wallet,
  Settings,
  ChevronRight,
  X,
  Upload,
  Scan,
  Bell,
  Search,
  Play,
  Users,
  BookOpen,
  Award,
  Heart,
  Share2,
  ThumbsUp,
  Clock,
  AlertCircle,
  Calendar,
  Filter,
  Star,
  Download
} from 'lucide-react';

const GeoGiftSuperApp = () => {
  const [currentScreen, setCurrentScreen] = useState('welcome');
  const [showAssistant, setShowAssistant] = useState(false);
  const [showKYCModal, setShowKYCModal] = useState(false);
  const [kycStep, setKycStep] = useState(0);
  const [showNotification, setShowNotification] = useState(false);
  const [activeTab, setActiveTab] = useState('home');
  const [kycProgress, setKycProgress] = useState({
    panUploaded: false,
    aadharVerified: false,
    bankLinked: false,
    completed: false
  });

  const isKYCComplete = kycProgress.panUploaded && kycProgress.aadharVerified && kycProgress.bankLinked;

  const screens = {
    welcome: 'Welcome Screen',
    login: 'One-Click Login', 
    explore: 'Explore & Engage',
    kyc: 'Complete KYC'
  };

  const researchReports = [
    {
      title: "India's EV Revolution: Top 5 Stocks to Watch",
      author: "Geojit Research",
      time: "2 hours ago",
      type: "Market Analysis",
      likes: 234,
      color: "from-green-500 to-emerald-600"
    },
    {
      title: "Q3 Banking Sector Deep Dive",
      author: "Sector Specialist",
      time: "5 hours ago", 
      type: "Sector Report",
      likes: 156,
      color: "from-blue-500 to-indigo-600"
    },
    {
      title: "Small Cap Gems for 2025",
      author: "Investment Desk",
      time: "1 day ago",
      type: "Stock Picks",
      likes: 312,
      color: "from-purple-500 to-violet-600"
    }
  ];

  const socialPosts = [
    {
      user: "RahulTrader",
      avatar: "RT",
      time: "15 min ago",
      content: "Just booked 12% profits on HDFC Bank! Thanks to Geojit's research report 🚀",
      likes: 45,
      comments: 8
    },
    {
      user: "InvestorPriya",
      avatar: "IP", 
      time: "1 hour ago",
      content: "The new SmartFolios feature is amazing! Auto-rebalancing saved me so much time",
      likes: 67,
      comments: 12
    }
  ];

  const WelcomeScreen = () => (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 flex flex-col justify-center items-center p-6 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-400 opacity-10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-40 right-10 w-48 h-48 bg-purple-400 opacity-10 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-400 opacity-5 rounded-full blur-2xl animate-pulse delay-2000"></div>
      </div>
      
      <div className="text-center z-10 space-y-8">
        <div className="space-y-4">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
            <Sparkles className="w-5 h-5 text-yellow-400" />
            <span className="text-white/90 text-sm font-medium">India's Most Engaging Financial Super App</span>
          </div>
          
          <h1 className="text-5xl font-bold text-white mb-4">
            Geo<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Gift</span>
          </h1>
          
          <p className="text-xl text-white/80 max-w-md mx-auto leading-relaxed">
            Research, connect, learn, and invest — all in one powerful platform
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 max-w-sm mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
            <BookOpen className="w-8 h-8 text-white mb-2" />
            <h3 className="text-white font-semibold text-sm">Expert Research</h3>
            <p className="text-white/70 text-xs">Daily market insights</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
            <Users className="w-8 h-8 text-white mb-2" />
            <h3 className="text-white font-semibold text-sm">Community</h3>
            <p className="text-white/70 text-xs">Learn from traders</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
            <TrendingUp className="w-8 h-8 text-white mb-2" />
            <h3 className="text-white font-semibold text-sm">Trading Tools</h3>
            <p className="text-white/70 text-xs">Advanced platforms</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
            <Award className="w-8 h-8 text-white mb-2" />
            <h3 className="text-white font-semibold text-sm">Rewards</h3>
            <p className="text-white/70 text-xs">Earn while you learn</p>
          </div>
        </div>

        <button 
          onClick={() => setCurrentScreen('login')}
          className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105 flex items-center space-x-3 mx-auto"
        >
          <span>Start Exploring Now</span>
          <ArrowRight className="w-5 h-5" />
        </button>
        
        <p className="text-white/60 text-sm">Start exploring immediately • Complete verification when ready</p>
      </div>
    </div>
  );

  const LoginScreen = () => (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-6 flex flex-col justify-center">
      <div className="max-w-sm mx-auto w-full space-y-8">
        <div className="text-center space-y-4">
          <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto">
            <Zap className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800">Quick Start</h2>
          <p className="text-gray-600">Get instant access to research, community & learning</p>
        </div>

        <div className="space-y-4">
          <button 
            onClick={() => setCurrentScreen('explore')}
            className="w-full bg-white border-2 border-gray-200 rounded-2xl p-4 flex items-center justify-between hover:border-blue-300 hover:bg-blue-50 transition-all duration-300 group"
          >
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">G</span>
              </div>
              <span className="font-semibold text-gray-700">Continue with Google</span>
            </div>
            <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-500" />
          </button>

          <button 
            onClick={() => setCurrentScreen('explore')}
            className="w-full bg-white border-2 border-gray-200 rounded-2xl p-4 flex items-center justify-between hover:border-blue-300 hover:bg-blue-50 transition-all duration-300 group"
          >
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-gray-700 to-black rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg"></span>
              </div>
              <span className="font-semibold text-gray-700">Continue with Apple</span>
            </div>
            <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-500" />
          </button>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-gradient-to-br from-slate-50 to-blue-50 text-gray-500">or</span>
            </div>
          </div>

          <button 
            onClick={() => setCurrentScreen('explore')}
            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-2xl p-4 flex items-center justify-between hover:shadow-lg transition-all duration-300 group"
          >
            <div className="flex items-center space-x-3">
              <Smartphone className="w-6 h-6" />
              <span className="font-semibold">Phone Number (OTP)</span>
            </div>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-4">
          <div className="flex items-start space-x-3">
            <Eye className="w-5 h-5 text-blue-500 mt-0.5" />
            <div className="text-sm">
              <h4 className="font-semibold text-blue-800">Instant Access</h4>
              <p className="text-blue-600">Start exploring research & community immediately. Complete verification only when you're ready to trade.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const ExploreScreen = () => {
    const KYCBanner = () => (
      !isKYCComplete && (
        <div className="bg-gradient-to-r from-orange-100 to-yellow-100 border border-orange-200 rounded-2xl p-4 mb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <AlertCircle className="w-6 h-6 text-orange-500" />
              <div>
                <h4 className="font-semibold text-orange-800">Complete verification to start trading</h4>
                <p className="text-sm text-orange-600">2 quick steps remaining • Takes 3 minutes</p>
              </div>
            </div>
            <button 
              onClick={() => setShowKYCModal(true)}
              className="bg-orange-500 text-white px-4 py-2 rounded-xl font-medium hover:bg-orange-600 transition-colors"
            >
              Complete
            </button>
          </div>
        </div>
      )
    );

    const HomeTab = () => (
      <div className="space-y-6">
        <KYCBanner />
        
        {/* Featured Research */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-gray-800">Today's Research</h3>
            <button className="text-blue-600 font-medium">View All</button>
          </div>
          <div className="space-y-4">
            {researchReports.map((report, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-4 border border-gray-100 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${report.color} rounded-xl flex items-center justify-center`}>
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full font-medium">{report.type}</span>
                      <span className="text-gray-500 text-xs">{report.time}</span>
                    </div>
                    <h4 className="font-semibold text-gray-800 mb-1">{report.title}</h4>
                    <p className="text-sm text-gray-600 mb-2">By {report.author}</p>
                    <div className="flex items-center space-x-4">
                      <button className="flex items-center space-x-1 text-gray-500 hover:text-red-500">
                        <Heart className="w-4 h-4" />
                        <span className="text-sm">{report.likes}</span>
                      </button>
                      <button className="flex items-center space-x-1 text-gray-500 hover:text-blue-500">
                        <Share2 className="w-4 h-4" />
                        <span className="text-sm">Share</span>
                      </button>
                      <button className="flex items-center space-x-1 text-gray-500 hover:text-green-500">
                        <Download className="w-4 h-4" />
                        <span className="text-sm">PDF</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Market Pulse */}
        <div>
          <h3 className="text-lg font-bold text-gray-800 mb-4">Market Pulse</h3>
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-4 border border-green-200">
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-semibold text-green-800">Market's up 1.2% today!</h4>
              <span className="text-green-600 font-bold">+1.2%</span>
            </div>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-lg font-bold text-gray-800">28,450</div>
                <div className="text-sm text-gray-600">Nifty 50</div>
              </div>
              <div>
                <div className="text-lg font-bold text-gray-800">93,250</div>
                <div className="text-sm text-gray-600">Sensex</div>
              </div>
              <div>
                <div className="text-lg font-bold text-gray-800">2,340</div>
                <div className="text-sm text-gray-600">Bank Nifty</div>
              </div>
            </div>
          </div>
        </div>

        {/* Community Highlights */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-gray-800">Community Buzz</h3>
            <button className="text-blue-600 font-medium">Join Discussion</button>
          </div>
          <div className="space-y-4">
            {socialPosts.map((post, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-4 border border-gray-100">
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">{post.avatar}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="font-semibold text-gray-800">{post.user}</span>
                      <span className="text-gray-500 text-sm">{post.time}</span>
                    </div>
                    <p className="text-gray-800 mb-3">{post.content}</p>
                    <div className="flex items-center space-x-4">
                      <button className="flex items-center space-x-1 text-gray-500 hover:text-blue-500">
                        <ThumbsUp className="w-4 h-4" />
                        <span className="text-sm">{post.likes}</span>
                      </button>
                      <button className="flex items-center space-x-1 text-gray-500 hover:text-green-500">
                        <MessageCircle className="w-4 h-4" />
                        <span className="text-sm">{post.comments}</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );

    const ResearchTab = () => (
      <div className="space-y-6">
        <KYCBanner />
        
        <div className="flex items-center space-x-4">
          <div className="flex-1 relative">
            <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
            <input 
              type="text" 
              placeholder="Search reports, sectors, stocks..."
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <button className="p-3 border border-gray-200 rounded-xl hover:bg-gray-50">
            <Filter className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        <div className="flex space-x-2">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium">All Reports</button>
          <button className="bg-gray-100 text-gray-600 px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-200">Sector Analysis</button>
          <button className="bg-gray-100 text-gray-600 px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-200">Stock Picks</button>
        </div>

        <div className="space-y-4">
          {researchReports.concat([
            { title: "Pharma Sector: Post-Patent Opportunities", author: "Healthcare Analyst", time: "3 hours ago", type: "Sector Deep Dive", likes: 89, color: "from-teal-500 to-cyan-600" },
            { title: "IT Services: Cloud Migration Winners", author: "Tech Specialist", time: "6 hours ago", type: "Technology", likes: 156, color: "from-indigo-500 to-blue-600" },
            { title: "Renewable Energy: Policy Impact Analysis", author: "ESG Research", time: "1 day ago", type: "Thematic Report", likes: 203, color: "from-green-500 to-emerald-600" }
          ]).map((report, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-4 border border-gray-100 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className={`w-12 h-12 bg-gradient-to-br ${report.color} rounded-xl flex items-center justify-center`}>
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full font-medium">{report.type}</span>
                    <span className="text-gray-500 text-xs">{report.time}</span>
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-1">{report.title}</h4>
                  <p className="text-sm text-gray-600 mb-2">By {report.author}</p>
                  <div className="flex items-center space-x-4">
                    <button className="flex items-center space-x-1 text-gray-500 hover:text-red-500">
                      <Heart className="w-4 h-4" />
                      <span className="text-sm">{report.likes}</span>
                    </button>
                    <button className="flex items-center space-x-1 text-gray-500 hover:text-blue-500">
                      <Share2 className="w-4 h-4" />
                      <span className="text-sm">Share</span>
                    </button>
                    <button className="flex items-center space-x-1 text-blue-600 hover:text-blue-700 font-medium">
                      <Play className="w-4 h-4" />
                      <span className="text-sm">Read</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );

    const CommunityTab = () => (
      <div className="space-y-6">
        <KYCBanner />
        
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-4 border border-purple-200">
          <div className="flex items-center space-x-3 mb-3">
            <Users className="w-6 h-6 text-purple-600" />
            <h3 className="font-semibold text-purple-800">Join the Conversation</h3>
          </div>
          <p className="text-sm text-purple-700 mb-3">Share insights, ask questions, and learn from 50K+ active traders</p>
          <button className="bg-purple-600 text-white px-4 py-2 rounded-xl font-medium hover:bg-purple-700 transition-colors">
            Start Discussion
          </button>
        </div>

        <div className="flex space-x-2">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium">Trending</button>
          <button className="bg-gray-100 text-gray-600 px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-200">Stocks</button>
          <button className="bg-gray-100 text-gray-600 px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-200">F&O</button>
          <button className="bg-gray-100 text-gray-600 px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-200">Crypto</button>
        </div>

        <div className="space-y-4">
          {[
            { user: "MarketMaven", avatar: "MM", time: "5 min ago", content: "HDFC Bank looks strong after today's results. Anyone else bullish?", likes: 23, comments: 7, tag: "Banking" },
            { user: "TechTrader99", avatar: "TT", time: "12 min ago", content: "TCS guidance was conservative, but execution remains solid. Long-term play for me.", likes: 34, comments: 12, tag: "IT" },
            { user: "ValueInvestor", avatar: "VI", time: "20 min ago", content: "Small cap valuations are getting attractive. Time to build watchlists!", likes: 45, comments: 18, tag: "Small Caps" },
            { user: "OptionsPro", avatar: "OP", time: "35 min ago", content: "Volatility is picking up. Perfect setup for straddle strategies. Thoughts?", likes: 67, comments: 24, tag: "Options" }
          ].map((post, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-4 border border-gray-100">
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">{post.avatar}</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="font-semibold text-gray-800">{post.user}</span>
                    <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">{post.tag}</span>
                    <span className="text-gray-500 text-sm">{post.time}</span>
                  </div>
                  <p className="text-gray-800 mb-3">{post.content}</p>
                  <div className="flex items-center space-x-4">
                    <button className="flex items-center space-x-1 text-gray-500 hover:text-blue-500">
                      <ThumbsUp className="w-4 h-4" />
                      <span className="text-sm">{post.likes}</span>
                    </button>
                    <button className="flex items-center space-x-1 text-gray-500 hover:text-green-500">
                      <MessageCircle className="w-4 h-4" />
                      <span className="text-sm">{post.comments} replies</span>
                    </button>
                    <button className="flex items-center space-x-1 text-gray-500 hover:text-purple-500">
                      <Share2 className="w-4 h-4" />
                      <span className="text-sm">Share</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );

    const AppsTab = () => (
      <div className="space-y-6">
        <KYCBanner />
        
        <div>
          <h3 className="text-lg font-bold text-gray-800 mb-4">Geojit Trading Platforms</h3>
          <div className="grid grid-cols-1 gap-4">
            {[
              { name: 'Flip', desc: 'Lightning-fast mobile trading platform', color: 'from-blue-500 to-blue-600', icon: TrendingUp, badge: 'Most Popular' },
              { name: 'MyGeojit', desc: 'Complete account and portfolio management', color: 'from-green-500 to-green-600', icon: BarChart3, badge: 'Pro Traders' },
              { name: 'FundsGenie', desc: 'Smart mutual fund investing made easy', color: 'from-purple-500 to-purple-600', icon: Sparkles, badge: 'New' },
              { name: 'Smartfolios', desc: 'Curated equity baskets by experts', color: 'from-orange-500 to-orange-600', icon: FileText, badge: '' },
              { name: 'Geojit Private Wealth', desc: 'Premium wealth management services', color: 'from-gray-700 to-gray-800', icon: Shield, badge: 'Premium' }
            ].map((app, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-4 border border-gray-100 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className={`w-14 h-14 bg-gradient-to-br ${app.color} rounded-2xl flex items-center justify-center`}>
                    <app.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <h4 className="font-bold text-gray-800">{app.name}</h4>
                      {app.badge && (
                        <span className="bg-yellow-100 text-yellow-700 text-xs px-2 py-1 rounded-full font-medium">{app.badge}</span>
                      )}
                    </div>
                    <p className="text-gray-600 text-sm mb-3">{app.desc}</p>
                    <div className="flex items-center space-x-3">
                      <button 
                        onClick={() => setShowNotification(true)}
                        className="bg-gray-100 text-gray-700 px-4 py-2 rounded-xl font-medium hover:bg-gray-200 transition-colors"
                      >
                        Try Demo
                      </button>
                      <button 
                        onClick={() => setShowKYCModal(true)}
                        className="bg-blue-500 text-white px-4 py-2 rounded-xl font-medium hover:bg-blue-600 transition-colors"
                      >
                        Start Trading
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Learning Resources */}
        <div>
          <h3 className="text-lg font-bold text-gray-800 mb-4">Learning Center</h3>
          <div className="grid grid-cols-1 gap-4">
            {[
              { title: 'Options Trading Masterclass', duration: '45 min', level: 'Intermediate', views: '12K', color: 'from-red-500 to-pink-500' },
              { title: 'Technical Analysis Basics', duration: '30 min', level: 'Beginner', views: '25K', color: 'from-green-500 to-emerald-500' },
              { title: 'Portfolio Diversification Guide', duration: '25 min', level: 'Beginner', views: '8K', color: 'from-purple-500 to-violet-500' }
            ].map((course, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-4 border border-gray-100 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className={`w-14 h-14 bg-gradient-to-br ${course.color} rounded-2xl flex items-center justify-center`}>
                    <Play className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-800 mb-2">{course.title}</h4>
                    <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                      <span className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{course.duration}</span>
                      </span>
                      <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full">{course.level}</span>
                      <span>{course.views} views</span>
                    </div>
                    <button className="bg-blue-50 text-blue-600 px-4 py-2 rounded-xl font-medium hover:bg-blue-100 transition-colors">
                      Watch Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );

    const ProductsTab = () => (
      <div className="space-y-6">
        <KYCBanner />
        
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-4 border border-blue-200">
          <div className="flex items-center space-x-3 mb-3">
            <Award className="w-6 h-6 text-blue-600" />
            <h3 className="font-semibold text-blue-800">Complete Suite of Financial Products</h3>
          </div>
          <p className="text-sm text-blue-700">Everything you need to build and manage wealth</p>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {[
            { name: 'Flip', desc: 'Lightning-fast trading platform', features: ['₹0 AMC', 'Advanced charts', 'Real-time data'], color: 'from-blue-500 to-blue-600', icon: TrendingUp },
            { name: 'MyGeojit', desc: 'Complete account and portfolio management', features: ['Portfolio analytics', 'P&L tracking', 'Tax reports'], color: 'from-green-500 to-green-600', icon: BarChart3 },
            { name: 'FundsGenie', desc: 'Smart mutual fund investing made easy', features: ['0% commission', 'SIP automation', 'Goal planning'], color: 'from-purple-500 to-purple-600', icon: Sparkles },
            { name: 'Smartfolios', desc: 'Curated equity baskets by experts', features: ['Expert curation', 'Auto-rebalance', 'Theme-based'], color: 'from-orange-500 to-orange-600', icon: FileText },
            { name: 'Geojit Private Wealth', desc: 'Premium wealth management services', features: ['Dedicated RM', 'Exclusive products', 'High-net-worth'], color: 'from-gray-700 to-gray-800', icon: Shield }
          ].map((product, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-5 border border-gray-100 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className={`w-14 h-14 bg-gradient-to-br ${product.color} rounded-2xl flex items-center justify-center`}>
                  <product.icon className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-gray-800 mb-1">{product.name}</h4>
                  <p className="text-gray-600 text-sm mb-3">{product.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {product.features.map((feature, fidx) => (
                      <span key={fidx} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">
                        {feature}
                      </span>
                    ))}
                  </div>
                  <button 
                    onClick={() => setShowKYCModal(true)}
                    className="bg-blue-50 text-blue-600 px-4 py-2 rounded-xl font-medium hover:bg-blue-100 transition-colors"
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );

    return (
      <div className="min-h-screen bg-gray-50 pb-20">
        {/* Header */}
        <div className="bg-white border-b border-gray-100 p-4 sticky top-0 z-40">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold">G</span>
              </div>
              <div>
                <h2 className="font-bold text-gray-800">Welcome to GeoGift</h2>
                <p className="text-sm text-gray-600">Explore, learn, then trade</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <button className="relative p-2">
                <Bell className="w-6 h-6 text-gray-600" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
              </button>
              <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                <User className="w-5 h-5 text-gray-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-4">
          {activeTab === 'home' && <HomeTab />}
          {activeTab === 'research' && <ResearchTab />}
          {activeTab === 'community' && <CommunityTab />}
          {activeTab === 'products' && <ProductsTab />}
        </div>

        {/* Bottom Navigation */}
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-4 py-3">
          <div className="flex items-center justify-around max-w-sm mx-auto">
            <button 
              onClick={() => setActiveTab('home')}
              className={`flex flex-col items-center space-y-1 ${activeTab === 'home' ? 'text-blue-500' : 'text-gray-400'}`}
            >
              <Home className="w-6 h-6" />
              <span className="text-xs font-medium">Home</span>
            </button>
            <button 
              onClick={() => setActiveTab('research')}
              className={`flex flex-col items-center space-y-1 ${activeTab === 'research' ? 'text-blue-500' : 'text-gray-400'}`}
            >
              <BookOpen className="w-6 h-6" />
              <span className="text-xs font-medium">Research</span>
            </button>
            <button 
              onClick={() => setActiveTab('community')}
              className={`flex flex-col items-center space-y-1 ${activeTab === 'community' ? 'text-blue-500' : 'text-gray-400'}`}
            >
              <Users className="w-6 h-6" />
              <span className="text-xs font-medium">Community</span>
            </button>
            <button 
              onClick={() => setActiveTab('products')}
              className={`flex flex-col items-center space-y-1 ${activeTab === 'products' ? 'text-blue-500' : 'text-gray-400'}`}
            >
              <Sparkles className="w-6 h-6" />
              <span className="text-xs font-medium">Products</span>
            </button>
          </div>
        </div>

        {/* AI Assistant Bubble */}
        <button
          onClick={() => setShowAssistant(true)}
          className="fixed bottom-24 right-6 w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 z-30"
        >
          <Bot className="w-7 h-7 text-white" />
        </button>

        {/* KYC Progress Indicator */}
        {!isKYCComplete && (
          <div className="fixed top-20 right-4 bg-white rounded-full p-2 shadow-lg border border-gray-200 z-30">
            <button 
              onClick={() => setShowKYCModal(true)}
              className="flex items-center space-x-2"
            >
              <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                <span className="text-orange-600 font-bold text-xs">2/4</span>
              </div>
              <span className="text-xs text-gray-600 font-medium">KYC</span>
            </button>
          </div>
        )}
      </div>
    );
  };

  const KYCModal = () => (
    showKYCModal && (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl w-full max-w-sm max-h-96 overflow-hidden">
          <div className="p-4 border-b border-gray-100 flex items-center justify-between">
            <h3 className="font-bold text-gray-800">Complete Verification</h3>
            <button onClick={() => setShowKYCModal(false)}>
              <X className="w-6 h-6 text-gray-600" />
            </button>
          </div>
          
          <div className="p-4 space-y-4 max-h-80 overflow-y-auto">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-3">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Ready to start trading?</h4>
              <p className="text-sm text-gray-600">Complete these quick steps to unlock all features</p>
            </div>

            <div className="space-y-3">
              <div className={`p-4 rounded-2xl border-2 ${kycProgress.panUploaded ? 'bg-green-50 border-green-200' : 'bg-gray-50 border-gray-200'}`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <FileText className="w-6 h-6 text-blue-500" />
                    <div>
                      <h4 className="font-semibold text-gray-800">PAN Verification</h4>
                      <p className="text-sm text-gray-600">Upload PAN card photo</p>
                    </div>
                  </div>
                  {kycProgress.panUploaded ? (
                    <CheckCircle className="w-6 h-6 text-green-500" />
                  ) : (
                    <button 
                      onClick={() => setKycProgress({...kycProgress, panUploaded: true})}
                      className="bg-blue-500 text-white px-3 py-1 rounded-lg text-sm font-medium"
                    >
                      Upload
                    </button>
                  )}
                </div>
              </div>

              <div className={`p-4 rounded-2xl border-2 ${kycProgress.aadharVerified ? 'bg-green-50 border-green-200' : 'bg-gray-50 border-gray-200'}`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Shield className="w-6 h-6 text-green-500" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Aadhaar Verification</h4>
                      <p className="text-sm text-gray-600">OTP-based verification</p>
                    </div>
                  </div>
                  {kycProgress.aadharVerified ? (
                    <CheckCircle className="w-6 h-6 text-green-500" />
                  ) : (
                    <button 
                      onClick={() => setKycProgress({...kycProgress, aadharVerified: true})}
                      className="bg-green-500 text-white px-3 py-1 rounded-lg text-sm font-medium"
                    >
                      Verify
                    </button>
                  )}
                </div>
              </div>

              <div className={`p-4 rounded-2xl border-2 ${kycProgress.bankLinked ? 'bg-green-50 border-green-200' : 'bg-gray-50 border-gray-200'}`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Banknote className="w-6 h-6 text-purple-500" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Bank Account</h4>
                      <p className="text-sm text-gray-600">Link for fund transfers</p>
                    </div>
                  </div>
                  {kycProgress.bankLinked ? (
                    <CheckCircle className="w-6 h-6 text-green-500" />
                  ) : (
                    <button 
                      onClick={() => setKycProgress({...kycProgress, bankLinked: true})}
                      className="bg-purple-500 text-white px-3 py-1 rounded-lg text-sm font-medium"
                    >
                      Link
                    </button>
                  )}
                </div>
              </div>
            </div>

            {kycProgress.panUploaded && kycProgress.aadharVerified && kycProgress.bankLinked && (
              <div className="text-center mt-6">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-bold text-green-800 mb-2">Verification Complete! 🎉</h4>
                <p className="text-sm text-green-700 mb-4">You can now start trading and investing</p>
                <button 
                  onClick={() => {
                    setShowKYCModal(false);
                    setKycProgress({...kycProgress, completed: true});
                    setShowNotification(true);
                  }}
                  className="bg-green-500 text-white px-6 py-3 rounded-2xl font-semibold hover:bg-green-600 transition-colors"
                >
                  Start Trading Now
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  );

  const AssistantModal = () => (
    showAssistant && (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-end">
        <div className="bg-white w-full max-w-sm mx-auto rounded-t-3xl max-h-96 overflow-hidden">
          <div className="p-4 border-b border-gray-100 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">GeoAI Assistant</h4>
                <p className="text-sm text-green-600">● Online</p>
              </div>
            </div>
            <button onClick={() => setShowAssistant(false)}>
              <X className="w-6 h-6 text-gray-600" />
            </button>
          </div>
          
          <div className="p-4 space-y-4 max-h-60 overflow-y-auto">
            <div className="bg-gray-100 rounded-2xl p-3 max-w-xs">
              <p className="text-sm text-gray-800">Hi! I can help you explore our platform, understand products, or guide you through verification when you're ready.</p>
            </div>
            
            <div className="flex flex-wrap gap-2">
              <button className="bg-blue-50 text-blue-600 px-3 py-2 rounded-full text-sm border border-blue-200 hover:bg-blue-100">
                Platform tour
              </button>
              <button className="bg-green-50 text-green-600 px-3 py-2 rounded-full text-sm border border-green-200 hover:bg-green-100">
                Research explained
              </button>
              <button 
                onClick={() => setShowKYCModal(true)}
                className="bg-orange-50 text-orange-600 px-3 py-2 rounded-full text-sm border border-orange-200 hover:bg-orange-100"
              >
                Complete KYC
              </button>
            </div>
          </div>
          
          <div className="p-4 border-t border-gray-100">
            <div className="flex items-center space-x-3">
              <input 
                type="text" 
                placeholder="Ask me anything..."
                className="flex-1 p-3 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              <button className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                <ArrowRight className="w-6 h-6 text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  );

  const NotificationPopup = () => (
    showNotification && (
      <div className="fixed top-24 left-4 right-4 bg-blue-500 text-white rounded-2xl p-4 shadow-lg z-40 max-w-sm mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <CheckCircle className="w-6 h-6" />
            <div>
              <h4 className="font-semibold">Action completed!</h4>
              <p className="text-sm text-blue-100">Continue exploring or complete KYC to trade</p>
            </div>
          </div>
          <button onClick={() => setShowNotification(false)}>
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>
    )
  );

  return (
    <div className="max-w-sm mx-auto bg-white shadow-2xl rounded-3xl overflow-hidden">
      {/* Screen Navigation */}
      <div className="bg-gray-800 text-white p-4 flex items-center justify-between">
        <h1 className="font-bold">GeoGift Engagement Flow</h1>
        <div className="flex space-x-2">
          {Object.entries(screens).map(([key, label]) => (
            <button
              key={key}
              onClick={() => setCurrentScreen(key)}
              className={`px-3 py-1 rounded-lg text-xs font-medium transition-colors ${
                currentScreen === key 
                  ? 'bg-blue-500 text-white' 
                  : 'bg-gray-600 text-gray-300 hover:bg-gray-500'
              }`}
            >
              {label.split(' ')[0]}
            </button>
          ))}
        </div>
      </div>

      {/* Screen Content */}
      <div className="relative">
        {currentScreen === 'welcome' && <WelcomeScreen />}
        {currentScreen === 'login' && <LoginScreen />}
        {currentScreen === 'explore' && <ExploreScreen />}
        
        <KYCModal />
        <AssistantModal />
        <NotificationPopup />
      </div>
    </div>
  );
};

export default GeoGiftSuperApp;

