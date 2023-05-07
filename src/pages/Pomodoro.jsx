import { useState } from "react";
import React from "react";
import PomodoroTimer from "../components/PomodoroTimer";
import PomodoroForm from "../components/PomodoroForm";

import alarmSound from "../sounds/1.m4a";

// import { theme } from "../theme.js";
import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";

// import useSound from "use-sound"; no need ATM

export default function Pomodoro() {

  const [timerSettings, setTimerSettings] = useState('');
  const [toggleTimer, setToggleTimer] = useState(false);
  const [index, setIndex] = useState(0);
  const [reset, setReset] = useState(false);

  const { workTime, breakTime, bigPause } = timerSettings;

  const pomodoroStages = [
    0.1, //workTime, 
    breakTime, //0.1,
    workTime, //0.1,
    breakTime, //0.1,
    workTime, //0.1,
    breakTime, //0.1,
    workTime, //0.1,
    bigPause, //0.2,
  ];

  const pomodoroStagesInSeconds = pomodoroStages.map((num) => num * 60);

  function handleTimerSettings(sets) {
    setTimerSettings(sets);
    setToggleTimer(true);
  }

  function stageFinished() {
    new Audio(alarmSound).play();
    if (index < 7) {
      setIndex(index + 1);
    } else {
      setIndex(0);
      setReset(true);
    }
  }

  const time = new Date();
  time.setSeconds(time.getSeconds() + pomodoroStagesInSeconds[index]);

  return (
    <React.Fragment>
      
      <PomodoroForm handleSettings={handleTimerSettings} />

      <Box id="timerPlace">
        {toggleTimer &&
          (reset === false ? (
            <PomodoroTimer
              expiryTimestamp={time}
              onExpire={stageFinished}
              key={index}
            />
          ) : (
            <Box>
              <Typography>Pomodoro Finished!!! </Typography>
              <Button
                onClick={() => {
                  setReset(false);
                }}
              >
                start again
              </Button>
            </Box>
          ))}
      </Box>
    </React.Fragment>
  );
}
