import React, { useState } from 'react';
import TodoList from '../components/Todo.jsx';
import AddTask from '../components/AddTask.jsx';
import CreateList from '../components/CreateList.jsx';

const initialTodoData = {
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
  const [todoData, setTodoData] = useState(initialTodoData);
  const [todayTasks, setTodayTasks] = useState([
    { text: 'Take INFO 340 notes' },
    { text: 'Watch lecture' },
    { text: 'Review INFO 340 notes' },
  ]);

  const handleAddTodayTask = (newTask) => {
    setTodayTasks([...todayTasks, { text: newTask }]);
  };

  const handleDeleteAll = () => {
    setTodoData({});
  };

  return (
    <main>
      <div className="container">
        <div className="text-center mb-3">
          <h1>To-Do List</h1>
        </div>

        <div className="d-flex justify-content-end mb-3">
          <button className="btn button-style" onClick={handleDeleteAll}>Delete</button>
        </div>

        <div className="d-flex justify-content-center">
            <TodoList title="To-Do Today" tasks={todayTasks} isToday={true} />
        </div>

        <div className="row">
          {Object.keys(todoData).map((key) => (
            <TodoList key={key} title={`${key.charAt(0).toUpperCase() + key.slice(1)} To-Do`} tasks={todoData[key]} />
          ))}
        </div>

        <div className="mt-4">
          <AddTask onAddTask={handleAddTodayTask} />
        </div>
      </div>

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
