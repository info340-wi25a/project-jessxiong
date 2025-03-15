import React, { useState, useEffect } from 'react';

function TodoList({ title, tasks: initialTasks, isToday, onTaskUpdate }) {
  const [tasks, setTasks] = useState([]);
  const [isListChecked, setIsListChecked] = useState(false);

  useEffect(() => {
    setTasks(initialTasks || []);
    // Update isListChecked based on all tasks being completed
    setIsListChecked(initialTasks?.every(task => task.completed) || false);
  }, [initialTasks]);

  const handleCheckboxChange = (index) => {
    const updatedTask = { ...tasks[index], completed: !tasks[index].completed };
    setTasks((prevTasks) =>
      prevTasks.map((task, i) => (i === index ? updatedTask : task))
    );
    onTaskUpdate(updatedTask, title.replace(" To-Do", ""));
  };

  const handleListCheckboxChange = () => {
    setIsListChecked((prev) => !prev);
    // Update all tasks to match the list checkbox state
    setTasks((prevTasks) =>
      prevTasks.map(task => ({ ...task, completed: !isListChecked }))
    );
    // Call onTaskUpdate for each task
    tasks.forEach(task => {
      onTaskUpdate({ ...task, completed: !isListChecked }, title.replace(" To-Do", ""));
    });
  };

  const completedCount = tasks.filter((task) => task.completed).length;
  const progress = (completedCount / tasks.length) * 100 || 0;

  return (
    <div className="container d-flex justify-content-center">
      <div className={`card-body todo-list ${isToday ? 'today-list' : ''}`}>
        {tasks.length > 0 ? (
          <div className="card w-100 mb-4">
            <div className="row align-items-center">
              <div className="col-sm-auto col-xl-12 mb-xl-3 d-flex align-items-center">
                <input
                  type="checkbox"
                  checked={isListChecked}
                  onChange={handleListCheckboxChange}
                />
                <h2 className="ms-2">{title}</h2>
              </div>
              <form>
                {tasks.map((task, index) => (
                  <p key={index}>
                    <input
                      type="checkbox"
                      checked={task.completed}
                      onChange={() => handleCheckboxChange(index)}
                    />
                    {task.text}
                  </p>
                ))}
              </form>
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
        ) : (
          <p className="text-muted text-center">{title} is empty. Add a task!</p>
        )}
      </div>
    </div>
  );
}

export default TodoList;