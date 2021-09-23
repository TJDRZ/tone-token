import '../styles/Pedalboard.css';
// import { useState } from "react";
import { Link } from "react-router-dom";

function Pedalboard() {
  const dragOver = e => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  };

  const drop = e => {
    e.preventDefault();
    if (e.dataTransfer.getData('pedalbody')) {
      const data = e.dataTransfer.getData('pedalbody');
      e.target.appendChild(document.getElementById(data));
    }
  };

  return (
    <div className="Pedalboard" onDragOver={dragOver} onDrop={drop}>
      <Link to="/tone-token">Click Here to Go Back to Cards</Link>
    </div>
  );
}
  
export default Pedalboard;