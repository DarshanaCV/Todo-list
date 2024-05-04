import React from 'react'
import './App.css';
import TaskInput from './components/TaskInput'
import TaskList from './components/TaskList'

function App() {
    const [selectedDate, setSelectedDate] = React.useState(new Date());
    const daysOfWeek=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    const months=['January','February','March','April','May','June','July','August','September','October','November','December'];

    return (
        <div className="app">
          <div className='nav'>
            <h1>What do I need to do Today?</h1>
            <div className='date-info'> 
              <p>{months[selectedDate.getMonth()]} {selectedDate.getDate()}, {selectedDate.getFullYear()}</p>
              <p className='date'>{daysOfWeek[selectedDate.getDay()]}</p>
            </div>
          </div>
          <div className='tasks-container'>
            <TaskInput />
            <TaskList />
          </div>
        </div>
    );
}
export default App;
