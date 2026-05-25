import { useState } from "react";

const activities = [
  {
    id: 1,
    title: "MORNING YOGA\nSESSION",
    subtitle: "Yoga in Abdoun",
    distance: "2.5 km",
    gender: "Male Only",
    genderIcon: "♂",
    badge: "FREE",
    image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&q=80",
  },
  {
    id: 2,
    title: "MORNING YOGA\nSESSION",
    subtitle: "Yoga in Abdoun",
    distance: "2.5 km",
    gender: "Male Only",
    genderIcon: "♂",
    badge: "FREE",
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=800&q=80",
  },
  
];

const ClockIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

export default function FreeActivities() {
  return (
    <div className="  flex justify-center">
      <div className="w-full max-w-md   px- ">

        {/* Header */}
        <div className="mb-5">
          <p className="text-[10px] font-bold font-[Inter, sans serif] tracking-widest text-gray-400 uppercase mb-1">
            Member Perks
          </p>
          <h2 className="text-2xl font-black text-gray-900 tracking-tight uppercase leading-tight">
            Free Activities &amp; Offers
          </h2>
        </div>

        {/* Cards */}
        <div className="flex flex-col gap-4">
          {activities.map((item, i) => (
            <div
              key={item.id}
              className="rounded-2xl overflow-hidden relative"
              style={{
                height: "220px",
                animation: `fadeUp 0.4s ease both`,
                animationDelay: `${i * 0.09}s`,
              }}
            >
              {/* Background image */}
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover"
                style={{ filter: "grayscale(30%) brightness(0.7)" }}
              />

              {/* Dark overlay */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.25) 40%, rgba(0,0,0,0.72) 100%)",
                }}
              />

              {/* FREE badge — top right */}
              <div className="absolute top-3 right-3 bg-white text-gray-900 text-[10px] font-black tracking-widest uppercase px-[12px] py-[4px] rounded-[6px]">
                {item.badge}
              </div>

              {/* Bottom content */}
              <div className="absolute bottom-0 left-0 right-0 px-4 pb-4">
                {/* Title with dashed left border */}
                <div
                  className="mb-1 pl-2"
                  style={{ borderLeft: "2px dashed rgba(255,255,255,0.6)" }}
                >
                  {item.title.split("\n").map((line, idx) => (
                    <div
                      key={idx}
                      className="text-white font-black uppercase leading-tight"
                      style={{ fontSize: "20px", letterSpacing: "-0.01em" }}
                    >
                      {line}
                    </div>
                  ))}
                  <p className="text-gray-300 text-[12px] font-medium mt-0.5">
                    {item.subtitle}
                  </p>
                </div>

                {/* Meta row + Book button */}
                <div className="flex items-center justify-between mt-2">
                  <div className="flex items-center gap-2 text-gray-300 text-[12px] font-medium">
                    <span className="flex items-center gap-1">
                      <ClockIcon />
                      {item.distance}
                    </span>
                    <span className="text-gray-500">|</span>
                    <span className="flex items-center gap-0.5">
                      <span className="text-gray-300 text-xs">{item.genderIcon}</span>
                      {item.gender}
                    </span>
                  </div>

                  <button
                    className="bg-white text-gray-900 text-[12px] font-black tracking-widest uppercase px-4 py-2 rounded-[8px] transition-all duration-150 hover:bg-gray-100 active:scale-95"
                    style={{ letterSpacing: "0.06em" }}
                  >
                    BOOK NOW
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
