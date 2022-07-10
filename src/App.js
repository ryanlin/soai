import React from 'react';
import './App.css';

import Header from './components/Header'
import SongUploader from './components/SongUploader'
import SongAnalyzer from './components/SongAnalyzer'
import SongVisuals from './components/SongVisuals'
import SongPlayer from './components/SongPlayer'
// import { io } from 'socket.io-client';

// Socket.IO Stuff
// const socket = io('http://localhost:8081');
// socket.on("connect", () => {
//   console.log(socket.id);
// });

function App() {
  const [songFile, setSongFile] = React.useState(null);
  const [songData, setSongData] = React.useState(null);
  const [waitingResponse, setWaitingResponse] = React.useState(false);
  const [visibility, setVisibility] = React.useState("hidden")
  const [songID, setSongID] = React.useState(null);

  return (
    <div className="App">
      <Header />

      <SongUploader
        songFile={songFile}
        setSongFile={setSongFile}
        setWaitingResponse={setWaitingResponse}
        setSongData={setSongData}
        setSongID={setSongID}
      />

      <SongAnalyzer
        songID={songID}
        setSongData={setSongData}
      />
      
      <p
        style={{
          visibility: waitingResponse? "visible" : "hidden"
        }}        
      >Loading...</p>

      <SongVisuals
        visibility = {visibility}
        songData = {songData}/>

      <SongPlayer
        songFile={songFile}
        songData={songData}
        setVisibility={setVisibility}/>
        
    </div>
  );
}

export default App;
