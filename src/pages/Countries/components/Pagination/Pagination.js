import React, {useEffect, useState} from 'react'
import "./Pagination.sass"

export default function Pagination({page, setPage, dataF, nbrPerPage}) {
    const tab = []
    const fctn_carousel = (e) =>{
        const carousel = document.querySelector(".carouselItems")
        const items = document.querySelectorAll(".item")
        if(e.target.id === "prev"){
            carousel.scrollLeft -= items[0].clientWidth
            setPage(page - nbrPerPage)
        }else{
            carousel.scrollLeft += items[0].clientWidth
            setPage(page + nbrPerPage)
        }
    }
    for(let i=1; i<=Math.ceil(dataF.length/nbrPerPage); i++){
        tab.push(i)
    }
    return (
        <div className="pagination">
            {page !== 1 ?
                <button id='prev' onClick={fctn_carousel} >Prev</button>
                : <div></div>
            }
            <div className='carouselItems' style={{gridTemplateColumns: `repeat(${tab.length},1fr)`}}>
                {
                    tab.map((item, index) => (
                        <button className={`item ${page === (nbrPerPage * item) - nbrPerPage + 1 ? "actif" : null}`} onClick={() => setPage((nbrPerPage * item) - nbrPerPage + 1)} key={index}>{item}</button>
                    ))
                }
            </div>
            {page + 1 < dataF.length ?
                <button onClick={fctn_carousel}>Next</button>
                : <div></div>
            }
        </div>
    )
}
