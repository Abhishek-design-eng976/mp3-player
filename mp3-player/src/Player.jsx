import React, { useEffect, useRef, useState } from "react";
import './Player.css'

function Player() {
    const [currentTrackIndex, setCurrentTrackIndex] = useState(0)
    const [isPlaying, setIsPlaying] = useState(false) 
    const audioRef = useRef(null); 

    const audioFiles = [
        { src: 'path/to/audo1.mp', title: 'Audio 1' },
        { src: 'path/to/audo2.mp', title: 'Audio 2' },
        { src: 'path/to/audo3.mp', title: 'Audio 3' },
    ]
    const playNext = () => {
    const newIndex = (currentTrackIndex + 1)% audioFiles.length;
        setCurrentTrackIndex(newIndex)       
    }
    const playPrevious = () => {
        const newIndex = (currentTrackIndex - 1)% audioFiles.length;
        setCurrentTrackIndex(newIndex)
        console.log(setCurrentTrackIndex);
    }
    const togglePlayPause = () => {
        setIsPlaying((prevState) => {
            const newState = !prevState; // Toggle the state
            if (newState) {
                audioRef.current.play(); // Play the audio
            } else {
                audioRef.current.pause(); // Pause the audio
            }
            return newState; // Return the new state
        });
    };

    useEffect(() => {
        if (isPlaying) {
            audioRef.current.play()
        }
    },[currentTrackIndex, isPlaying])
    return (
        <div>
            <h1>Audio Player</h1>
            <h2>Now Playing:{audioFiles[currentTrackIndex].title} </h2>
            <audio ref={audioRef} src={audioFiles[currentTrackIndex].src} />
            <button onClick={togglePlayPause} >{isPlaying ? "Pause" : "Play"}</button>
            <button onClick={playNext}>Next</button>
            <button onClick={playPrevious}>Previous</button>
        </div>

    )
}
export default Player;