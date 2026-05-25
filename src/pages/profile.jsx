import { useNavigate } from 'react-router-dom'
import ArrowLeft from '../assets/icons/left-arrow.svg'
import UserAvatarImg from '../assets/icons/user-profile-pic.svg'

const menuItems = [
  { label: 'CLASSES', path: '/classes' },
  { label: 'PAYMENTS', path: '/payments' },
  { label: 'MY BOOKINGS', path: '/bookings' },
  { label: 'CHECK-IN HISTORY', path: '/checkin-history' },
  { label: 'SAVED GYMS', path: '/saved-gyms' },
  { label: 'PERSONAL INFORMATION', path: '/personal-information' },
  { label: 'SECURITY', path: '/security' },
  { label: 'POINTS & REWARD', path: '/points-reward' },
  { label: 'HELP CENTER', path: '/help-center' },
  { label: 'APP PREFERENCES', path: '/app-preferences' },
]

const ChevronRight = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6" />
  </svg>
)

const UserAvatar = () => (
  <div className="w-[70px] h-[70px] rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0 overflow-hidden">
    <img src={UserAvatarImg} alt="User Avatar" className="w-full h-full object-cover" />
  </div>
)

export default function Profile() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col max-w-md mx-auto">

      {/* ── Header card ── */}
      <div className="bg-white px-[20px] pt-5 pb-5 mx-4 mt-4 rounded-2xl border border-gray-100" style={{ boxShadow: "0 1px 8px rgba(0,0,0,0.06)" }}>

        {/* Edit Profile */}
        <div className="flex justify-end mb-3">
          <button
            onClick={() => navigate('/edit-profile')}
            className="text-[10px] font-medium text-[#1A1C1C] bg-[#0000001A] border border-gray-200 px-3 py-1.5 rounded-[8px] hover:bg-gray-50 transition"
          >
            Edit Profile
          </button>
        </div>

        {/* Avatar + name */}
        <div className="flex items-center gap-3 mb-4">
          <UserAvatar />
          <div>
            <p className="text-[20px] font-medium text-[#1A1C1C] leading-tight">Ahmad Nasser</p>
            <p className="text-[12px] font-normal text-[#1A1C1C]">ahmed.nasir@email.com</p>
          </div>
        </div>

        <hr className='text-[#0000001A] pb-4' />
        {/* Tier + plan */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="border border-[#0000001A] text-[#000] text-[10px] font-medium px-3 py-1 rounded-full">
              Warrior
            </span>
          </div>
          <span className="bg-[#000000] text-[#E2E2E2] text-[10px] font-medium px-4 py-1.5 rounded-full tracking-wide">
            Premium
          </span>
        </div>

        {/* Progress bar under tier */}
        <div className="mt-3 ">
          <div className="h-1 bg-gray-100 rounded-full overflow-hidden">
            <div className="h-full bg-[#777777] rounded-full" style={{ width: "40%" }} />
          </div>
        </div>
      </div>

      {/* ── Stats ── */}
      <div className="grid grid-cols-2 gap-3 mx-4 mt-3">
        <div className="bg-white rounded-[8px] border border-gray-100 px-[24px] py-[24px]" style={{ boxShadow: "0 1px 6px rgba(0,0,0,0.05)" }}>
          <p className="text-[10px] font-medium tracking-widest text-[#7777777] uppercase mb-1">Sessions</p>
          <p className="text-[48px] font-normal text-[#1A1C1C] leading-none">12</p>
        </div>
        <div className="bg-white rounded-[8px] border border-gray-100 px-[24px] py-[24px]" style={{ boxShadow: "0 1px 6px rgba(0,0,0,0.05)" }}>
          <p className="text-[10px] font-medium tracking-widest text-[#7777777] uppercase mb-1">Credits</p>
          <p className="text-[48px] font-normal text-[#1A1C1C] leading-none">1200</p>
        </div>
      </div>

      {/* ── Status ── */}
      <div className="mx-4 mt-3 bg-[#000000] rounded-[8px] px-[24px] py-[24px] flex items-center justify-between">
        <span className="text-[10px] font-normal tracking-widest text-[#E2E2E2] uppercase">
          Status: Active
        </span>
        <span className="w-2.5 h-2.5 rounded-full bg-white" />
      </div>

      {/* ── Menu rows ── */}
      <div className="mx-4 mt-3 bg-white rounded-[0px] border border-gray-100 overflow-hidden" style={{ boxShadow: "0 1px 6px rgba(0,0,0,0.05)" }}>
        {menuItems.map((item, i) => (
          <button
            key={item.path}
            onClick={() => navigate(item.path)}
            className={`w-full flex items-center cursor-pointer justify-between px-[24px] py-[24px] text-left transition hover:bg-gray-50 active:bg-gray-100
              ${i !== 0 ? 'border-t border-gray-100' : ''}`}
          >
            <span className="text-[12px] font-semibold tracking-widest text-[#1A1C1C] uppercase">
              {item.label}
            </span>
            <ChevronRight />
          </button>
        ))}
      </div>

      {/* ── Invite Friends ── */}
      <div className="mx-4 mt-3">
        <button
          onClick={() => navigate('/invite')}
          className="w-full border border-[#000000] bg-white text-[#1A1C1C] text-[12px] font-medium tracking-[0.14em] uppercase py-[20px] cursor-pointer rounded-[8px] transition hover:bg-gray-50 active:scale-[0.98]"
        >
          Invite Friends &amp; Earn
        </button>
      </div>

      {/* ── Log Out ── */}
      <div className="mx-4 mt-3 mb-8">
        <button
          onClick={() => navigate('/logout')}
          className="w-full bg-[#000000] text-white text-[12px] font-medium tracking-[0.14em] uppercase py-[20px] rounded-[8px] transition cursor-pointer active:scale-[0.98]"
        >
          Log Out
        </button>
      </div>

    </div>
  )
}
