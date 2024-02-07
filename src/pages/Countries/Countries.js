import React, {useState} from 'react'
import "./Countries.sass"
import SectionFilter from './components/SectionFilter/SectionFilter'
import SectionCountries from './components/SectionCountries/SectionCountries'
import Pagination from './components/Pagination/Pagination'

export default function Countries({data, page, setPage, dataF, setDataF}) {
    const [search, setSearch] = useState("")
    const nbrPerPage = 8
    const remove_space = (mot) => {
        mot = mot.split("");
        for(let i=0; i<mot.length; i++){
            if(mot[i] === " "){
                mot.splice(i,1)
                i--
            }
        }
        mot = mot.join("").toLowerCase()
        return mot
    }
    const fctn_filter = (e) =>{
        if(e.target.value === "all"){
            setDataF(data)
            setPage(1)
        }else{
            setDataF(data.filter(item => item.region === e.target.value))
            setPage(1)
        }
    }
    const searching = (e) =>{
        setDataF(data.filter(item => 
            remove_space(item.name.common).includes(remove_space(search))
            || remove_space(search).includes(remove_space(item.name.common))
            || remove_space(item.name.official).includes(remove_space(search))
            || remove_space(search).includes(remove_space(item.name.official))
        ))
        setPage(1)
        // setSearch("")
        // if(e.key === "Enter" || e.target.id === "search"){
        // }
    }
    
    return <>
        <SectionFilter searching={searching} search={search} setSearch={setSearch} fctn_filter={fctn_filter}  />
        <SectionCountries dataF={dataF} page={page} nbrPerPage={nbrPerPage} />
        <Pagination setPage={setPage} page={page} dataF={dataF} nbrPerPage={nbrPerPage} />
    </>
}
