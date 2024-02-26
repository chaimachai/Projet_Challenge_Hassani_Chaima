import React from 'react'
import "./Home.sass"
import { Outlet } from "react-router-dom"
import Header from './component/Header/Header'

export default function Home({dark, setDark}) {
    return <>
        <Header dark={dark} setDark={setDark} />
        <div className="main">
            <Outlet />
            
        </div>
    </>
}
