import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import SearchIcon from '../assets/icons/search-icon.svg'
import NearMeIcon from '../assets/icons/near-me.png'
import FilterIcon from '../assets/icons/filter.svg'
import UserIcon from '../assets/icons/user.svg'
import StarIcon from '../assets/icons/star.svg'
import CreditCardIcon from '../assets/icons/credit-card.svg'
import PromoCarousel from '../components/PromoCarousel'
import BestPicks from '../components/BestPicks'
import GymsNearYou from '../components/GymsNearYou'
import FreeActivities from '../components/FreeActivities'
import TopRated from '../components/TopRated'





export default function Home() {
  const navigate = useNavigate()
  const [query, setQuery] = useState('')
  const [activeTab, setActiveTab] = useState('')

  const featuredGyms = [
  {
    id: 1,
    name: "Iron Haven Elite",
    location: "Abdali, Amman",
    badge: "PREMIUM",
    badgeColor: "#000000",
    badgeBg: "#ffffff",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80",
    liked: false,
  },
  {
    id: 2,
    name: "Zenit Performance",
    location: "Sweifieh, Amman",
    badge: "RECOMMENDED",
    badgeColor: "#000000",
    badgeBg: "#ffffff",
    image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=600&q=80",
    liked: false,
  },
  {
    id: 3,
    name: "Apex Studio",
    location: "Jabal Amman",
    badge: "NEW",
    badgeColor: "#000000",
    badgeBg: "#ffffff",
    image: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=600&q=80",
    liked: false,
  },
];

  const tabs = [
  { key: 'filter', label: 'Filter', icon: FilterIcon },
  { key: 'near', label: 'Near me', icon: NearMeIcon },
  { key: 'women', label: 'Women Only', icon: UserIcon },
  { key: 'credits', label: 'Under 5 credits', icon: CreditCardIcon },
  { key: 'top', label: 'Top rated', icon: StarIcon },
]

  function handleTabClick(key) {
    if (key === 'filter') {
      navigate('/filter')
      return
    }

    setActiveTab((prev) => (prev === key ? '' : key))
  }

  return (
    <div className="px-6 pb-8">
      <section className="pt-6 pb-4">
     

        {/* Search Bar */}
        <div className="mt-4">
          <label htmlFor="home-search" className="sr-only">
            Search
          </label>
          <div className="relative">
            <img className='absolute left-3 top-1/2 -translate-y-1/2 text-slate-400' src={SearchIcon} alt="" />
            
            <input
              id="home-search"
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search for gyms, trainers, or sports..."
              className="w-full  h-[52px] bg-white px-12 py-3 text-[14px] text-slate-900  outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
            />
          </div>
        </div>

        {/* Tabs */}
        <div className="mt-4">
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-none">
            {tabs.map((t) => {
              const Icon = t.icon
              const active = activeTab === t.key
              return (
                <button
                  key={t.key}
                  type="button"
                  onClick={() => handleTabClick(t.key)}
                  className={`inline-flex whitespace-nowrap items-center gap-2 rounded-[8px] px-[20px] py-2 tracking-[0.6px] uppercase  text-[14px] font-bold border transition min-w-max ${
                    active
                      ? 'bg-black border-black text-white'
                      : 'bg-white border-slate-200 text-slate-700'
                  }`}
                >
                  <img src={t.icon} alt={t.label} className="w-5 h-5" />
                  <span>{t.label}</span>
                </button>
              )
            })}
          </div>

        </div>
        <PromoCarousel/>
        <BestPicks items={featuredGyms} />

        <GymsNearYou />

        <FreeActivities />

        <TopRated />

      </section>
    </div>
  )
}
