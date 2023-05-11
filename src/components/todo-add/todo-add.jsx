import React, { Component } from "react";
import "./todo-add.css";
export default class TodoAdd extends Component {

  state ={
    label: ''
  };
  onLabelChange = (e) => {
    this.setState({
      label: e.target.value
    })
  };
  onSubmit =(e) => {
    e.preventDefault();
    this.props.onItemAdd(this.state.label)
    this.setState({
    label: ''
    })
  }

  render() {
    return (
      <form className="todoadd_wrapper" onSubmit = {this.onSubmit}>
        <input
          type="text"
          className="todo-add"
          placeholder="What needs to be done?"
          onChange={this.onLabelChange}
          value = {this.state.label}
        />
        <button
          type="button"
          className="btn mybtn btn-outline-secondary"
          onClick={this.onSubmit}
        >
          Add
        </button>
      </form>
    );
  }
}
