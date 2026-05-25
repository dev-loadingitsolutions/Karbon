import GymInterior from "../../assets/images/gym-interior.png";
import KarbonIcon from "../../assets/icons/K-vector.png";

export default function ClassHero({ image = GymInterior, name = 'Class Name', status = 'FEATURED', type = 'CLASS' }) {
  return (
    <div className="w-full px-[12px] max-w-md mx-auto">
      {/* Hero image */}
      <div className="relative overflow-hidden" style={{ borderRadius: '8px' }}>
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
          style={{ filter: 'grayscale(20%) brightness(0.88)' }}
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.18) 0%, transparent 60%)' }} />

        {/* Status badges */}
        <div className="absolute top-4 left-4 flex gap-2">
          <span className="bg-white text-gray-900 text-[10px] font-bold tracking-widest uppercase px-5 py-1.5 rounded-full shadow-sm">
            {status}
          </span>
          <span className="bg-white text-gray-900 text-[10px] font-bold tracking-widest uppercase px-5 py-1.5 rounded-full shadow-sm">
            {type}
          </span>
        </div>
      </div>
    </div>
  )
}
