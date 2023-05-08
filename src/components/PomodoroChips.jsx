import { Chip, Stack } from "@mui/material";
import React from "react";

function PomodoroChips({ index }) {


  return (
    <React.Fragment>
      <Stack direction="row">
        <Chip size="small" label="work" color="success" />
        <Chip size="small" label="pause" color="success" variant={index < 1 ? "outlined" : ""} />
        <Chip size="small" label="work" color="success" variant={index < 2 ? "outlined" : ""}/>
        <Chip size="small" label="pause" color="success" variant={index < 3 ? "outlined" : ""}/>
        <Chip size="small" label="work" color="success" variant={index < 4 ? "outlined" : ""}/>
        <Chip size="small" label="pause" color="success" variant={index < 5 ? "outlined" : ""} />
        <Chip size="small" label="work" color="success" variant={index < 6 ? "outlined" : ""}/>
        <Chip size="small" label="big pause" color="error" variant={index < 7 ? "outlined" : ""}/>
      </Stack>
    </React.Fragment>
  );
}

export default PomodoroChips;
