import React, { Component } from "react";
import axios from "axios";
import { get } from "http";
import { comment } from "postcss";

export default class Comment extends Component {
  state = {
    comments: []
  };
  componentDidMount() {
    this.getComments();
  }
  comments() {
    if (this.state.comments) {
      return JSON.stringify(this.state.comments);
    } else {
      return "No Comment";
    }
  }
  render() {
    return this.props.comments.map(comment => (
      <div>
        {/* {JSON.stringify(this.props.albums)} */}
        <div key={comment.id} style={this.getStyle()} className="container">
          <div className="row">
            <div className="col">
              <div>
                <b>Name: </b>
                {comment.name}
              </div>
              <div>
                <b>Email: </b>
                {comment.email}
              </div>
            </div>
          </div>
          <div className="col p-2" style={{ border: "1px #ccc dotted" }}>
            <div>
              <b>Comment</b>
            </div>
            <div>{comment.body}</div>
          </div>
        </div>
      </div>
    ));
  }
  getStyle = () => {
    return {
      background: "#f4f4f4",
      padding: "10px",
      borderBottom: "1px #ccc dotted"
      // textDecoration: this.props.todo.completed ? "line-through" : "none"
      //   this.setState({ url: res.data[0].url })
    };
  };

  getImage = id => {
    axios
      .get("http://jsonplaceholder.typicode.com/albums/" + id + "/photos")
      .then(res => {
        return res.data[0].url;
      });
  };

  getComments = () => {
    axios
      .get("http://jsonplaceholder.typicode.com/comments?_limit=5")
      .then(res => this.setState({ comments: res.data[0].url }));
  };
}
