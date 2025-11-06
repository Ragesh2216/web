import React, { useState } from 'react';

// Mock Lucide-style Icons (for a single-file mandate)
const Check = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
);

const X = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
);

const pricingTiers = [
  {
    name: 'Digital Reader',
    price: 7,
    description: 'Access to our essential reporting and daily summaries.',
    features: [
      { text: '5 Articles per Month', included: true },
      { text: 'Web-Only Access', included: true },
      { text: 'Daily Newsletter Delivery', included: true },
      { text: 'Ad-Free Reading Experience', included: false },
      { text: 'Weekly Print Edition Delivery', included: false },
    ],
    highlight: false,
    buttonText: 'Subscribe Now',
  },
  {
    name: 'Premium Digital',
    price: 15,
    description: 'Unlimited, ad-free access to all content on all your devices.',
    features: [
      { text: 'Unlimited Article Access', included: true },
      { text: 'Ad-Free Reading Experience', included: true },
      { text: 'Full Archive Access (Since 1998)', included: true },
      { text: 'Exclusive Journalist Q&A', included: false },
      { text: 'Weekly Print Edition Delivery', included: false },
    ],
    highlight: true,
    buttonText: 'Go Premium',
  },
  {
    name: 'All-Access',
    price: 35,
    description: 'The ultimate subscription: digital, print, and premium perks.',
    features: [
      { text: 'Unlimited Article Access', included: true },
      { text: 'Ad-Free Reading Experience', included: true },
      { text: 'Full Archive Access (Since 1998)', included: true },
      { text: 'Exclusive Journalist Q&A', included: true },
      { text: 'Weekly Print Edition Delivery', included: true },
    ],
    highlight: false,
    buttonText: 'Get All-Access',
  },
];

const FeatureItem = ({ text, included, highlight }) => {
  const iconColor = included ? 'text-green-500' : 'text-red-400';
  const textColor = included ? 'text-gray-700' : 'text-gray-500 line-through';

  return (
    <li className="flex items-center space-x-3 mb-3">
      {included ? (
        <Check className={`w-5 h-5 ${iconColor}`} />
      ) : (
        <X className={`w-5 h-5 ${iconColor}`} />
      )}
      <span className={`text-sm font-medium ${textColor}`}>
        {text}
      </span>
    </li>
  );
};

const PlanCard = ({ plan }) => {
  const isHighlighted = plan.highlight;

  // Conditional classes for highlighting the Pro plan
  const cardClasses = isHighlighted
    ? 'bg-white border-4 border-indigo-500 shadow-2xl scale-[1.02]'
    : 'bg-white border border-gray-200 shadow-lg hover:shadow-xl transition duration-300';
  
  const headerClasses = isHighlighted
    ? 'bg-indigo-600 text-white p-6 rounded-t-xl' // Darkened highlight background slightly
    : 'p-6';

  const priceColor = isHighlighted ? 'text-white' : 'text-gray-900';
  const buttonClasses = isHighlighted
    ? 'bg-indigo-600 hover:bg-indigo-700 text-white'
    : 'bg-gray-100 hover:bg-gray-200 text-indigo-600 border border-indigo-600';

  return (

    
    <div className={`flex flex-col rounded-xl overflow-hidden transform ${cardClasses}`}>
      
      {/* Header */}
      <div className={headerClasses}>
        <h3 className={`text-xl font-extrabold mb-1 ${isHighlighted ? 'text-white' : 'text-gray-900'}`}>{plan.name}</h3>
        <p className={`text-sm mb-4 ${isHighlighted ? 'text-indigo-200' : 'text-gray-500'}`}>{plan.description}</p>
        
        <div className="flex items-baseline">
          <span className={`text-5xl font-extrabold tracking-tight ${priceColor}`}>
            ${plan.price}
          </span>
          <span className={`ml-1 text-xl font-medium ${isHighlighted ? 'text-indigo-200' : 'text-gray-500'}`}>
            /mo
          </span>
        </div>
      </div>

      {/* Features & Button */}
      <div className="flex flex-col flex-grow p-6">
        <ul className="flex-grow">
          {plan.features.map((feature, index) => (
            <FeatureItem 
              key={index} 
              text={feature.text} 
              included={feature.included} 
              highlight={isHighlighted}
            />
          ))}
        </ul>

        {/* Button */}
        <button 
          onClick={() => console.log(`Attempting to subscribe to ${plan.name} plan.`)}
          className={`mt-6 w-full py-3 rounded-lg text-lg font-semibold transition duration-200 ${buttonClasses}`}
        >
          {plan.buttonText}
        </button>
      </div>
    </div>
  );
};

const Subscription = () => {
  // Simple state to simulate user interaction (e.g., showing a message instead of alert)
  const [message, setMessage] = useState('');

  // IMPORTANT: Replaced alert with a functional message display as per instructions
  const handleSubscription = (planName) => {
    setMessage(`You selected the ${planName} plan! (This is a mock interaction)`);
    setTimeout(() => setMessage(''), 3000); // Clear message after 3 seconds
  }

  return (
    <div className="font-sans bg-gray-50 min-h-screen p-4 sm:p-8">
      {/* Global Message Box */}
      {message && (
        <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 p-4 rounded-lg bg-indigo-500 text-white font-medium shadow-xl transition-opacity duration-300">
          {message}
        </div>
      )}

      <div className="max-w-7xl mx-auto pt-10 pb-20">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Unlock Unlimited News & Features
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get comprehensive reporting tailored to your reading style.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-10">
          {pricingTiers.map((plan) => (
            // Pass the mock function to the card
            <PlanCard 
              key={plan.name} 
              plan={{...plan}} 
              onSelect={handleSubscription}
            />
          ))}
        </div>
        
        {/* Footer Note */}
        <div className="mt-16 text-center text-gray-500 text-sm">
            All subscriptions include access across web, tablet, and mobile apps.
        </div>
      </div>
    </div>
  );
};

export default Subscription;