import React from "react";
import { useTimer } from "react-timer-hook";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import PauseCircleIcon from "@mui/icons-material/PauseCircle";
import { Box } from "@mui/material";

export default function Timer({ expiryTimestamp, onExpire }) {
  const { seconds, minutes, isRunning, pause, resume } = useTimer({
    expiryTimestamp,
    onExpire,
  });

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          textAlign: "center",
          bgcolor: "background.paper",
          boxShadow: 1,
          borderRadius: 2,
          p: 2,
          minWidth: 300,
        }}
      >
        <Box style={{ fontSize: "100px" }}>
          <span>{minutes < 10 ? `0${minutes}` : minutes}</span>:
          <span>{seconds < 10 ? `0${seconds}` : seconds}</span>
        </Box>

        <Box>
          {isRunning ? (
            <PauseCircleIcon fontSize="large" onClick={pause} />
          ) : (
            <PlayCircleIcon fontSize="large" onClick={resume} />
          )}
        </Box>
      </Box>
    </Box>
  );
}
