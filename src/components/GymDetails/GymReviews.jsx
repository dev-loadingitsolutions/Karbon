const reviews = [
  {
    id: 1,
    name: "Alex Johnson",
    rating: 5,
    text: "Best gym in the area for powerlifting. The equipment is always clean and the staff is super professional.",
  },
  {
    id: 2,
    name: "Sarah Miller",
    rating: 4,
    text: "Love the morning sessions for women. Feels very safe and inclusive.",
  },
  {
    id: 3,
    name: "Omar Khalil",
    rating: 5,
    text: "Amazing facilities and great atmosphere. Highly recommend the HIIT classes.",
  },
];

const StarRating = ({ rating, max = 5 }) => (
  <div className="flex items-center gap-0.5">
    {Array.from({ length: max }).map((_, i) => (
      <svg key={i} width="9" height="14" viewBox="0 0 24 24"
        fill={i < rating ? "#111" : "none"}
        stroke="#111" strokeWidth="1.5">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
      
    ))}
  </div>
);

const CheckIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

export default function GymReviews({ onCheckIn }) {
  return (
    <div className="bg-gray-50 w-full max-w-md mx-auto flex flex-col ">

      {/* ── Recent Reviews ── */}
      <div className="px-4 pt-2 pb-4">
        <div className="flex items-center justify-between mb-4">
          <p className="text-[10px] font-semibold tracking-widest text-[#777777] uppercase">
            Recent Reviews
          </p>
          <button className="text-[12px] font-bold text-gray-900 hover:underline transition">
            View All
          </button>
        </div>

        <div className="flex flex-col divide-y divide-gray-100">
          {reviews.map((r) => (
            <div key={r.id} className="py-4 first:pt-0">
              <div className="flex items-center justify-between mb-1.5">
                <p className="text-[14px] font-normal text-[#1A1C1C]">{r.name}</p>
                <StarRating rating={r.rating} />
              </div>
              <p className="text-[12px] font-normal text-[#777777] leading-relaxed">
                {r.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Fixed CHECK-IN button ── */}
      <div className=" bottom-0 left-0 right-0 flex justify-center pointer-events-none">
        <div className="w-full max-w-md px-4 pb-6 pt-3 bg-gradient-to-t from-gray-50 via-gray-50 to-transparent pointer-events-auto">
          <button
            onClick={onCheckIn}
            className="w-full bg-[#000000] text-white flex items-center justify-center gap-2.5 py-4 rounded-[8px] text-[13px] font-normal tracking-[0.16em] cursor-pointer uppercase transition-all duration-150  active:scale-[0.98] shadow-lg"
          >
            <CheckIcon />
            Check-In
          </button>
        </div>
      </div>

    </div>
  );
}
