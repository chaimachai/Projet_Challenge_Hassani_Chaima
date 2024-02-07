import React from 'react'
import "./Header.sass"
import moon from "../../../../assets/img/moon.svg"

export default function Header({dark, setDark}) {
    return (
        <div className='header'>
            <h1>Where in the world?</h1>
            <div className='btn_darkMode' onClick={()=>setDark(!dark)} >
                <img src={moon} alt="moon" />
                <p>{dark ? "LightMode" : "DarkMode"} </p>
            </div>
        </div>
    )
}
