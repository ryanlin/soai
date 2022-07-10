import React from 'react'

/*
idea 1:
change class when mood changes

idea 2: change elements when mood changes
*/

function SongVisuals({ songData, visibility }) {
  const [visualColor, setVisualColor] = React.useState("red")

  React.useEffect(() => {
    setVisualColor(songData? "red" : "blue")
    console.log(songData);

    if(songData) {  
      var minim = 2 * (60 / songData.bpmPrediction.value)
      console.log(minim);
    
      const tile = document.querySelector('.tile');
      tile.style.setProperty('--bpm-into-minim', minim +'s');
    }

  }, [songData])

  return (
    <div>
      <p style={{
        visibility: visibility,
        color: visualColor
      }}>SongVisuals</p>
      <div id='container' className='container'>
        
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