import { useState, useEffect } from "react";
import { Box } from "@mui/system";
// import { theme } from "../theme.js";
import React from "react";
import { useTimer } from "react-timer-hook";
import MyTimer from "./MyTimer";

export default function Pomodoro(props) {
  const pomodoroStages = [
    props.settings.workTime,
    props.settings.breakTime,
    props.settings.workTime,
    props.settings.breakTime,
    props.settings.workTime,
    props.settings.breakTime,
    props.settings.workTime,
    props.settings.bigPause,
  ];
  const pomodoroStagesInSeconds = pomodoroStages.map((num) => num * 60);

  const [stage, setStage] = useState(0);
  const [index, setIndex] = useState(0);



  return (
    <Box>
      <MyTimer expiryTimestamp={stage} />
    </Box>
  );
}
