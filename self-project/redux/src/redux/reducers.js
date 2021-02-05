const initialState = {
  todos: [
    {
      text: "Eat food",
      completed: true,
    },
    {
      text: "Exercise",
      completed: false,
    },
  ],
  visibilityFilter: "SHOW_COMPLETED",
};

const visibilityFilter = (state = "SHOW_ALL", action) => {
  if (action.type === "SET_VISIBILITY_FILTER") {
    return action.filter;
  } else {
    return state;
  }
};

const todos = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODOS":
      return state.concat([{ test: action.text, completed: false }]);
    case "TOGGLE_TODO":
      return state.map((todo, index) => {
        action.index === index
          ? { text: todo.text, completed: !todo.completed }
          : todo;
      });
    default:
      return state;
  }
};

/* 
{ type: 'ADD_TODO', text: 'Go to swimming pool' }
{ type: 'TOGGLE_TODO', index: 1 }
{ type: 'SET_VISIBILITY_FILTER', filter: 'SHOW_ALL' }
*/
