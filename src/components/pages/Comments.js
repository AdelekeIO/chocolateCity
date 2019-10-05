import React, { Component } from "react";
import axios from "axios";

import Header from "../layout/Header";
import Comment from "./Comment";
import AddComment from "./AddComment";

export default class Comments extends Component {
  state = {
    comments: []
  };

  componentDidMount() {
    axios
      .get("http://jsonplaceholder.typicode.com/comments?_limit=5")
      .then(res => this.setState({ comments: res.data }));
  }

  //Delete Comment
  delComment = id => {
    axios.get(`http://jsonplaceholder.typicode.com/todos/${id}`).then(res =>
      this.setState({
        todos: [...this.state.artists.filter(todo => todo.id !== id)]
      })
    );
  };

  // Add Comment
  addComment = comment => {
    axios
      .post("http://jsonplaceholder.typicode.com/todos", {
        comment
      })
      .then(res =>
        this.setState({
          todos: [...this.state.comments, res.data]
        })
      );
  };
  render() {
    // const { id, title } = this.state.albums;
    return (
      <React.Fragment>
        <Header />
        <div className="container">
          <AddComment addComment={this.addComment} />
          <Comment comments={this.state.comments} />;
        </div>
      </React.Fragment>
    );
  }

  getStyle = () => {
    return {
      background: "#f4f4f4",
      padding: "10px",
      borderBottom: "1px #ccc dotted"
      // textDecoration: this.props.todo.completed ? "line-through" : "none"
    };
  };
}
