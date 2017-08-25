import React, { Component } from 'react';

class PlayList extends Component {
  constructor() {
    super();

    this.state = {
      songs: []
    }
  }

  componentDidMount() {
    fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlisting').then((results) => {
      return results.json();
    }).then((data) => {
      this.setState({songs: data});
      console.log("state", this.state.songs);
    })
  }

  fetchData = (e) => {
    e.preventDefault();
    fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlisting').then(results => {
      return results.json();
    }).then(data => {
      console.log('new data', data);
      this.setState({songs: data});
    })
  }

  render() {
    return (
      <div className="PlayList">
        <button className="play-list-button" onClick={this.fetchData}>Update List</button>
        <div className="playlist-results">
          {this.state.songs.map((song, i) => {
            return (
              <div className="result" key={i}>
                <h1>Username: {song.userName}</h1>
                <h1>Title: {song.songTitle}</h1>
                <h2>Artist: {song.songArtist}</h2>
                <h2>Notes: {song.songNotes}</h2>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default PlayList;
