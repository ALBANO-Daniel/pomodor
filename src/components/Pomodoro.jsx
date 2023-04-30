import { useState } from "react";
import { Box } from "@mui/system";
// import { theme } from "../theme.js";
import React from "react";
import Timer from "./PomodoroTimer";
// import PomodoroForm from "./PomodoForm";
import { Button, Typography } from "@mui/material";

export default function Pomodoro(props) {
  const { workTime, breakTime, bigPause } = props.settings;

  const pomodoroStages = [
    0.1,//workTime,
    0.1,//breakTime,
    0.1,//workTime,
    0.1,//breakTime,
    0.1,//workTime,
    0.1,//breakTime,
    0.1,//workTime,
    0.2,//bigPause,
  ];

  const pomodoroStagesInSeconds = pomodoroStages.map((num) => num * 60);

  const [index, setIndex] = useState(0);
  const [reset, setReset] = useState(false);

  // const [countStages, setCountStages] = useState(second)

  // end of timer -> alert  -> onClick ok -> new timer

  function stageFinished() {
    if (index < 7) {
      setIndex(index + 1);
    } else {
      setIndex(0);
      setReset(true);
    }
  }

  const time = new Date();
  time.setSeconds(time.getSeconds() + pomodoroStagesInSeconds[index]);

  return reset === false ? (
      <Timer expiryTimestamp={time} onExpire={stageFinished} key={index} />
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
  );
}
