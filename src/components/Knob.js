import "../styles/Knob.css";
import Input from "./Input";

function Knob() {
  return (
    <div className="Knob">
      <Input
        type="range"
      />
    </div>
  );
}

export default Knob;
