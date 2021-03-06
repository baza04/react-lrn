import React, { useEffect } from 'react';
import TodoList from './Todo/TodoList';
import Context from './context'
import Loader from './Loader'
import Modal from './Modal/Modal'

// const AddTodo = React.lazy(() => import('./Todo/AddTodo'))
const AddTodo = React.lazy(
  () => 
    new Promise(resolve => {
      setTimeout(() => {
        resolve(import('./Todo/AddTodo'))
      }, 2000)
    })
  )

function App() {
  // create state from standard react lib
  // which return value and func for changing value
  const [todos, setTodos] = React.useState([ 
    { id: 1, completed: true, title: 'купить хлеб' },
    { id: 2, completed: false, title: 'купить воду' },
    { id: 3, completed: false, title: 'купить молоко' }
  ]);

  // create state again
  const [loading, setLoading] = React.useState(true) 


  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
      .then(response => response.json())
      .then(todos => setTodos(todos))
      setLoading(false)
  }, [])

  // change completed field in object by setTodos func
  function toggleTodo(id) {
    setTodos( 
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    )
  }

function removeTodo(id) {
  setTodos(todos.filter(todo => todo.id !== id))
}

function addTodo(title) {
  setTodos( 
    todos.concat([
      {
        title,
        id: Date.now(),
        completed: false
      }
    ])
  )
}

  return (
    <Context.Provider value={{ removeTodo }}>
      <div className="wrapper">
        <h1>React tutorial</h1>
        <Modal />

        <React.Suspense fallback={<p>Loading...</p>} >
          <AddTodo onCreate={addTodo} />
        </React.Suspense>
 
        {loading && <Loader />}
        {todos.length ? (
            <TodoList todos={todos} onToggle={toggleTodo} />
          ) : (
            loading ? null : <p> No Todos </p>
          )}

      </div>
    </Context.Provider>
  );
}

export default App;
