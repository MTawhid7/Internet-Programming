// src/components/TaskList.js
import React from 'react';
import TaskItem from './TaskItem';

function TaskList({ tasks, handleEditTask, handleDeleteTask }) {
    return (
        <div>
            {tasks.map((task) => (
                <TaskItem key={task.id} task={task} handleEditTask={handleEditTask} handleDeleteTask={handleDeleteTask} />
            ))}
        </div>
    );
}

export default TaskList;
