import React, { useState, useEffect } from 'react';
import { ProgressBar } from 'react-bootstrap';

function TodoList({ title, tasks: initialTasks, isToday, onTaskUpdate, onSelect }) {
  const [tasks, setTasks] = useState([]);
  const [selectedTasks, setSelectedTasks] = useState(new Set()); 
  const [isListChecked, setIsListChecked] = useState(false);
  const listName = isToday ? "To-Do Today" : title.replace(" To-Do", "");

  useEffect(() => {
    setTasks(Array.isArray(initialTasks) ? initialTasks : []);
  }, [initialTasks]);

  function handleCheckboxChange(index) {
    const updatedTask = { ...tasks[index], completed: !tasks[index].completed };
    setTasks((prevTasks) =>
      prevTasks.map((task, i) => (i === index ? updatedTask : task))
    );
    onTaskUpdate(updatedTask, listName);
  };
  

  function handleListCheckboxChange() {
    const newCheckedState = !isListChecked;
    setIsListChecked(newCheckedState);
    if (onSelect) {
      onSelect(listName, newCheckedState); 
    }
    if (newCheckedState) {
      const updatedTasks = tasks.map(task => ({ ...task, completed: true }));
      setTasks(updatedTasks);
      updatedTasks.forEach(task => onTaskUpdate(task, listName));
    }
  };

  const completedCount = tasks.filter((task) => task.completed).length;
  const progress = (completedCount / tasks.length) * 100 || 0;

  const todoListClass = isToday ? 'card-body todo-list today-list' : 'card-body todo-list';

  const taskItems = [];
  for (let index = 0; index < tasks.length; index++) {
    const task = tasks[index];
    taskItems.push(
      <p key={index}>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => handleCheckboxChange(index)}
        />
        {task.text}
      </p>
    );
  }

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
                  className="me-2"
                />
                <h2>{title}</h2>
              </div>
              <form>
                {taskItems}
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