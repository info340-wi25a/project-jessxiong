import React, { useState, useEffect } from 'react';
import { ProgressBar } from 'react-bootstrap';

function TodoList({ title, tasks: initialTasks, isToday, onTaskUpdate }) {
  const [tasks, setTasks] = useState([]);
  const [isListChecked, setIsListChecked] = useState(false);

  useEffect(() => {
    setTasks(initialTasks || []);
  }, [initialTasks]);

  const handleCheckboxChange = (index) => {
    const updatedTask = { ...tasks[index], completed: !tasks[index].completed };
    setTasks((prevTasks) =>
      prevTasks.map((task, i) => (i === index ? updatedTask : task))
    );
    onTaskUpdate(updatedTask, title.replace(" To-Do", ""));
  };

  const handleListCheckboxChange = () => {
    const newCheckedState = !isListChecked;
    setIsListChecked(newCheckedState);
    if (newCheckedState) {
      const updatedTasks = tasks.map(task => ({ ...task, completed: true }));
      setTasks(updatedTasks);
      updatedTasks.forEach(task => onTaskUpdate(task, title.replace(" To-Do", "")));
    }
  };

  const completedCount = tasks.filter((task) => task.completed).length;
  const progress = (completedCount / tasks.length) * 100 || 0;

  const todoListClass = isToday ? 'card-body todo-list today-list' : 'card-body todo-list';

  return (
    <div className="container d-flex justify-content-center">
      <div className={todoListClass}>
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
                  <ProgressBar now={progress} label={`${Math.round(progress)}%`} />
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
