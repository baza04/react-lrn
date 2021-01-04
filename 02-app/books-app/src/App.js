import React, { useState, useEffect } from 'react';
import './App.css'
import BookList from './Books/BooksList'

function App() {
  const [value, setValue] = React.useState([])

  useEffect(() => {
    console.log("some changes")
  }, [])

    
  return (

    <div className="App">
      <div className='mainContainer'>

        <h1>React API books</h1>
        <BookList />

      </div>
    </div>

  );
}

export default App;
