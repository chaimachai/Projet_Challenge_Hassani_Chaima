import React, {useState, useEffect} from 'react';
import './App.sass';
import {RouterProvider, createBrowserRouter} from "react-router-dom"
import axios from "axios"
import Home from './pages/Home/Home';
import Countries from './pages/Countries/Countries';
import CountriesDetails from './pages/CountrieDetails/CountriesDetails';

function App() {
  const [dark, setDark] = useState(false)
  const [page, setPage] = useState(1)
  const [data, setData] = useState([])
  const [dataF, setDataF] = useState(data)
  document.body.setAttribute("data-theme","test")
  useEffect(()=>{
    axios.get("https://restcountries.com/v3.1/all")
    .then((response) => {setData(response.data); setDataF(response.data)})
    .catch((error) => console.log(error))
  },[])
  
  const router = createBrowserRouter([
    {
      path: "/", 
      element: <Home dark={dark} setDark={setDark} /> ,
      children: [
        {
          path: "",
          element: <Countries setDataF={setDataF} dataF={dataF} data={data} page={page} setPage={setPage} />
        },
        {
          path: ":name",
          element: <CountriesDetails data={data} />
        }
      ]
    }
  ])
  return <div className={`App ${dark ? "darkMode" : null}`}>
    <RouterProvider router={router} data-theme="dark" />
  </div>
}

export default App;
