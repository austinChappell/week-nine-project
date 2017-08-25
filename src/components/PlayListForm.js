import React, { Component } from 'react';

class PlayListForm extends Component {
  constructor() {
    super();

    this.state = {
      userName: '',
      songNotes: '',
      songArtist: '',
      songTitle:''
    }
  }

  handleChange = (e, input) => {
    const obj = {};
    obj[input] = e.target.value;
    this.setState(obj);
  }

  handleSongChange = (e) => {
    const song = e.target.value;
    this.setState({

    })
  }

  addToList = (e) => {
      e.preventDefault();

      this.setState({
        userName: e.target.value,
        songTitle: e.target.value,
        songArtist: e.target.value,
        songNotes: e.target.value
      });

      let listItem = JSON.stringify(this.state);

      fetch("https://tiny-lasagna-server.herokuapp.com/collections/playlisting", {
        method: "POST",
        body: listItem,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      }
    }
    ).then(response => {
      console.log(response, "yay");

    }).catch(err => {
      console.log(err, "boo!");
    });
    this.setState({
      userName: '',
      songNotes: '',
      songArtist: '',
      songTitle:''
    });
  }

  render() {
    return (
      <div className="PlayListForm">
        <div className="form">          
          <div className="form-group">
            <label>User Name: </label>
            <input placeholder="Name or User Name" onChange={(e) => this.handleChange(e, 'userName')} value={this.state.userName} />
          </div>
          <div className="form-group">
            <label>Arist/Band:</label>
            <input placeholder="Arist or Band Name" onChange={(e) => this.handleChange(e, 'songArtist')} value={this.state.songArtist} />
          </div>
          <div className="form-group">
            <label>Song Title:</label>
            <input placeholder="Song Title" onChange={(e) => this.handleChange(e, 'songTitle')} value={this.state.songTitle} />
          </div>
          <div className="form-group">
            <label>Notes about Song:</label>
            <input value={this.state.songNotes} onChange={(e) => this.handleChange(e, 'songNotes')} />
          </div>
          <button onClick={this.addToList}>Submit</button>
        </div>
      </div>
    )
  }
}

export default PlayListForm;
