import { useState } from "react";
import { useNavigate } from "react-router-dom";

import KarbondLogo from "../assets/icons/K-vector.png";

const classesData = [
  {
    id: 1,
    name: "Morning Vinyasa Flow",
    instructor: "Ahmad Nasser",
    gender: "MIXED",
    time: "08:30 AM",
    duration: "60 MIN",
    credits: 53,
    badge: "FEATURED",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80",
  },
  {
    id: 2,
    name: "HIIT Power Session",
    instructor: "Sara Khalil",
    gender: "MIXED",
    time: "10:00 AM",
    duration: "45 MIN",
    credits: 45,
    badge: "POPULAR",
    image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&q=80",
  },
  {
    id: 3,
    name: "Pilates Core Burn",
    instructor: "Lina Mansour",
    gender: "FEMALE ONLY",
    time: "11:30 AM",
    duration: "50 MIN",
    credits: 40,
    badge: "NEW",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&q=80",
  },
 
];

const ClockIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const GenderIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="4" />
    <line x1="12" y1="12" x2="12" y2="20" />
    <line x1="9" y1="17" x2="15" y2="17" />
  </svg>
);

const CreditBadge = ({ credits }) => (
  <div className="flex items-center gap-1">
    <img src={KarbondLogo} alt="K" className="w-5 h-5" />
    <span className="text-[16px] font-normal text-gray-900">{credits} credits</span>
  </div>
);

function ClassCardItem({ item, index, navigateTo = '/classDetails' }) {
  const navigate = useNavigate();

  return (
    <div
      className="  overflow-hidden cursor-pointer active:scale-[0.98] transition-transform duration-150"
      style={{
        
      }}
      onClick={() => navigate(navigateTo)}
    >
      {/* Image */}
      <div className="relative overflow-hidden" style={{ height: "190px" }}>
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover"
          style={{ filter: "grayscale(15%) brightness(0.88)" }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, transparent 50%)" }}
        />

        {/* Badge top-left */}
        {item.badge && (
          <div className="absolute top-3 left-3 bg-gray-900 text-white text-[10px] font-black tracking-widest uppercase px-3 py-1.5 rounded-full">
            {item.badge}
          </div>
        )}

        {/* Duration top-right */}
        <div className="absolute top-3 right-3 bg-white text-gray-900 text-[11px] font-black tracking-wide px-3 py-1.5 rounded-full">
          {item.duration}
        </div>
      </div>

      {/* Info */}
      <div className=" pt-3 pb-4">
        {/* Name + Credits */}
        <div className="flex items-center justify-between gap-2 mb-1">
          <h3 className="text-[18px] font-semibold text-gray-900 leading-tight tracking-tight flex-1">
            {item.name}
          </h3>
          <CreditBadge credits={item.credits} />
        </div>

        {/* Instructor */}
        <p className="text-[12px] font-medium text-gray-400 mb-2">
          Instructor: {item.instructor}
        </p>

        {/* Gender + Time */}
        <div className="flex items-center gap-3 text-gray-500 text-[11px] font-semibold">
          <span className="flex items-center gap-1">
            <GenderIcon />
            {item.gender}
          </span>
          <span className="text-gray-300">·</span>
          <span className="flex items-center gap-1">
            <ClockIcon />
            {item.time}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function ClassCard({ data = classesData, navigateTo = "/classDetails" }) {
  return (
    <div className="bg-gray-50  flex justify-center">
      <div className="w-full max-w-md   pb-10 flex flex-col gap-4">
        {data.map((item, i) => (
          <ClassCardItem key={item.id} item={item} index={i} navigateTo={navigateTo} />
        ))}
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
