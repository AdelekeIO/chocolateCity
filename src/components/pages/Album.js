import React, { Component } from "react";
import axios from "axios";
import { get } from "http";

export default class Album extends Component {
  state = {
    comments: []
  };
  componentDidMount() {
    this.getComments();
  }

  render() {
    return this.props.albums.map(album => (
      <div>
        {/* {JSON.stringify(this.props.albums)} */}
        <div key={album.id} style={this.getStyle()}>
          <div className="row">
            <img
              className="mr-3"
              src="https://via.placeholder.com/150/92c952"
              alt="Smiley face"
              height="42"
              width="42"
            />

            <div>{album.title}</div>
          </div>
          <div className="col p-2" style={{ border: "1px #ccc dotted" }}>
            <div>comments</div>
            <form>Post comments</form>
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
