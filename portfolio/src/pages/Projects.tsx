// import { useState } from "react";
// import { useTheme } from '@mui/material/styles';
 import { Box, Card, CardActionArea, CardContent, Typography } from "@mui/material";
import carGif from '../assets/gifs/car.gif';
const projects = [
  {
    id: 1,
    title: "Job Portal",
    description: "A job portal built with React, Express, and MongoDB.",
    
  },
  {
    id: 2,
    title: "HRMS",
    description:
      "An employee management system using Django and React.js.",
   
  },
  {
    id: 3,
    title: "OHS",
    description:
      "A store cash deposit tracking system using Django and Angular.",
  
  },
];
import React, { useEffect, useState } from "react";
import './crashsceen.css';

const Projects: React.FC = () => {
  const [hasCrashed, setHasCrashed] = useState(false);
  const [showSmoke, setShowSmoke] = useState(false);
  const [showProjects, setShowProjects] = useState(false);
  const [selectedCard, setSelectedCard] = useState(0);
  useEffect(() => {
    const carTimer = setTimeout(() => {
      setHasCrashed(true);
      setTimeout(() => setShowSmoke(true), 400);
        setShowProjects(true);
        setShowSmoke(false);
      
    }, 4000); // Car runs for 4s before crashing

    return () => clearTimeout(carTimer);
  }, []);

  return (
    <div className={`crash-container ${hasCrashed ? "crashed" : ""}`}><div className="content_container">
      {!hasCrashed && (
        <div className="car">
          <img src={carGif} alt="Moving Car" style={{
             height:'52%',
            width:'52%'
          }} />
        </div>
      )}

      {showSmoke && (
        <div className="smoke">
          Oppss!! Apologies for crashing your car!!!!!
        </div>
      )}

      <div className={`wall ${showProjects ? "cracked" : ""}`}>
      </div>

      {showProjects && (
      
 <div id="about-container-container"> 
    <Box
      sx={{
        width: '100%',
        display: 'grid',

        gridTemplateColumns: 'repeat(auto-fill, minmax(min(200px, 100%), 1fr))',
        gap: 5,
     
      }}
    >
      {projects.map((card, index) => (
        <Card key={card.id}>
          <CardActionArea
            onClick={() => setSelectedCard(index)}
            data-active={selectedCard === index ?  '' : undefined}
            sx={{
              height: '100%',
              '&[data-active]': {
                backgroundColor: 'action.selected',
                '&:hover': {
                  backgroundColor: 'action.selectedHover',
                },
              },
            }}
          >
            <CardContent sx={{ height: '100%' }}>
              <Typography variant="h5" component="div">
                {card.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {card.description}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </Box>
    </div>
      )}
      </div>
    </div>
  );
};





  
    
  

export default Projects;

