import React, {useState, useEffect} from 'react'
import "./Countries.sass"
import {useNavigate} from "react-router-dom"

export default function Countries({data}) {
    const [selectValue, setSelectValue] = useState("all")
    const [search, setSearch] = useState("")
    const [dataF, setDataF] = useState(data)
    const navigate = useNavigate()
    useEffect(()=>{
        if(selectValue === "all"){
            setDataF(data)
        }else{
            setDataF(data.filter(item => item.region === selectValue))
        }
    },[selectValue])
    const searching = (e) =>{
        if(e.key === "Enter" || e.target.id === "search"){
            setDataF(data.filter(item => item.name.common.toLowerCase() === search.toLowerCase()))
            setSearch("")
        }
    }
    return <>
        <div className='select_input'>
            <div className="search">
                <input type="text" placeholder='Search for a country...' value={search} onKeyUp={searching} onChange={(e) => setSearch(e.target.value)} />
                {/* <button id='search' onClick={searching}>GO</button> */}
            </div>
            <select name="" id="" onChange={(e) => setSelectValue(e.target.value)} >
                <option value="all">All</option>
                <option value="Africa">Africa</option>
                <option value="America">America</option>
                <option value="Europe">Europe</option>
                <option value="Asia">Asia</option>
                <option value="Oceania">Oceania</option>
            </select>
        </div>
        <div className="countries">
            {
                dataF.map((item, index) => (
                    <div className='country' key={index} onClick={() => navigate(`/${item.name.common}`)} >
                        <img src={item.flags.png} alt={item.flags.alt} />
                        <div className="texte">
                            <h2>{item.name.common}</h2>
                            <p>Population: {item.population}</p>
                            <p>Region: {item.region}</p>
                            <p>Capital: {item.capital}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    </>
}
