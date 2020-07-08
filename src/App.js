import React, { Component } from "react";
// import uuid from "uuid"; old syntax to use -> uuidv4();
import { v4 as uuidv4 } from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

//Showing VS-Code Github setup

export default class App extends Component {
  state = {
    items: [
      { id: 1, title: "wake up" },
      { id: 2, title: "breakfast" },
    ],
    id: uuidv4(),
    item: "",
    editItem: false,
  };
  handleChange = (e) => console.log("handle change");
  handleSubmit = (e) => console.log("handle submit");
  clearList = (e) => console.log("clear List ");
  handleDelete = (id) => console.log(`handleDelete ${id}`);
  handleEdit = (id) => console.log(`handleEdit ${id}`);

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-5">
            <h3 className="text-capitalize text-center">Todo Input</h3>
            <TodoInput
              item={this.state.item}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              editItem={this.state.editItem}
            />
            <TodoList
              items={this.state.items}
              clearList={this.clearList}
              handleDelete={this.handleDelete}
              handleEdit={this.handleEdit}
            />
          </div>
        </div>
      </div>
    );
  }
}
