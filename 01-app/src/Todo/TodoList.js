import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

const styles = {
  ul: {
    listStyle: 'none',
    margin: 0,
    padding: 0,
  },
};

function TodoList(props) { // props
  return (
    <ul style={styles.ul}>
      { props.todos.map((todo, index) => (
      // { todos.map((todo, index) => (
        <TodoItem
          todo={todo}
          key={todo.id} // why use key?!
          index={index}
          // onChange={onChange}
          onChange={props.onToggle}
        />
      ))}
    </ul>
  );
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  onToggle: PropTypes.func.isRequired,
};

export default TodoList;
