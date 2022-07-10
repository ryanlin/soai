import React from 'react'

/*
idea 1:
change class when mood changes

idea 2: change elements when mood changes
*/

function SongPlayer({ songFile, songData, setVisibility }) {
  const [audio, setAudio] = React.useState(null)

  React.useEffect( () => {
    if (!songFile) {
      return;
    }
    var URL = window.URL || window.webkitURL;
    var src = URL.createObjectURL(songFile)
    var audio = new Audio(src)

    setAudio(audio)
  }, [songFile]);

  const onClickHandler = (e) => {
    if (audio) {
      audio.play()
      setVisibility(true)
    }
  }

  return (
    <div>
      {/* <audio autoPlay src={source} hidden/> */}
      <button
        className="play-button"
        onClick={onClickHandler}
        style={{
          visibility: songData ? "visible" : "hidden" 
        }}
      > Play </button>
    </div>
  )
}

export default SongPlayer;