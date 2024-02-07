import React from 'react'
import "./CountriesDetails.sass"
import {useNavigate, useParams} from "react-router-dom"
import arrow from "../../assets/img/arrow.svg"
import PageError from '../PageError/PageError'

export default function CountriesDetails({data}) {
    const navigate = useNavigate()
    const {name} = useParams()
    const item = data.find(element => element.name.common === name)
    return <>
        <div className="btnBack" onClick={() => navigate("/")}>
            <img src={arrow} alt="arrow" />
            <p>Back</p>
        </div>
        {item !== undefined &&
            <div className='countriesDetails'>
                <img src={item.flags.png} alt={item.flags.alt} />
                <div className="details">
                    <h2>{item.name.common}</h2>
                    <div className='div_details'>
                        <div>
                            <p>Native Name: {item.name.nativeName[Object.keys(item.name.nativeName)[0]].common}</p>
                            <p>Population: {item?.population}</p>
                            <p>Region: {item.region}</p>
                            <p>Sub Region: {item.subregion}</p>
                            <p>Capital: {item.capital}</p>
                        </div>
                        <div>
                            <p>Top Level Domain: {item.tld}</p>
                            <p>Currencies: {item.currencies[Object.keys(item.currencies)[0]].name}</p>
                            <p>Languages: {item.languages[Object.keys(item.languages)[0]]}</p>
                        </div>
                    </div>
                    <div className='borders'>
                        <p>Border Countries: </p>
                        {item.borders?.map((element, index)=> (
                            <button key={index} onClick={()=>navigate(`/${data.find(pays => pays.cca3 === element).name.common}`)} >{data.find(pays => pays.cca3 === element).name.common}</button>
                        ))}
                    </div>
                </div>
            </div>
        }
        {item === undefined && <PageError />}
    </>
    
}
