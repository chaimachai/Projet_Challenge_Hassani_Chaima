import React from 'react'
import {useNavigate} from "react-router-dom"
import "./SectionCountries.sass"

export default function SectionCountries({dataF, page, nbrPerPage}) {
    const navigate = useNavigate()
    return (
        <div className="countries">
        {dataF ?
            dataF.slice(page-1, page + nbrPerPage - 1 ).map((item, index) => (
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
            : <h1>Loading...</h1>
        }
    </div>
    )
}
