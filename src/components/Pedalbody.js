import "../styles/Pedalbody.css";
import { useState, useEffect, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import uniqid from "uniqid";
import Input from "./Input";
import Knob from "./Knob";
import Flicker from "./Flicker";

function Pedalbody() {
  const pedalbodyID = useParams();
  const [knob, setKnob] = useState({});
  const [knobs, setKnobs] = useState([]);
  const [knobNameChange, setKnobNameChange] = useState([]);
  const [flicker, setFlicker] = useState({}); // Switch is a reserved word
  const [flickers, setFlickers] = useState([]); // You know what I meant
  const [flickerNameChange, setFlickerNameChange] = useState([]);
  const pedalbodyMounted = useRef(false);

  // Creation
  const addNewKnob = () => {
    setKnobs(knobs.concat(knob));
  };

  const addNewFlicker = () => {
    setFlickers(flickers.concat(flicker));
  };

  // Name Change
  useEffect(() => {
    // Knob
    const newKnobs = knobs;
    newKnobs.forEach((knob) => {
      if (knob.id === knobNameChange[1]) {
        knob.name = knobNameChange[0];
      }
    });
    setKnobs(newKnobs);
    setKnob({ id: uniqid(), name: "New Knob" });

    //Flicker
    const newFlickers = flickers;
    newFlickers.forEach((flicker) => {
      if (flicker.id === flickerNameChange[1]) {
        flicker.name = flickerNameChange[0];
      }
    });
    setFlickers(newFlickers);
    setFlicker({ id: uniqid(), name: "New Switch" });
  }, [knobs, flickers, knobNameChange, flickerNameChange]);

  // Deletion
  const deleteKnob = (target) =>
    setKnob(knobs.filter((knob) => knob.id !== target.id));
  const deleteFlicker = (target) =>
    setFlicker(flickers.filter((flicker) => flicker.id !== target.id));

  // Set localStorage
  useEffect(() => {
    if (pedalbodyMounted.current) {
      localStorage.setItem(`${pedalbodyID.id}knobs`, JSON.stringify(knobs));
      localStorage.setItem(
        `${pedalbodyID.id}flickers`,
        JSON.stringify(flickers)
      );
    } else {
      pedalbodyMounted.current = true;
    }
  }, [knobs, flickers, knobNameChange, flickerNameChange, pedalbodyID]);

  // Load localStorage
  useEffect(() => {
    if (localStorage.getItem(`${pedalbodyID.id}`) !== null) {
      setKnobs(JSON.parse(localStorage.getItem(`${pedalbodyID.id}knobs`)));
      setFlickers(
        JSON.parse(localStorage.getItem(`${pedalbodyID.id}flickers`))
      );
    }
  }, []);

  return (
    <main className="Pedalbody">
      <header className="header">
        <Link to={"/tone-token"}>Click Here to Go Back to Pedalboards</Link>
        <h1 className="title">{pedalbodyID.name}</h1>
        <button onClick={addNewKnob}>Add New Pedal</button>
        <button onClick={addNewFlicker}>Add New Pedal</button>
      </header>
      <div className="case">
        {knobs.map((knob) => {
          return (
            <div className="knob">
              <Input
                type="text"
                name={"Knob Name"}
                placeholder="Enter a knob name"
                lift={setKnobNameChange}
                card={knob}
              />
              <button className="delete-knob" onClick={() => deleteKnob(knob)}>
                Delete
              </button>
            </div>
          );
        })}
        {flickers.map((flicker) => {
          return (
            <div className="flicker">
              <Input
                type="text"
                name={"Switch Name"}
                placeholder="Enter a switch name"
                lift={setFlickerNameChange}
                card={flicker}
              />
              <button
                className="delete-flicker"
                onClick={() => deleteFlicker(flicker)}
              >
                Delete
              </button>
            </div>
          );
        })}
      </div>
    </main>
  );
}

export default Pedalbody;
