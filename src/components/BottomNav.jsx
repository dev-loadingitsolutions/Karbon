// src/components/BottomNav.jsx
import { useNavigate, useLocation } from 'react-router-dom'

import HomeIcon    from '../assets/icons/home.svg'
import ExploreIcon from '../assets/icons/explore.svg'
import ScanIcon    from '../assets/icons/scan.svg'
import WalletIcon  from '../assets/icons/wallet.svg'
import ProfileIcon from '../assets/icons/profile.svg'

const navItems = [
  { label: 'Home',    icon: HomeIcon,    path: '/',        dot: false },
  { label: 'Explore', icon: ExploreIcon, path: '/explore', dot: false },
  { label: 'Wallet',  icon: WalletIcon,  path: '/wallet',  dot: false },
  { label: 'Profile', icon: ProfileIcon, path: '/profile', dot: false },
]

export default function BottomNav() {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  return (
    <div className="fixed bottom-0 left-0 right-0 flex justify-center  px-4 z-50">

      {/* Scan FAB bump */}
      <div className="absolute -top-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center">
        <button
          onClick={() => navigate('/scan')}
          className="w-16 h-16 bg-[#DADADA] hover:bg-gray-300 shadow rounded-full flex flex-col items-center justify-center gap-0.5 shadow-[0_0_0_6px_white] transition-colors"
        >
          <img src={ScanIcon} alt="" className="w-6 h-6" />
          
        </button>
        <span className="text-[12px] font-medium text-center text-gray-500">Scan</span>
      </div>

      {/* Nav bar */}
      <nav className="w-full max-w-md bg-white border border-gray-100 rounded-3xl px-3 py-2 flex items-center justify-between shadow">
        {navItems.map(({ label, icon, path, dot }, i) => {
          const isActive = pathname === path
          return (
            <div key={path} className="flex items-center">

              {i === 2 && <div className="w-16" />}

              <button
                onClick={() => navigate(path)}
                className="relative flex flex-col items-center gap-0.5 px-4 py-1.5 rounded-2xl transition-colors hover:bg-gray-100"
              >
                {/* Red dot */}
                {dot && (
                  <span className="absolute top-1 right-3 w-2 h-2 bg-red-500 rounded-full border-2 border-white z-10" />
                )}

                <img
                  src={icon}
                  alt={label}
                  className={`w-6 h-6 transition-all ${isActive ? 'opacity-100' : 'opacity-100'}`}
                />
                <span className={`text-[12px] font-medium ${isActive ? 'text-[#525252] font-bold' : 'text-gray-400'}`}>
                  {label}
                </span>
              </button>
            </div>
          )
        })}
      </nav>

    </div>
  )
}