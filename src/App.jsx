import { useState } from 'react';

import './App.css';

function App() {
  const lightIcon = <img src='./sun.svg' alt='' />;

  const sunIcon = <img src='./moon.svg' alt='' />;

  const [text, setText] = useState('');

  const [todos, setTodos] = useState([
    { id: 1, title: 'jog around,', completed: false },
    { id: 2, title: '10 minutes medication,', completed: false },
    { id: 3, title: 'Read for 1 hour,', completed: false },
    { id: 4, title: 'Pick up groceries,', completed: false },
    {
      id: 5,
      title: 'Complete Todo App on frontend mentor,',
      completed: false,
    },
  ]);

  const [darkMode, setDarkMode] = useState(false);
  const [currentTab, setCurrentTab] = useState('');

  const completedTodos = todos.filter((todo) => !todo.completed);

  let filteredTodos = todos;
  if (currentTab === 'active') {
    filteredTodos = todos.filter((todo) => !todo.completed);
  } else if (currentTab === 'completed') {
    filteredTodos = todos.filter((todo) => todo.completed);
  }

  //  else {
  //   filteredTodos=todos
  // }

  // else if (currentTab === 'active') {
  //   filteredTodos=todos.filter((todo)=>!todo.completed)
  // }

  return (
    <div>
      <header>
        <div className={`hpic ${darkMode ? 'hpic2' : ''}`}>
          {/* <img src='/h-back.jpg' alt='' /> */}
        </div>
        <h1 className='header-text'>T O D O</h1>

        <div className='theme-btn-wrap'>
          <button
            className='theme-btn'
            onClick={() => {
              setDarkMode(!darkMode);
              if (darkMode) {
                document.body.classList.remove('bg-dark');
              } else {
                document.body.classList.add('bg-dark');
              }
            }}
          >
            {darkMode ? lightIcon : sunIcon}
          </button>
        </div>
      </header>

      <div className='adding-todo '>
        <form
          onSubmit={(e) => {
            if (text.length < 1) {
              alert('No text to add');
            } else {
              e.preventDefault();
              const updatedT = [
                ...todos,
                { title: text, id: Date.now(), completed: false },
              ];
              setTodos(updatedT);
              setText('');
            }
          }}
          className='add-form'
        >
          <div className='form-control-input'>
            <input
              className={darkMode ? 'dark-ta' : 'light-ta'}
              value={text}
              onChange={(e) => setText(e.target.value)}
              type='text'
              placeholder='Create a new task'
            />

            <button type='submit' className='btn'>
              ADD
            </button>
          </div>
        </form>
      </div>

      <div className={`container ${darkMode ? 'dark-ta' : 'light-ta'}`}>
        {filteredTodos.map((todo) => (
          <div
            onClick={(e) => {
              console.log(e.target);
              if (e.target.className === 'icon-cross') return;
              const newList = todos.map((newArrayTodo) =>
                newArrayTodo.id === todo.id
                  ? { ...newArrayTodo, completed: !newArrayTodo.completed }
                  : newArrayTodo
              );

              setTodos(newList);
              // console.log(newList);
            }}
            className={`task ${todo.completed ? 'line' : ''}`}
            key={todo.id}
          >
            <input
              checked={todo.completed}
              // id={`todo-${todo.id}`}
              className='checkbox'
              type='checkbox'
              readOnly
            />
            <label>{todo.title}</label>
            <div className='icon-cross'>
              <img
                className='icon-cross'
                onClick={() => {
                  setTodos(todos.filter((t) => t.id !== todo.id));
                }}
                src='/icon-cross.svg'
                alt=''
              />
            </div>
          </div>
        ))}
      </div>
      <div className={`footer ${darkMode ? 'dark-ta' : 'light-ta'}`}>
        <p> Things todo {completedTodos.length}</p>

        <div className='desk-footer'>
          <button
            className={`${currentTab === 'all' ? 'cl-active' : ''}`}
            onClick={() => setCurrentTab('all')}
          >
            ALL
          </button>
          <button
            className={`${currentTab === 'active' ? 'cl-active' : ''}`}
            onClick={() => setCurrentTab('active')}
          >
            Active
          </button>
          <button
            className={`${currentTab === 'completed' ? 'cl-active' : ''}`}
            onClick={() => setCurrentTab('completed')}
          >
            Completed
          </button>
        </div>

        <button
          onClick={() => {
            setTodos(completedTodos);
          }}
        >
          Clear done
        </button>
      </div>

      <div className='footer mobile-footer '>
        {['all', 'active', 'completed'].map((tab) => (
          <button
            className={`${currentTab === tab ? 'cl-active' : ''}`}
            onClick={() => setCurrentTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
