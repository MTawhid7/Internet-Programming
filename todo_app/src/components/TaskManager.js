// src/components/TaskManager.js
import React, { useState } from 'react';
import TaskInput from './TaskInput';
import TaskList from './TaskList';
import 'bootstrap/dist/css/bootstrap.min.css';
import './TaskManager.css';

function TaskManager() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState({ header: '', description: '' });
    const [showInputBoxes, setShowInputBoxes] = useState(false);
    const [editTaskId, setEditTaskId] = useState(null); // Track the task being edited

    const handleAddTask = () => {
        if (newTask.header.trim() !== '') {
            if (editTaskId !== null) {
                // If editTaskId is not null, update the existing task
                const updatedTasks = tasks.map((task) =>
                    task.id === editTaskId ? { ...task, ...newTask } : task
                );
                setTasks(updatedTasks);
                setEditTaskId(null); // Reset editTaskId after editing
            } else {
                // If editTaskId is null, add a new task
                setTasks((prevTasks) => [...prevTasks, { id: Date.now(), ...newTask }]);
            }

            setNewTask({ header: '', description: '' });
            setShowInputBoxes(false);
        }
    };

    const handleDeleteTask = (id) => {
        setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
    };

    const handleEditTask = (id) => {
        const taskToEdit = tasks.find((task) => task.id === id);
        if (taskToEdit) {
            setNewTask(taskToEdit);
            setShowInputBoxes(true);
            setEditTaskId(id);
        }
    };

    return (
        <div className="container mt-5">
            <h1 className="mb-4">Task Manager</h1>

            {!showInputBoxes && (
                <button className="btn btn-primary mb-3" onClick={() => setShowInputBoxes(true)}>
                    Add Task
                </button>
            )}

            {showInputBoxes && <TaskInput newTask={newTask} setNewTask={setNewTask} handleAddTask={handleAddTask} editTaskId={editTaskId} />}

            <TaskList tasks={tasks} handleEditTask={handleEditTask} handleDeleteTask={handleDeleteTask} />
        </div>
    );
}

export default TaskManager;
