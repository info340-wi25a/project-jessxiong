import React, { useState } from 'react';

function TodoList({ title, tasks: initialTasks, isToday }) {
  const [tasks, setTasks] = useState(initialTasks.map(task => ({ ...task, completed: false })));

  const handleCheckboxChange = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const completedCount = tasks.filter(task => task.completed).length;
  const progress = (completedCount / tasks.length) * 100 || 0;

  return (
    <div className={`card-body todo-list ${isToday ? 'today-list' : ''}`}>
      <div className="card w-100 mb-4">
        <div className="row align-items-center">
          <div className="col-sm-auto col-xl-12 mb-xl-3">
            <h2>{title}</h2>
            <form>
              {tasks.map((task, index) => (
                <p key={index}>
                  <input
                    type="checkbox"
                    id={`${title.toLowerCase().replace(' ', '-')}${index}`}
                    checked={task.completed}
                    onChange={() => handleCheckboxChange(index)}
                  />
                  <label htmlFor={`${title.toLowerCase().replace(' ', '-')}${index}`}>
                    {task.text}
                  </label>
                </p>
              ))}
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