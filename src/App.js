import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Artists from "./components/Artists";
import Header from "./components/layout/Header";
// import AddTodo from "./components/pages/AddTodo";
import About from "./components/pages/About";
// import uuid from 'uuid'
import axios from "axios";
import Albums from "./components/pages/Albums";
import Comments from "./components/pages/Comments";

class App extends React.Component {
  state = {
    artists: []
  };

  componentDidMount() {
    axios
      .get("http://jsonplaceholder.typicode.com/users?_limit=5")
      .then(res => this.setState({ artists: res.data }));
  }
  // Toggle Complete
  markComplete = id => {
    this.setState({
      todos: this.state.artists.map(artist => {
        if (artist.id === id) {
          artist.completed = !artist.completed;
        }
        return artist;
      })
    });
  };

  //Delete Todo
  delTodo = id => {
    axios.get(`http://jsonplaceholder.typicode.com/todos/${id}`).then(res =>
      this.setState({
        todos: [...this.state.artists.filter(todo => todo.id !== id)]
      })
    );
  };

  // Add Todo
  addTodo = title => {
    //  console.log(title);
    // const newTodo = {
    //   // id: uuid.v4(),
    //   title,
    //   completed: false
    // }
    //  this.setState({todos: [...this.state.todos, newTodo]})

    axios
      .post("http://jsonplaceholder.typicode.com/todos", {
        title,
        completed: false
      })
      .then(res =>
        this.setState({
          todos: [...this.state.todos, res.data]
        })
      );
  };
  render() {
    return (
      <Router>
        <Route
          exact
          path="/"
          render={props => (
            <React.Fragment>
              <div className="App">
                <Header />
                {/* <AddTodo addTodo={this.addTodo} /> */}
                <Artists
                  artists={this.state.artists}
                  markComplete={this.markComplete}
                  delTodo={this.delTodo}
                />
              </div>
            </React.Fragment>
          )}
        />

        <Route path="/about" component={About} />
        <Route path="/albums" component={Albums} />
        <Route path="/comments" component={Comments} />
      </Router>
    );
  }
}

export default App;
