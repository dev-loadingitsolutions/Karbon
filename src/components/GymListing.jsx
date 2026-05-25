import { useState } from "react";

import StarRateBlack from '../assets/icons/black-Star.svg'
import DistanceIcon from '../assets/icons/distance-Icon.png'
import GenderExIcon from '../assets/icons/gender-Icon.png'
import KarbonVector from '../assets/icons/K-vector.png'

const gyms = [
  {
    id: 1,
    name: "The Iron Vault",
    rating: 4.9,
    distance: "1.2 km",
    gender: "Unisex",
    credits: 53,
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80",
  },
  {
    id: 2,
    name: "Zenith Wellness",
    rating: 4.9,
    distance: "1.2 km",
    gender: "Unisex",
    credits: 53,
    image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&q=80",
  },
  {
    id: 3,
    name: "Titan Athletics",
    rating: 4.9,
    distance: "1.2 km",
    gender: "Unisex",
    credits: 53,
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=800&q=80",
  },
  {
    id: 4,
    name: "The Iron Vault",
    rating: 4.9,
    distance: "1.2 km",
    gender: "Unisex",
    credits: 53,
    image: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=800&q=80",
  },
  {
    id: 5,
    name: "Zenith Wellness",
    rating: 4.9,
    distance: "1.2 km",
    gender: "Unisex",
    credits: 53,
    image: "https://images.unsplash.com/photo-1558611848-73f7eb4001a1?w=800&q=80",
  },
  {
    id: 6,
    name: "Titan Athletics",
    rating: 4.9,
    distance: "1.2 km",
    gender: "Unisex",
    credits: 53,
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80",
  },
];

const StarIcon = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="#f59e0b" stroke="#f59e0b" strokeWidth="1">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

const WalkIcon = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="4" r="1.5" fill="currentColor" stroke="none" />
    <path d="M9 10l1.5 5 1.5-3 1.5 3 1.5-5" />
    <path d="M8 20l2-5M16 20l-2-5" />
  </svg>
);

const GenderIcon = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="4" />
    <line x1="12" y1="12" x2="12" y2="20" />
    <line x1="9" y1="17" x2="15" y2="17" />
  </svg>
);

const HeartIcon = ({ filled }) => (
  <svg width="14" height="14" viewBox="0 0 24 24"
    fill={filled ? "#ef4444" : "none"}
    stroke={filled ? "#ef4444" : "white"}
    strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);

const ListViewIcon = ({ active }) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={active ? "white" : "#9ca3af"} strokeWidth="2.5" strokeLinecap="round">
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);

const GridViewIcon = ({ active }) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={active ? "white" : "#9ca3af"} strokeWidth="2.5" strokeLinecap="round">
    <rect x="3" y="3" width="8" height="8" rx="1.5" />
    <rect x="13" y="3" width="8" height="8" rx="1.5" />
    <rect x="3" y="13" width="8" height="8" rx="1.5" />
    <rect x="13" y="13" width="8" height="8" rx="1.5" />
  </svg>
);

const CreditBadge = ({ credits }) => (
  <div className=" gap-1 flex flex-col  flex-shrink-0">
    <div className="flex items-center gap-0.5">
      
      <img src={KarbonVector} alt="K" className="w-3 h-3" />
      <span className="font-black font-medium text-gray-900 text-[18px]">{credits} credits</span>
    </div>
    <div className="flex flex-col items-end leading-none">
      
      <span className="text-[#777777] text-[10px] font-medium tracking-wide uppercase">per visit</span>
    </div>
  </div>
);

// ── List Card ──
function ListCard({ gym, liked, onLike }) {
  return (
    <div className="  overflow-hidden" >
      {/* Image */}
      <div className="relative overflow-hidden" style={{ height: "192px" }}>
        <img
          src={gym.image}
          alt={gym.name}
          className="w-full h-[192px] object-cover transition-transform duration-500 hover:scale-105"
          style={{ filter: "grayscale(20%) brightness(0.88)" }}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.25))" }} />
        <button
          onClick={onLike}
          className="absolute top-2.5 left-2.5 w-7 h-7 rounded-full flex items-center justify-center"
          style={{ background: "rgba(255,255,255,0.2)", backdropFilter: "blur(6px)" }}
        >
          <HeartIcon filled={liked} />
        </button>
      </div>
      {/* Info */}
      <div className=" py-2.5 flex items-center justify-between">
        <div className="min-w-0 flex-1  ">
          <div className="flex items-center  gap-2 mb-0.5">
            <h3 className="text-[22px] font-[Inter, sans serif] font-bold text-gray-900 truncate leading-tight mb-1">{gym.name}</h3>
            <span className="flex items-center bg-[#F3F3F3] py-[2px] px-[8px] gap-0.5">
              <img src={StarRateBlack} alt="Rating" className="w-3.5 h-3.5" />
              <span className="text-[14px] text-gray-700 font-bold">{gym.rating}</span></span>
          </div>

          <div className="flex  items-center gap-1.5 text-gray-500 text-[11px] font-medium">

            <span className="text-gray-300">·</span>
            <span className="flex items-center text-[12px] gap-0.5"><img src={DistanceIcon} alt="Distance" className=" h-[11.67px]" />{gym.distance}</span>
            <span className="text-gray-300">·</span>
            <span className="flex items-center text-[12px] gap-0.5"><img src={GenderExIcon} alt="Gender" className=" h-[11.67px]" />{gym.gender}</span>
          </div>
        </div>
        <CreditBadge credits={gym.credits} />
      </div>
    </div>
  );
}

