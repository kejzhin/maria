import React, { useState } from 'react';
import { CODING_SPECIALTIES } from '../data/portfolioData';
import { Binary, Search, Filter, Stethoscope, Check } from 'lucide-react';

export const CodingCompetencies: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'ENT', 'Allergy', 'Biologics', 'Diagnostics'];

  const filteredCodes = CODING_SPECIALTIES.filter((item) => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch = 
      item.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.codeType.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="medical-coding" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-2.5 py-1 rounded-md border border-teal-100 mb-3">
            <Binary className="w-3.5 h-3.5" />
            <span>Procedural & Diagnostic Nomenclature</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight text-balance">
            Medical Coding Proficiency (CPT, HCPCS, ICD-10)
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Familiar with specific ENT diagnostic codes, surgical CPT codes, allergy testing units, and high-cost biologic HCPCS codes.
          </p>
        </div>

        {/* Filters & Search Toolbar */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-6">
          
          {/* Segmented Category Buttons */}
          <div className="flex flex-wrap items-center gap-1 p-1 bg-slate-100 rounded-xl border border-slate-200/80">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                  selectedCategory === cat
                    ? 'bg-white text-slate-900 shadow-sm border border-slate-200/60'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search code or procedure..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-600 transition-all"
            />
          </div>
        </div>

        {/* Tabular Code Presentation */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-slate-50/80 border-b border-slate-200 text-slate-500 uppercase tracking-wider font-semibold">
                  <th className="py-3.5 px-4 sm:px-6">Code Type</th>
                  <th className="py-3.5 px-4 sm:px-6">Code / Modifier</th>
                  <th className="py-3.5 px-4 sm:px-6">Clinical Description</th>
                  <th className="py-3.5 px-4 sm:px-6">Sub-Specialty</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-sans">
                {filteredCodes.map((item, idx) => (
                  <tr key={idx} className="hover:bg-teal-50/30 transition-colors">
                    <td className="py-3.5 px-4 sm:px-6 font-semibold">
                      <span className={`px-2 py-0.5 rounded text-[11px] font-mono ${
                        item.codeType === 'CPT' 
                          ? 'bg-blue-50 text-blue-700 border border-blue-200' 
                          : item.codeType === 'HCPCS'
                          ? 'bg-purple-50 text-purple-700 border border-purple-200'
                          : 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                      }`}>
                        {item.codeType}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 sm:px-6 font-mono font-bold text-slate-900 tabular-nums text-sm">
                      {item.code}
                    </td>
                    <td className="py-3.5 px-4 sm:px-6 text-slate-700 font-medium">
                      {item.description}
                    </td>
                    <td className="py-3.5 px-4 sm:px-6 text-slate-500">
                      {item.category}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {filteredCodes.length === 0 && (
            <div className="py-12 text-center text-xs text-slate-500">
              No matching medical codes found for "{searchQuery}".
            </div>
          )}
        </div>

        {/* Coding & Compliance Quality Checklist */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex items-start gap-3">
            <Check className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
            <div className="text-xs">
              <div className="font-bold text-slate-800">Modifier Accuracy</div>
              <div className="text-slate-600 mt-0.5">Application of -25 (significant E/M), -59 (distinct procedural service), and -50 (bilateral).</div>
            </div>
          </div>

          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex items-start gap-3">
            <Check className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
            <div className="text-xs">
              <div className="font-bold text-slate-800">Medical Necessity Documentation</div>
              <div className="text-slate-600 mt-0.5">Matching ICD-10 diagnostic indications with payer-specific Local Coverage Determinations (LCD).</div>
            </div>
          </div>

          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex items-start gap-3">
            <Check className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
            <div className="text-xs">
              <div className="font-bold text-slate-800">Allergy Units & Vials</div>
              <div className="text-slate-600 mt-0.5">Precise unit calculation for 95165 antigen maintenance and billing adherence.</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
