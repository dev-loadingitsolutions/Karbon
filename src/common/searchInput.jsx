import React from 'react'
import FilterIcon from '../assets/icons/filter-icon.png'

export default function SearchInput({ value, onChange, placeholder = 'Search' }) {
  return (
    <div className="w-full mt-4">
      <label htmlFor="search-input" className="sr-only">
        Search
      </label>
      <div className="relative">
        <input
          id="search-input"
          type="search"
          defaultValue={value}
          onChange={onChange}
          placeholder={placeholder}
          className="w-full h-[38px] bg-white pl-4 pr-12 text-[14px] text-slate-900 outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
        />
        <img
          className="absolute   text-[#777777] right-3 top-1/2 h-5 w-5 -translate-y-1/2"
          src={FilterIcon}
          alt="Filter"
        />
      </div>
    </div>
  )
}
