import React from 'react';
import PlayerDetail from './PlayerDetail' 
import PlayerControls from './PlayerControls' 

function Player(props) {
    return (
        <div className="c-player">
            <audio></audio>
            <h4>Playing Now</h4>
            <PlayerDetail song={props.song}/>
            <PlayerControls />
            <p><strong>Next up:</strong> {props.nextSong.title} by {props.nextSong.artist}</p>
        </div>
    )
}

export default Player
