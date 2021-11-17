import "../styles/Knob.css";
import { useState } from "react";
import { Basic } from "react-dial-knob";

function Knob() {
  const [value, setValue] = useState(0);

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
          gradientEnd: "#efd475"
        }}
        onValueChange={setValue}
      ></Basic>
    </div>
  );
}

export default Knob;
