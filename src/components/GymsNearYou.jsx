import { useState } from "react";
import { useNavigate } from 'react-router-dom'

import RateStar from "../assets/icons/rate-star.png";
import DistanceWalk from "../assets/icons/distance-Icon.png";
import GenderUnisex from "../assets/icons/gender-Icon.png";
import GenderFemale from "../assets/icons/Gender-Female.png";
import KarbonVector from "../assets/icons/K-vector.png";

const gyms = [
  {
    id: 1,
    name: "The Warehouse Gym",
    rating: 4.8,
    distance: "1.2 km",
    gender: "Unisex",
    genderIcon: <img src={GenderUnisex} alt="Unisex" className="w-[11px] h-[11px]" />,
    credits: 53,
    status: "OPEN NOW",
    statusColor: "bg-gray-900",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=700&q=80",
  },
  {
    id: 2,
    name: "Lava Ladies Fitness",
    rating: 4.5,
    distance: "0.8 km",
    gender: "Female Only",
    genderIcon: <img src={GenderFemale} alt="Female Only" className=" h-[11px]" />,
    credits: 53,
    status: "CLOSED",
    statusColor: "bg-gray-500",
    image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=700&q=80",
  },
  {
    id: 3,
    name: "Spartan Strength Club",
    rating: 4.9,
    distance: "2.5 km",
    gender: "Male Only",
    genderIcon: "♂",
    credits: 53,
    status: "OPEN NOW",
    statusColor: "bg-gray-900",
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=700&q=80",
  },
];

const HeartIcon = ({ filled }) => (
  <svg width="16" height="16" viewBox="0 0 24 24"
    fill={filled ? "#ef4444" : "none"}
    stroke={filled ? "#ef4444" : "#6b7280"}
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);

const StarIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="#f59e0b" stroke="#f59e0b" strokeWidth="1">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

const WalkIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="4" r="1.5" fill="#6b7280" stroke="none"/>
    <path d="M9 10l1.5 5 1.5-3 1.5 3 1.5-5" />
    <path d="M8 20l2-5M16 20l-2-5" />
  </svg>
);

// K logo credit badge
const CreditBadge = ({ credits }) => (
  <div className="flex flex-col items-end gap-1">
    <div className="flex items-center gap-1">
      {/* K logo */}
        <img src={KarbonVector} alt="Karbon Logo" className="w-3 h-[16px]" />
        <span className="font-black text-gray-900 text-[18px] leading-tight">
          {credits} credits
        </span>
      
     
    </div>
    <div className="flex flex-col leading-none">
        
         <span className="text-gray-400 text-[10px] font-medium tracking-wide uppercase">
          per visit
        </span>
      </div>
  </div>
);

export default function GymsNearYou() {
  const [likedIds, setLikedIds] = useState([]);
  const navigate = useNavigate()

  const toggleLike = (id, e) => {
    e.stopPropagation();
    setLikedIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  return (
    <div className="bg-gray-50  flex justify-center">
      <div className="w-full max-w-md     pb-10">

        {/* Header */}
        <div className="mb-4">
          <p className="text-[10px] font-bold tracking-widest text-gray-400 uppercase mb-1">
            Discover Nearby
          </p>
          <h2 className="text-[24px] font-extrabold text-gray-900 tracking-tight">
            Gyms Near You
          </h2>
        </div>

        {/* Cards list */}
        <div className="flex flex-col gap-5">
          {gyms.map((gym, i) => (
            <div
              key={gym.id}
              onClick={() => navigate('/gymDetails')}
              role="button"
              tabIndex={0}
              className="cursor-pointer"
              style={{
                animation: `fadeUp 0.4s ease both`,
                animationDelay: `${i * 0.08}s`,
              }}
            >
              {/* Image card — no shadow */}
              <div className="rounded-[4px] overflow-hidden" style={{ height: "192px", position: "relative" }}>
                <img
                  src={gym.image}
                  alt={gym.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  style={{ filter: "grayscale(25%) brightness(0.9)" }}
                />

                {/* Heart button */}
                <button
                  onClick={(e) => toggleLike(gym.id, e)}
                  className="absolute top-3 left-3 w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-150 hover:scale-110 active:scale-90"
                  style={{ background: "#E8E8E8", backdropFilter: "blur(6px)" }}
                >
                  <HeartIcon filled={likedIds.includes(gym.id)} />
                </button>

                {/* Status badge */}
                <div className={`absolute top-3 right-3 ${gym.statusColor} text-black bg-white text-[10px] font-bold tracking-widest uppercase px-[12px] py-[4px] rounded-full`}>
                  {gym.status}
                </div>
              </div>

              {/* Info row — outside card */}
              <div className="pt-3 pb-1 flex items-center justify-between">
                {/* Left: name + meta */}
                <div className="flex-1 min-w-0 pr-2">
                  <h3 className="text-[18px] font-bold text-[#1A1C1C] tracking-tight leading-tight mb-1 truncate">
                    {gym.name}
                  </h3>
                  <div className="flex items-center gap-2 text-gray-500 text-[11px] font-medium flex-wrap">
                    <span className="flex items-center gap-0.5">
                      <img src={RateStar} alt="Rating" className="w-[11px] h-[11px]" />
                      <span className="text-[12px] text-[#777777]  font-semibold">{gym.rating}</span>
                    </span>
                    <span className="text-gray-300">•</span>
                    <span className="flex items-center gap-0.5">
                      <img src={DistanceWalk} alt="Distance" className=" h-[11px]" />
                      {gym.distance}
                    </span>
                    <span className="text-gray-300">•</span>
                    <span className="flex items-center gap-0.5">
                      <span className="text-gray-400 text-xs">{gym.genderIcon}</span>
                      {gym.gender}
                    </span>
                  </div>
                </div>

                {/* Right: credits */}
                <CreditBadge credits={gym.credits} />
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
