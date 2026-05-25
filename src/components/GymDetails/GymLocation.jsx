const MapIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21" />
    <line x1="9" y1="3" x2="9" y2="18" />
    <line x1="15" y1="6" x2="15" y2="21" />
  </svg>
);

export default function GymLocation({ gym = {} }) {
  const {
    street = "Abdoun Street",
    city = "Amman 11183, Jordan",
    lat = 31.9674,
    lng = 35.8809,
  } = gym;

  const mapSrc = `https://maps.google.com/maps?q=${lat},${lng}&z=15&output=embed`;

  return (
    <div className=" w-full max-w-md mx-auto px-4 py-6">
      <p className="text-[10px] font-normal tracking-widest text-[#777777] uppercase mb-3">
        Location
      </p>

      <div className=" rounded-[8px] overflow-hidden">
        {/* Map embed */}
        <div className="relative overflow-hidden" style={{ height: "200px" }}>
          <iframe
            title="Gym Location"
            src={mapSrc}
            width="100%"
            height="100%"
            style={{ border: 0, display: "block", filter: "grayscale(20%)" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* Address row */}
        <div className="flex items-center gap-3  py-4">
          <MapIcon />
          <div>
            <p className="text-[14px] font-normal text-[#1A1C1C] leading-tight">{street}</p>
            <p className="text-[12px] font-normal text-[#777777]">{city}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
