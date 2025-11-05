import React, { useState } from 'react';

// Load Font Awesome (for icons)
const FontAwesomeLink = () => (
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
  />
);

const App = () => {
  // State for flipping the card (false = Login, true = Sign Up)
  const [isFlipped, setIsFlipped] = useState(false);
  
  // State for toggling password visibility
  const [showLoginPassword, setShowLoginPassword] = useState(false);
  const [showSignupPassword, setShowSignupPassword] = useState(false);

  // --- Handlers for Flipping ---
  const flip = () => setIsFlipped(true); // Switch to Sign Up
  const flipAgain = () => setIsFlipped(false); // Switch back to Login

  // --- Handlers for Password Toggling ---
  const toggleLoginPassword = () => setShowLoginPassword(prev => !prev);
  const toggleSignupPassword = () => setShowSignupPassword(prev => !prev);

  // --- Handlers for Form Submission (Placeholder) ---
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log('Login submitted! (Not implemented)');
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    console.log('Sign Up submitted! (Not implemented)');
  };

  // Custom styles for 3D card flip effects, required as Tailwind doesn't fully support these properties
  const customStyles = `
    .card-perspective {
        perspective: 1000px;
    }
    .flip-card-inner {
        transition: transform 0.8s;
        transform-style: preserve-3d;
    }
    .flip-card-inner.flipped {
        transform: rotateY(180deg);
    }
    .card-face {
        backface-visibility: hidden;
    }
    .box-signup {
        transform: rotateY(180deg);
    }
    /* Mobile-first adjustments for input focus */
    .inpt:focus + .fa {
        color: #8b5cf6; /* Indigo-500 equivalent */
    }
    /* Style the eye icon to be clickable */
    .password-toggle-icon {
        cursor: pointer;
        transition: color 0.2s;
        z-index: 10;
    }
    .password-toggle-icon:hover {
        color: #8b5cf6;
    }
  `;

  return (
    <>
      <FontAwesomeLink />
      {/* Inject custom CSS */}
      <style>{customStyles}</style>

      {/* Main Container - Full viewport, centered, dark background */}
      <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4 font-inter">
        
        {/* Card Holder - Defines perspective for 3D flip */}
        <div className="w-full max-w-sm h-[500px] card-perspective">
          
          {/* Flip Container - Handles the rotation */}
          <div 
            className={`flip-card-inner relative w-full h-full ${isFlipped ? 'flipped' : ''}`}
          >
            
            {/* ====================================
                FRONT SIDE: LOGIN FORM
            ==================================== */}
            <div 
              className="box-login card-face absolute w-full h-full rounded-xl shadow-2xl bg-white p-8 flex flex-col items-center justify-center"
            >
              <form onSubmit={handleLoginSubmit} className="w-full text-center">
                <h1 className="text-3xl font-bold mb-8 text-gray-800">LOGIN</h1>
                
                {/* Email Input */}
                <div className="email-login relative mb-4">
                  <input
                    className="inpt w-full p-3 pl-10 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-150"
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                  <i className="fa fa-envelope absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>

                {/* Password Input */}
                <div className="password-login relative mb-6">
                  <input
                    className="inpt w-full p-3 pl-10 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-150"
                    type={showLoginPassword ? "text" : "password"}
                    name="password"
                    id="password-login"
                    placeholder="Password"
                    required
                  />
                  <i className="fa fa-lock absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <i
                    className={`fa absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 password-toggle-icon ${showLoginPassword ? 'fa-eye' : 'fa-eye-slash'}`}
                    onClick={toggleLoginPassword}
                  />
                </div>

                {/* Checkbox and Forgot Password */}
                <div className="forget flex justify-between items-center text-sm mb-6">
                  <label htmlFor="checkbox-login" className="flex items-center text-gray-600">
                    <input type="checkbox" name="remember" id="checkbox-login" className="mr-2 rounded text-indigo-500 focus:ring-indigo-500" />
                    Remember me
                  </label>
                  <a href="#" className="text-indigo-600 hover:text-indigo-800 transition duration-150">
                    Forgot Password?
                  </a>
                </div>
                
                {/* Submit Button */}
                <button 
                  type="submit" 
                  className="btn w-full bg-indigo-600 text-white p-3 rounded-lg font-semibold hover:bg-indigo-700 transition duration-200 shadow-md transform hover:scale-[1.01]"
                >
                  LOGIN
                </button>
              </form>
              
              {/* Register Link */}
              <div className="register-link mt-6 text-gray-600 text-sm">
                <p>
                  Don't have an account?{" "}
                  <a 
                    href="#" 
                    onClick={(e) => { e.preventDefault(); flip(); }}
                    className="text-indigo-600 font-bold hover:text-indigo-800 transition duration-150"
                  >
                    Sign Up
                  </a>
                </p>
              </div>
            </div>
            
            {/* ====================================
                BACK SIDE: SIGN UP FORM
            ==================================== */}
            <div 
              className="box-signup card-face absolute w-full h-full rounded-xl shadow-2xl bg-white p-8 flex flex-col items-center justify-center"
            >
              <form onSubmit={handleSignupSubmit} className="w-full text-center">
                <h1 className="text-3xl font-bold mb-8 text-gray-800">SIGN UP</h1>
                
                {/* User Name Input */}
                <div className="user-signup relative mb-4">
                  <input
                    className="inpt w-full p-3 pl-10 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-150"
                    type="text"
                    name="username"
                    placeholder="User Name"
                  />
                  <i className="fa fa-user absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>

                {/* Email Input */}
                <div className="email-signup relative mb-4">
                  <input
                    className="inpt w-full p-3 pl-10 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-150"
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                  <i className="fa fa-envelope absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>

                {/* Password Input */}
                <div className="password-signup relative mb-6">
                  <input
                    className="inpt w-full p-3 pl-10 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-150"
                    type={showSignupPassword ? "text" : "password"}
                    name="password"
                    id="password-signup"
                    placeholder="Password"
                    required
                  />
                  <i className="fa fa-lock absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <i
                    className={`fa absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 password-toggle-icon ${showSignupPassword ? 'fa-eye' : 'fa-eye-slash'}`}
                    onClick={toggleSignupPassword}
                  />
                </div>

                {/* Checkbox and Forgot Password (Placeholder) */}
                <div className="forget flex justify-between items-center text-sm mb-6">
                  <label htmlFor="checkbox-signup" className="flex items-center text-gray-600">
                    <input type="checkbox" name="remember" id="checkbox-signup" className="mr-2 rounded text-indigo-500 focus:ring-indigo-500" />
                    Agree to terms
                  </label>
                  <a href="#" className="text-indigo-600 hover:text-indigo-800 transition duration-150">
                    Need Help?
                  </a>
                </div>
                
                {/* Submit Button */}
                <button 
                  type="submit" 
                  className="btn w-full bg-indigo-600 text-white p-3 rounded-lg font-semibold hover:bg-indigo-700 transition duration-200 shadow-md transform hover:scale-[1.01]"
                >
                  SIGN UP
                </button>
              </form>
              
              {/* Log In Link */}
              <div className="register-link mt-6 text-gray-600 text-sm">
                <p>
                  Already have an account?{" "}
                  <a 
                    href="#" 
                    onClick={(e) => { e.preventDefault(); flipAgain(); }}
                    className="text-indigo-600 font-bold hover:text-indigo-800 transition duration-150"
                  >
                    Log In
                  </a>
                </p>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
}

export default App;