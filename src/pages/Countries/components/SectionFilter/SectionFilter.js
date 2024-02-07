import React from 'react'
import "./SectionFilter.sass"
import searchIcon from "../../../../assets/img/search.svg"

export default function SectionFilter({searching, search, setSearch, fctn_filter}) {
    return (
        <div className='select_input'>
            <div className="search">
                <img src={searchIcon} alt="" />
                <input type="text" placeholder='Search for a country...' value={search} onKeyUp={searching} onChange={(e) => setSearch(e.target.value)} />
                {/* <button id='search' onClick={searching}>GO</button> */}
            </div>
            <select name="" id="" onChange={fctn_filter} >
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
