import React, { useEffect, useRef, useState } from "react";
import './Player.css'

function Player() {
    const [currentTrackIndex, setCurrentTrackIndex] = useState(0)
    const [isPlaying, setIsPlaying] = useState(false)
    const audioRef = useRef(null);
    const audioFiles = [
        { src: '/audio1.mp3', title: 'Audio 1' },
        { src: '/audio2.mp3', title: 'Audio 2' },
        { src: '/audio3.mp3', title: 'Audio 3' },
    ]

    const playNext = () => {
        const newIndex = (currentTrackIndex + 1) % audioFiles.length;
        setCurrentTrackIndex(newIndex)
    }
    const playPrevious = () => {
        const newIndex = ((currentTrackIndex - 1 + audioFiles.length) % audioFiles.length);
        setCurrentTrackIndex(newIndex)

    }

    const togglePlayPause = () => {
        setIsPlaying(prevState => {
            const newState = !prevState
            return newState
        });
    };
    const playShuffle = () => {
        const randomIndex = Math.floor(Math.random() * audioFiles.length)
        setCurrentTrackIndex(randomIndex)
    }
    useEffect(() => {
        audioFiles.forEach(song => {
            console.log(`Title: ${song.title}`)
        })
    }, [])

    useEffect(() => {
            if (isPlaying) {
                audioRef.current.play().catch((err) => {
                    console.error('Error playing audio:', err);
                });
            } else {
                audioRef.current.pause();
            }
    }, [currentTrackIndex, isPlaying]);

    return (
        <div>
            <h1>Audio Player</h1>
            <h2>Now Playing:{audioFiles[currentTrackIndex].title} </h2>
            <audio ref={audioRef} src={audioFiles[currentTrackIndex].src} />
            <div>
                <h3>PLAYLIST</h3>
                {audioFiles.map((audio, index) => (
                    <div key={index} style={{ margin: "5px" }}>
                        <button onClick={() => setCurrentTrackIndex(index)}>
                            Song: {audio.title}
                        </button>
                    </div>
                ))}
            </div>
            <button onClick={togglePlayPause} >{isPlaying ? "Pause" : "Play"}</button>
            <button onClick={playNext}>Next</button>
            <button onClick={playPrevious}>Previous</button>
            <button onClick={playShuffle}>Shuffle</button>

        </div>

    )
}
export default Player;