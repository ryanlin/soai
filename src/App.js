import React from 'react';
import './App.css';
import SongUploader from './components/SongUploader'
import SongVisuals from './components/SongVisuals'
import { io } from 'socket.io-client';

const socket = io('http://localhost:8081');
socket.on("connect", () => {
  console.log(socket.id);
});

function App() {
  const [songFile, setSongFile] = React.useState(null);
  const [songMood, setSongMood] = React.useState("Happy");

  return (
    <div className="App">
      <SongUploader/>
      <button
        onClick={() => {
          setSongMood(songMood === "Happy" ? "Sad" : "Happy")
        }}>{songMood} </button>
      <SongVisuals
        songMood = {songMood}/>
    </div>
  );
}

export default App;
