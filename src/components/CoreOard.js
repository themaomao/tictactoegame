import React from "react";

import "./CoreOard.css"

export const CoreOard = ({ cores, aPlaying }) =>{
    const { aCore, bCore } = cores;
    return(
        <div className="coreoard">
        <span className={`core a-core ${!aPlaying && "inactive"}`}>A - {aCore}</span>
      <span className={`core b-core ${aPlaying && "inactive"}`}>B - {bCore}</span>
    </div>
      )
}