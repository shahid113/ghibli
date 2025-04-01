import React, { useState, useEffect } from 'react';

interface PopupProps {
  delay?: number; // Delay in milliseconds before showing the popup
  autoClose?: number; // Auto close after this many milliseconds (optional)
}

const Popup: React.FC<PopupProps> = ({
  delay = 2000,
  autoClose
}) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    // Show popup after delay
    const timer = setTimeout(() => {
      setIsVisible(true);
      
      // Add overlay class to body to prevent scrolling
      document.body.classList.add('popup-active');
    }, delay);
    
    // Auto close functionality
    let autoCloseTimer: NodeJS.Timeout | null = null;
    if (autoClose) {
      autoCloseTimer = setTimeout(() => {
        closePopup();
      }, autoClose + delay);
    }
    
    return () => {
      clearTimeout(timer);
      if (autoCloseTimer) clearTimeout(autoCloseTimer);
    };
  }, [delay, autoClose]);

  // Close popup
  const closePopup = () => {
    setIsVisible(false);
    document.body.classList.remove('popup-active');
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="relative max-w-md w-full animate-pulse-fade">
        {/* Close button */}
        <button
          onClick={closePopup}
          className="absolute -top-3 -right-3 bg-black text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-800 focus:outline-none shadow-lg z-10 border-2 border-white"
          aria-label="Close popup"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
        
        {/* Ad Content */}
        <div className="w-full overflow-hidden bg-black rounded-xl shadow-2xl border-2 border-red-600">
          {/* Animated top banner */}
          <div className="bg-red-600 py-1 px-3 text-center animate-shimmer overflow-hidden">
            <p className="text-white text-sm font-bold uppercase tracking-wider">🔥 Limited Time Offer 🔥</p>
          </div>
          
          <div className="flex items-center p-5 space-x-4">
            <div className="relative">
              <div className="absolute inset-0 bg-red-600 rounded-full blur-md opacity-70 animate-pulse"></div>
              <img 
                src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg2OWKeeBusWr48mCgUfq9efkbfVc9RlgqW9SXczuM5dIUuHvd-v-eBJ02lJQLJqEZN8-DxKydYtnM-XFXt9XlMMdDofO6i8YO5y02irAmce9FSdgf5YVL2P6ZMqakM2KGP1IeVTORTfnpXMpIC9NCv2w1SQfLn7ni6621_AbvjOpPsHQ_l9V8YmNwcmA/s500/Reward+.png" 
                alt="App Logo" 
                className="w-20 h-20 rounded-full border-2 border-white shadow-lg relative z-10" 
              />
            </div>
            
            <div className="flex flex-col">
              <h2 className="text-2xl font-extrabold text-white tracking-wide">Earn <span className="text-red-600">$100</span>/Day</h2>
              <p className="text-gray-300 text-sm">Start your journey to financial freedom.</p>
              
              <a 
                href="https://play.google.com/store/apps/details?id=com.nexumbyte.rewardplus&pcampaignid=web_share" 
                target="_blank" 
                rel="noopener noreferrer"
                className="mt-4 group"
              >
                <button className="bg-red-600 text-white font-bold py-2 px-6 rounded-full shadow-lg transform transition-all duration-300 group-hover:scale-105 group-hover:bg-red-700 group-hover:shadow-red-500/50 w-full">
                  INSTALL NOW
                </button>
              </a>
            </div>
          </div>
          
          {/* Bottom text */}
          <div className="bg-red-600 py-1 px-3 text-center">
            <p className="text-white text-xs">Join over 100,000 users making money daily!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;