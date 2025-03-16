import React, { useState, useEffect } from "react";

export function Timer(props) {
  const initialFocusTime = props.defaultFocusTime || 25;
  const initialBreakTime = props.defaultBreakTime || 5;

  const [time, setTime] = useState(initialFocusTime * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [focusTime, setFocusTime] = useState(initialFocusTime.toString());
  const [breakTime, setBreakTime] = useState(initialBreakTime.toString());
  const [onBreak, setOnBreak] = useState(false);
  const [notification, setNotification] = useState("");

  useEffect(() => {
    let timer;
    if (isRunning && time > 0) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (time === 0) {
      handleTimerEnd();
    }

    return () => clearInterval(timer);
  }, [isRunning, time, focusTime, breakTime, onBreak]);

  function handleTimerEnd() {
    if (!onBreak) {
      setNotification("Focus time is up! Starting break...");
      setTime(Number(breakTime) * 60);
      setOnBreak(true);
    } else {
      setNotification("Break time is up! Back to focus time.");
      setTime(Number(focusTime) * 60);
      setOnBreak(false);
    }

    setTimeout(() => setNotification(""), 3000);
  }

  function skipBreak() {
    setNotification("Break skipped! Back to focus time.");
    setTime(Number(focusTime) * 60);
    setOnBreak(false);
    setIsRunning(true); 

    setTimeout(() => setNotification(""), 3000);
  }

  function formatTime(seconds) {
    let minutes = Math.floor(seconds / 60);
    let secs = seconds % 60;
    return `${minutes}:${secs < 10 ? "0" + secs : secs}`;
  }

  function toggleTimer() {
    const newRunningState = !isRunning;
    setIsRunning(newRunningState);
  }

  function resetTimer() {
    setIsRunning(false);
    setOnBreak(false);
    const resetTime = Number(focusTime) * 60;
    setTime(resetTime);
    setNotification(""); 
  }

  function updateFocusTime(event) {
    let newFocusTime = event.target.value;
    if (newFocusTime === "") {
      setFocusTime("");
    } else {
      let num = Number(newFocusTime);
      if (num > 0) {
        setFocusTime(num.toString());
        if (!isRunning) {
          setTime(num * 60);
        }
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

        {notification && <p className="notification">{notification}</p>}

        <div className="timer-controls">
          <button className="btn button-style timer-stop-btn" onClick={resetTimer}>
            Reset
          </button>
          <button className="btn button-style timer-start-btn" onClick={toggleTimer}>
            {isRunning ? "Pause" : "Start"}
          </button>
          {onBreak && (
            <button className= "btn button-style timer-skip-btn" onClick={skipBreak}>
              Skip Break
            </button>
          )}
        </div>
      </div>

      <form className="timer-customization">
        <h3>Customize Timer</h3>
        <div className="timer-input">
          <label htmlFor="focus-time">Focus Time (minutes)</label>
          <input 
            type="text" 
            id="focus-time" 
            value={focusTime} 
            onChange={updateFocusTime} 
            min="1" 
            required 
          />
        </div>
        <div className="timer-input">
          <label htmlFor="break-time">Break Time (minutes)</label>
          <input 
            type="text" 
            id="break-time" 
            value={breakTime} 
            onChange={updateBreakTime} 
            min="1"
            required 
          />
        </div>
      </form>
    </div>
  );
}



