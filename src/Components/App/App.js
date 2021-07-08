import React from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      searchResults : [
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
    ]};
  }

  render() {
    return (
      <div className="App">
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults}/>
            <Playlist searchResults={this.state.searchResults} />
          </div>
        </div>
      </div>
      </div>
    );
  }
}
export default App;
