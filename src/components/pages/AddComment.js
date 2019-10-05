import React, { Component } from "react";

export class AddTodo extends Component {
  state = {
    comment: "",
    errorMsg: ""
  };

  onSubmit = e => {
    e.preventDefault();
    if (!this.state.errorMsg) {
      this.props.addComment(this.state.comment);
      // this.state.title="";
      // alert(this.state.errorMsg);
      this.setState({ comment: "" });
    } else {
      alert("Kindly supply a minimum of three character");
    }
  };

  onChange = e => {
    if (e.target.value.length < 3) {
      this.setState({
        errorMsg: "Comment must not be less than three characcters"
      });
      return;
    }
    // console.log(e.target.value.length);
    this.setState({
      errorMsg: ""
    });
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          type="text"
          name="comment"
          placeholder="Add Todo ..."
          style={{ flex: "10", padding: "5px" }}
          value={this.state.title}
          onChange={this.onChange.bind(this)}
        />
        <input type="submit" className="btn" style={{ flex: "1" }} />
        {this.state.errorMsg ? (
          <div className="alert alert-danger">{this.state.errorMsg}</div>
        ) : null}
      </form>
    );
  }
}

export default AddTodo;
