import React from 'react'

function PlayerControls(props) {
    return (
        <div className="c-player--controls" >
            <button className="skip-btn" onClick={() => props.SkipSong(false)}><i class="fas fa-backward"></i></button>
            <button className="play-btn" onClick={() => props.setIsPlaying(!props.isPlaying)}><i class={props.isPlaying ? "fas fa-pause" : "fas fa-play"}></i></button>
            <button className="skip-btn" onClick={() => props.SkipSong()}><i class="fas fa-forward"></i></button>
        </div>
    )
}

export default PlayerControls
