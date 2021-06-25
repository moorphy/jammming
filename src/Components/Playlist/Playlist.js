import React from 'react';
import './Playlist.css';
import TrackList from '../Tracklist';

class Playlist extends React.Component {
  render() {
    return (
      <div className="Playlist">
        <input defaultValue={'New PlayList'}/>
        <TrackList />
        <button className="Playlist-save">SAVE TO SPOTIFY</button>
      </div>
    );
  }
}
export default Playlist;
