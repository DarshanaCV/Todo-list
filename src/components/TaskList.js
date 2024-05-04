import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, toggleTask } from './actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import './styles.css';

function TaskList() {
  const tasks=useSelector(state=>state.tasks);
  const dispatch=useDispatch();
  const [activeDescriptions, setActiveDescriptions] = useState({});

  const handleDeleteTask=(id)=>{
    dispatch(deleteTask(id));
  };

  const handleToggleTask=(id)=>{
    dispatch(toggleTask(id));
  };

  const toggleDescription=(id)=>{
    setActiveDescriptions(prevState=>({
      ...prevState,
      [id]: !prevState[id]
    }));
  };

  return (
    <div className='task-list-container'>
    
      {/*********************PENDING TASKS**********************/}
      <h2 className='task-header'>{tasks.filter(task => !task.completed).length} Pending Tasks</h2><br />
      <div className='tasks'>
        {tasks.filter(task => !task.completed).map(task => (
            <div>
                <div className='task-container' key={task.id}>
                    <input type='checkbox' value="" checked={task.completed} onClick={() => handleToggleTask(task.id)} className='checkbox' />
                    <p className='text'>{task.text.text}</p>
                    <h2 onClick={() => toggleDescription(task.id)} className='show-description'>{activeDescriptions[task.id] ? "^" : ">"}</h2>
                </div>
                {activeDescriptions[task.id] &&
                    <div className="task-description">  
                        { task.text.description.trim() === "" ? "no description" : task.text.description}
                        <FontAwesomeIcon icon={faTrash}  onClick={() => handleDeleteTask(task.id)} className='delete'/>
                    </div>
                    
                }
            </div>
        ))}
      </div>

      {/*********************COMPLETED TASKS**********************/}
      <h2 className='task-header-completed'>{tasks.filter(task => task.completed).length} Completed Tasks</h2><br />
      <div className='tasks'>
        {tasks.filter(task => task.completed).map(task => (
            <div>
                <div className='task-container' key={task.id}>
                    <input type='checkbox' value="" checked={task.completed} onClick={() => handleToggleTask(task.id)} className='checkbox' />
                    <p className='text'>{task.text.text}</p>
                    <h2 onClick={() => toggleDescription(task.id)} className='show-description'>{activeDescriptions[task.id] ? "^" : ">"}</h2>
                </div>
                {activeDescriptions[task.id] &&
                    <div className="task-description">
                        {task.text.description.trim() === ""? "no description available" : task.text.description}
                        <FontAwesomeIcon icon={faTrash}  onClick={() => handleDeleteTask(task.id)} className='delete'/>   
                    </div>
                }
            </div> 
        ))}
      </div>
    </div>
  );
}

export default TaskList;
