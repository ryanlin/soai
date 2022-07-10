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
      <div id='container' className={visualColor}>
        
        <div id='column1' className='column'>
          <div className='tile' id='tile1'></div>
          <div className='tile' id='tile2'></div>
          <div className='tile' id='tile3'></div>
        </div>
        <div id='column2' className='column'>
          <div className='tile' id='tile4'></div>
          <div className='tile' id='tile5'></div>
          <div className='tile' id='tile6'></div>
        </div>
        <div id='column3' className='column'>
          <div className='tile' id='tile7'></div>
          <div className='tile' id='tile8'></div>
          <div className='tile' id='tile9'></div>
        </div>
        
      </div>
    </div>
  )
}

export default SongVisuals;