import React, { useState } from 'react';
import './App.css';
import TodoList from './TodoList';

const App = () => {
  const [task, setTask] = useState('');
  const [todos, setTodos] = useState([]);

  const changeHandler = (e) => {
    setTask(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (task.trim() === '') return; // Prevent empty tasks
    const newTodos = [...todos, task];
    setTodos(newTodos);
    setTask('');
  };

  const deleteHandler = (indexValue) => {
    const newTodos = todos.filter((_, index) => index !== indexValue);
    setTodos(newTodos);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="w-full max-w-md p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">TO DO LIST</h2>
        <form onSubmit={submitHandler} className="flex items-center gap-2 mb-6">
          <input
            type="text"
            name="task"
            value={task}
            onChange={changeHandler}
            className="flex-1 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter a task"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white text-sm font-medium rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Add
          </button>
        </form>
        <TodoList todolist={todos} deleteHandler={deleteHandler} />
      </div>
    </div>
  );
};

export default App;
