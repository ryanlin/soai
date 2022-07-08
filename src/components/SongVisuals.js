import { within } from '@testing-library/react';
import React from 'react'

/*
idea 1:
change class when mood changes

idea 2: change elements when mood changes
*/

function SongVisuals(props) {
  const [visualColor, setVisualColor] = React.useState("red")

  React.useEffect( () => {
    setVisualColor( visualColor === "blue" ? "red" : "blue")
  }, [props.songMood])
  
  return(
    <div>
      <p style={
        {color: visualColor}
      }>SongVisuals</p>
    </div>
  )
}

export default SongVisuals;