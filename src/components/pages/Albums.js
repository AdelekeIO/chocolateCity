import React, { Component } from "react";
import axios from "axios";

import Header from "../layout/Header";
import Album from "./Album";

export default class Albums extends Component {
  state = {
    albums: []
  };

  componentDidMount() {
    axios
      .get("http://jsonplaceholder.typicode.com/albums?_limit=5")
      .then(res => this.setState({ albums: res.data }));
  }

  render() {
    // const { id, title } = this.state.albums;
    return (
      <React.Fragment>
        <Header />
        <Album albums={this.state.albums} />;
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
