import { useState } from "react";
import SmileyIcon from "../../assets/icons/hugeicons_kid.png";

const schedules = [
  { label: "Women (6 AM - 2 PM)", session: "Current Session: Women", ends: "Ends in 2 hours 45 mins" },
  { label: "Men (3 PM - 10 PM)", session: "Current Session: Men", ends: "Starts in 1 hour 15 mins" },
];



export default function GymDetails({ gym = {} }) {
  const [activeSchedule, setActiveSchedule] = useState(0);

  const {
    about = "Premium fitness center with modern equipment and expert trainers",
    kidsDescription = "Supervised play area available",
    kidsAges = "4 - 12 Years",
    kidsTime = "4 PM - 9 PM",
  } = gym;

  return (
    <div className=" w-full max-w-md mx-auto flex flex-col gap-6 px-4">

      {/* ── ABOUT ── */}
      <div>
        <p className="text-[10px] font-normal tracking-widest text-[#777777] uppercase mb-3">
          About
        </p>
        <div className="bg-[#F3F3F3] border-l-[4px] border-black rounded-[8px]  overflow-hidden">
          <div className="  mx-4 my-4 pl-3">
            <p className="text-[14px] font-normal text-[#1A1C1C] leading-snug">
              {about}
            </p>
          </div>
        </div>
      </div>

      {/* ── TODAY'S SCHEDULE ── */}
      <div>
        <p className="text-[10px] font-normal tracking-widest text-[#777777] uppercase mb-3">
          Today's Schedule
        </p>

        {/* Tab switcher */}
        <div className="bg-[#F3F3F3] rounded-[8px] border border-gray-100 p-1.5 flex gap-1 mb-3">
          {schedules.map((s, i) => (
            <button
              key={i}
              onClick={() => setActiveSchedule(i)}
              className={`flex-1 py-[12px] px-[17px] rounded-[8px] text-[12px] font-bold transition-all duration-200 text-center leading-tight
                ${activeSchedule === i
                  ? "bg-white text-black shadow-sm"
                  : "text-[#777777] hover:text-gray-700"
                }`}
            >
              {s.label}
            </button>
          ))}
        </div>

        {/* Active session info */}
        <div className="bg-[#F3F3F3] rounded-[8px] bg-[#F3F3F3] border-l-[4px] overflow-hidden">
          <div className=" mx-4 my-4 pl-3">
            <p className="text-[14px] font-medium text-[#1A1C1C] leading-tight mb-0.5">
              {schedules[activeSchedule].session}
            </p>
            <p className="text-[12px] font-medium text-[#777777]">
              {schedules[activeSchedule].ends}
            </p>
          </div>
        </div>
      </div>

      {/* ── KIDS SECTION ── */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <p className="text-[10px] font-normal tracking-widest text-[#777777] uppercase">
            Kids Section
          </p>
          <img src={SmileyIcon} alt="Kids Area" className="w-[10px] h-[10px]" />
        </div>      

        <p className="text-[14px] font-medium text-[#1A1C1C] mb-3">
          {kidsDescription}
        </p>

        <div className="grid grid-cols-2 gap-3">
          {/* Ages */}
          <div className="bg-white  border border-gray-100 px-4 py-4">
            <p className="text-[10px] font-normal tracking-widest text-[#777777] uppercase mb-2">
              Ages
            </p>
            <p className="text-[14px] font-normal text-[#1A1C1C]">{kidsAges}</p>
          </div>

          {/* Time */}
          <div className="bg-white  border border-gray-100 px-4 py-4">
            <p className="text-[10px] font-normal tracking-widest text-[#777777] uppercase mb-2">
              Time
            </p>
            <p className="text-[14px] font-normal text-[#1A1C1C]">{kidsTime}</p>
          </div>
        </div>
      </div>

    </div>
  );
}
