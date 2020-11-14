import React, {useState, useEffect} from 'react';
import DisplayComponent from '../Display';
import BtnComponent from '../Btn';
import Description from '../Description';
import PickTimeDate from '../PickTimeDate';
import db from '../../firebase';
import DisplayTimerNotes from '../DisplayTimerNotes';
// import './App.css';

function Timer() {
  const [time, setTime] = useState({ms:0, s:0, m:0, h:0});
  const [interv, setInterv] = useState();
  const [status, setStatus] = useState(0);
  const date= new Date().toLocaleDateString()
 
  // Not started = 0
  // started = 1
  // stopped = 2

  const start = () => {
    run();
    setStatus(1);
    setInterv(setInterval(run, 10));
  };

  var updatedMs = time.ms, updatedS = time.s, updatedM = time.m, updatedH = time.h;

  const run = () => {
    if(updatedM === 60){
      updatedH++;
      updatedM = 0;
    }
    if(updatedS === 60){
      updatedM++;
      updatedS = 0;
    }
    if(updatedMs === 100){
      updatedS++;
      updatedMs = 0;
    }
    updatedMs++;
    return setTime({ms:updatedMs, s:updatedS, m:updatedM, h:updatedH});
  };

  const stop = () => {
    clearInterval(interv);
    setStatus(2);
  };

  const reset = () => {
    clearInterval(interv);
    setStatus(0);
    setTime({ms:0, s:0, m:0, h:0})
  };

  const resume = () => start();

  const [timerNotes, setTimerNotes ] = useState([])

  useEffect (()=>{
    db.collection("timerNotes").onSnapshot((snapshot)=>
    setTimerNotes(
      snapshot.docs.map((doc)=>({
        id:doc.id,
        timerNote:doc.data(),
      }))

    )
    )
  },[])

  const handleAddTimerNote =()=>{
    const timerNote = prompt("Enter your timer note")

    if(timerNote){
      db.collection("timerNotes").add({
        timerNote:timerNote,
        time:time,
        date:date
      })
    }
  }
  console.log(timerNotes)
  return (
    <div className="main-section">
     <div className="clock-holder">
          <div className="stopwatch">
               <DisplayComponent time={time}/>
              
               <BtnComponent status={status} resume={resume} reset={reset} stop={stop} start={start}/>
               <h5>{date}</h5>
               <button onClick={handleAddTimerNote}>Save Timer Note</button>
                {/* <Description/> */}
                <PickTimeDate/>
                <DisplayTimerNotes data={timerNotes}/>
          </div>
     </div>
    </div>
  );
}

export default Timer;


 
