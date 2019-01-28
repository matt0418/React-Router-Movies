import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class SavedList extends Component {
  // constructor(props) {
  //   super(props);
  // } commented out because useless constructor
  render() {
    return (
      <div>
      <div className="saved-list">
        <h3>Saved Movies:</h3>
        {this.props.list.map(movie => (
          <Link to={`/movies/${movie.id}`}><span className="saved-movie">{movie.title}</span></Link>
        ))}
        <Link to="/"><div className="home-button">Home</div></Link>
      </div>
      <div className="clear"onClick={this.props.clearSaves}>Clear</div>
      </div>
    );
  }
}
