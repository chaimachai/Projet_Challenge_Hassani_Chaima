import React, {useState, useEffect} from 'react';
import './App.sass';
import {RouterProvider, createBrowserRouter, Outlet} from "react-router-dom"
import axios from "axios"
import Header from './component/Header/Header';
import Countries from './pages/Countries/Countries';
import CountriesDetails from './pages/CountrieDetails/CountriesDetails';

function App() {
  const [dark, setDark] = useState(false)
  const [page, setPage] = useState(0)
  const [data, setData] = useState([])
  useEffect(()=>{
    axios.get("https://restcountries.com/v3.1/all")
    .then((response) => {setData(response.data)})
    .catch((error) => console.log(error))
  },[])
  const router = createBrowserRouter([
    {
      path: "/", 
      element: 
        <>
          <Header dark={dark} setDark={setDark} />
          <div className="main">
            <Outlet />
          </div>
        </>,
      children: [
        {
          path: "",
          element: <Countries data={data} />
        },
        {
          path: ":name",
          element: <CountriesDetails data={data} />
        }
      ]
    }
  ])
  return <div className={`App ${dark ? "darkMode" : null}`}>
    <RouterProvider router={router} />
  </div>
}

export default App;
