import React from "react";
import { useTimer } from "react-timer-hook";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import PauseCircleIcon from "@mui/icons-material/PauseCircle";
import { Box, Stack, Typography } from "@mui/material";

export default function PomodoroTimer({ expiryTimestamp, onExpire, index }) {
  const { seconds, minutes, isRunning, pause, resume } = useTimer({
    expiryTimestamp,
    onExpire,
  });

  let titleMinutes = minutes < 10 ? `0${minutes}` : minutes;
  let titleSeconds = seconds < 10 ? `0${seconds}` : seconds;
  let titleTime = titleMinutes + ":" + titleSeconds;
  // work periods have pair indexes => pomodoroStages(Pomodoro.jsx)
  document.title = index % 2 ? titleTime + " | pause" : titleTime + " | work";

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Stack sx={{ mr: 2 }}>
        {isRunning ? (
          <PauseCircleIcon sx={{ fontSize: ['60px', '80px']}} color="success"  onClick={pause} />
        ) : (
          <PlayCircleIcon sx={{ fontSize: ['60px', '80px'] }} color="success"  onClick={resume} />
        )}
      </Stack>
      <Typography sx={{ fontSize: ['55px', '120px'], paddingTop: 1 }} variant="h1">
        {minutes < 10 ? `0${minutes}` : minutes}:
        {seconds < 10 ? `0${seconds}` : seconds}
      </Typography>
    </Box>
  );
}
