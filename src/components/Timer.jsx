import React, { useState, useEffect } from "react";

export function Timer(props) {
  const initialFocusTime = props.defaultFocusTime || 25;
  const initialBreakTime = props.defaultBreakTime || 5;

  const [time, setTime] = useState(initialFocusTime * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [focusTime, setFocusTime] = useState(initialFocusTime.toString());
  const [breakTime, setBreakTime] = useState(initialBreakTime.toString());
  const [onBreak, setOnBreak] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning && time > 0) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (time === 0) {
      if (!onBreak) {
        alert("Focus time is up! Starting break...");
        setTime(Number(breakTime) * 60);
        setOnBreak(true);
      } else {
        alert("Break time is up! Back to focus time.");
        setTime(Number(focusTime) * 60);
        setOnBreak(false);
      }
    }

    return () => clearInterval(timer);
  }, [isRunning, time, focusTime, breakTime, onBreak]);

  function formatTime(seconds) {
    let minutes = Math.floor(seconds / 60);
    let secs = seconds % 60;
    return `${minutes}:${secs < 10 ? "0" + secs : secs}`;
  }

  function toggleTimer() {
    setIsRunning(!isRunning);
  }

  function resetTimer() {
    setIsRunning(false);
    setOnBreak(false);
    setTime(Number(focusTime) * 60);
  }

  function updateFocusTime(event) {
    let newFocusTime = event.target.value;

    if (newFocusTime === "") {
      setFocusTime(""); 
    } else {
      let num = Number(newFocusTime);
      if (num > 0) {
        setFocusTime(num.toString());
        setTime(num * 60);
      }
    }
  }

  function updateBreakTime(event) {
    let newBreakTime = event.target.value;

    if (newBreakTime === "") {
      setBreakTime(""); 
    } else {
      let num = Number(newBreakTime);
      if (num > 0) {
        setBreakTime(num.toString());
      }
    }
  }

  return (
    <div className="timer-page">
      <div className="timer-container">
        <div className="timer-circle">
          <span className="timer-display">{formatTime(time)}</span>
        </div>

        <div className="timer-controls">
          <button className="btn timer-stop-btn" onClick={resetTimer}>
            Reset
          </button>
          <button className="btn timer-start-btn" onClick={toggleTimer}>
            {isRunning ? "Pause" : "Start"}
          </button>
        </div>
      </div>

      <div className="timer-customization">
        <h3>Customize Timer</h3>
        <div className="timer-input">
          <label>Focus Time (minutes)</label>
          <input 
            type="text" 
            value={focusTime} 
            onChange={updateFocusTime} 
            min="1" 
            required
          />
        </div>
        <div className="timer-input">
          <label>Break Time (minutes)</label>
          <input 
            type="text" 
            value={breakTime} 
            onChange={updateBreakTime} 
            min="1"
            required 
          />
        </div>
      </div>
    </div>
  );
}


