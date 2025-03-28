import { Routes,Route } from 'react-router-dom'
import './App.css'
import Contact from './pages/Contact'
import Projects from './pages/Projects'
import AboutMe from './pages/AboutMe'
import Navbar from './components/Navbar'
import "./index.css";
import ColorSwitch from './components/ColorSwitch'
import MyResume from './pages/MyResume'


function App() {

  return (
    <>   <div>
    <Navbar></Navbar>
    </div ><div   
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "8vh",
       
      }}
    > 
    <ColorSwitch></ColorSwitch>  </div>
    <div>
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
