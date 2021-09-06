import '../styles/Switch.css';
import uniqid from 'uniqid';
import { useState } from "react";

function Switch() {
  const [position, setPosition] = useState('mid');

  const dragStart = e => {
    e.dataTransfer.setData('switch', e.target.id);
  };

  return (
    <div className="Switch" id={uniqid()} draggable onDragStart={dragStart}>
      {position}
    </div>
  );
}
  
export default Switch;