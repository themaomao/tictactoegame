import React from 'react'

import { Ox } from "./Ox"
import "./Oard.css"

export const Oard = ({ oard, onClick }) => {
  return (
    <div className="oard">
      {
        oard.map((value, idx) => {
          return <Ox value={value} onClick={() => value === null && onClick(idx)} />;
        })
      }
    </div>
  )
}
