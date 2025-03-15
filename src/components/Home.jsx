import React, { useState } from 'react';
import TodoList from '../components/Todo.jsx';
import AddTask from '../components/AddTask.jsx';
import CreateList from '../components/CreateList.jsx';
import { FaTrash } from 'react-icons/fa';

function Home() {
  const [todoData, setTodoData] = useState({});
  const [todayTasks, setTodayTasks] = useState([]);
  const [pastTasks, setPastTasks] = useState([]);
  const [showPastTasks, setShowPastTasks] = useState(false);
  

  const handleTaskUpdate = (updatedTask, listName) => {
    if (listName === "To-Do Today") {
      setTodayTasks((prevTasks) =>
        prevTasks.map((task) => (task.text === updatedTask.text ? updatedTask : task))
      );
    } else {
      setTodoData((prevData) => ({
        ...prevData,
        [listName]: prevData[listName].map((task) =>
          task.text === updatedTask.text ? updatedTask : task
        ),
      }));
    }
  };

  const handleRemoveFinished = () => {
    const todayUnfinished = todayTasks.filter((task) => !task.completed);
    const todayFinished = todayTasks.filter((task) => task.completed);

    let movedTasks = [...todayFinished];

    const newTodoData = {};
    Object.keys(todoData).forEach((listName) => {
      const unfinishedTasks = todoData[listName].filter((task) => !task.completed);
      const finishedTasks = todoData[listName].filter((task) => task.completed);

      newTodoData[listName] = unfinishedTasks;
      movedTasks.push(...finishedTasks);
    });

    setTodayTasks(todayUnfinished);
    setTodoData(newTodoData);
    setPastTasks((prev) => [...prev, ...movedTasks]);
  };
  

  const handleAddTask = (taskText, listName) => {
    if (!taskText.trim()) return;

    const newTask = { text: taskText, completed: false };
    
    if (listName === "To-Do Today") {
      setTodayTasks((prevTasks) => [...prevTasks, newTask]);
    } else {
      setTodoData((prevData) => ({
        ...prevData,
        [listName]: [...(prevData[listName] || []), newTask],
      }));
    }
  };

  const handleAddList = (newListName) => {
    if (!todoData[newListName]) {
      setTodoData({ ...todoData, [newListName]: [] });
    }
  };

  const handleDelete = (listName) => {
    if (listName === "To-Do Today") {
      const remainingTasks = todayTasks.filter(task => !task.completed);
      setTodayTasks(remainingTasks);
    } else {
      setTodoData(prevData => ({
        ...prevData,
        [listName]: prevData[listName].filter(task => !task.completed)
      }));
    }
  };

return (
  <main>
    <div className="container">
      <h1 className="text-center mb-3">To-Do List</h1>

      <div className="d-flex justify-content-end gap-2 mb-3">
        <button className="btn button-style" onClick={handleRemoveFinished}>
          Remove Finished
        </button>
        <button className="btn button-style" onClick={() => {
              handleDelete("To-Do Today");
              Object.keys(todoData).forEach(listName => handleDelete(listName));
            }}
          ><FaTrash size={20} /></button>
      </div>

      <TodoList title="To-Do Today" tasks={todayTasks} isToday={true} onTaskUpdate={handleTaskUpdate} onDelete={handleDelete}/>

      {Object.keys(todoData).map((key) => (
        <TodoList key={key} title={`${key} To-Do`} tasks={todoData[key]} onTaskUpdate={handleTaskUpdate} onDelete={handleDelete}/>
      ))}

      <AddTask onAddTask={handleAddTask} listNames={["To-Do Today", ...Object.keys(todoData)]} />

      <CreateList onAddList={handleAddList} />

      <footer>
        <section className="past-tasks text-center mt-4">
          <button className="btn btn-secondary button-style" onClick={() => setShowPastTasks(!showPastTasks)}>
            {showPastTasks ? 'Hide Past Tasks' : 'View Past Tasks'}
          </button>
          {showPastTasks && (
            <div className="past-tasks-list">
              <h3>Past Tasks</h3>
              {pastTasks.length > 0 ? (
                pastTasks.map((task, index) => <p key={index}>{task.text}</p>)
              ) : (
                <p>No past tasks</p>
              )}
            </div>
          )}
        </section>
      </footer>
    </div>
  </main>
);
}

export default Home;