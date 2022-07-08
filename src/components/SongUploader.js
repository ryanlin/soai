import React from 'react'
import io from 'socket.io-client'

const socket = io('http://localhost:8081');

function SongUploader() {
  const [selectedFile, setSelectedFile] = React.useState(null);
  const [fileSelected, setFileSelected] = React.useState(false);
  
  const changeHandler = (e) => {
    setFileSelected(true);
    setSelectedFile(e.target.files[0]);

    console.log(e.target.files[0].name);
  }

  const onClickUpload = (e) => {
    //unfinished
    const data = new FormData();
    data.append("file", selectedFile);

    socket.emit('upload', data)
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