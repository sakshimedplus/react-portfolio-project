import { FormControl, FormControlLabel, FormGroup, Switch } from "@mui/material";
import { useEffect, useState } from "react";


const ToggleSwitch = () => {

  const [darkMode, setDarkMode] = useState(false);
  //  var Mode="Dark Mode";
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
     
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);
  return (
    <FormControl component="fieldset">
    <FormGroup aria-label="position" row>

      <FormControlLabel
        value="Light"
        control={<Switch color="default"  /> } 
        onChange={() => setDarkMode(!darkMode)}
   

        label={
          <img
            src={darkMode ? "../../src/assets/favicons/favicon-32x32.png" : "../../src/assets/favicons/night-favicon-32x32.png" }
            alt={darkMode ? "Light Mode" : "Dark Mode"}
             width="18"
             height="18"
            // style={{ marginLeft: darkMode ? "8px" : "0", marginRight: darkMode ? "0" : "8px" }}
          />
        }
        labelPlacement={darkMode ? "end" : "start"}
      />
  
    </FormGroup>
  </FormControl>
  );
};

export default ToggleSwitch;
