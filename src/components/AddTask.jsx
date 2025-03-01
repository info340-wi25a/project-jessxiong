import React from 'react';

function AddTask() {
  return (
    <section className="add-task">
      <div className="container">
        <h2>Add a New Task</h2>
        <form className="add-element">
          <input
            type="text"
            id="new-task"
            placeholder="Enter your next task..."
            required
          />
          <select id="task-list" className="footer-element">
            <option value="today-list">To-Do Today</option>
            <option value="work-list">Work To-Do</option>
            <option value="info-340-list">INFO 340 To-Do</option>
          </select>
          <button type="submit" className="footer-element btn buttonStyle">
            Add Task
          </button>
        </form>
      </div>
    </section>
  );
}

export default AddTask;