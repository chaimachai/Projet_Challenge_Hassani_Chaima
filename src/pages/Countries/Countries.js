import React, {useState, useEffect} from 'react'
import "./Countries.sass"
import SectionFilter from './components/SectionFilter/SectionFilter'
import SectionCountries from './components/SectionCountries/SectionCountries'
import Pagination from './components/Pagination/Pagination'

export default function Countries({data, page, setPage, dataF, setDataF}) {
    const [selectValue, setSelectValue] = useState("all")
    const [search, setSearch] = useState("")
    const nbrPerPage = 8
    const remove_space = (mot) => {
        mot = mot.split("");
        for(let i=0; i<mot.length; i++){
            if(mot[i] == " "){
                mot.splice(i,1)
                i--
            }
        }
        mot = mot.join("").toLowerCase()
        return mot
    }
    useEffect(()=>{
        if(selectValue === "all"){
            setDataF(data)
            setPage(1)
        }else{
            setDataF(data.filter(item => item.region === selectValue))
            setPage(1)
        }
    },[selectValue])
    const searching = (e) =>{
        if(e.key === "Enter" || e.target.id === "search"){
            // setSelectValue("all")
            setDataF(data.filter(item => 
                remove_space(item.name.common).includes(remove_space(search))
                || remove_space(search).includes(remove_space(item.name.common))
                || remove_space(item.name.official).includes(remove_space(search))
                || remove_space(search).includes(remove_space(item.name.official))
            ))
            setPage(1)
            setSearch("")
        }
    }
    
    return <>
        <SectionFilter search={search} setSearch={setSearch} selectValue={selectValue} setSelectValue={setSelectValue} searching={searching} />
        <SectionCountries dataF={dataF} page={page} nbrPerPage ={nbrPerPage} />
        <Pagination setPage={setPage} page={page} dataF={dataF} nbrPerPage={nbrPerPage} />
    </>
}
