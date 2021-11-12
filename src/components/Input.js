import "../styles/Input.css"
import React, { useState, useEffect } from "react";

function Input(props) {
  const [text, setText] = useState("");
  const [textSet, setTextSet] = useState(false);

  useEffect(() => {
    setText(props.card.name);
    setTextSet(true);
  }, []);

  const update = (e) => {
    setText(e.target.value);
  };

  const submit = () => {
    setTextSet(true);
    props.lift([text, props.card.id]); // Lifts text state up after submit
  };

  const edit = () => {
    setTextSet(false);
  };

  const { type, name, placeholder, pattern } = props;
  return (
    <div className="Input">
      {textSet ? (
        <div>
          <span>{text} </span>
          <button onClick={edit}>Edit</button>
        </div>
      ) : (
        <form onSubmit={submit}>
          <label htmlFor={name}>{name}: </label>
          <input
            type={type}
            name={name}
            required
            maxLength="10"
            placeholder={placeholder}
            pattern={pattern}
            onChange={update}
          />
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
}

export default Input;
