import '../styles/Knob.css';
import uniqid from 'uniqid';
import { useState } from "react";

function Knob() {
  const [level, setLevel] = useState(0);

  const dragStart = e => {
    e.dataTransfer.setData('knob', e.target.id);
  };

  return (
    <div className="Knob" id={uniqid()} draggable onDragStart={dragStart}>
      {level}
    </div>
  );
}
  
export default Knob;