import React, { useState } from 'react';

function TodoList({ title, tasks: initialTasks, isToday }) {
  const [tasks, setTasks] = useState(() => {
    return initialTasks.map(task => {
      return { ...task, completed: false };
    });
  });

  const handleCheckboxChange = (index) => {
    setTasks(tasks.map((task, i) => {
      return i === index ? { ...task, completed: !task.completed } : task;
    }));
  };
  const completedCount = tasks.filter(task => task.completed).length;
  const progress = (completedCount / tasks.length) * 100 || 0;

    const taskItems = tasks.map((task, index) => (
      <p key={index}>
        <input
          type="checkbox"
          id={`${title.toLowerCase().replace(/\s+/g, '-')}${index}`}
          checked={task.completed}
          onChange={() => handleCheckboxChange(index)}
        />
        <label htmlFor={`${title.toLowerCase().replace(/\s+/g, '-')}${index}`}>
          {task.text}
        </label>
      </p>
    ));
  
    return (
      <div className={`card-body todo-list ${isToday ? 'today-list' : ''}`}>
        <div className="card w-100 mb-4">
          <div className="row align-items-center">
            <div className="col-sm-auto col-xl-12 mb-xl-3">
              <h2>{title}</h2>
              <form>
                {taskItems} 
              </form>
            </div>
            {isToday && (
              <div className="col-xl-12">
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
  
  export default TodoList;