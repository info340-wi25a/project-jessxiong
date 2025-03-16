import React, { useState } from 'react';

function CreateList({ onAddList }) {
  const [newListName, setNewListName] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    onAddList(newListName);
    setNewListName(''); 
  };

  return (
    <section className="add-task">
      <div className="container">
        <h2>Create a New List</h2>
        <form className="add-element" onSubmit={handleSubmit}>
          <input
            type="text"
            id="list-name"
            placeholder="Enter list name..."
            value={newListName}
            onChange={(e) => setNewListName(e.target.value)}
            required
          />
          <button type="submit" className="btn button-style">
            Create List
          </button>
        </form>
      </div>
    </section>
  );
}

export default CreateList;

