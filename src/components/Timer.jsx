import React, { useState, useEffect } from "react";

export function Timer(props) {
  const initialFocusTime = props.defaultFocusTime || 25;
  const initialBreakTime = props.defaultBreakTime || 5;

  const [time, setTime] = useState(initialFocusTime * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [focusTime, setFocusTime] = useState(initialFocusTime);
  const [breakTime, setBreakTime] = useState(initialBreakTime);

  useEffect(function() {
    let timer;
    
    if (isRunning && time > 0) {
      timer = setInterval(function() {
        setTime(function(prevTime) {
          return prevTime - 1;
        });
      }, 1000);
    } else if (time === 0) {
      alert("Time is up!");
      setIsRunning(false);
    }

    return function() {
      clearInterval(timer);
    };

  }, [isRunning, time]);

  function formatTime(seconds) {
    let minutes = Math.floor(seconds / 60);
    let secs = seconds % 60;
    if (secs < 10) {
      secs = "0" + secs;
    }
    return minutes + ":" + secs;
  }

  function toggleTimer() {
    setIsRunning(!isRunning);
  }

  function resetTimer() {
    setIsRunning(false);
    setTime(focusTime * 60);
  }

  function updateFocusTime(event) {
    let newFocusTime = Number(event.target.value);
    setFocusTime(newFocusTime);
    setTime(newFocusTime * 60);
  }

  function updateBreakTime(event) {
    let newBreakTime = Number(event.target.value);
    setBreakTime(newBreakTime);
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
          <input type="number" value={focusTime} onChange={updateFocusTime} min="1" />
        </div>
        <div className="timer-input">
          <label>Break Time (minutes)</label>
          <input type="number" value={breakTime} onChange={updateBreakTime} min="1" />
        </div>
      </div>

    </div>
  );
  
}

