import React, { useState } from 'react';
import './TaskModal.css';

function TaskModal({ closeModal, onAddTask }) {
  const [taskName, setTaskName]=useState('');
  const [description, setDescription]=useState('');

  const handleTaskNameChange=(e)=>{
    setTaskName(e.target.value);
  };

  const handleDescriptionChange=(e)=>{
    setDescription(e.target.value);
  };

  const handleAddTask=()=>{
    if (taskName.trim()!=='') {
      onAddTask(taskName, description);
      closeModal();
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <div className='modal-head'>
            <h2 className='task-head'>Task</h2>
            <span className="close" onClick={closeModal}>&times;</span>
        </div>
        
        <input
          type="text"
          value={taskName}
          onChange={handleTaskNameChange}
          placeholder="Enter Task Name"
        />
        <textarea
          value={description}
          onChange={handleDescriptionChange}
          placeholder="Enter Description"
        ></textarea>
        <button className='button' onClick={handleAddTask}>Add Task</button>
      </div>
    </div>
  );
}

export default TaskModal;
