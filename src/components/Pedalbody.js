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
  const [flicker, setFlicker] = useState({}); // Switch is a reserved word
  const [flickers, setFlickers] = useState([]);
  const [nameChange, setNameChange] = useState([]);
  const pedalboardMounted = useRef(false);

  // Creation
  

  // Name Change
  

  // Deletion
  

  // Set localStorage
  

  // Load localStorage
  

  return (
    <main className="Pedalbody">
      <header className="header">
        <Link to={"/tone-token"}>Click Here to Go Back to Pedalboards</Link>
        <h1 className="title">{pedalbodyID.name}</h1>
      </header>
    </main>
  );
}

export default Pedalbody;

