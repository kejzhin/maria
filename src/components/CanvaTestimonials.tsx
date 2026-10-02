import React from 'react';
import { Quote, Star } from 'lucide-react';

export const CanvaTestimonials: React.FC = () => {
  const testimonials = [
    {
      role: "Medical Biller",
      text: "Highly recommend working with Maria. She has been fantastic at helping me with Accounts Receivable and payment posting. She is well-organized and manages her time efficiently.",
      name: "Nicole A."
    },
    {
      role: "Admin Assistant",
      text: "Our company hired Maria 1 year ago. She was hired to help with the overflow of our front desk. Sheila was selected for her outstanding customer service. She has always been reliable, flexible, and pleasant to work with.",
      name: "Carol C."
    },
    {
      role: "Receptionist",
      text: "It was a pleasure to work with Maria at Gunz Dental. I would have no hesitate in recommending Maria as a hard-working, punctual, dedicated and trustworthy person.",
      name: "Trevor M."
    },
    {
      role: "Medical Virtual Representative",
      text: "Maria was an exceptional team member: conscientious, diligent and diligent on the front desk. She has over two years of her work ethic consistently exceeded expectations. She would be a tremendous asset to any organization.",
      name: "Kyler L."
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Client Testimonials
          </h2>
          <p className="text-sm font-semibold text-teal-800">
            Trusted by Healthcare Professionals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-4 relative">
              <Quote className="w-8 h-8 text-teal-600/20 absolute top-6 right-6" />
              <div className="text-xs font-bold uppercase tracking-wider text-teal-800">
                {t.role}
              </div>
              <p className="text-sm text-slate-700 italic leading-relaxed">
                "{t.text}"
              </p>
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-bold text-slate-900">— {t.name}</span>
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
