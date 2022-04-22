import { useState } from 'react';
import './App.css';

function App() {
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
  const completedTodos = todos.filter((todo) => !todo.completed);
  console.log(completedTodos);

  return (
    <>
    
      <header>
        <div className='hpic'>{/* <img src='/h-back.jpg' alt='' /> */}</div>
        <h1 className='header-text'>T O D O</h1>
      </header>

      <div className='container'>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const updatedT = [
              ...todos,
              { title: text, id: Date.now(), completed: false },
            ];
            setTodos(updatedT);
            setText('');
          }}
          className='add-form'
        >
          <div className=' form-control input'>
            <input
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

        {todos.map((todo) => (
          <div
            onClick={() => {
              const newList = todos.map((newArrayTodo) =>
                newArrayTodo.id === todo.id
                  ? { ...newArrayTodo, completed: !newArrayTodo.completed }
                  : newArrayTodo
              );
              setTodos(newList);
              // console.log(newList);
            }}
            className={`task${todo.completed ? 'container task line' : ''}`}
            key={todo.id}
          >
            <input
              checked={todo.completed}
              // id={`todo-${todo.id}`}
              className='checkbox'
              type='checkbox'
            />{' '}
            <label>{todo.title}</label>
          </div>
        ))}

        <p> Things to do {completedTodos.length}</p>
      </div>
    </>
  );
}

export default App;
