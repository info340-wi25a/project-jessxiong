import React, { useState } from 'react';

function AddTask({ onAddTask, listNames }) {
  const [taskText, setTaskText] = useState('');
  const [selectedList, setSelectedList] = useState('To-Do Today');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskText.trim() === '') return;
  
    onAddTask(taskText, selectedList); // Call the function from Home
    setTaskText(''); // Clear input field
  };

  return (
    <section className="add-task">
      <div className="container">
        <h2>Add a New Task</h2>
        <form onSubmit={handleSubmit} className="add-element">
          <input
            type="text"
            id="new-task"
            value={taskText}
            onChange={(e) => setTaskText(e.target.value)}
            placeholder="Enter your next task..."
            className="footer-element"
            required
          />
          <select
            id="task-list"
            className="footer-element"
            value={selectedList}
            onChange={(e) => setSelectedList(e.target.value)}
          >
            {listNames.map((listName) => (
              <option key={listName} value={listName}>
                {listName}
              </option>
            ))}
          </select>
          <button type="submit" className="footer-element btn button-style">
            Add Task
          </button>
        </form>
      </div>
    </section>
  );
}

export default AddTask;
