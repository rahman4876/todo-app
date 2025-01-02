import React from 'react';

const TodoList = ({ todolist, deleteHandler }) => {
    return (
        <div className="max-w-md mx-auto mt-6 p-6 bg-gray-100 shadow-lg rounded-lg">
            {todolist.length > 0 ? (
                todolist.map((todo, index) => (
                    <div
                        key={index}
                        className="flex justify-between items-center p-4 mb-4 bg-white shadow rounded hover:bg-gray-50 transition"
                    >
                        <h4 className="text-lg font-semibold text-gray-800 truncate">
                            {todo}
                        </h4>
                        <button
                            onClick={() => deleteHandler(index)}
                            className="px-4 py-2 text-sm font-medium text-white bg-red-500 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
                        >
                            Delete
                        </button>
                    </div>
                ))
            ) : (
                <p className="text-center text-gray-600 text-sm">No todos available. Add some tasks!</p>
            )}
        </div>
    );
};

export default TodoList;
