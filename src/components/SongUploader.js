import React from 'react'

import io from 'socket.io-client'

function SongUploader() {
  const [selectedFile, setSelectedFile] = React.useState(null);
  const [fileSelected, setFileSelected] = React.useState(false);
  
  const changeHandler = (e) => {
    setFileSelected(true);
    setSelectedFile(e.target.files[0]);

    console.log(e.target.files[0].name);
  }

  const onClickSubmit = (e) => {
    //empty
  }

  return(
    <div>
      <input
        type="file"
        name="file"
        onChange={changeHandler}
      />
      <button
        onClick={onClickSubmit}
      >Upload</button>
    </div>
    

  )
}

export default SongUploader;