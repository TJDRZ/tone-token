import '../styles/Pedalboard.css';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import uniqid from 'uniqid';
import Pedalbody from './Pedalbody';

function Pedalboard(props) {
  const [pedals, setPedals] = useState([]);

  useEffect(() => {
    if (localStorage.cards) {
      setPedals(JSON.parse(localStorage.getItem(`${props.currentBoard}pedals`)));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(`${props.currentBoard}pedals`, JSON.stringify(pedals));
  }, [pedals]);

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

  const addPedal = () => {
    const id = uniqid();
    setPedals(pedals.concat(id));
  };

  const deletePedal = id => setPedals(pedals.filter(card => card !== id));

  return (
    <div className="Pedalboard-container">
      <header className="Pedalboard-header">
        <Link to="/tone-token">Click Here to Go Back to Cards</Link>
        <button onClick={addPedal}>Add New Pedal</button>
      </header>
      <div className="Pedalboard" onDragOver={dragOver} onDrop={drop}>
        <ul>
            {pedals.map(pedal => {
              return (
                <li key={pedal}>
                  <Pedalbody />
                  <Link to={`/pedalbody/${pedal}`}>
                    <button>Open Pedal</button>
                  </Link>
                  <button onClick={() => deletePedal(pedal)}>Delete</button>
                </li>
              )
            })}
        </ul>
      </div>
    </div>
  );
}
  
export default Pedalboard;