import { Routes,Route } from 'react-router-dom'
import './App.css'
import Contact from './pages/Contact'
import Projects from './pages/Projects'
import AboutMe from './pages/AboutMe'
import Navbar from './components/Navbar'
import MyResume from './pages/MyResume'


function App() {

  return (
    <>   
    <Navbar></Navbar>
    <div className="fade-in">

    
    <main className="main-content">
     <Routes>
      < Route path="/" element={ <AboutMe></AboutMe>}/>
      < Route path="/contact" element={ < Contact/>}/>
      < Route path="/project" element={ <  Projects/>}/>
      < Route path="/about" element={ <AboutMe></AboutMe>}/>
      < Route path="/resume" element={ <MyResume />}/>
     </Routes>
    </main>
     
     </div> 
     
   </>
  )
}

export default App
