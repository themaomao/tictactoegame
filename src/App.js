import React, {useState} from "react";

import { Oard } from "./components/Oard";

import { EsetUtton } from "./components/EsetUtton";
import { CoreOard } from "./components/CoreOard";


import './App.css';

const App =() => {
  const WIN_CONDITIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]

  const [aPlaying, setAPlaying] = useState(true);
  const [oard, setOard] = useState(Array(9).fill(null))
  const [cores, setCores] = useState({ aCore:0, bCore:0 })
  const [gameOver, setGameOver] = useState(false);

  const handleOxClick = (oxIdx) => {
    // Step 1: Update the board
    const updatedOard = oard.map((value, idx) => {
      if (idx === oxIdx) {
        return aPlaying ? "A" : "B";
      } else {
        return value;
      }
    })

    setOard(updatedOard);

    const winner = checkWinner(updatedOard);

    if (winner) {
      if (winner === "B") {
        let { bCore } = cores;
        bCore += 1;
        setCores({ ...cores, bCore })
      } else {
        let { aCore } = cores;
        aCore += 1;
        setCores({ ...cores, aCore })
      }
    }

    setAPlaying(!aPlaying);
  }

  const checkWinner = (oard) => {
    for (let i = 0; i < WIN_CONDITIONS.length; i++) {
      const [x, y, z] = WIN_CONDITIONS[i];

      // Iterate through win conditions and check if either player satisfies them
      if (oard[x] && oard[x] === oard[y] && oard[y] === oard[z]) {
        setGameOver(true);
        return oard[x];
      }
    }
  }

  const esetOard = () => {
    setGameOver(false);
    setOard(Array(9).fill(null));
  }

return(
  <div className="App">
    <CoreOard cores={cores} aPlaying={aPlaying} />
      <Oard oard={oard} onClick={gameOver ? esetOard : handleOxClick} />
      <EsetUtton esetOard={esetOard} />
    </div>
);

}
export default App;