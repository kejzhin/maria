import React from 'react';
import { MessageSquare, Heart, Search, Calendar, Laptop } from 'lucide-react';
import { motion } from 'motion/react';

export const HowIWork: React.FC = () => {
  const qualities = [
    {
      title: "Empathy in Patient Communication",
      icon: (
        <div className="relative">
          <MessageSquare className="w-10 h-10 text-white fill-white" />
          <div className="absolute -bottom-1 -right-2 w-7 h-7 bg-red-600 rounded-full flex items-center justify-center shadow-md">
            <Heart className="w-4 h-4 text-white fill-white" />
          </div>
        </div>
      )
    },
    {
      title: "Attention to Details",
      icon: <Search className="w-10 h-10 text-white stroke-[2.2]" />
    },
    {
      title: "Proactive & Organized",
      icon: (
        <div className="relative">
          <Calendar className="w-10 h-10 text-white" />
          <span className="absolute -top-1 -right-1 text-amber-400 font-black text-lg">⚡</span>
        </div>
      )
    },
    {
      title: "Remote Work Efficiency",
      icon: <Laptop className="w-11 h-11 text-white" />
    }
  ];

  return (
    <section className="py-14 sm:py-20 bg-[#142d4c] text-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row items-center justify-center gap-6 sm:gap-8 lg:gap-10">
          
          {/* Left Title & Subtitle - positioned closely to the first card */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex-shrink-0 text-center lg:text-left space-y-1.5 max-w-xs"
          >
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              How I Work
            </h2>
            <p className="text-sm sm:text-base text-blue-200 font-normal">
              The Qualities That Set Me Apart
            </p>
          </motion.div>

          {/* Right 4 Quality Icons & Labels */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 flex-1 max-w-3xl">
            {qualities.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ 
                  duration: 0.6, 
                  delay: idx * 0.12, 
                  ease: [0.22, 1, 0.36, 1] 
                }}
                className="flex flex-col items-center text-center space-y-3 sm:space-y-4 group"
              >
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="w-18 h-18 sm:w-24 sm:h-24 p-3 rounded-full bg-white/10 flex items-center justify-center relative shadow-lg group-hover:bg-white/15 transition-colors cursor-default"
                >
                  {item.icon}
                </motion.div>
                <h3 className="text-xs sm:text-sm font-bold text-white leading-snug">
                  {item.title}
                </h3>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
