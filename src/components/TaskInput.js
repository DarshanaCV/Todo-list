import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from './actions';
import TaskModal from './TaskModal';
import './styles.css'

function TaskInput() {
  const [showModal,setShowModal]=useState(false);
  const dispatch=useDispatch();

  const openModal=()=>{
    setShowModal(true);
  };

  const closeModal=()=>{
    setShowModal(false);
  };

  const handleAddTask=(taskName, description)=>{
    if (taskName.trim()!=='') {
      dispatch(addTask({ text: taskName, description }));
    }
  };

  return (
    <div className='task-input-container'>
      <button onClick={openModal} className='add-task'>+ New Task</button>
      {showModal && (
        <TaskModal
          closeModal={closeModal}
          onAddTask={handleAddTask}
        />
      )}
    </div>
  );
}

export default TaskInput;
