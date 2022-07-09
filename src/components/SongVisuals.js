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
    setVisualColor(visualColor === "blue" ? "red" : "blue")

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
        <div className='innerBar' id='dot6'></div>
        <div className='innerBar' id='dot7'></div>
        <div className='innerBar' id='dot8'></div>
        <div className='innerBar' id='dot9'></div>
        <div className='innerBar' id='dot10'></div>
        <div className='innerBar' id='dot11'></div>
        <div className='innerBar' id='dot12'></div>
        <div className='innerBar' id='dot13'></div>
        <div className='innerBar' id='dot14'></div>
        <div className='innerBar' id='dot15'></div>



      </div>
    </div>
  )
}

export default SongVisuals;