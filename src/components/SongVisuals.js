import React from 'react'

/*
idea 1:
change class when mood changes

idea 2: change elements when mood changes
*/

function SongVisuals({ songData }) {
  const [visibility, setVisibility] = React.useState("hidden")

  React.useEffect( () => {
    setVisibility(songData? "visible" : "hidden")
    console.log(songData);
  }, [songData])
  
  return(
    <div>
      <p style={
        {visibility: visibility}
      }>SongVisuals</p>
    </div>
  )
}

export default SongVisuals;