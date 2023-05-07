import React from "react";
import { useTimer } from "react-timer-hook";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import PauseCircleIcon from "@mui/icons-material/PauseCircle";
import { Box, Stack, Typography } from "@mui/material";

export default function Timer({ expiryTimestamp, onExpire }) {
  const { seconds, minutes, isRunning, pause, resume } = useTimer({
    expiryTimestamp,
    onExpire,
  });

  return (
        <Box sx={{ display: "flex", fontSize: "100px", justifyContent: "center" }}>
          <Stack sx={{ mr: 2 }}>
          {isRunning ? (
            <PauseCircleIcon color="success" fontSize="x-large" onClick={pause} />
          ) : (
            <PlayCircleIcon color="success" fontSize="x-large" onClick={resume} />
          )}
          </Stack>
          <Typography variant="h1" paddingTop={1}>
          {minutes < 10 ? `0${minutes}` : minutes}:{seconds < 10 ? `0${seconds}` : seconds}
          </Typography>
        </Box>
  );
}
