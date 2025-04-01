import React from "react";

const BannerAd: React.FC = () => {
  return (
    <div className="flex justify-center p-6">
      <div className="w-full max-w-md bg-gradient-to-r from-purple-600 to-blue-500 text-white shadow-2xl rounded-3xl flex items-center p-5 space-x-4 border border-white/20">
        <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg2OWKeeBusWr48mCgUfq9efkbfVc9RlgqW9SXczuM5dIUuHvd-v-eBJ02lJQLJqEZN8-DxKydYtnM-XFXt9XlMMdDofO6i8YO5y02irAmce9FSdgf5YVL2P6ZMqakM2KGP1IeVTORTfnpXMpIC9NCv2w1SQfLn7ni6621_AbvjOpPsHQ_l9V8YmNwcmA/s500/Reward+.png" alt="App Logo" className="w-16 h-16 rounded-full shadow-md" />
        <div className="flex flex-col">
          <h2 className="text-xl font-extrabold tracking-wide">Earn $100/Day</h2>
          <p className="text-sm text-gray-200">Start your journey to financial freedom.</p>
          <a href="https://play.google.com/store/apps/details?id=com.nexumbyte.rewardplus&pcampaignid=web_share" target="_blank" rel="noopener noreferrer">
            <button className="mt-3 bg-yellow-400 text-blue-900 font-bold py-2 px-5 rounded-full shadow-lg transition-transform transform hover:scale-105 hover:bg-yellow-500">Install Now</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default BannerAd;
