import React from 'react'

function PlayerDetail(props) {
    return (
        <div className="c-player--details">
            <h3 className="details-title">{props.song.title}</h3>
            <div className="details-img">
                <img src={props.song.img_src} alt="" className="img-player"></img>
            </div>
            
        </div>
    )
}

export default PlayerDetail
