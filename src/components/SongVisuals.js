import React from 'react'

/*
idea 1:
change class when mood changes

idea 2: change elements when mood changes
*/

var energyDict = {
  'low': 8,
  'medium': 4,
  'high': 2
}

function SongVisuals({ songData, visibility }) {
  const [visualColor, setVisualColor] = React.useState("red")

  React.useEffect(() => {
    setVisualColor(songData? "red" : "blue")
    console.log(songData);

    if (songData) {  
      const songBpm = songData.bpmPrediction.value;
      const songEnergyLevel = songData.energyLevel;
      const songMovement = songData.movementTags[0];

      console.log(songBpm);
      console.log(songEnergyLevel);
      console.log(songMovement);

      var minim = 2 * (60 / songBpm);
      var rate = energyDict[songEnergyLevel];

      console.log(minim);
      console.log(rate)
    
      const tiles = document.querySelectorAll('.tile');
      const container = document.querySelector('.container');

      tiles.forEach(t => t.style.setProperty('--bpm-into-minim', minim +'s'));
      container.style.setProperty('--flow-rate', rate +'s');
    }

  }, [songData])

  return (
    <div>
      <div 
        style={{
          visibility: visibility
        }}
      id='container' className='container'>
        
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