import { useState } from "react";
import MailFormModal from "../components/MailFormModal";
import"../index.css";
export default function ContactMe() {
  const [isModalOpen, setModalOpen] = useState(false);
    return (
      <>
        <div>
          <div className="contact-contents" >
         <h1>Contact Me</h1>
          <p className="text-gray-600 mt-2">
          🚀 Open to new opportunities in <span className="font-semibold">full-stack development</span>.
         </p>
           <button onClick={() => setModalOpen(true)} style={{   margin: "30px",
            padding: "15px 25px",
            fontSize: "19px",
            backgroundColor: "purple",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",}}>
        <h2 className="button">Let's Connect!</h2>
      </button>
      
      <MailFormModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
        
        
        <p className="mt-2">l
          📩 Reach me at <a href="mailto:sakshidubey4467@gmail.com" className="text-blue-600 font-semibold">Gmail</a>
        </p>
        <p className="mt-2">
          🌐 Check out my work on <a href="https://github.com/sakshimedplus" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-semibold">GitHub</a>
        </p>   
         </div>
        </div>
  
      </>
    )
  }
    