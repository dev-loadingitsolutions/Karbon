import { useState } from 'react'
import FilterTabs from '../components/FilterTabs'
import GymListing from '../components/GymListing'


export default function Explore() {
     const [query, setQuery] = useState('')
    return (
        <div className="px-6 pb-8 pt-6">
            <div className="">
                <h1 className="text-[20px] font-[Inter, sans serif] font-extrabold uppercase text-black">Explore</h1>
                <p className="mt-2 text-[16px] font-[Inter, sans serif] text-[#474747]">Discover premium fitness spaces designed to enhance performance, strength, and overall wellness.</p>
            </div>
            {/* Search Bar */}
            <div className="mt-4">
                <label htmlFor="home-search" className="sr-only">
                    Search
                </label>
                <div className="relative">
                    

                    <input
                        id="home-search"
                        type="search"
                        value={query}
                        onChange={(event) => setQuery(event.target.value)}
                        placeholder="SEARCH GYMS, DISTRICTS..."
                        className="w-full border-b h-[38px] border-[#777777] bg-white px-4 py-3 text-[14px] text-[#C6C6C6]  outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
                    />
                </div>
            </div>

            <FilterTabs />

            <GymListing />



        </div>
    )
}

