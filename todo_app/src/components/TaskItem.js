// src/components/TaskItem.js
import React from 'react';

function TaskItem({ task, handleEditTask, handleDeleteTask }) {
    return (
        <div className="card mb-3 shadow-sm">
            <div className="card-body d-flex justify-content-between align-items-center">
                <div>
                    <h5 className="card-title fs-5 mb-0">{task.header}</h5>
                    <p className="card-text text-muted fs-6">{task.description}</p>
                </div>
                <div>
                    <button className="btn btn-warning me-2" onClick={() => handleEditTask(task.id)}>
                        Edit
                    </button>
                    <button className="btn btn-danger" onClick={() => handleDeleteTask(task.id)}>
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
}

export default TaskItem;
