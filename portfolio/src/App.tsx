import { Routes,Route } from 'react-router-dom'
import './App.css'
import Contact from './pages/Contact'
import Projects from './pages/Projects'
import AboutMe from './pages/AboutMe'
import Navbar from './components/Navbar'
import "./index.css";


function App() {

  return (
    <>   <div>
    <Navbar></Navbar>
    <main className="main-content">
     <Routes>
      < Route path="/" element={ <AboutMe></AboutMe>}/>
      < Route path="/contact" element={ < Contact/>}/>
      < Route path="/project" element={ <  Projects/>}/>
      < Route path="/about" element={ <AboutMe></AboutMe>}/>
     </Routes>
    </main>

   
  
     
     
     </div> 
   </>
  )
}

export default App
