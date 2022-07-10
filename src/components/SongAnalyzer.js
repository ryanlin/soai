import React from 'react';
import axios from 'axios';

const API_BASE = "http://localhost:8080/api"

const SongAnalyzer = ({songID, songData, setSongData}) => {
  const [buttonVisibility, setButtonVisibility] = React.useState("hidden")

  React.useEffect( () => {
    if(songID) {
      setButtonVisibility("visible")
    }
  }, [songID])

  const onClickHandler = (e) => {
    const data = { id: songID }

    console.log(data)
    axios.post(API_BASE+"/songdata", data, {
      // idk what to do here ngl
    })
    .then(res => {
      const song_data = res.data.data.libraryTrack.audioAnalysisV6.result
      //console.log(song_data);
      setSongData(song_data)
      if (song_data) {
        setButtonVisibility("hidden")
      }
    })
  }

  return(
    <div
      className="song-analyzer"
      style={{
        visibility: buttonVisibility
      }}
    >
      <button
      className="analyzer-btn btn btn-outline-light"
      onClick={onClickHandler}
      style={{ visibility: buttonVisibility}}
      >Analyze</button>
    </div>
  )
}

export default SongAnalyzer;