// ── Grid Card ──
function GridCard({ gym, liked, onLike }) {
  return (
    <div className=" overflow-hidden" >
      <div className="relative overflow-hidden" style={{ height: "110px" }}>
        <img
          src={gym.image}
          alt={gym.name}
          className="w-full h-full object-cover"
          style={{ filter: "grayscale(20%) brightness(0.88)" }}
        />
        <button
          onClick={onLike}
          className="absolute top-2 left-2 w-6 h-6 rounded-full flex items-center justify-center"
          style={{ background: "rgba(255,255,255,0.2)", backdropFilter: "blur(6px)" }}
        >
          <HeartIcon filled={liked} />
        </button>
      </div>
      <div className="px-2.5 py-2">
        <h3 className="text-[18px] font-bold text-gray-900 truncate leading-tight mb-1">{gym.name}</h3>
        <div className="flex items-center gap-1 text-gray-500 text-[10px] font-medium mb-1.5">
          <span className="flex items-center gap-0.5">
            <img src={StarRateBlack} alt="Rating" className="w-3 h-3" />
            <span className="text-[10px] text-gray-700 font-medium">{gym.rating}</span></span>
          <span className="text-gray-300">·</span>
          <span>{gym.distance}</span>
        </div>
        <div className="flex items-center gap-1">
          <img src={KarbonVector} alt="K" className="w-3 h-3" />
          <span className="font-black font-medium text-gray-900 text-[12px]">{gym.credits} credits</span>
        </div>
      </div>
    </div>
  );
}

export default function GymListing() {
  const [viewMode, setViewMode] = useState("list");
  const [likedIds, setLikedIds] = useState([]);

  const toggleLike = (id, e) => {
    e.stopPropagation();
    setLikedIds((prev) => prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]);
  };

  return (
    <div className=" flex justify-center">
      <div className="w-full max-w-md   pt-2 pb-10">

        {/* View toggle */}
        <div className="flex items-center justify-between  mb-4">
          <p className="text-[10px] font-[Inter, sans serif] font-bold text-[#111111]">View as:</p>
          <div className="flex items-center gap-1 bg-gray-200 rounded-lg p-1">
            <button
              onClick={() => setViewMode("list")}
              className={`w-8 h-7 rounded-md flex items-center justify-center cursor-pointer transition-all duration-200 ${viewMode === "list" ? "bg-gray-900" : "bg-transparent"}`}
            >
              <ListViewIcon active={viewMode === "list"} />
            </button>
            <button
              onClick={() => setViewMode("grid")}
              className={`w-8 h-7 rounded-md flex items-center justify-center cursor-pointer transition-all duration-200 ${viewMode === "grid" ? "bg-gray-900" : "bg-transparent"}`}
            >
              <GridViewIcon active={viewMode === "grid"} />
            </button>
          </div>
        </div>

        {/* List view */}
        {viewMode === "list" && (
          <div className="flex flex-col gap-3">
            {gyms.map((gym, i) => (
              <div key={gym.id} style={{ animation: `fadeUp 0.3s ease both`, animationDelay: `${i * 0.06}s` }}>
                <ListCard gym={gym} liked={likedIds.includes(gym.id)} onLike={(e) => toggleLike(gym.id, e)} />
              </div>
            ))}
          </div>
        )}

        {/* Grid view */}
        {viewMode === "grid" && (
          <div className="grid grid-cols-2 gap-3 ">
            {gyms.map((gym, i) => (
              <div key={gym.id} style={{ animation: `fadeUp 0.3s ease both`, animationDelay: `${i * 0.05}s` }}>
                <GridCard gym={gym} liked={likedIds.includes(gym.id)} onLike={(e) => toggleLike(gym.id, e)} />
              </div>
            ))}
          </div>
        )}
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
