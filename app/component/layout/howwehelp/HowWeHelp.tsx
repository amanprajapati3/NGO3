import React from 'react';
import { HowWeHelpProps } from '@/type/typeSection';
import { HandHeart, Globe, GraduationCap, Mail } from 'lucide-react';

const renderIcon = (iconName: string) => {
  const iconProps = { className: "w-12 h-12 text-[#0f172a] relative z-10 stroke-[1.5]" };
  
  return (
    <div className="relative flex items-center justify-center w-16 h-16">
      {/* Orange Circle Overlay Effect matching the design */}
      <div className="absolute w-8 h-8 bg-[#ff5500] rounded-full bottom-1 left-1/2 -translate-x-1/2 z-0 opacity-90" />
      
      {(() => {
        switch (iconName) {
          case 'healthcare':
            return <HandHeart {...iconProps} />;
          case 'hunger':
            return <Globe {...iconProps} />;
          case 'education':
            return <GraduationCap {...iconProps} />;
          case 'awareness':
            return <Mail {...iconProps} />;
          default:
            return <HandHeart {...iconProps} />;
        }
      })()}
    </div>
  );
};

export default function HowWeHelp({ data }: HowWeHelpProps) {
  return (
    <section className="bg-slate-50 pt-8 md:pt-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Dark Container Header */}
        <div className="bg-[#08121e] rounded-t-3xl pt-12 pb-28 px-6 sm:px-10 lg:px-12 text-white">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-[#ff5500] font-bold text-sm">🤲</span>
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-gray-300">
              {data.badge}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 tracking-tight">
            {data.title}
          </h2>
          <p className="text-gray-300 max-w-3xl text-sm sm:text-base leading-relaxed">
            {data.description}
          </p>
        </div>

        {/* Floating Cards Grid (Responsive: 1 mobile, 2 tab, 4 desktop) */}
        <div className="-mt-16 px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.cards.map((card) => (
              <div
                key={card.id}
                className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 flex flex-col items-center text-center transition-transform duration-300 hover:-translate-y-1"
              >
                {/* Custom Icon Component */}
                <div className="mb-6">
                  {renderIcon(card.icon)}
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {card.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}