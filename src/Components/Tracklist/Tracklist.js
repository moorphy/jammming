import React from 'react';
import './TrackList.css';

class TrackList extends React.Component {
    render() {
        return (
            <div className="TrackList">
            {this.props.tracks.map(track => {
                <Track key={track.id} track={track} isRemoval={false} />
            })}
            </div>
        );
    }
}
export default TrackList;
