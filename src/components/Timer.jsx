import React from 'react';
import { useTimer } from 'react-timer-hook';
import { stageFinished } from  './Pomodoro';


export default function Timer({ expiryTimestamp }) {
    const {
      seconds,
      minutes,
      hours,
      days,
      isRunning,
      start,
      pause, 
      resume,
      restart,
    } = useTimer({ expiryTimestamp, onExpire: {stageFinished} });  // can i put a return as value on onExpire ex= <Pomodoro>
    
  
    return (
        <div style={{textAlign: 'center'}}>

        <h1>react-timer-hook </h1>
        <p>Timer Demo</p>
  
        <div style={{fontSize: '100px'}}>
          {days}<span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
        </div>
  
  
        <button onClick={start}>Start</button>
        <p>{isRunning ? <button onClick={pause}>Pause</button> : <button onClick={resume}>Resume</button>}</p>
  
  
        <button onClick={() => { 
          // Restarts to 5 minutes timer
          const time = new Date();
          time.setSeconds(time.getSeconds() + 300);
          restart(time)
        }}>Restart</button>
      </div>
    );
  }