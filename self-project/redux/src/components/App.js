import React from "react";
import Router from "react-router-dom";

const styles = {
  cont: {
    // maxWidth: "1024px",
    minWidth: "1024px",
    minHeight: "100vh",
    border: "1px solid yellow",
  },
};

function App() {
  const { cont } = styles;

  return (
    <div style={cont}>
      <h1>Todo App</h1>
      
    </div>
  );
}

export default App;
