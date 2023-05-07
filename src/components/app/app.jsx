import React, { Component } from "react";

import AppHeader from "../app-header/app-header";
import ItemStatusFilter from "../item-status-filter/item-status-filter";
import SearchPanel from "../search-panel/search-panel";
import TodoList from "../todo-list/todo-list";
import TodoAdd from "../todo-add/todo-add";
import "./app.css";

export default class App extends Component {
  maxId = 100;
  state = {
    todoData: [
      this.createTodoItem("Drink Coffe"),
      this.createTodoItem("Make Awesome App"),
      this.createTodoItem("ave a lunch"),
    ],
  };

  createTodoItem(label) {
    return {
      label,
      important: false,
      done: false,
      id: this.maxId++,
    };
  }

  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id);

      const newArray = [...todoData.splice(0, idx), ...todoData.slice(idx + 1)];
      return {
        todoData: newArray,
      };
    });
  };

  addItem = (text) => {
    const newItem = this.createTodoItem(text);
    this.setState(({ todoData }) => {
      const newArr = [...todoData, newItem];
      return {
        todoData: newArr,
      };
    });
  };

toggleProperty(arr, id, propName){
  const idx = arr.findIndex((el) => el.id === id);
  const oldItem = arr[idx];
  const newItem = {...oldItem, [propName]: !oldItem[propName]}
  return [
    ...arr.splice(0, idx), 
    newItem,
    ...arr.slice(idx + 1)
  ];
 
}

  onToggleDone = (id) => {
    this.setState(({todoData})=>{
      
      return {
        todoData: this.toggleProperty(todoData, id, 'done')
      }
    })
  };
  onToggleImportant = (id) => {
    this.setState(({todoData})=>{
      
      return {
        todoData: this.toggleProperty(todoData, id, 'important')
      }
    })
  };

  render() {
    const {todoData} = this.state
    const doneCount = todoData.filter((todo)=> todo.done).length;
    const toDoCount = todoData.length - doneCount;
    return (
      <div className="app">
        <AppHeader
          done = {doneCount}
          toDo={toDoCount}
        />
        <div className="search-filter">
          <SearchPanel />
          <ItemStatusFilter />
        </div>
        <TodoList
          todos={todoData}
          onDeleted={this.deleteItem}
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone}
        />
        <TodoAdd onItemAdd={this.addItem} />
      </div>
    );
  }
}
