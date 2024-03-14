// src/components/TaskInput.js
import React from 'react';

function TaskInput({ newTask, setNewTask, handleAddTask, editTaskId }) {
    return (
        <div className="mb-3">
            <label htmlFor="taskHeader" className="form-label fs-4">
                Task Header
            </label>
            <input
                type="text"
                className="form-control"
                id="taskHeader"
                value={newTask.header}
                onChange={(e) => setNewTask({ ...newTask, header: e.target.value })}
            />
            <label htmlFor="taskDescription" className="form-label text-muted fs-6">
                Task Description
            </label>
            <textarea
                className="form-control"
                id="taskDescription"
                rows="3"
                value={newTask.description}
                onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
            ></textarea>
            <button className="btn btn-primary mb-3" onClick={handleAddTask}>
                {editTaskId !== null ? 'Update Task' : 'Add Task'}
            </button>
        </div>
    );
}

export default TaskInput;
