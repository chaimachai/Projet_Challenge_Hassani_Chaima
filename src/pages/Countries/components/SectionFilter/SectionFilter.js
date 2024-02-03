import React from 'react'
import "./SectionFilter.sass"

export default function SectionFilter({search, setSearch, selectValue, setSelectValue, searching}) {
    return (
        <div className='select_input'>
        <div className="search">
            <input type="text" placeholder='Search for a country...' value={search} onKeyUp={searching} onChange={(e) => setSearch(e.target.value)} />
            {/* <button id='search' onClick={searching}>GO</button> */}
        </div>
        <select name="" id=""  value={selectValue} onChange={(e) => setSelectValue(e.target.value)} >
            <option value="all">All</option>
            <option value="Africa">Africa</option>
            <option value="Americas">America</option>
            <option value="Europe">Europe</option>
            <option value="Asia">Asia</option>
            <option value="Oceania">Oceania</option>
        </select>
    </div>
    )
}
