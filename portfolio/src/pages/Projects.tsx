import { useState } from "react";
// import { useTheme } from '@mui/material/styles';



import { Box, Card, CardActionArea, CardContent, Typography } from "@mui/material";

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

// const Projects = () => {
//   return (
//     <div className="projects-container">
//       <h1 className="projects-title">My Projects</h1>
//       <div className="projects-grid">
//         {projects.map((project) => (
//           <div key={project.id} className="project-card">
//             <h2 className="project-title">{project.title}</h2>
//             <p className="project-description">{project.description}</p>
//             <a
              
//               className="project-link"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               View Project
//             </a>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };
const Projects=()=>{
  // const theme = useTheme();
  const [selectedCard, setSelectedCard] = useState(0);
  return (
    <Box
      sx={{
        width: '100%',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(min(200px, 100%), 1fr))',
        gap: 2,
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
  );
}
export default Projects;

