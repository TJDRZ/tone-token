import "../styles/Pedalboard.css";
import { useState, useEffect, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import uniqid from "uniqid";
import Pedalbody from "./Pedalbody";

function Pedalboard() {
  const pedalboardID = useParams();
  const [pedals, setPedals] = useState([]);
  const isMounted = useRef(false);

  useEffect(() => {
    if (isMounted.current) {
      localStorage.setItem(`pedalboard-${pedalboardID.id}`, JSON.stringify(pedals));
    } else {
      isMounted.current = true;
    }
  }, [pedals]);

  const addPedal = () => {
    const id = uniqid();
    setPedals(pedals.concat(id));
  };
  
  useEffect(() => {
    if (localStorage.pedals) {
      setPedals(JSON.parse(localStorage.getItem(`pedalboard-${pedalboardID}`)));
    }
  }, []);

  // const dragOver = e => {
  //   e.preventDefault();
  //   e.dataTransfer.dropEffect = 'move';
  // };

  // const drop = e => {
  //   e.preventDefault();
  //   if (e.dataTransfer.getData('pedalbody')) {
  //     const data = e.dataTransfer.getData('pedalbody');
  //     e.target.appendChild(document.getElementById(data));
  //   }
  // };

  // const deletePedal = id => setPedals(pedals.filter(card => card !== id));

  return (
    <main className="Pedalboard">
      <header className="header">
        <Link to="/tone-token">Click Here to Go Back to Cards</Link>
        <h1 className="title">{pedalboardID.name}</h1>
        <button onClick={addPedal}>Add New Pedal</button>
      </header>
      {/* <div className="Pedalboard" onDragOver={dragOver} onDrop={drop}>
        <ul>
          {pedals.map((pedal) => {
            return (
              <li key={pedal}>
                <Pedalbody />
                <Link to={`/pedalbody/${pedal}`}>
                  <button>Open Pedal</button>
                </Link>
                <button onClick={() => deletePedal(pedal)}>Delete</button>
              </li>
            );
          })}
        </ul>
      </div> */}
    </main>
  );
}

export default Pedalboard;
