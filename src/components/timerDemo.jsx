import { Alert, Box } from '@mui/material';
import React from 'react';
import { useTimer } from 'react-timer-hook';



// function makeCountdown(array){

//   const [countdownSequence,setCountdownSequence] = useState([]);


//   const time = new Date();
//   const durations = array || [25,5,25,5,25,5,25,5,15];

//   durationsArray = sequence.map((num) => num * 60);

//   useEffect(() => {
//     first
  
//     return () => {
//       second
//     }
//   }, [third])
  

//   time.setSeconds(time.getSeconds() + durations); 
//   return  <MyTimer expiryTimestamp={time} />;
// }





function TimeGiver(array, countdown) {
  const time = new Date();
  const durations = array || [25,5,25,5,25,5,25,15];
  durationsArray = sequence.map((num) => num * 60);
  countdown = countdown || 7;
  return  (
  (countdown >= 1) ? <MyTimer expiryTimestamp={time} countdown={countdown} /> : <Box>Pomodoro Finished!!</Box>
  )

}


function MyTimer({pomodoroStages, countdown }) {


  let expiryTimestamp = 

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
  } = useTimer({ expiryTimestamp, onExpire: () => { (countdown >= 0) ? countdown(countdown - 1) : Alert("your pomodoro is finished") } });


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

export default function Pomodoro(pomodoroStages) {
  
  return (
    <div>
      <MyTimer expiryTimestamp={time} />
    </div>
  );
}