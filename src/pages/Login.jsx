import React, { useState, useEffect } from 'react';

const Login = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [showLoginPassword, setShowLoginPassword] = useState(false);
  const [showSignupPassword, setShowSignupPassword] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const flip = () => setIsFlipped(true);
  const flipAgain = () => setIsFlipped(false);

  const toggleLoginPassword = () => setShowLoginPassword(prev => !prev);
  const toggleSignupPassword = () => setShowSignupPassword(prev => !prev);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log('Login submitted!');
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    console.log('Sign Up submitted!');
  };

  const customStyles = `
    .auth-container {
      background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
      background-size: 400% 400%;
      animation: gradient 15s ease infinite;
    }
    .card-perspective {
      perspective: 1500px;
    }
    .flip-card-inner {
      transition: transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      transform-style: preserve-3d;
    }
    .flip-card-inner.flipped {
      transform: rotateY(180deg);
    }
    .card-face {
      backface-visibility: hidden;
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(20px);
      border: 1px solid rgba(255, 255, 255, 0.2);
    }
    .box-signup {
      transform: rotateY(180deg);
    }
    .floating-element {
      animation: float 6s ease-in-out infinite;
    }
    .floating-element-2 {
      animation: float 8s ease-in-out infinite;
      animation-delay: 1s;
    }
    .floating-element-3 {
      animation: float 10s ease-in-out infinite;
      animation-delay: 2s;
    }
    @keyframes gradient {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
    @keyframes float {
      0%, 100% { transform: translateY(0px) rotate(0deg); }
      50% { transform: translateY(-20px) rotate(180deg); }
    }
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
    .animate-fadeInUp {
      animation: fadeInUp 0.8s ease-out forwards;
    }
    .glow-effect {
      box-shadow: 0 0 20px rgba(139, 92, 246, 0.3);
    }
    .glow-effect:hover {
      box-shadow: 0 0 30px rgba(139, 92, 246, 0.5);
    }
    .input-glow:focus {
      box-shadow: 0 0 15px rgba(139, 92, 246, 0.3);
    }
  `;

  return (
    <>
      <style>{customStyles}</style>
      
      <div className="auth-container min-h-screen flex   items-center justify-center p-4 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="floating-element absolute top-1/4 left-1/4 w-20 h-20 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20 blur-xl"></div>
          <div className="floating-element-2 absolute top-3/4 right-1/4 w-16 h-16 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-20 blur-xl"></div>
          <div className="floating-element-3 absolute top-1/2 left-3/4 w-24 h-24 bg-gradient-to-r from-green-400 to-teal-400 rounded-full opacity-20 blur-xl"></div>
          <div className="floating-element absolute top-2/3 left-1/6 w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full opacity-20 blur-xl"></div>
        </div>

        {/* Main Card Container */}
        <div className={`w-full max-w-md mt-4 card-perspective transition-all duration-1000 transform ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          
          {/* Flip Container */}
          <div className={`flip-card-inner relative w-full h-[600px] ${isFlipped ? 'flipped' : ''}`}>
            
            {/* LOGIN SIDE */}
            <div className="box-login mt-12 card-face absolute w-full h-full rounded-3xl p-8 flex flex-col items-center justify-center glow-effect">
              <div className="w-full max-w-xs animate-fadeInUp">
                {/* Header */}
                <div className="text-center mb-12">
                  <h1 className="text-4xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent mb-2">
                    Welcome Back
                  </h1>
                  <p className="text-white/70 text-sm">
                    Sign in to your account to continue
                  </p>
                </div>

                <form onSubmit={handleLoginSubmit} className="space-y-6">
                  {/* Email Input */}
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <i className="fa fa-envelope text-white/60 group-focus-within:text-purple-300 transition-colors duration-200" />
                    </div>
                    <input
                      className="w-full pl-10 pr-4 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-white/60 focus:outline-none focus:border-purple-400 input-glow transition-all duration-200 backdrop-blur-sm"
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      required
                    />
                  </div>

                  {/* Password Input */}
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <i className="fa fa-lock text-white/60 group-focus-within:text-purple-300 transition-colors duration-200" />
                    </div>
                    <input
                      className="w-full pl-10 pr-12 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-white/60 focus:outline-none focus:border-purple-400 input-glow transition-all duration-200 backdrop-blur-sm"
                      type={showLoginPassword ? "text" : "password"}
                      name="password"
                      placeholder="Password"
                      required
                    />
                    <button
                      type="button"
                      onClick={toggleLoginPassword}
                      className="absolute inset-y-0 right-0 pr-3 flex items-center password-toggle-icon"
                    >
                      <i className={`fa text-white/60 hover:text-purple-300 transition-colors duration-200 ${showLoginPassword ? 'fa-eye' : 'fa-eye-slash'}`} />
                    </button>
                  </div>

                  {/* Remember Me & Forgot Password */}
                  <div className="flex justify-between items-center text-sm">
                    <label className="flex items-center text-white/70 cursor-pointer hover:text-white transition-colors duration-200">
                      <input 
                        type="checkbox" 
                        className="mr-2 rounded bg-white/10 border-white/20 text-purple-500 focus:ring-purple-400"
                      />
                      Remember me
                    </label>
                    <a href="#" className="text-purple-300 hover:text-purple-200 transition-colors duration-200 font-medium">
                      Forgot Password?
                    </a>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-4 rounded-2xl font-semibold hover:from-purple-600 hover:to-pink-600 transform hover:scale-[1.02] transition-all duration-200 shadow-lg hover:shadow-xl"
                  >
                    SIGN IN
                  </button>
                </form>

                {/* Divider */}
                <div className="relative flex items-center my-6">
                  <div className="flex-grow border-t border-white/20"></div>
                  <span className="flex-shrink mx-4 text-white/60 text-sm">or continue with</span>
                  <div className="flex-grow border-t border-white/20"></div>
                </div>

                

                {/* Sign Up Link */}
                <div className="text-center">
                  <p className="text-white/70 text-sm">
                    Don't have an account?{" "}
                    <button
                      onClick={flip}
                      className="text-purple-300 font-semibold hover:text-purple-200 transition-colors duration-200 underline"
                    >
                      Sign up now
                    </button>
                  </p>
                </div>
              </div>
            </div>

            {/* SIGN UP SIDE */}
            <div className="box-signup card-face absolute w-full h-full  mt-28 rounded-3xl p-3 flex flex-col items-center justify-center glow-effect">
              <div className="w-full max-w-xs animate-fadeInUp">
                {/* Header */}
                <div className="text-center mb-8">
                  <h1 className="text-4xl font-bold bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent mb-6">
                    Join Us
                  </h1>
                  <p className="text-white/70 text-sm">
                    Create your account to get started
                  </p>
                </div>

                <form onSubmit={handleSignupSubmit} className="space-y-6">
                  {/* Username Input */}
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <i className="fa fa-user text-white/60 group-focus-within:text-cyan-300 transition-colors duration-200" />
                    </div>
                    <input
                      className="w-full pl-10 pr-4 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-white/60 focus:outline-none focus:border-cyan-400 input-glow transition-all duration-200 backdrop-blur-sm"
                      type="text"
                      name="username"
                      placeholder="Full Name"
                      required
                    />
                  </div>

                  {/* Email Input */}
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <i className="fa fa-envelope text-white/60 group-focus-within:text-cyan-300 transition-colors duration-200" />
                    </div>
                    <input
                      className="w-full pl-10 pr-4 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-white/60 focus:outline-none focus:border-cyan-400 input-glow transition-all duration-200 backdrop-blur-sm"
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      required
                    />
                  </div>

                  {/* Password Input */}
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <i className="fa fa-lock text-white/60 group-focus-within:text-cyan-300 transition-colors duration-200" />
                    </div>
                    <input
                      className="w-full pl-10 pr-12 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-white/60 focus:outline-none focus:border-cyan-400 input-glow transition-all duration-200 backdrop-blur-sm"
                      type={showSignupPassword ? "text" : "password"}
                      name="password"
                      placeholder="Create Password"
                      required
                    />
                    <button
                      type="button"
                      onClick={toggleSignupPassword}
                      className="absolute inset-y-0 right-0 pr-3 flex items-center password-toggle-icon"
                    >
                      <i className={`fa text-white/60 hover:text-cyan-300 transition-colors duration-200 ${showSignupPassword ? 'fa-eye' : 'fa-eye-slash'}`} />
                    </button>
                  </div>

                  {/* Terms Agreement */}
                  <div className="flex items-center text-sm">
                    <label className="flex items-center text-white/70 cursor-pointer hover:text-white transition-colors duration-200">
                      <input 
                        type="checkbox" 
                        required
                        className="mr-2 rounded bg-white/10 border-white/20 text-cyan-500 focus:ring-cyan-400"
                      />
                      I agree to the{" "}
                      <a href="#" className="text-cyan-300 hover:text-cyan-200 ml-1 transition-colors duration-200">
                        terms and conditions
                      </a>
                    </label>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-4 rounded-2xl font-semibold hover:from-cyan-600 hover:to-blue-600 transform hover:scale-[1.02] transition-all duration-200 shadow-lg hover:shadow-xl"
                  >
                    CREATE ACCOUNT
                  </button>
                </form>

                {/* Divider */}
                <div className="relative flex items-center my-6">
                  <div className="flex-grow border-t border-white/20"></div>
                  <span className="flex-shrink mx-4 text-white/60 text-sm">or sign up with</span>
                  <div className="flex-grow border-t border-white/20"></div>
                </div>

                

                {/* Login Link */}
                <div className="text-center">
                  <p className="text-white/70 text-sm">
                    Already have an account?{" "}
                    <button
                      onClick={flipAgain}
                      className="text-cyan-300 font-semibold hover:text-cyan-200 transition-colors duration-200 underline"
                    >
                      Sign in
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;