import { useState, useEffect, useRef } from "react";
import { Basic } from "react-dial-knob";

function Knob(props) {
  const knobMounted = useRef(false);
  const [value, setValue] = useState(0);

  // Set localStorage
  useEffect(() => {
    if (knobMounted.current) {
      localStorage.setItem(props.id, value);
    } else {
      knobMounted.current = true;
    }
  }, [value, props.id]);

  // Load localStorage
  useEffect(() => {
    if (localStorage.getItem(props.id) !== null) {
      setValue(localStorage.getItem(props.id));
    }
  }, []);

  return (
    <div className="Knob">
      <Basic
        className="BasicKnob"
        diameter={150}
        min={0}
        max={100}
        step={1}
        value={value}
        theme={{
          defaultColor: "#000",
          activeColor: "#fada5e",
          gradientStart: "#bcb499",
          gradientEnd: "#efd475",
        }}
        onValueChange={setValue}
      ></Basic>
    </div>
  );
}

export default Knob;
