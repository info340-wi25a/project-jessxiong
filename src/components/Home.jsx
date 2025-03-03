import React from 'react';
import TodoList from '../components/Todo.jsx';
import AddTask from '../components/AddTask.jsx';
import CreateList from '../components/CreateList.jsx';

const todoData = {
  today: [
    { text: 'Take INFO 340 notes' },
    { text: 'Watch lecture' },
    { text: 'Review INFO 340 notes' },
  ],
  work: [
    { text: 'Change shift' },
    { text: 'Email boss by EOD' },
  ],
  info340: [
    { text: 'Finish problem set' },
    { text: 'Attend office hours' },
    { text: 'Debug code' },
  ],
};

function Home() {
  return (
    <main>
      <div className="container">
        <h1>To-Do List</h1>
        <div className="row">
          <TodoList title="To-Do Today" tasks={todoData.today} isToday={true} />
          <TodoList title="Work To-Do" tasks={todoData.work} />
          <TodoList title="INFO 340 To-Do" tasks={todoData.info340} />
        </div>
      </div>
      <AddTask />
      <CreateList />
      <footer>
        <section className="past-tasks">
          <div className="container text-center mt-4">
            <button type="button" className="btn btn-secondary button-style">
              View Past Tasks
            </button>
          </div>
        </section>
      </footer>
    </main>
  );
}

export default Home;