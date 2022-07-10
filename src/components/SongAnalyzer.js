import React from 'react';
import axios from 'axios';

const API_BASE = "http://localhost:8080/api"

const SongAnalyzer = ({songID, setSongData}) => {

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
    })

  }

  return(
    <button
      onClick={onClickHandler}
      style={{ visibility: songID ? "visible":"hidden"}}
      >Analyze</button>
  )
}

export default SongAnalyzer;