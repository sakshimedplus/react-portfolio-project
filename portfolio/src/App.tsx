import { Routes,Route } from 'react-router-dom'
import './App.css'
import Contact from './pages/Contact'
import Projects from './pages/Projects'
import AboutMe from './pages/AboutMe'
import Navbar from './components/Navbar'
import MyResume from './pages/MyResume'
import BotApp from './components/bot'
import { useState } from 'react'



function App() {


    const [click,clicked]=useState(false);

  return (
    <>   
    <Navbar></Navbar>
    <div className="fade-in">

    
    <main className="main-content">
     <Routes>
      < Route path="/resume" element={ <MyResume />}/>
     </Routes>
    </main>
     
     </div>
     <section id ="about" style={{
      backgroundColor:'#aeaca8'
     }}>
     <AboutMe></AboutMe>
     
    </section> 
    <section id ="project">
   
    {!click && (<a href="#project"onClick={() => clicked(true) }>click me</a>)}
   
    {click &&  <  Projects/>}
  
     
    </section> 
    {/* <section id="road">
      <img src='/src/assets/images/cloud.png' alt='road'/>
    </section> */}
    <section id="contact">
    < Contact/>
    </section>
    {/* <section id ="resume"><MyResume /></section> */}
     <BotApp></BotApp>
   </>
  )
}

export default App
