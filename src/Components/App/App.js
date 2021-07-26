import React from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      "searchResults" : [
        {"id": "1",
        "name": "Strange Overtones",
        "artist": "David Byrne",
        "album": "Everything That Happens Today Will Happen Today"},
        {"id": "2",
        "name": "Is It Really so Strange?",
        "artist": "The Smiths",
        "album": "Louder Than Bombs"},
        {"id": "1",
        "name": "Strange",
        "artist": "Built to Spill",
        "album": "Ancient Melodies of the Future"}
      ],
        "playlistName": "Bangers",
        "playlistTracks": [{
          "id":"4",
          "name": "Hush Darlin",
          "artist": "Gregory Issacs",
          "album": "More Gregory"
        }, {
          "id":"5",
          "name": "Teeth Like Gods Shoeshine",
          "artist": "Modest Mouse",
          "album": "Lonesome Crowded West"
        }, {
          "id": "6",
          "name" : "PPP",
          "artist": "Beach House",
          "album": "Depression Cherry"
        }]
    };
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
  }

  addTrack(track) {
    let tracks = this.state.playlistTracks;
    if(!tracks.find(savedTrack =>
      savedTrack.id === track.id)){
        tracks.push(track);
        this.setState({playlistTracks : tracks});
      }
    }

    removeTrack(track) {
      let tracks =this.state.playlistTracks;
      tracks.filter(track => track.id);
    }

  render() {
    return (
      <div className="App">
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack}/>
            <Playlist searchResults={this.state.searchResults} playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} onRemove = {this.state.removeTrack}/>
          </div>
        </div>
      </div>
      </div>
    );
  }
}
export default App;
