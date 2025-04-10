// import { useEffect, useRef, useState } from "react";

 
 const MyResume=()=>{


    return (
      <div style={{display: "flex",
        justifyContent: "center",
        flexDirection:"column",
        alignItems:"center"
        }}>
        
        <a href={"src\assets\pdf_files\resume.pdf"} download="resume.pdf">
        <button
          style={{
            margin: "30px",
            padding: "15px 25px",
            fontSize: "19px",
            backgroundColor: "purple",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Download Resume
        </button>
      </a>

<div className="resume-corner"></div>

      <button
          style={{
            margin: "30px",
            padding: "15px 25px",
            fontSize: "19px",
            backgroundColor: "purple",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >Download Resume
        </button>
    </div>
     
    );
}
export default MyResume;

