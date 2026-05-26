import GymInterior from "../../assets/images/gym-interior.png";
import KarbonIcon from "../../assets/icons/K-vector.png";





export default function ClassHero(  { image = GymInterior, name = 'Morning Yoga Flow', status = 'UNISEX', type = 'UNISEX' }) {



  
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
        <div className="absolute bottom-4 left-4 flex flex-col  gap-3">
          <span  className="black-badge bg-black text-white  text-[10px] font-normal tracking-widest uppercase px-5 py-1.5 rounded-full shadow-sm">
            UNISEX
          </span>
          <h1 className="text-white text-[30px] font-noraml">{name}

          </h1>
        </div>


        


      </div>

        
    </div>
  )
}
