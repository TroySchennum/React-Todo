import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm'
import "./components/Todo.css";

const todos = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: todos,
      anotherStateProperty: "hello"
    };
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  addItem = itemName => {
    const newItem = {
      name: itemName,
      id: new Date(),
      completed: false
    };
    this.setState({
      todos: [...this.state.todos, newItem]
    });
  };

  toggleItem = itemId => {
    this.setState({
      todos: this.state.todos.map(item => {
        if (item.id === itemId) {
          return {
            ...item,
            completed: !item.completed
          };
        } else {
          return item;
        }
      })
    });
  };
        
        


  render() {
    return (
      <div className= "App">
        <div className = "header">
        <h2>To-do List</h2>
        <TodoForm addItem= {this.addItem} />
        </div>
        <TodoList
          toggleItem= {this.toggleItem}
          todos= {this.state.todos}
        />
      </div>
    );
  }
}

export default App;
