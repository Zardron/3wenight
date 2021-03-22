import { useState } from 'react';
import Player from '../scenes/components/Player';
import '../../src/assets/components/MusicPlayer.css';

function MusicPlayer(){
    const [songs, setSongs] = useState([
        {
            title: "Forget me too ft. Halsey",
            artist: "Machine Gun Kelly",
            img_src: "./images/song-1.jpg",
            src: "./music/on-n-on.mp3"
        },
        {
            title: "Song 2",
            artist: "Artist 2",
            img_src: "./images/song-2.jpg",
            src: "./music/somebody-new.mp3"
        },
        {
            title: "Song 3",
            artist: "Artist 3",
            img_src: "./images/song-3.jpg",
            src: "./music/on-n-on.mp3"
        },
        {
            title: "Song 4",
            artist: "Artist 4",
            img_src: "./images/song-4.jpg",
            src: "./music/somebody-new.mp3"
        }
    ]);

    const [currentSongIndex, setCurrentSongIndex] = useState(0);
    const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);

    return (
        <>
                <Player 
                    song={songs[currentSongIndex]} 
                    nextSong={songs[nextSongIndex]} 
                />
        </>
    )
}

export default MusicPlayer