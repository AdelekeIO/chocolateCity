import React from "react";
import Artist from "./Artist";
import PropTypes from "prop-types";

class Artists extends React.Component {
  markComplete = () => {
    console.log("kkkk");
  };

  render() {
    return this.props.artists.map(artist => (
      // <div key={artist.id}>{JSON.stringify(artist)}</div>
      <Artist
        key={artist.id}
        artist={artist}
        markComplete={this.props.markComplete}
        delTodo={this.props.delTodo}
      />
    ));
  }
}
//PropTypes
Artists.PropType = {
  todos: PropTypes.array.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired
};

export default Artists;
