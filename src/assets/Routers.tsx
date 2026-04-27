/* eslint-disable */
import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route  } from 'react-router-dom'
import Home from '../pages/Home'
import Navbar from './Navbar'
import Aboutme from '../pages/Aboutme'
import Projects from '../pages/Projects'
import './routers.css'
import { ThemeContext} from './Context'
import Footer from './Footer'

const Routers = () => {

const [theme, setTheme]= useState<boolean>(()=>{
  const storetheme= localStorage.getItem('theme');
  return storetheme ? JSON.parse(storetheme):false;
})


useEffect(()=>{
localStorage.setItem('theme', JSON.stringify(theme))
},[theme])

const toggle=()=>{
  setTheme(!theme)
}

return (
    <div>
     
        <ThemeContext.Provider value={{theme, toggle}}>
        <div className={theme? "lightmode" : "darkmode"}>
       
        <BrowserRouter>
        <Navbar />
        <div className='content'>
        <Routes >

            <Route path='/' element={<Home />} />
            <Route path='/aboutme' element={<Aboutme />}/>
            <Route path='/projects' element={<Projects />}/>
       
        </Routes>
        </div>
        <Footer />
        </BrowserRouter>
        </div>
        </ThemeContext.Provider >
      
    </div>
  )
}

export default Routers