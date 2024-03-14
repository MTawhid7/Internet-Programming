// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import TaskManager from './components/TaskManager';

ReactDOM.render(
  <React.StrictMode>
    <TaskManager />
  </React.StrictMode>,
  document.getElementById('root')
);