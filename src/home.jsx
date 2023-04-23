import * as React from "react";
import { useState } from "react";
import { Box, ThemeProvider } from "@mui/system";
import { theme } from "./theme.js";
import Pomodoro  from "./components/Pomodoro.jsx";

// import AccessAlarmsIcon from "@mui/icons-material/AccessAlarms";
import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
// import { SendIcon } from "@mui/icons-material";







export default function PomodoroForm() {  
  
   const [timerSettings, setTimerSettings] = useState([]);

  function handleSubmit(e) {
    // Prevent the browser from reloading the page
    e.preventDefault();
    // Read the form data
    const form = e.target;
    const formData = new FormData(form);

    // You can pass formData as a fetch body directly:
    // fetch('/some-api', { method: form.method, body: formData });

    // You can generate a URL out of it, as the browser does by default:
    console.log(new URLSearchParams(formData).toString());

    // You can work with it as a plain object.
    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson); // (!) This doesn't include multiple select values
    console.log(formJson.long_pause);
    

    // Or you can get an array of name-value pairs.
    console.log([...formData.entries()]);

    // const formArray = [...formData.entries()];

    // Pomodoro();
    setTimerSettings(formJson);

    // document.getElementById("pomodoroBox").innerHTML = <Pomodoro settings={timerSettings} />; 
  }

  return (
    <ThemeProvider theme={theme}>
      <div className="pomodoro">
        <Box
          sx={{
            display: "flex",
            p: 5,
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              bgcolor: "background.paper",
              boxShadow: 1,
              borderRadius: 2,
              p: 2,
              minWidth: 300,
            }}
          >
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
              <form method="post" onSubmit={handleSubmit}>
                <FormControl sx={{ m: 1.5 }}>
                  <FormLabel id="workTime">Work periods</FormLabel>
                  <RadioGroup
                    aria-labelledby="choose work time"
                    defaultValue={25}
                    name="workTime"
                  >
                    <FormControlLabel
                      value="20"
                      control={<Radio />}
                      label="20min"
                    />
                    <FormControlLabel
                      value="25"
                      control={<Radio />}
                      label="25min"
                    />
                    <FormControlLabel
                      value="30"
                      control={<Radio />}
                      label="30min"
                    />
                  </RadioGroup>
                </FormControl>

                <FormControl sx={{ m: 1.5 }}>
                  <FormLabel id="breakTime">Break periods</FormLabel>
                  <RadioGroup
                    aria-labelledby="choose break time"
                    defaultValue={5}
                    name="breakTime"
                  >
                    <FormControlLabel
                      value="5"
                      control={<Radio />}
                      label="5min"
                    />
                    <FormControlLabel
                      value="7"
                      control={<Radio />}
                      label="7min"
                    />
                    <FormControlLabel
                      value="10"
                      control={<Radio />}
                      label="10min"
                    />
                  </RadioGroup>
                </FormControl>

                <FormControl sx={{ m: 1.5 }}>
                  <FormLabel id="repeats">Repeats</FormLabel>
                  <RadioGroup
                    aria-labelledby="choose how many"
                    defaultValue={1}
                    name="repeats"
                  >
                    <FormControlLabel
                      value="1"
                      control={<Radio />}
                      label="1x"
                    />
                    <FormControlLabel
                      value="2"
                      control={<Radio />}
                      label="2x"
                    />
                    <FormControlLabel
                      value="3"
                      control={<Radio />}
                      label="3x"
                    />
                  </RadioGroup>
                </FormControl>

                <FormControl sx={{ m: 1.5 }}>
                  <FormLabel id="longPause">long pause</FormLabel>
                  <RadioGroup
                    aria-labelledby="choose end of cicle break time"
                    defaultValue={25}
                    name="longPause"
                  >
                    <FormControlLabel
                      value="25"
                      control={<Radio />}
                      label="25min"
                    />
                    <FormControlLabel
                      value="30"
                      control={<Radio />}
                      label="30min"
                    />
                    <FormControlLabel
                      value="35"
                      control={<Radio />}
                      label="35min"
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
                  <Button variant="contained" type="submit">
                    Create Pomodoro
                  </Button>
                </Box>
              </form>
            </Box>

            <Box id="timerPlace">
                  <Pomodoro settings={timerSettings} />
            </Box>

          </Box>
        </Box>

      </div>
    </ThemeProvider>
  );
}