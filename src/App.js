import React from 'react';
import './App.css';
import SongUploader from './components/SongUploader'
import SongVisuals from './components/SongVisuals'


function App() {
  const [songFile, setSongFile] = React.useState(null);
  const [songMood, setSongMood] = React.useState(null);


  //setSongMood("Happy")

  return (
    <div className="App">
      {/* <SongUploader /> */}
      <button
        onClick={() => {
          setSongMood(songMood === "Happy" ? "Sad" : "Happy")
        }}> Happy </button>
      <SongVisuals
        songMood = {songMood}/>
    </div>
  );
}

export default App;
