import React from 'react'

/*
idea 1:
change class when mood changes

idea 2: change elements when mood changes
*/

function SongVisuals({ songData }) {
  const [visibility, setVisibility] = React.useState("hidden")
  const [visualColor, setVisualColor] = React.useState("red")

  React.useEffect( () => {
    setVisibility(songData? "visible" : "hidden")
    setVisualColor(visualColor === "blue" ? "red" : "blue")
    
    console.log(songData);
  }, [songData])
  
  return(
    <div>
      <div className={visualColor}>
        <p style={{
          visibility: visibility,
          color: visualColor
        }}>SongVisuals</p>
      </div>
    </div>
  )
}

export default SongVisuals;