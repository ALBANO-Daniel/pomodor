// import * as React from "react";
// import { useState } from "react";
import { Box } from "@mui/system";
// import { theme } from "../theme.js";


export default function Pomodoro(props) {

        const workTime =  props.settings.workTime * 1 ;
        const breakTime =  props.settings.breakTime * 1;
        console.log(workTime + breakTime);

    return(
           <Box>
            {props.settings.workTime}
           </Box>
    )
}


