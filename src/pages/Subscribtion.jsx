import React, { useState, useEffect } from 'react';

// Mock Lucide-style Icons (for a single-file mandate)
const Check = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
);

const X = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
);

const pricingTiers = [
  {
    id: 'digital',
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
    id: 'premium',
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
    id: 'all-access',
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

const FeatureItem = ({ text, included }) => {
  const iconColor = included ? 'text-green-500' : 'text-red-400';
  const textColor = included ? 'text-gray-700' : 'text-gray-500 line-through';

  return (
    <li className="flex items-center space-x-3 mb-3">
      {included ? (
        <Check className={`w-5 h-5 ${iconColor} flex-shrink-0`} />
      ) : (
        <X className={`w-5 h-5 ${iconColor} flex-shrink-0`} />
      )}
      <span className={`text-sm font-medium ${textColor}`}>
        {text}
      </span>
    </li>
  );
};

// Updated PlanCard: Added type="button" to prevent accidental form submission
const PlanCard = ({ plan, onSelect }) => {
  const isHighlighted = plan.highlight;

  // Conditional classes for highlighting the Pro plan
  const cardClasses = isHighlighted
    ? 'bg-white border-4 border-indigo-500 shadow-2xl scale-[1.02] transition duration-300'
    : 'bg-white border border-gray-200 shadow-lg hover:shadow-xl transition duration-300';
  
  const headerClasses = isHighlighted
    ? 'bg-indigo-600 text-white p-6 rounded-t-lg'
    : 'p-6';

  const priceColor = isHighlighted ? 'text-white' : 'text-gray-900';
  const buttonClasses = isHighlighted
    ? 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg shadow-indigo-500/50'
    : 'bg-gray-100 hover:bg-gray-200 text-indigo-600 border border-indigo-600';

  return (
    
    
    <div className={`flex flex-col rounded-xl overflow-hidden transform ${cardClasses} transition-all duration-300`}>
      
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
            />
          ))}
        </ul>

        {/* Button: Added type="button" to stop implicit form submission/navigation */}
        <button 
          type="button" 
          onClick={() => onSelect(plan.id)}
          className={`mt-6 w-full py-3 rounded-lg text-lg font-semibold transition duration-200 ${buttonClasses}`}
        >
          {plan.buttonText}
        </button>
      </div>
    </div>
  );
};

// Checkout Component (Mock view for demonstration)
const CheckoutPage = ({ planId, onBack }) => {
    const plan = pricingTiers.find(p => p.id === planId);
    
    if (!plan) {
        return (
            <div className="text-center p-20">
                <h2 className="text-2xl font-bold text-red-600 mb-4">Error: Plan Not Found</h2>
                <button 
                    onClick={() => onBack('home')} 
                    className="mt-4 py-2 px-6 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition"
                >
                    Back to Plans
                </button>
            </div>
        );
    }

    return (
        <div className="max-w-xl mx-auto p-8 bg-white rounded-xl shadow-2xl">
            <h1 className="text-3xl font-extrabold text-gray-900 mb-6 border-b pb-4">
                Checkout for {plan.name}
            </h1>
            <p className="text-gray-700 mb-4">You are about to subscribe to the **{plan.name}** plan for **${plan.price}/month**.</p>
            <ul className="space-y-3 mb-8 text-sm text-gray-600 bg-gray-50 p-4 rounded-lg">
                <li className="font-semibold">Key Features:</li>
                {plan.features.filter(f => f.included).map((feature, index) => (
                    <li key={index} className="flex items-center space-x-2">
                        <Check className="w-4 h-4 text-indigo-500" /> <span>{feature.text}</span>
                    </li>
                ))}
            </ul>
            <div className="flex justify-between items-center pt-4 border-t">
                <button 
                    onClick={() => onBack('home')} 
                    className="text-indigo-600 hover:text-indigo-800 transition text-sm"
                >
                    &larr; Change Plan
                </button>
                <button 
                    onClick={() => onBack('purchase-complete')} 
                    className="py-3 px-8 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition shadow-md"
                >
                    Complete Payment
                </button>
            </div>
        </div>
    );
}


const SubscriptionView = ({ handleSubscription }) => (
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
            // Pass the mock function down as onSelect
            <PlanCard 
              key={plan.id} 
              plan={{...plan}} 
              onSelect={handleSubscription}
            />
          ))}
        </div>
        
        {/* Footer Note */}
        <div className="mt-16 text-center text-gray-500 text-sm">
            All subscriptions include access across web, tablet, and mobile apps. 
            <br />
            You can cancel or downgrade at any time.
        </div>
    </div>
);


// Main App Component with basic routing logic
const Subscription = () => {
  // State for simple navigation (switch/case routing)
  const [currentView, setCurrentView] = useState('home');
  const [selectedPlanId, setSelectedPlanId] = useState(null);

  // State for message box
  const [message, setMessage] = useState('');
  
  // Mock Firebase readiness for consistency
  const [isAuthReady, setIsAuthReady] = useState(false); 

  // Function to handle moving to checkout
  const handleSubscription = (planId) => {
    setSelectedPlanId(planId);
    setCurrentView('checkout');
    setMessage(`Loading checkout for ${planId}...`);
    setTimeout(() => setMessage(''), 1500); // Clear message after 1.5 seconds
  }
  
  // Function to simulate user interaction and prevent 404
  const handleViewChange = (newView) => {
    if (newView === 'purchase-complete') {
        setMessage(`🎉 Purchase complete! Thank you for subscribing to ${selectedPlanId}!`);
        setTimeout(() => setMessage(''), 5000);
        setCurrentView('home');
        setSelectedPlanId(null);
        return;
    }
    setCurrentView(newView);
    setSelectedPlanId(null);
  }

  // Mock Firebase initialization hook (using useEffect to run once)
  useEffect(() => {
    setIsAuthReady(true);
  }, []);

  // Router Logic
  let content;
  switch (currentView) {
      case 'checkout':
          content = <CheckoutPage planId={selectedPlanId} onBack={() => {window.location.href = '/404'}} />;
          break;
      case 'home':
      default:
          content = <SubscriptionView handleSubscription={() => {window.location.href = '/404'}} />;
          break;
  }


  return (
    <div className="font-sans bg-gray-50 min-h-screen p-4 sm:p-8">
      {/* Global Message Box (Instead of alert()) */}
      {message && (
        <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 p-4 rounded-xl bg-indigo-600 text-white font-semibold shadow-2xl transition duration-300 animate-pulse">
          {message}
        </div>
      )}

      {content}
    </div>
  );
};

export default Subscription;