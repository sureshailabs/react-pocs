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
Scan
} from 'lucide-react';

const GeoGiftSuperApp = () => {
const [currentScreen, setCurrentScreen] = useState('welcome');
const [showAssistant, setShowAssistant] = useState(false);
const [onboardingStep, setOnboardingStep] = useState(0);
const [userProfile, setUserProfile] = useState({
name: '',
phone: '',
email: '',
panUploaded: false,
aadharUploaded: false,
bankLinked: false,
kycComplete: false
});

const screens = {
welcome: 'Welcome Screen',
login: 'One-Click Login',
onboarding: 'Smart Onboarding',
dashboard: 'Super App Dashboard'
};

const onboardingSteps = [
{ title: 'Quick Start', desc: 'Basic info via smart capture', icon: Zap },
{ title: 'Identity', desc: 'AI-powered document verification', icon: Shield },
{ title: 'Banking', desc: 'Instant account linking', icon: CreditCard },
{ title: 'Ready!', desc: 'Start trading & investing', icon: CheckCircle }
];

const productCards = [
{ name: 'Flip Trading', desc: 'Lightning-fast trades', color: 'bg-gradient-to-br from-blue-500 to-blue-600', icon: TrendingUp },
{ name: 'MyGeojit', desc: 'Portfolio & insights', color: 'bg-gradient-to-br from-green-500 to-green-600', icon: BarChart3 },
{ name: 'FundsGenie', desc: 'Smart mutual funds', color: 'bg-gradient-to-br from-purple-500 to-purple-600', icon: Sparkles },
{ name: 'SmartFolios', desc: 'Curated baskets', color: 'bg-gradient-to-br from-orange-500 to-orange-600', icon: FileText },
{ name: 'Private Wealth', desc: 'Premium services', color: 'bg-gradient-to-br from-gray-700 to-gray-800', icon: Shield }
];

const WelcomeScreen = () => (
<div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 flex flex-col justify-center items-center p-6 relative overflow-hidden">
{/* Animated background elements */}
<div className="absolute inset-0">
<div className="absolute top-20 left-10 w-32 h-32 bg-blue-400 opacity-10 rounded-full blur-xl animate-pulse"></div>
<div className="absolute bottom-40 right-10 w-48 h-48 bg-purple-400 opacity-10 rounded-full blur-xl animate-pulse delay-1000"></div>
<div className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-400 opacity-5 rounded-full blur-2xl animate-pulse delay-2000"></div>
</div>


  <div className="text-center z-10 space-y-8">
    <div className="space-y-4">
      <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
        <Sparkles className="w-5 h-5 text-yellow-400" />
        <span className="text-white/90 text-sm font-medium">All-in-One Financial Super App</span>
      </div>
      
      <h1 className="text-5xl font-bold text-white mb-4">
        Geo<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Gift</span>
      </h1>
      
      <p className="text-xl text-white/80 max-w-md mx-auto leading-relaxed">
        Trading, investments, wealth management — all in one beautiful experience
      </p>
    </div>

    <div className="grid grid-cols-2 gap-4 max-w-sm mx-auto">
      {productCards.slice(0, 4).map((product, idx) => (
        <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300">
          <product.icon className="w-8 h-8 text-white mb-2" />
          <div className="text-left">
            <h3 className="text-white font-semibold text-sm">{product.name}</h3>
            <p className="text-white/70 text-xs">{product.desc}</p>
          </div>
        </div>
      ))}
    </div>

    <button 
      onClick={() => setCurrentScreen('login')}
      className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105 flex items-center space-x-3 mx-auto"
    >
      <span>Get Started in 30 Seconds</span>
      <ArrowRight className="w-5 h-5" />
    </button>
    
    <p className="text-white/60 text-sm">No paperwork • AI-powered • Instant verification</p>
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
<h2 className="text-2xl font-bold text-gray-800">Lightning Login</h2>
<p className="text-gray-600">Choose your preferred sign-in method</p>
</div>


    <div className="space-y-4">
      <button 
        onClick={() => setCurrentScreen('onboarding')}
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
        onClick={() => setCurrentScreen('onboarding')}
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
        onClick={() => setCurrentScreen('onboarding')}
        className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-2xl p-4 flex items-center justify-between hover:shadow-lg transition-all duration-300 group"
      >
        <div className="flex items-center space-x-3">
          <Smartphone className="w-6 h-6" />
          <span className="font-semibold">Phone Number (OTP)</span>
        </div>
        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
      </button>
    </div>

    <div className="text-center space-y-2">
      <p className="text-xs text-gray-500">
        By continuing, you agree to our Terms & Privacy Policy
      </p>
      <div className="flex items-center justify-center space-x-4 text-xs text-gray-400">
        <div className="flex items-center space-x-1">
          <Shield className="w-3 h-3" />
          <span>Bank-grade security</span>
        </div>
        <div className="flex items-center space-x-1">
          <Eye className="w-3 h-3" />
          <span>Biometric login</span>
        </div>
      </div>
    </div>
  </div>
</div>


);

const OnboardingScreen = () => (
<div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
<div className="max-w-sm mx-auto">
{/* Header */}
<div className="flex items-center justify-between mb-8">
<button onClick={() => setCurrentScreen('login')}>
<X className="w-6 h-6 text-gray-600" />
</button>
<div className="text-center">
<h3 className="font-semibold text-gray-800">Smart Onboarding</h3>
<p className="text-sm text-gray-600">Step {onboardingStep + 1} of {onboardingSteps.length}</p>
</div>
<div className="w-6"></div>
</div>


    {/* Progress Bar */}
    <div className="mb-8">
      <div className="flex items-center justify-between mb-4">
        {onboardingSteps.map((step, idx) => (
          <div key={idx} className="flex flex-col items-center space-y-2">
            <div className={`w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
              idx <= onboardingStep 
                ? 'bg-blue-500 border-blue-500 text-white' 
                : 'border-gray-300 text-gray-400'
            }`}>
              <step.icon className="w-5 h-5" />
            </div>
            <span className={`text-xs font-medium ${idx <= onboardingStep ? 'text-blue-600' : 'text-gray-400'}`}>
              {step.title}
            </span>
          </div>
        ))}
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div 
          className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-500"
          style={{ width: `${((onboardingStep + 1) / onboardingSteps.length) * 100}%` }}
        ></div>
      </div>
    </div>

    {/* Current Step Content */}
    <div className="bg-white rounded-3xl p-6 shadow-lg mb-6">
      {onboardingStep === 0 && (
        <div className="space-y-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <User className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Quick Profile Setup</h3>
            <p className="text-gray-600 text-sm">AI will help extract details from your documents</p>
          </div>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
              <input 
                type="text" 
                className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="As per PAN card"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
              <input 
                type="tel" 
                className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="+91 98765 43210"
              />
            </div>
          </div>
        </div>
      )}

      {onboardingStep === 1 && (
        <div className="space-y-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Scan className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Smart Document Capture</h3>
            <p className="text-gray-600 text-sm">AI extracts & verifies info instantly</p>
          </div>
          
          <div className="space-y-4">
            <button className="w-full bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-dashed border-blue-300 rounded-2xl p-6 hover:bg-gradient-to-r hover:from-blue-100 hover:to-purple-100 transition-all duration-300">
              <Camera className="w-12 h-12 text-blue-500 mx-auto mb-3" />
              <h4 className="font-semibold text-gray-800 mb-1">Scan PAN Card</h4>
              <p className="text-sm text-gray-600">Point camera at your PAN card</p>
            </button>
            
            <button className="w-full bg-gradient-to-r from-green-50 to-blue-50 border-2 border-dashed border-green-300 rounded-2xl p-6 hover:bg-gradient-to-r hover:from-green-100 hover:to-blue-100 transition-all duration-300">
              <Shield className="w-12 h-12 text-green-500 mx-auto mb-3" />
              <h4 className="font-semibold text-gray-800 mb-1">Aadhaar Verification</h4>
              <p className="text-sm text-gray-600">Secure OTP-based verification</p>
            </button>
          </div>
        </div>
      )}

      {onboardingStep === 2 && (
        <div className="space-y-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Banknote className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Link Bank Account</h3>
            <p className="text-gray-600 text-sm">Choose your preferred method</p>
          </div>
          
          <div className="space-y-3">
            <button className="w-full bg-blue-50 border border-blue-200 rounded-xl p-4 flex items-center justify-between hover:bg-blue-100 transition-all duration-300">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-gray-800">Net Banking</h4>
                  <p className="text-sm text-gray-600">Instant verification</p>
                </div>
              </div>
              <ArrowRight className="w-5 h-5 text-blue-500" />
            </button>
            
            <button className="w-full bg-green-50 border border-green-200 rounded-xl p-4 flex items-center justify-between hover:bg-green-100 transition-all duration-300">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center">
                  <Upload className="w-5 h-5 text-white" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-gray-800">Bank Statement</h4>
                  <p className="text-sm text-gray-600">Upload or scan</p>
                </div>
              </div>
              <ArrowRight className="w-5 h-5 text-green-500" />
            </button>
          </div>
        </div>
      )}

      {onboardingStep === 3 && (
        <div className="text-center space-y-6">
          <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle className="w-10 h-10 text-white" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">You're All Set! 🎉</h3>
            <p className="text-gray-600">Your account is ready for trading and investing</p>
          </div>
          
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-4">
            <h4 className="font-semibold text-gray-800 mb-2">What you can do now:</h4>
            <div className="space-y-2 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Start trading stocks & F&O</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Invest in mutual funds</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Access portfolio insights</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>

    {/* Action Button */}
    <button 
      onClick={() => {
        if (onboardingStep < onboardingSteps.length - 1) {
          setOnboardingStep(onboardingStep + 1);
        } else {
          setCurrentScreen('dashboard');
        }
      }}
      className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-2xl p-4 font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2"
    >
      <span>{onboardingStep === onboardingSteps.length - 1 ? 'Enter GeoGift' : 'Continue'}</span>
      <ArrowRight className="w-5 h-5" />
    </button>
  </div>

  {/* AI Assistant Bubble */}
  <button
    onClick={() => setShowAssistant(true)}
    className="fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse"
  >
    <Bot className="w-7 h-7 text-white" />
  </button>
</div>


);

const DashboardScreen = () => (
<div className="min-h-screen bg-gray-50">
{/* Header */}
<div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-b-3xl">
<div className="flex items-center justify-between mb-6">
<div>
<h2 className="text-2xl font-bold">Good morning! 👋</h2>
<p className="text-blue-100">Ready to grow your wealth?</p>
</div>
<div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
<User className="w-6 h-6 text-white" />
</div>
</div>


    {/* Portfolio Snapshot */}
    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
      <div className="flex items-center justify-between mb-2">
        <span className="text-blue-100">Total Portfolio</span>
        <span className="text-green-300 text-sm">+2.4%</span>
      </div>
      <div className="text-3xl font-bold">₹2,45,680</div>
      <div className="text-blue-100 text-sm">+₹5,420 today</div>
    </div>
  </div>

  {/* Product Grid */}
  <div className="p-6 space-y-6">
    <div>
      <h3 className="text-lg font-bold text-gray-800 mb-4">Explore Products</h3>
      <div className="grid grid-cols-2 gap-4">
        {productCards.map((product, idx) => (
          <div key={idx} className={`${product.color} rounded-2xl p-4 text-white hover:scale-105 transition-all duration-300 shadow-lg`}>
            <product.icon className="w-8 h-8 mb-3" />
            <h4 className="font-semibold mb-1">{product.name}</h4>
            <p className="text-sm opacity-90 mb-3">{product.desc}</p>
            <ChevronRight className="w-5 h-5" />
          </div>
        ))}
      </div>
    </div>

    {/* Quick Actions */}
    <div>
      <h3 className="text-lg font-bold text-gray-800 mb-4">Quick Actions</h3>
      <div className="grid grid-cols-2 gap-4">
        <button className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
          <TrendingUp className="w-8 h-8 text-blue-500 mb-2" />
          <span className="font-semibold text-gray-800 block">Buy Stocks</span>
          <span className="text-sm text-gray-600">Start trading</span>
        </button>
        <button className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
          <Sparkles className="w-8 h-8 text-purple-500 mb-2" />
          <span className="font-semibold text-gray-800 block">SIP Plans</span>
          <span className="text-sm text-gray-600">Auto invest</span>
        </button>
      </div>
    </div>
  </div>

  {/* Bottom Navigation */}
  <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-6 py-4">
    <div className="flex items-center justify-around">
      <button className="flex flex-col items-center space-y-1">
        <Home className="w-6 h-6 text-blue-500" />
        <span className="text-xs text-blue-500 font-medium">Home</span>
      </button>
      <button className="flex flex-col items-center space-y-1">
        <BarChart3 className="w-6 h-6 text-gray-400" />
        <span className="text-xs text-gray-400">Markets</span>
      </button>
      <button className="flex flex-col items-center space-y-1">
        <Wallet className="w-6 h-6 text-gray-400" />
        <span className="text-xs text-gray-400">Portfolio</span>
      </button>
      <button className="flex flex-col items-center space-y-1">
        <Settings className="w-6 h-6 text-gray-400" />
        <span className="text-xs text-gray-400">More</span>
      </button>
    </div>
  </div>

  {/* AI Assistant Bubble */}
  <button
    onClick={() => setShowAssistant(true)}
    className="fixed bottom-24 right-6 w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300"
  >
    <Bot className="w-7 h-7 text-white" />
  </button>
</div>


);

const AssistantModal = () => (
showAssistant && (
<div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-end">
<div className="bg-white w-full rounded-t-3xl max-h-96 overflow-hidden">
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
          <p className="text-sm text-gray-800">Hi! I'm here to help you with your onboarding. What would you like to know?</p>
        </div>
        
        <div className="flex flex-wrap gap-2">
          <button className="bg-blue-50 text-blue-600 px-3 py-2 rounded-full text-sm border border-blue-200 hover:bg-blue-100">
            Help with PAN upload
          </button>
          <button className="bg-green-50 text-green-600 px-3 py-2 rounded-full text-sm border border-green-200 hover:bg-green-100">
            Explain trading basics
          </button>
          <button className="bg-purple-50 text-purple-600 px-3 py-2 rounded-full text-sm border border-purple-200 hover:bg-purple-100">
            KYC requirements
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

return (
<div className="max-w-sm mx-auto bg-white shadow-2xl rounded-3xl overflow-hidden">
{/* Screen Navigation */}
<div className="bg-gray-800 text-white p-4 flex items-center justify-between">
<h1 className="font-bold">GeoGift Super App Demo</h1>
<div className="flex space-x-2">
{Object.entries(screens).map(([key, label]) => (
<button
key={key}
onClick={() => setCurrentScreen(key)}
className={`px-3 py-1 rounded-lg text-xs font-medium transition-colors ${ currentScreen === key  ? 'bg-blue-500 text-white'  : 'bg-gray-600 text-gray-300 hover:bg-gray-500' }`}
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
    {currentScreen === 'onboarding' && <OnboardingScreen />}
    {currentScreen === 'dashboard' && <DashboardScreen />}
    
    <AssistantModal />
  </div>
</div>

);
};

export default GeoGiftSuperApp;
