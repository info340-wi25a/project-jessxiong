import React from 'react';

function CreateList() {
  return (
    <section className="add-task">
      <div className="container">
        <h2>Create a New List</h2>
        <form className="add-element">
          <input
            type="text"
            id="list-name"
            placeholder="Enter your list name..."
            required
          />
          <button type="submit" className="add-element btn button-style">
            Create
          </button>
        </form>
      </div>
    </section>
  );
}

export default CreateList;