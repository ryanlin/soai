import React from 'react'
import axios from "axios";

// import io from 'socket.io-client'

// Socket stuff,experimental
//const socket = io('http://localhost:8081');

const API_BASE = "http://localhost:8080/api"

function SongUploader( { songFile, setSongFile, setWaitingResponse, setSongID} ) {
  // const [fileSelected, setFileSelected] = React.useState(false);
  
  const changeHandler = (e) => {
    // setFileSelected(true);
    setSongFile(e.target.files[0]);
    console.log(e.target.files[0]);
  }

  const onClickUpload = (e) => {
    //unfinished
    setWaitingResponse(true);

    // Request with fetch
    // const song_res = fetch(API_BASE+"/api/upload", {
    //   method: 'POST',
    //   headers: {
    //     // deliberately empty
    //   },
    //   body: songFile
    // }).then(
    //   response => response.json()
    // ).then(
    //   success => setSongData(success)
    // ).catch(
    //   error=>console.log(error)
    // )

    // Request with axios
    setWaitingResponse(false)
    const data = new FormData();
    data.append("file", songFile);
    axios.post(API_BASE+"/upload", data, {
      // receive two parameter endpoint url, form data
    })
    .then(res => {
      const song_id = res.data.createdLibraryTrack.id
      console.log(song_id)
      setSongID(song_id)
    })
  }

  return(
    <div>
      <input
        type="file"
        name="file"
        onChange={changeHandler}
      />
      <button
        onClick={onClickUpload}
      >Upload</button>
    </div>
    

  )
}

export default SongUploader;