import "../styles/Pedalboard.css";
import { useState, useEffect, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import uniqid from "uniqid";
import Input from "./Input";

function Pedalboard() {
  const pedalboardID = useParams();
  const [pedal, setPedal] = useState({});
  const [pedals, setPedals] = useState([]);
  const [nameChange, setNameChange] = useState([]);
  const pedalboardMounted = useRef(false);

  // Creation
  const addNewPedal = () => {
    setPedals(pedals.concat(pedal));
  };

  // Name Change
  useEffect(() => {
    const newPedals = pedals;
    newPedals.forEach((pedal) => {
      if (pedal.id === nameChange[1]) {
        pedal.name = nameChange[0];
      }
    });
    setPedals(newPedals);
    setPedal({ id: uniqid(), name: "New Pedal" });
  }, [pedals, nameChange]);

  // Deletion
  const deletePedal = (target) =>
    setPedals(pedals.filter((pedal) => pedal.id !== target.id));

  // Set localStorage
  useEffect(() => {
    if (pedalboardMounted.current) {
      localStorage.setItem(`${pedalboardID.id}`, JSON.stringify(pedals));
    } else {
      pedalboardMounted.current = true;
    }
  }, [pedals, nameChange, pedalboardID]);

  // Load localStorage
  useEffect(() => {
    if (localStorage.getItem(`${pedalboardID.id}`) !== null) {
      setPedals(JSON.parse(localStorage.getItem(`${pedalboardID.id}`)));
    }
  }, []);

  return (
    <main className="Pedalboard">
      <header className="header">
        <Link to="/tone-token">Click Here to Go Back to Pedalboards</Link>
        <h1 className="title">{pedalboardID.name}</h1>
        <div className="header-buttons">
          <button onClick={addNewPedal}>Add New Pedal</button>
        </div>
      </header>
      <ul className="card-container">
        {pedals.map((pedal) => {
          return (
            <li className="card" key={pedal.id}>
              <div className="card-name">
                <Input
                  type="text"
                  name={"Pedal Name"}
                  placeholder="Enter a pedal name"
                  lift={setNameChange}
                  card={pedal}
                />
              </div>
              <div className="card-buttons">
                <Link to={`/pedalbody/${pedal.id}/${pedal.name}`}>
                  <button>Open Pedal</button>
                </Link>
                <button
                  className={`delete-card ${
                    localStorage.cardLock === "true" ? "hide-delete" : 0
                  }`}
                  onClick={() => deletePedal(pedal)}
                >
                  Delete
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </main>
  );
}

export default Pedalboard;
