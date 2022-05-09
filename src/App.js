import React from 'react';
import { useState } from 'react';
import bulbData from './bulbData';

export default function App() {
  const [redOn, setRedLight] = useState(false);
  const [yellowOn, setYellowLight] = useState(false);
  const [greenOn, setGreenLight] = useState(false);

  const colorRed = redOn ? bulbData[0].color : "black" ;
  const colorYellow = yellowOn ? bulbData[1].color : "black";
  const colorGreen = greenOn ? bulbData[2].color : "black";

  const setRed = () => {
    setRedLight(!redOn);
    setYellowLight(false);
    setGreenLight(false);
  }

  const setYellow = () => {
    setYellowLight(!yellowOn);
    setRedLight(false);
    setGreenLight(false);
  }

  const setGreen = () => {
    setGreenLight(!greenOn);
    setRedLight(false);
    setYellowLight(false);
  }

  return (
    <div className="App">
      <section>
        <div id="control-panel">
          <h2 id="stop" className="button" onClick={setRed}>
            Stop
          </h2>
          <h2 id="slow" className="button" onClick={setYellow}>
            Slow
          </h2>
          <h2 id="go" className="button" onClick={setGreen}>
            Go
          </h2>
        </div>
        <div id="traffic-lights">
          <div className={`bulb ${colorRed}`}></div>
          <div className={`bulb ${colorYellow}`}></div>
          <div className={`bulb ${colorGreen}`}></div>
        </div>
      </section>
    </div>
  );
}

