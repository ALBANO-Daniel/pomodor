import * as React from "react";
import { Box } from "@mui/system";

import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";


function PomodoroForm( { handleSettings, toggleTimer, pomodoroFinished } ) {  

  function handleSubmit(e) {
    e.preventDefault();
    // Read the form data
    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());
    handleSettings(formJson);
  }

  return (

      <Box sx={{ alignItems: "center"}}>
            <Box sx={{ color: "text.secondary" }}>deani.dev</Box>
            <Box
              sx={{ color: "text.primary", fontSize: 34, fontWeight: "medium" }}
            >
              Pomodoro Timer
            </Box>
            <Box
              sx={{
                color: "success.dark",
                display: "inline",
                fontWeight: "bold",
                mx: 0.5,
                fontSize: 14,
              }}
            >
              choose your settings and press create:
            </Box>
            <Box
              sx={{
                p: 2,
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <form method="post"  onSubmit={handleSubmit}>

                <FormControl disabled={toggleTimer} sx={{ m: 1.5 }}>
                  <FormLabel id="workTime">Work periods</FormLabel>
                  <RadioGroup
                    aria-labelledby="choose work time"
                    defaultValue={25}
                    name="workTime"
                  >
                    <FormControlLabel
                      value="20"
                      control={<Radio color="success" />}
                      label="20min"
                    />
                    <FormControlLabel
                      value="25"
                      control={<Radio color="success" />}
                      label="25min"
                    />
                    <FormControlLabel
                      value="30"
                      control={<Radio color="success"/>}
                      label="30min"
                    />
                  </RadioGroup>
                </FormControl>

                <FormControl disabled={toggleTimer} sx={{ m: 1.5 }}>
                  <FormLabel id="breakTime">Break periods</FormLabel>
                  <RadioGroup
                    aria-labelledby="choose break time"
                    defaultValue={5}
                    name="breakTime"
                  >
                    <FormControlLabel
                      value="5"
                      control={<Radio color="success"/>}
                      label="5min"
                    />
                    <FormControlLabel
                      value="7"
                      control={<Radio color="success"/>}
                      label="7min"
                    />
                    <FormControlLabel
                      value="10"
                      control={<Radio color="success"/>}
                      label="10min"
                    />
                  </RadioGroup>
                </FormControl>

                <FormControl disabled={toggleTimer} sx={{ m: 1.5 }}>
                  <FormLabel id="longPause">long pause</FormLabel>
                  <RadioGroup
                    aria-labelledby="choose end of cicle break time"
                    defaultValue={15}
                    name="longPause"
                  >
                    <FormControlLabel
                      value="15"
                      control={<Radio color="success"/>}
                      label="15min"
                    />
                    <FormControlLabel
                      value="20"
                      control={<Radio color="success"/>}
                      label="20min"
                    />
                    <FormControlLabel
                      value="25"
                      control={<Radio color="success"/>}
                      label="25min"
                    />
                  </RadioGroup>
                </FormControl>

                <Box
                  sx={{
                    p: 2,
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  { toggleTimer === false ? 
                  <Button variant="contained" type="submit" color="success">
                    Create Pomodoro
                  </Button> 
                  :
                  <Button variant="contained" disabled={pomodoroFinished} type="submit" color="success">End Pomodoro</Button>
                  }
                  
                </Box>
              </form>
            </Box>
      </Box>

  );
}

export default PomodoroForm;