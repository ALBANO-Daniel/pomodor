import { useState } from "react";
import React from "react";
import PomodoroTimer from "../components/PomodoroTimer";
import PomodoroForm from "../components/PomodoroForm";

import alarmSound from "../sounds/1.m4a";

import { theme } from "../theme.js";
import { Alert,  Typography } from "@mui/material";
import { Box } from "@mui/system";
import PomodoroChips from "../components/PomodoroChips";
import { ThemeProvider } from "@emotion/react";

export default function Pomodoro() {
  const [timerSettings, setTimerSettings] = useState("");
  const [toggleTimer, setToggleTimer] = useState(false);
  const [pomodoroFinished, setPomodoroFinished] = useState(false);
  const [index, setIndex] = useState(0);
  const [reset, setReset] = useState(false);

  const { workTime, breakTime, bigPause } = timerSettings;

  const pomodoroStages = [
    workTime,
    breakTime,
    workTime,
    breakTime,
    workTime,
    breakTime,
    workTime,
    bigPause,
  ];

  const pomodoroStagesInSeconds = pomodoroStages.map((num) => num * 60);

  function handleTimerSettings(sets) {
    setTimerSettings(sets);
    setIndex(0);
    setToggleTimer(!toggleTimer);
    setPomodoroFinished(false);
  }

  function stageFinished() {
    new Audio(alarmSound).play();
    if (index < 7) {
      setIndex(index + 1);
    } else {
      setIndex(0);
      setReset(true);
      setPomodoroFinished(true);
    }
  }

  const time = new Date();
  time.setSeconds(time.getSeconds() + pomodoroStagesInSeconds[index]);

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            display: "flex",
            p: 1,
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              bgcolor: "background.paper",
              boxShadow: 1,
              borderRadius: 2,
              p: 5,
              width: "400px",
              minWidth: 300,
            }}
          >
            <PomodoroForm
              handleSettings={handleTimerSettings}
              toggleTimer={toggleTimer}
              pomodoroFinished={pomodoroFinished}
            />

            {toggleTimer &&
              (reset === false ? (
                <Box sx={{ alignContent: "center", pt: 3 }}>
                  <Box sx={{ pb: 5 }}>
                    <Typography color="grey" paddingBottom={1}>
                      current progress:{" "}
                    </Typography>
                    <PomodoroChips index={index} />
                  </Box>
                  <PomodoroTimer
                    expiryTimestamp={time}
                    onExpire={stageFinished}
                    key={index}
                  />
                </Box>
              ) : (
                <Box sx={{ alignContent: "center", pt: 3 }}>
                  <Alert
                    sx={{ height: "70px", pt: 5 }}
                    onClose={() => {
                      setReset(false);
                      setToggleTimer(false);
                    }}
                  >
                    Pomodoro Finished!!!!
                  </Alert>
                </Box>
              ))}
          </Box>
        </Box>
      </ThemeProvider>
    </React.Fragment>
  );
}
