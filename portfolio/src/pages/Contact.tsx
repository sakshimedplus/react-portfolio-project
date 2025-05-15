import { useState } from "react";
import MailFormModal from "../components/MailFormModal";

export default function ContactMe() {
  const [isModalOpen, setModalOpen] = useState(false);
    return (
      <>
        <div>
         <h1>Contact Me</h1>
        
           <button onClick={() => setModalOpen(true)} style={{ padding: '1rem'}}>
        <h2 className="text-2xl font-bold text-gray-800 mt-6">Let's Connect!</h2>
      </button>
        <p className="text-gray-600 mt-2">
          🚀 Open to new opportunities in <span className="font-semibold">full-stack development</span>.
         
      <MailFormModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
        </p>
        
        <p className="mt-2">l
          📩 Reach me at <a href="mailto:sakshidubey4467@gmail.com" className="text-blue-600 font-semibold">Gmail</a>
        </p>
        <p className="mt-2">
          🌐 Check out my work on <a href="https://github.com/sakshimedplus" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-semibold">GitHub</a>
        </p>   
         
        </div>
  
      </>
    )
  }
    