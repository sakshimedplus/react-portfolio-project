import { FormControl, FormControlLabel, FormGroup, Switch } from "@mui/material";
import { useEffect, useState } from "react";


const ToggleSwitch = () => {
  // const [isOn, setIsOn] = useState(false);

  // const handleToggle = () => {
  //   setIsOn((prev) => !prev);
    
  // };
  
  const [darkMode, setDarkMode] = useState(false);
 var Mode="Dark Mode";
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
        control={<Switch color="secondary"  /> } 
        onChange={() => setDarkMode(!darkMode)}
        label={darkMode?"Light Mode":"Dark Mode"}
        labelPlacement={darkMode?"end":"start"}
      />
    </FormGroup>
  </FormControl>
  );
};

export default ToggleSwitch;
