import { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, taskName: 'jog around,', completed: false },
    { id: 2, taskName: '10 minutes medication,', completed: false },
    { id: 3, taskName: 'Read for 1 hour,', completed: false },
    { id: 4, taskName: 'Pick up groceries,', completed: false },
    {
      id: 5,
      taskName: 'Complete Todo App on frontend mentor,',
      completed: false,
    },
  ]);

  return (
    <>
      <header>
        <div className='hpic'>{/* <img src='/h-back.jpg' alt='' /> */}</div>
        <h1 className='header-text'>T O D O</h1>
      </header>

      <div className='container'>
        {tasks.map((task) => (
          
          
          <div
    
            className='task'
            key={task.id}
          >
            <input className='checkbox' type='checkbox' />{' '}
            <span>{task.taskName}</span>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
