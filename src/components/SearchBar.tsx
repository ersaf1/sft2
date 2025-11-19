import React from 'react'
import Icons from './Icons'

type Props = {
  value: string
  onChange: (v: string) => void
  placeholder?: string
}

const SearchBar: React.FC<Props> = ({ value, onChange, placeholder = 'Cari anggota...' }) => {
  return (
    <div className="w-full">
      <label htmlFor="site-search" className="sr-only">Search</label>
      <div className="relative group">
        {/* Right inline icon (icon-only, non-interactive) */}
        <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
          <span
            className="inline-flex items-center justify-center w-8 h-8 opacity-80 group-focus-within:opacity-100 transition-opacity"
            style={{ color: 'var(--text-main)' }}
          >
            <Icons.MagnifyingGlass size={20} weight="bold" aria-hidden />
          </span>
        </div>

        <input
          id="site-search"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={(e) => { if (e.key === 'Enter') { (e.target as HTMLInputElement).blur() } }}
          type="search"
          placeholder={placeholder}
          className="w-full bg-[rgba(255,255,255,0.03)] placeholder:text-gray-400 text-[var(--text-main)] px-5 pr-14 py-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-shadow"
        />
      </div>
    </div>
  )
}

export default SearchBar
