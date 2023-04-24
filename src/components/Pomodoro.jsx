import { useState } from "react";
import { Box } from "@mui/system";
// import { theme } from "../theme.js";
import React from "react";
import Timer from "./Timer";
import PomodoroForm from "./PomodoForm";

export default function Pomodoro(props) {

  const { workTime, breakTime, bigPause } = props.settings;

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

  const [index, setIndex] = useState(0);
  const [reset, setReset] = useState(false);

  // const [countStages, setCountStages] = useState(second)

  // end of timer -> alert  -> onClick ok -> new timer


    if (index <= 7) {
      setIndex(index + 1);
    } else {
      setIndex(0);
      setReset(true);
    }

  return (
      reset === false ? (
        <Timer expiryTimestamp={pomodoroStagesInSeconds[index]} />
      ) : (
        <PomodoroForm />
      )
  );
}
