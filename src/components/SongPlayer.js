import React from 'react'

/*
idea 1:
change class when mood changes

idea 2: change elements when mood changes
*/

function SongPlayer({ songFile, songData, setVisibility }) {
  const [audio, setAudio] = React.useState(null)
  const [buttonVisibility, setButtonVisibility] = React.useState("hidden")

  React.useEffect( () => {
    if (!songFile || !songData) {
      return;
    }
    var URL = window.URL || window.webkitURL;
    var src = URL.createObjectURL(songFile)
    var audio = new Audio(src)

    setAudio(audio)
    setButtonVisibility("visible")
  }, [songFile, songData]);

  const onClickHandler = (e) => {
    if (audio) {
      
      setButtonVisibility("hidden")
      audio.play()
      setVisibility(true)
    }
  }

  return (
    <div className="player">
      {/* <audio autoPlay src={source} hidden/> */}
      <button
        className="player-btn btn btn-outline-light"
        onClick={onClickHandler}
        style={{
          visibility: buttonVisibility
        }}
      > Play </button>
    </div>
  )
}

export default SongPlayer;