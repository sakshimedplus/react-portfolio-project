// // import React from "react";
// import "../index.css";

// const AboutMe = () => {
//   return (
//     <div className="about-container-container" >
//       <div className="about-container">
//         <h1 className="about-title ">About Me</h1>
//         <p className="text-gray-600">
//           Hello! I'm <span className="font-semibold">Sakshi Dubey</span>, a passionate{" "}
//           <span className="text-blue-600 font-semibold">Full-Stack Developer</span> with over{" "}
//           <span className="font-semibold">2 years of experience</span> in building scalable and efficient web applications.
//           My expertise lies in{" "}
//           <span className="text-blue-600">Python (Django), JavaScript (React, Angular, Node.js), and MySQL</span>, along with hands-on experience in{" "}
//           <span className="text-blue-600">Azure, RESTful APIs, and ORM optimizations</span>.
//         </p>
// {/* 
//         <h2 className="about-title ">What I Do</h2>
//         <ul className="list-disc list-inside text-gray-600 mt-2">
//           <li>Develop high-performance backend solutions using <span className="font-semibold">Django & Node.js</span></li>
//           <li>Build dynamic, user-friendly frontends with <span className="font-semibold">React & Angular</span></li>
//           <li>Optimize databases and write efficient <span className="font-semibold">ORM queries</span></li>
//           <li>Work with cloud services like <span className="font-semibold">Azure</span> for scalable applications</li>
//           <li>Follow <span className="font-semibold">Agile methodologies</span> and write clean, maintainable code</li>
//         </ul>

       
//         <h2 className="about-title">My Goal</h2>
//         <p className="text-gray-600 mt-2">
//           I am always eager to learn and explore new technologies. Currently, I'm diving deeper into{" "}
//           <span className="text-blue-600 font-semibold">Azure</span> and <span className="text-blue-600 font-semibold">Generative AI</span> to expand my skill set.
//           My goal is to work on impactful projects that solve real-world problems efficiently.
//         </p> */}

   
//       </div>
//     </div>
//   );
// };

// export default AboutMe;
import React, { useEffect, useState } from "react";

const AboutMe: React.FC = () => {
  const [screenText, setScreenText] = useState<string>("");
  const [phase, setPhase] = useState<"hacking" | "typing" | "intro">("hacking");

  const welcomeText = " Hi!!! 👋 Welcome to my portfolio   ";
  const introText =
    "I'm Sakshi Dubey, a full-stack developer passionate about building clean, user-focused web applications. Experienced  in building scalable and efficient web applications.My expertise lies in Python (Django), JavaScript (React, Angular, Node.js), and MySQL, along with hands-on experience in Azure, RESTful APIs, and ORM optimizations";

  // Simulate hacking animation (random flickering characters)
  useEffect(() => {
    if (phase === "hacking") {
      let iterations = 0;
      const interval = setInterval(() => {
        const randomString = Array.from({ length: 174 }, () =>
          String.fromCharCode(33 + Math.random() * 94)
        ).join("");
        setScreenText(randomString);
        iterations++;
        if (iterations > 20) {
          clearInterval(interval);
          setPhase("typing");
          setScreenText("");
        }
      }, 90);
      return () => clearInterval(interval);
    }

    if (phase === "typing") {
      let index = 0;
      const interval = setInterval(() => {
        setScreenText((prev) => prev + welcomeText[index]);
        index++;
        if (index === welcomeText.length) {
          clearInterval(interval);
          setTimeout(() => {
            setPhase("intro");
          }, 15);
        }
      }, 65);
      return () => clearInterval(interval);
    }

    if (phase === "intro") {
      setScreenText(introText);
    }
  }, [phase]);

  return (
    <div style={styles.container}>
      <div style={styles.screen}>
        <pre style={styles.text}>{screenText}</pre>
      </div>
      <img
        src="../src/assets/images/bblank screen.png" 
        alt="Keyboard and Mouse on Table"
        style={styles.image}
      />
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    padding: "20px",
    boxSizing: "border-box",
    
  },
  screen: {
    width: "100%",
    maxWidth: "600px",
    aspectRatio: "16 / 9",
    backgroundColor: "#111",
    border: "12px solid #333",
    borderRadius: "10px",
    boxShadow: "0 0 20px rgba(0,0,0,0.7)",
    padding: "20px",
    color: "#0f0",
    fontFamily: "monospace",
    overflow: "auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  text: {
    margin: 0,
    whiteSpace: "pre-wrap",
    fontSize: "1rem",
    width: "100%",
    wordBreak: "break-word",
    font:"Consolas",
  },
  image: {
    width: "100%",
    maxWidth: "600px",
    marginTop: "0px",
    display: "block",
  },
};


export default AboutMe;
