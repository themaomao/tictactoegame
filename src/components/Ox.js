import React from 'react';

import "./Ox.css";

export const Ox = ({ value, onClick }) => {
    const style = value === "A" ? "ox a" : "ox b";

    return (
        <button className={style} onClick={onClick}>{value}</button>
    )
}