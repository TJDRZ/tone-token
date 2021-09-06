import '../styles/Pedalboard.css';

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
    </div>
  );
}
  
export default Pedalboard;