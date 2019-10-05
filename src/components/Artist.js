import React, { Component } from "react";
import PropTypes from "prop-types";

export class Artist extends Component {
  getStyle = () => {
    return {
      background: "#f4f4f4",
      padding: "10px",
      borderBottom: "1px #ccc dotted"
      // textDecoration: this.props.todo.completed ? "line-through" : "none"
    };
    // if (this.props.todo.completed) {
    //     return{
    //         textDecoration: 'line-through'
    //     }
    // } else {
    //     return{
    //         textDecoration: 'none'
    //     }
    // }
  };

  markComplete = e => {
    console.log(this.props);
  };
  render() {
    const { id, name, email, username } = this.props.artist;
    return (
      <div className="" style={this.getStyle()} key={id}>
        <div>Username: {username}</div>
        <div>Full Name: {name}</div>
        <div>Email: {email}</div>
        {/* {JSON.stringify(this.props.artist)} */}
      </div>
    );
  }
}

Artist.PropType = {
  addTodo: PropTypes.func.isRequired
};
//PropTypes

const btnStyle = {
  background: "#ff0000",
  color: "#fff",
  border: "none",
  padding: "5px 10px",
  borderRadius: "50%",
  corsor: "pointer",
  float: "right"
};

export default Artist;
