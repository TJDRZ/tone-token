import "../styles/Pedalbody.css";

function Pedalbody() {
  const dragStart = e => {
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('pedalbody', e.target.id);
  };

  const dragOver = e => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  };

  const drop = e => {
    e.preventDefault();
    if (e.dataTransfer.getData('knob')) {
      const data = e.dataTransfer.getData('knob');
      e.target.appendChild(document.getElementById(data));
    }
    else if (e.dataTransfer.getData('switch')) {
      const data = e.dataTransfer.getData('switch');
      e.target.appendChild(document.getElementById(data));
    }
  };

  return (
    <div className="Pedalbody" draggable onDragStart={dragStart} onDragOver={dragOver} onDrop={drop}>
    </div>
  );
}

export default Pedalbody;