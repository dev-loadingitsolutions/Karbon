import { useState } from "react";
import RateStar from "../assets/icons/rate-star.png";
import KarbonVector from "../assets/icons/K-vector.png";

const gyms = [
  {
    id: 1,
    name: "Iron Engine Gym",
    rating: 4.9,
    credits: 53,
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#b0b0b0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 4v16M18 4v16M4 8h2M18 8h2M4 16h2M18 16h2M8 12h8" />
      </svg>
    ),
  },
  {
    id: 2,
    name: "Core Fitness",
    rating: 4.8,
    credits: 53,
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#b0b0b0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="4" r="1.5" fill="#b0b0b0" stroke="none"/>
        <path d="M12 7c-2 2-3 4-2 6l1 3-3 2" />
        <path d="M12 13l3 2-1 3" />
        <path d="M9 10l-2 1M15 10l2 1" />
      </svg>
    ),
  },
  {
    id: 3,
    name: "Peak Performance",
    rating: 4.7,
    credits: 53,
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#b0b0b0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="3 17 8 12 12 15 17 9 21 12" />
        <line x1="3" y1="20" x2="21" y2="20" />
      </svg>
    ),
  },
  {
    id: 4,
    name: "Flex Zone",
    rating: 4.6,
    credits: 53,
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#b0b0b0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2C8 2 5 5 5 9c0 5 7 13 7 13s7-8 7-13c0-4-3-7-7-7z" />
        <circle cx="12" cy="9" r="2.5" />
      </svg>
    ),
  },
];

const StarIcon = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="#f59e0b" stroke="#f59e0b" strokeWidth="1">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

const CreditBadge = ({ credits }) => (
  <div className="flex items-center gap-1">
    <div
      className="w-5 h-5 rounded flex items-center justify-center flex-shrink-0"
      style={{ background: "linear-gradient(135deg, #f59e0b, #d97706)" }}
    >
      <span className="text-white font-black text-[10px] leading-none">K</span>
    </div>
    <span className="font-black text-gray-900 text-[13px] leading-tight">
      {credits} credits
    </span>
  </div>
);

export default function TopRated() {
  return (
    <div className="  flex justify-center">
      <div className="w-full max-w-md   pt-7 pb-2">

        {/* Header */}
        <div className=" mb-4">
          <h2 className="text-[18px] font-bold text-gray-900 font-[Inter, sans serif] tracking-tight">
            Top Rated in Amman
          </h2>
        </div>

        {/* Horizontal scroll */}
        <div
          className="flex gap-3 overflow-x-auto pb-2"
          style={{
            
            paddingRight: "16px",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {gyms.map((gym, i) => (
            <div
              key={gym.id}
              className="flex-shrink-0 flex flex-col"
              style={{
                width: "155px",
                animation: `fadeUp 0.35s ease both`,
                animationDelay: `${i * 0.07}s`,
              }}
            >
              {/* Square image placeholder */}
              <div
                className="rounded-[4px] border border-[#C6C6C6] flex items-center justify-center mb-2"
                style={{
                  width: "155px",
                  height: "155px",
                  background: "#F3F3F3",
                }}
              >
                {gym.icon}
              </div>

              {/* Name */}
              <p className="text-[13px] font-bold text-gray-900 leading-tight mb-1 truncate">
                {gym.name}
              </p>

              {/* Rating + Credits */}
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-0.5">
                  <img src={RateStar} alt="Rating" className="w-3 h-3" />
                  <span className="text-gray-700 text-[12px] font-semibold">{gym.rating}</span>
                </span>
                <span className="flex items-center gap-1">
                <img  src={KarbonVector} alt="Karbon Logo" className="w-[13px] h-[11px]"  />
                 <span className="text-[#1A1C1C] text-[12px] font-semibold">{gym.credits} credits</span>
                </  span>
                
                
                
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        div::-webkit-scrollbar { display: none; }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
