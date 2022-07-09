import React from 'react'
// import io from 'socket.io-client'

// Socket stuff,experimental
//const socket = io('http://localhost:8081');

const API_BASE = "http://localhost:8080"

function SongUploader( { songFile, setSongFile, setWaitingResponse, setSongData} ) {
  // const [fileSelected, setFileSelected] = React.useState(false);
  
  const changeHandler = (e) => {
    // setFileSelected(true);
    setSongFile(e.target.files[0]);

    console.log(e.target.files[0].name);
  }

  const onClickUpload = (e) => {
    //unfinished
    console.log(songFile)
    setWaitingResponse(true);
    const song_res = fetch(API_BASE+"/api/upload", {
      method: 'POST',
      headers: {
        // deliberately empty
      },
      body: songFile
    }).then(
      response => response.json()
    ).then(
      success => setSongData(success)
    ).catch(
      error=>console.log(error)
    )

    setWaitingResponse(false)
    // setSongData(song_res)
    // const data = new FormData();
    // data.append("file", songFile);
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