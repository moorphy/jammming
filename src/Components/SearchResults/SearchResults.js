import React from 'react';
import './SearchResults.css';
import TrackList from '../Tracklist/Tracklist';
import Track from '../Track/Track';

class SearchResults extends React.Component {
  render(){
    return(
      <div className="SearchResults">
        <h2>Results</h2>
        <TrackList tracks={this.props.searchResults.map(
          track => {
            return <Track
                    key={track.id}
                    />
          }
        )} />
      </div>
    );
  }
}
export default SearchResults;