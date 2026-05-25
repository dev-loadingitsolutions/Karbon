import { useState } from "react";

const rules = [
  {
    title: "General Conduct",
    content: "Respect all members and staff. No aggressive behavior, harassment, or foul language. Clean up after yourself and return equipment to its proper place.",
  },
  {
    title: "Dress Code",
    content: "Proper athletic wear is required at all times. Closed-toe shoes must be worn on the gym floor. No jeans, sandals, or open-toed shoes allowed.",
  },
  {
    title: "Hygiene Standards",
    content: "Please shower before using pools or steam rooms. Deodorant is required. Wipe down all equipment with provided sanitizer before and after use.",
  },
  {
    title: "Equipment Usage",
    content: "Time limits apply on cardio machines during peak hours (30 mins). Re-rack weights after use. Do not drop or throw weights. Ask staff for assistance with unfamiliar equipment.",
  },
];

const amenities = [
  { label: "Free Parking", icon: <ParkingIcon /> },
  { label: "Showers", icon: <ShowerIcon /> },
  { label: "Guest Wifi", icon: <WifiIcon /> },
  { label: "Locker Rooms", icon: <LockerIcon /> },
];

const facilities = [
  "FREE WEIGHTS", "CARDIO ZONE", "CROSSFIT",
  "YOGA STUDIO", "SAUNA", "SHOWER", "HIIT",
];

function ParkingIcon() {
  return (
    <svg width="10" height="14" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 13.5V0H5.25C6.5 0 7.5625 0.4375 8.4375 1.3125C9.3125 2.1875 9.75 3.25 9.75 4.5C9.75 5.75 9.3125 6.8125 8.4375 7.6875C7.5625 8.5625 6.5 9 5.25 9H3V13.5H0ZM3 6H5.4C5.8125 6 6.16563 5.85312 6.45937 5.55937C6.75312 5.26562 6.9 4.9125 6.9 4.5C6.9 4.0875 6.75312 3.73438 6.45937 3.44062C6.16563 3.14687 5.8125 3 5.4 3H3V6Z" fill="#474747" />
    </svg>

  );
}

function ShowerIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 12h16" />
      <path d="M4 12a8 8 0 0 1 8-8" />
      <line x1="8" y1="16" x2="8" y2="18" />
      <line x1="12" y1="16" x2="12" y2="19" />
      <line x1="16" y1="16" x2="16" y2="18" />
    </svg>
  );
}

function WifiIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12.55a11 11 0 0 1 14.08 0" />
      <path d="M1.42 9a16 16 0 0 1 21.16 0" />
      <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
      <circle cx="12" cy="20" r="1" fill="#374151" />
    </svg>
  );
}

function LockerIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="11" width="14" height="11" rx="2" />
      <path d="M8 11V7a4 4 0 0 1 8 0v4" />
      <circle cx="12" cy="16" r="1" fill="#374151" />
    </svg>
  );
}

const ChevronIcon = ({ open }) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2.5" strokeLinecap="round"
    style={{ transform: open ? "rotate(180deg)" : "rotate(0)", transition: "transform 0.25s ease" }}>
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

function AccordionItem({ title, content }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-100 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left transition hover:bg-gray-50 px-0"
      >
        <span className="text-[14px] font-medium text-[#1A1C1C]">{title}</span>
        <ChevronIcon open={open} />
      </button>
      <div
        style={{
          maxHeight: open ? "200px" : "0",
          overflow: "hidden",
          transition: "max-height 0.3s ease",
        }}
      >
        <p className="text-[13px] font-medium text-gray-500 leading-relaxed pb-4">
          {content}
        </p>
      </div>
    </div>
  );
}

export default function GymRulesAmenities() {
  const [activeTag, setActiveTag] = useState("FREE WEIGHTS");

  return (
    <div className="bg-gray-50 w-full max-w-md mx-auto flex flex-col gap-6 px-4 py-6">

      {/* ── GYM RULES ── */}
      <div>
        <p className="text-[10px] font-medium tracking-widest text-gray-400 uppercase mb-1">
          Gym Rules
        </p>
        <div className="  border-b border-gray-100 ">
          {rules.map((r) => (
            <AccordionItem key={r.title} title={r.title} content={r.content} />
          ))}
        </div>
      </div>

      {/* ── AMENITIES ── */}
      <div>
        <p className="text-[10px] font-medium tracking-[2.5px] text-[#777777] uppercase mb-3">
          Amenities
        </p>
        <div className="grid grid-cols-2 ">
          {amenities.map((a) => (
            <div
              key={a.label}
              className="  py-3.5 flex items-center gap-3"
            >
              <span className="bg-[#EEEEEE] rounded-[12px] px-[10px] py-[8px] flex-shrink-0">{a.icon}</span>
              <span className="text-[14px] font-semibold text-[#1A1C1C]">{a.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── FACILITIES & CLASSES ── */}
      <div className=" ">
        <p className="text-[10px]  font-medium tracking-widest text-[#777777] uppercase mb-3">
          Facilities &amp; Classes
        </p>
        <div className="flex flex-wrap gap-2">
          {facilities.map((f) => (
            <button
              key={f}
              onClick={() => setActiveTag(f)}
              className={`px-[16px] py-[8px] rounded-[12px] border text-[10px] font-black tracking-widest uppercase transition-all duration-150 active:scale-95
                ${activeTag === f
                  ? "bg-[#3B3B3B] text-white border-gray-900"
                  : "bg-[#E2E2E2] text-gray-700 border-gray-200 hover:border-gray-400"
                }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

    </div>
    
  );
}
