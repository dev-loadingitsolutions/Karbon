import { useState } from "react";
import { useNavigate } from 'react-router-dom'
import FilterIcon from '../assets/icons/filter.svg'

const filters = [
  { id: "women", label: "WOMEN ONLY" },
  { id: "yoga", label: "YOGA" },
  { id: "crossfit", label: "CROSSFIT" },
  { id: "pilates", label: "PILATES" },
  { id: "swimming", label: "SWIMMING" },
  { id: "weights", label: "WEIGHTS" },
  { id: "boxing", label: "BOXING" },
];



export default function FilterTabs() {
  const [active, setActive] = useState(null);
  const navigate = useNavigate();

  return (
    <div className=" w-full flex justify-center">
      <div className="w-full max-w-md">
        <div
          className="flex items-center gap-2 overflow-x-auto py-3"
          style={{
            
            paddingRight: "16px",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {/* Filters button */}
          <button
            type="button"
            onClick={() => navigate('/filter')}
            className="group flex-shrink-0 flex items-center gap-1.5 border border-[#C6C6C633] text-gray-900 text-[10px] font-bold tracking-widest uppercase px-3 py-2 rounded-[8px] transition-all duration-150 hover:bg-gray-900 hover:text-white"
          >
            <img
              src={FilterIcon}
              alt="Filter Icon"
              className="h-[10px] w-[10px] transition-all duration-150 [filter:invert(0)] group-hover:[filter:invert(1)]"
            />
            FILTERS
          </button>

          {/* Divider */}
          <div className="flex-shrink-0 w-px h-5 bg-gray-300 mx-1" />

          {/* Filter chips */}
          {filters.map((f) => {
            const isActive = active === f.id;
            return (
              <button
                key={f.id}
                onClick={() => setActive(isActive ? null : f.id)}
                className={`flex-shrink-0 text-[10px] font-bold tracking-widest uppercase px-4 py-2 rounded-[8px] border transition-all duration-150 active:scale-95
                  ${isActive
                    ? "bg-black text-white border-black"
                    : "bg-white text-gray-900 border-[#C6C6C633] hover:bg-black hover:text-white"
                  }`}
              >
                {f.label}
              </button>
            );
          })}
        </div>
      </div>

      <style>{`div::-webkit-scrollbar { display: none; }`}</style>
    </div>
  );
}
