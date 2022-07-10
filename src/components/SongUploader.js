import React from 'react'
import axios from "axios";

// import io from 'socket.io-client'

// Socket stuff,experimental
//const socket = io('http://localhost:8081');

const API_BASE = "http://localhost:8080/api"

function SongUploader( { songFile, songID, setSongFile, setWaitingResponse, setSongID} ) {
  const [isFileSelected, setIsFileSelected] = React.useState(false);
  
  const changeHandler = (e) => {
    setIsFileSelected(true);
    setSongFile(e.target.files[0]);
    console.log(e.target.files[0]);
  }

  const onClickUpload = (e) => {
    setWaitingResponse(true);

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
    <div
      className="song-uploader"
      style={{
        visibility: songID? "hidden" : "visible"
      }}
    >
      <input
        className="uploader-form"
        type="file"
        name="file"
        onChange={changeHandler}
      />
      <button
        id="upload-button-id"
        className="uploader-btn btn btn-outline-light"
        style={{
          visibility: songFile && !songID ? "visible" : "hidden"
        }}
        onClick={onClickUpload}
    >Upload</button>
   </div>
  )
}

export default SongUploader;