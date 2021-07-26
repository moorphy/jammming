import React from 'react';
import './Playlist.css';
import TrackList from '../Tracklist/Tracklist';

class Playlist extends React.Component {
  render() {
    return (
      <div className="Playlist">
        <input defaultValue={'New PlayList'}/>
        <TrackList tracks={this.props.playlistTracks} onRemove={this.props.onRemove} isRemoval={this.props.isRemoval} />
        <button className="Playlist-save">SAVE TO SPOTIFY</button>
      </div>
    );
  }
}
export default Playlist;
