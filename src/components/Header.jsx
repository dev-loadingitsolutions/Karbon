// src/components/layout/Header.jsx
import React from 'react'
import { useLocation } from 'react-router-dom'
import KarbonLogo from '../assets/logos/logo-karbon.svg'
import mapicon from '../assets/icons/map.svg'
import bellicon from '../assets/icons/notification-01.svg'
import { History } from 'lucide-react'

export default function Header({ location = "Amman, Jordan" }) {
  const { pathname } = useLocation()
  const onlyLogoPath = pathname === '/profile'
  const hideLocationPaths = ['/wallet', '/gymDetails', '/profile', '/classes']
  const showLocation = !hideLocationPaths.includes(pathname)
  const showHistory = ['/wallet', '/gymDetails'].includes(pathname)
  const headerClass = onlyLogoPath
    ? 'flex items-center justify-center px-[24px] py-4 bg-[#F9F9F9] border-gray-100'
    : 'flex items-center justify-between px-[24px] py-4 bg-[#F9F9F9] border-gray-100'

  return (
    <header className={headerClass}>
      {/* Logo */}
      <div className="flex items-center gap-1.5">
        <img src={KarbonLogo} alt="Karbon Logo" />
      </div>

      {/* Location */}
      {showLocation && (
        <div className="flex items-center gap-1.5">
          <img src={mapicon} alt="Location icon" />
          <div className="flex flex-col">
            <span className="text-[10px] uppercase tracking-widest text-gray-400 font-bold leading-tight">
              Current Location
            </span>
            <span className="text-sm font-semibold text-gray-900 leading-tight">
              {location}
            </span>
          </div>
        </div>
      )}

      {/* Bell / History */}
      {!onlyLogoPath && (
        <button
          className="p-1.5 rounded-lg hover:bg-gray-100 transition-colors"
          aria-label={showHistory ? 'History' : 'Notifications'}
        >
          {showHistory ? (
            <History className="w-6 h-6 text-slate-900" />
          ) : (
            <img src={bellicon} alt="Notifications" />
          )}
        </button>
      )}
    </header>
  )
}