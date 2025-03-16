import React, { useState } from 'react';
import { Dropdown } from 'react-bootstrap';

function AddTask({ onAddTask, listNames }) {
  const [taskText, setTaskText] = useState('');
  const [selectedList, setSelectedList] = useState('To-Do Today');

  function handleSubmit(e) {
    e.preventDefault();
    if (taskText.trim() === '') return;
  
    onAddTask(taskText, selectedList); 
    setTaskText(''); 
  };

  const dropdownItems = [];
  for (let i = 0; i < listNames.length; i++) {
    dropdownItems.push(
      <Dropdown.Item key={i} onClick={() => setSelectedList(listNames[i])}>
        {listNames[i]}
      </Dropdown.Item>
    );
  }

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
          <Dropdown className="footer-element">
            <Dropdown.Toggle variant="success" id="dropdown-task-list">
              {selectedList}
            </Dropdown.Toggle>
            <Dropdown.Menu>{dropdownItems}</Dropdown.Menu>
          </Dropdown>
          <button type="submit" className="footer-element btn button-style">
            Add Task
          </button>
        </form>
      </div>
    </section>
  );
}

export default AddTask;
