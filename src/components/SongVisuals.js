import React from 'react'

/*
idea 1:
change class when mood changes

idea 2: change elements when mood changes
*/

const energyDict = {
  'low': 8,
  'medium': 4,
  'high': 2
}

const moodDict = {
  'calm': ['1e5799', '7db9e8'],
  'aggressive': ['ff0000', '000000'],
  'energetic': ['ff0000', 'fff000'],
  'romantic': ['e890d1', 'be90e8'],
  'sexy': ['8422da', '000000']
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
      const songMood = songData.moodTags[0] in moodDict? songData.moodTags[0]: 'sexy';

      console.log(songBpm);
      console.log(songEnergyLevel);
      console.log(songMovement);
      console.log(songMood);

      var minim = 2 * (60 / songBpm);
      var rate = energyDict[songEnergyLevel];
      var cstart = moodDict[songMood][0];
      var cend = moodDict[songMood][1];

      console.log(minim);
      console.log(rate);
      console.log(cstart);
      console.log(cend);
      
      const tiles = document.querySelectorAll('.tile');
      const visualcontainer = document.querySelector('.visual-container');

      tiles.forEach(t => t.style.setProperty('--bpm-into-minim', minim +'s'));
      visualcontainer.style.setProperty('--flow-rate', rate +'s');
      visualcontainer.style.setProperty('--bg-start', '#'+ cstart);
      visualcontainer.style.setProperty('--bg-end', '#' + cend);
    }

  }, [songData])

  return (
    <div>
      <div 
        style={{
          visibility: visibility
        }}
        id='visual-container-id'
        className='visual-container'
      >        
        <div id='column1' className='visual-column'>
          <div className='tile' id='tile1'></div>
          <div className='tile' id='tile2'></div>
          <div className='tile' id='tile3'></div>
        </div>
        <div id='column2' className='visual-column'>
          <div className='tile' id='tile4'></div>
          <div className='tile' id='tile5'></div>
          <div className='tile' id='tile6'></div>
        </div>
        <div id='column3' className='visual-column'>
          <div className='tile' id='tile7'></div>
          <div className='tile' id='tile8'></div>
          <div className='tile' id='tile9'></div>
        </div>
        
      </div>
    </div>
  )
}

export default SongVisuals;