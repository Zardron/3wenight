import { useState, useEffect } from 'react';
import Player from '../scenes/components/Player';
import '../../src/assets/components/MusicPlayer.css';

function MusicPlayer(){
    const [songs] = useState([
        {
            title: "Bangarang",
            artist: "SKRILLEX feat. Sirah",
            img_src: "/images/1.jpg",
            src: "/music/1.mp3"
        },
        {
            title: "LMFAO",
            artist: "Party Rock Anthem",
            img_src: "./images/2.jpg",
            src: "/music/2.mp3"
        },
        {
            title: "Dirty Bit",
            artist: "Black Eyed Peas",
            img_src: "/images/3.jpg",
            src: "/music/3.mp3"
        },
        {
            title: "On & On",
            artist: "Artist 3",
            img_src: "/images/4.jpg",
            src: "/music/4.mp3"
        },
        {
            title: "Make It Bun Dem",
            artist: "Skrillex, Damian & Jr. Gong ",
            img_src: "/images/5.jpg",
            src: "/music/5.mp3"
        },
        {
            title: "Alone",
            artist: "Marshmello",
            img_src: "/images/6.jpg",
            src: "/music/6.mp3"
        }
    ]);

    const [currentSongIndex, setCurrentSongIndex] = useState(0);
    const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);

    useEffect(() => {
        setNextSongIndex(() => {
          if (currentSongIndex + 1 > songs.length - 1) {
            return 0;
          } else {
            return currentSongIndex + 1;
          }
        });
      }, [currentSongIndex]);

    return (
        <>
                <Player 
                    currentSongIndex={currentSongIndex} 
                    setCurrentSongIndex={setCurrentSongIndex} 
                    nextSongIndex={nextSongIndex} 
                    songs={songs}
                />
        </>
    )
}

export default MusicPlayer