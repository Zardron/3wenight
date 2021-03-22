import React from 'react'

function PlayerControls() {
    return (
        <div className="c-player--controls">
            <button className="skip-btn"><i class="fas fa-backward"></i></button>
            <button className="play-btn"><i class="fas fa-play"></i></button>
            <button className="skip-btn"><i class="fas fa-forward"></i></button>
        </div>
    )
}

export default PlayerControls
