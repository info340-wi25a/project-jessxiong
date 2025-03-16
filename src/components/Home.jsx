import React, { useState } from 'react';
import { useEffect } from 'react';

import { getDatabase, ref, set as firebaseSet, onValue } from 'firebase/database';

import TodoList from '../components/Todo.jsx';
import AddTask from '../components/AddTask.jsx';
import CreateList from '../components/CreateList.jsx';
import { FaTrash } from 'react-icons/fa';

function Home() {
  const [todoData, setTodoData] = useState({});
  const [todayTasks, setTodayTasks] = useState([]);
  const [pastTasks, setPastTasks] = useState([]);
  const [showPastTasks, setShowPastTasks] = useState(false);
  const [selectedLists, setSelectedLists] = useState([]); 

  const db = getDatabase();
  useEffect(() => {
    const todayTasksRef = ref(db, 'todayTasks');
    const todoDataRef = ref(db, 'todoData');
    const pastTasksRef = ref(db, 'pastTasks');

    onValue(todayTasksRef, (snapshot) => {
      const data = snapshot.val();
      console.log('todayTasks from Firebase:', data);
      setTodayTasks(Array.isArray(data) ? data : []);
    });

    onValue(todoDataRef, (snapshot) => {
      const data = snapshot.val();
      console.log('todoData from Firebase:', data);
      setTodoData(data && typeof data === 'object' ? data : {});
    });

    onValue(pastTasksRef, (snapshot) => {
      const data = snapshot.val();
      console.log('pastTasks from Firebase:', data);
      setPastTasks(Array.isArray(data) ? data : []);
    });
  }, [db]);

  function handleTaskUpdate(updatedTask, listName) {
    if (listName === "To-Do Today") {
      const updatedTasks = (todayTasks || []).map((task) =>
        task.text === updatedTask.text ? updatedTask : task
      );
      setTodayTasks(updatedTasks);
      firebaseSet(ref(db, 'todayTasks'), updatedTasks)
      .catch(err => console.log(err));
    } else {
      const updatedList = (todoData[listName] || []).map((task) =>
        task.text === updatedTask.text ? updatedTask : task
      );
      const newTodoData = { ...todoData, [listName]: updatedList };
      setTodoData(newTodoData);
      firebaseSet(ref(db, 'todoData'), newTodoData)
      .catch(err => console.log(err));
    }
  };

  function handleRemoveFinished() {
    const db = getDatabase();
    const todayUnfinished = todayTasks.filter((task) => !task.completed);
    const todayFinished = todayTasks.filter((task) => task.completed);

    let movedTasks = [...todayFinished];

    const newTodoData = {};
    Object.keys(todoData).forEach((listName) => {
      const unfinishedTasks = todoData[listName].filter((task) => !task.completed);
      const finishedTasks = todoData[listName].filter((task) => task.completed);

      newTodoData[listName] = unfinishedTasks;
      movedTasks = [...movedTasks, ...(finishedTasks || [])];
    });

    setTodayTasks(todayUnfinished);
    setTodoData(newTodoData);
    setPastTasks((prev) => [...prev, ...movedTasks]);
    firebaseSet(ref(db, 'todayTasks'), todayUnfinished)
    .catch(err => console.log(err));
    firebaseSet(ref(db, 'todoData'), newTodoData)
    .catch(err => console.log(err));
    firebaseSet(ref(db, 'pastTasks'), [...pastTasks, ...movedTasks])
    .catch(err => console.log(err));
  };

function handleAddTask(taskText, listName) {
  const db = getDatabase();
  if (!taskText.trim()) return;  

  const newTask = { text: taskText, completed: false };

  if (listName === "To-Do Today") {
    const updatedTasks = [...(todayTasks || []), newTask];
    setTodayTasks(updatedTasks);
      firebaseSet(ref(db, 'todayTasks'), updatedTasks)
      .catch(err => console.log(err));
    } else {
      const updatedList = [...(todoData[listName] || []), newTask];
      const newTodoData = { ...todoData, [listName]: updatedList };
      setTodoData(newTodoData);
      firebaseSet(ref(db, 'todoData'), newTodoData)
      .catch(err => console.log(err));
    }
};

  function handleAddList(newListName) {
    if (!newListName.trim() || todoData[newListName]) return;
    const newTodoData = { ...todoData, [newListName]: [] };
    setTodoData(newTodoData);
    firebaseSet(ref(db, 'todoData'), newTodoData)
    .catch(err => console.log(err));
  };

  function handleDelete() {
    if (selectedLists.length > 0) {
      let newTodayTasks = todayTasks;
      if (selectedLists.includes("To-Do Today")) {
        newTodayTasks = [];
        setTodayTasks(newTodayTasks);
      }

      const newTodoData = { ...todoData };
      selectedLists.forEach((listName) => {
        if (listName !== "To-Do Today") delete newTodoData[listName];
      });
      setTodoData(newTodoData);
      setSelectedLists([]);
      firebaseSet(ref(db, 'todayTasks'), newTodayTasks)
      .catch(err => console.log(err));
      firebaseSet(ref(db, 'todoData'), newTodoData)
      .catch(err => console.log(err));
    } else {
      const newTodayTasks = (todayTasks || []).filter((task) => !task.completed);
      const newTodoData = {};
      Object.keys(todoData || {}).forEach((listName) => {
        newTodoData[listName] = (todoData[listName] || []).filter((task) => !task.completed);
      });
      setTodayTasks(newTodayTasks);
      setTodoData(newTodoData);
      firebaseSet(ref(db, 'todayTasks'), newTodayTasks)
      .catch(err => console.log(err));
      firebaseSet(ref(db, 'todoData'), newTodoData)
      .catch(err => console.log(err));
    }
  };

  function handleListSelection(listName, isSelected) {
    setSelectedLists((prev) =>
      isSelected ? [...prev, listName] : prev.filter((name) => name !== listName)
    );
  };

  const todoLists = [];
  for (const key in todoData) {
    todoLists.push(
      <TodoList
        key={key}
        title={`${key} To-Do`}
        tasks={todoData[key]}
        onTaskUpdate={handleTaskUpdate}
        onSelect={handleListSelection}
      />
    );
  }

  const pastTaskElements = [];
  for (let i = 0; i < pastTasks.length; i++) {
    pastTaskElements.push(<p key={i}>{pastTasks[i].text}</p>);
  }

  return (
    <main>
      <div className="container">
        <h1 className="text-center mb-3">To-Do List</h1>

        <div className="d-flex justify-content-end gap-2 mb-3">
          <button className="btn button-style" onClick={handleRemoveFinished}>
            Remove Finished
          </button>
          <button className="btn button-style" onClick={handleDelete}>
            <FaTrash size={20} />
          </button>
        </div>

        <TodoList
          title="To-Do Today"
          tasks={todayTasks}
          isToday={true}
          onTaskUpdate={handleTaskUpdate}
          onSelect={handleListSelection}
        />

        {todoLists}

        <AddTask onAddTask={handleAddTask} listNames={["To-Do Today", ...Object.keys(todoData)]} />

        <CreateList onAddList={handleAddList} />

        <footer>
          <section className="past-tasks text-center mt-4">
            <button
              className="btn btn-secondary button-style"
              onClick={() => setShowPastTasks(!showPastTasks)}
            >
              {showPastTasks ? 'Hide Past Tasks' : 'View Past Tasks'}
            </button>
            {showPastTasks && (
              <div className="past-tasks-list">
                <h3>Past Tasks</h3>
                {pastTaskElements.length > 0 ? pastTaskElements : <p>No past tasks</p>}
              </div>
            )}
          </section>
        </footer>
      </div>
    </main>
  );
}

export default Home;