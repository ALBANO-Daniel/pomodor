import React, { useEffect } from 'react';
import { useTimer } from 'react-timer-hook';


export default function Timer({ expiryTimestamp , onExpire }) {
 
  console.log("render");

    const {seconds, 
      minutes,
      hours,
      days,
      isRunning,
      start,
      pause, 
      resume } = useTimer({ expiryTimestamp, onExpire });
    
    
    useEffect(() => {
      console.log(" comecei ")
    
      return () => {
        console.log( " acabei ")
      }
    }, [])

    return (
        <div style={{textAlign: 'center'}}>

        <h1>react-timer-hook </h1>
        <p>Timer Demo</p>
  
        <div style={{fontSize: '100px'}}>
          {days}<span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
        </div>
  
  
        <button onClick={start}>Start</button>
        <p>{isRunning ? <button onClick={pause}>Pause</button> : <button onClick={resume}>Resume</button>}</p>
  
  
        
      </div>
    );
  }