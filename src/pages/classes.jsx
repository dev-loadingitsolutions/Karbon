import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ClassIcon from '../assets/icons/hiit.svg'
import SearchInput from '../common/searchInput'
import BestPicks from '../components/BestPicks'
import featureBg from '../assets/images/featureBg.png'

import featureBg2 from '../assets/images/featured-card-2.png'

import ClassCard from '../common/ClassCard'







const tabs = [
    { key: 'CLASSES', label: 'ALL CLASSES' },
    { key: 'Women-only', label: 'Women-only' },
    { key: 'YOGA', label: 'YOGA' },

]

const classesData = [
    {
        id: 1,
        name: "Morning Yoga",
        location: "Abdoun Studio",
        badge: "PREMIUM",
        badgeColor: "#000",
        badgeBg: "#fff",
        image: featureBg,
    },
    {
        id: 2,
        name: "HIIT Power",
        location: "Sweifieh Gym",
        badge: "RECOMMENDED",
        badgeColor: "#000",
        badgeBg: "#fff",
        image: featureBg2,
    },
    
]

export default function Classes() {
    const navigate = useNavigate()
    const [activeTab, setActiveTab] = useState('filter')

    function handleTabClick(key) {
        setActiveTab((prev) => (prev === key ? '' : key))
    }

    return (
        <div className="px-6 pb-8 pt-4">
            <div className="mb-6">
                <div>
                    <h1 className="text-2xl font-semibold text-slate-900">Classes</h1>
                </div>
                <SearchInput placeholder="Search classes" />
            </div>

            <div className="space-y-4">
                {/* Tabs */}
                <div className="mt-4">
                    <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-none">
                        {tabs.map((t) => {
                            const active = activeTab === t.key
                            return (
                                <button
                                    key={t.key}
                                    type="button"
                                    onClick={() => handleTabClick(t.key)}
                                    className={`inline-flex whitespace-nowrap items-center gap-2 rounded-[8px] px-[20px] py-2 tracking-[0.6px] uppercase text-[12px] font-medium border transition min-w-max ${active
                                            ? 'bg-black border-black text-white'
                                            : 'bg-white border-slate-200 text-slate-700'
                                        }`}
                                >

                                    <span>{t.label}</span>
                                </button>
                            )
                        })}
                    </div>
                </div>


            </div>

            <BestPicks
                data={classesData}
                title="Available Classes"
                subtitle="TODAY'S SCHEDULE"
                navigateTo="/classDetails"
            />


        <ClassCard/>

        </div>
    )
}
