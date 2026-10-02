import React from 'react';
import { MessageSquare, Heart, Search, Calendar, Laptop, Globe } from 'lucide-react';

export const CanvaHowIWork: React.FC = () => {
  const qualities = [
    {
      title: "Empathy in Patient Communication",
      iconType: "empathy"
    },
    {
      title: "Attention to Details",
      iconType: "details"
    },
    {
      title: "Proactive & Organized",
      iconType: "organized"
    },
    {
      title: "Remote Work Efficiency",
      iconType: "efficiency"
    }
  ];

  return (
    <section className="py-20 bg-[#142d4c] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Title & Subtitle */}
          <div className="lg:col-span-4 space-y-2">
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              How I Work
            </h2>
            <p className="text-sm sm:text-base text-blue-200 font-normal">
              The Qualities That Set Me Apart
            </p>
          </div>

          {/* Right 4 Quality Icons & Labels */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-6">
            
            {/* Item 1: Empathy */}
            <div className="flex flex-col items-center text-center space-y-4 group">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white/10 flex items-center justify-center relative shadow-lg group-hover:scale-105 transition-transform">
                <div className="relative">
                  <MessageSquare className="w-10 h-10 text-white fill-white" />
                  <div className="absolute -bottom-1 -right-2 w-7 h-7 bg-red-600 rounded-full flex items-center justify-center shadow-md">
                    <Heart className="w-4 h-4 text-white fill-white" />
                  </div>
                </div>
              </div>
              <h3 className="text-xs sm:text-sm font-bold text-white leading-snug">
                Empathy in Patient Communication
              </h3>
            </div>

            {/* Item 2: Attention to Details */}
            <div className="flex flex-col items-center text-center space-y-4 group">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white/10 flex items-center justify-center relative shadow-lg group-hover:scale-105 transition-transform">
                <Search className="w-10 h-10 text-white stroke-[2.2]" />
              </div>
              <h3 className="text-xs sm:text-sm font-bold text-white leading-snug">
                Attention to Details
              </h3>
            </div>

            {/* Item 3: Proactive & Organized */}
            <div className="flex flex-col items-center text-center space-y-4 group">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white/10 flex items-center justify-center relative shadow-lg group-hover:scale-105 transition-transform">
                <div className="relative">
                  <Calendar className="w-10 h-10 text-white" />
                  <span className="absolute -top-1 -right-1 text-amber-400 font-black text-lg">⚡</span>
                </div>
              </div>
              <h3 className="text-xs sm:text-sm font-bold text-white leading-snug">
                Proactive & Organized
              </h3>
            </div>

            {/* Item 4: Remote Work Efficiency */}
            <div className="flex flex-col items-center text-center space-y-4 group">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white/10 flex items-center justify-center relative shadow-lg group-hover:scale-105 transition-transform">
                <Laptop className="w-11 h-11 text-white" />
              </div>
              <h3 className="text-xs sm:text-sm font-bold text-white leading-snug">
                Remote Work Efficiency
              </h3>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
