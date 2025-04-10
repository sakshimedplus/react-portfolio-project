import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
// import { ThemeProvider, createTheme } from '@mui/material/styles';
import { BrowserRouter } from 'react-router-dom'
// const theme = createTheme();
// const theme = createTheme({
//   components: {
//     // Name of the component
//     MuiButton: {
//       styleOverrides: {
//         // Name of the slot
//         root: {
//           // Some CSS
//           fontSize: '1rem',
//         },
//       },
//     },
//   },
// });
createRoot(document.getElementById('root')!).render(
  <StrictMode>
     {/* <ThemeProvider theme={theme}>  */}
    <BrowserRouter>
    <App />
    </BrowserRouter>
    {/* </ThemeProvider> */}
  </StrictMode>,
)
