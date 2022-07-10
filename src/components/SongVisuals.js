import React from 'react'

/*
idea 1:
change class when mood changes

idea 2: change elements when mood changes
*/

function SongVisuals({ songData }) {
  const [visibility, setVisibility] = React.useState("hidden")
  const [visualColor, setVisualColor] = React.useState("red")

  React.useEffect(() => {
    setVisibility(songData ? "visible" : "hidden")
    setVisualColor(visualColor === "black" ? "red" : "black")

    console.log(songData);
  }, [songData])

  return (
    <div>
      <p style={{
        visibility: visibility,
        color: visualColor
      }}>SongVisuals</p>
      <div id='visualizer' className={visualColor}>

        <div className='innerBar' id='dot1'></div>
        <div className='innerBar' id='dot2'></div>
        <div className='innerBar' id='dot3'></div>
        <div className='innerBar' id='dot4'></div>
        <div className='innerBar' id='dot5'></div>
      </div>
    </div>
  )
}

export default SongVisuals;