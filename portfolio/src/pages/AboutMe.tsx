// import React from "react";
import "../index.css";
const AboutMe = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-6">
      <div className="max-w-3xl bg-white p-8 rounded-2xl shadow-lg">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">About Me</h1>
        <p className="text-gray-600">
          Hello! I'm <span className="font-semibold">Sakshi Dubey</span>, a passionate{" "}
          <span className="text-blue-600 font-semibold">Full-Stack Developer</span> with over{" "}
          <span className="font-semibold">2 years of experience</span> in building scalable and efficient web applications.
          My expertise lies in{" "}
          <span className="text-blue-600">Python (Django), JavaScript (React, Angular, Node.js), and MySQL</span>, along with hands-on experience in{" "}
          <span className="text-blue-600">Azure, RESTful APIs, and ORM optimizations</span>.
        </p>

        <h2 className="text-2xl font-bold text-gray-800 mt-6">What I Do</h2>
        <ul className="list-disc list-inside text-gray-600 mt-2">
          <li>Develop high-performance backend solutions using <span className="font-semibold">Django & Node.js</span></li>
          <li>Build dynamic, user-friendly frontends with <span className="font-semibold">React & Angular</span></li>
          <li>Optimize databases and write efficient <span className="font-semibold">ORM queries</span></li>
          <li>Work with cloud services like <span className="font-semibold">Azure</span> for scalable applications</li>
          <li>Follow <span className="font-semibold">Agile methodologies</span> and write clean, maintainable code</li>
        </ul>

       
        <h2 className="text-2xl font-bold text-gray-800 mt-6">My Goal</h2>
        <p className="text-gray-600 mt-2">
          I am always eager to learn and explore new technologies. Currently, I'm diving deeper into{" "}
          <span className="text-blue-600 font-semibold">Azure</span> and <span className="text-blue-600 font-semibold">Generative AI</span> to expand my skill set.
          My goal is to work on impactful projects that solve real-world problems efficiently.
        </p>

   
      </div>
    </div>
  );
};

export default AboutMe;
