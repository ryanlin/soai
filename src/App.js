import React from 'react';
import './App.css';
import SongUploader from './components/SongUploader'
import SongAnalyzer from './components/SongAnalyzer'
import SongVisuals from './components/SongVisuals'
// import { io } from 'socket.io-client';

// Socket.IO Stuff
// const socket = io('http://localhost:8081');
// socket.on("connect", () => {
//   console.log(socket.id);
// });

const API_BASE = "http://localhost:8080"

function App() {
  const [songFile, setSongFile] = React.useState(null);
  const [songData, setSongData] = React.useState(null);
  const [waitingResponse, setWaitingResponse] = React.useState(false);
  const [songID, setSongID] = React.useState(null);
  const [data, setData] = React.useState(null);

  React.useEffect( () => {
    const url = API_BASE + "/api"
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data.version))
      .catch(
        error=>console.log(error)
      )
  }, []);

  return (
    <div className="App">
      <p>{!data? "Loading..." : data}</p>

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
        songData = {songData}/>
    </div>
  );
}

export default App;
