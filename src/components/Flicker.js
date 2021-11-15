import "../styles/Flicker.css";
import { useState, useEffect, useRef } from "react";

function Flicker(props) {
  const flickerMounted = useRef(false);
  const parent = useRef();
  const one = useRef();
  const two = useRef();
  const three = useRef();
  const [firstPosition, setFirstPosition] = useState();
  const [secondPosition, setSecondPosition] = useState();
  const [thirdPosition, setThirdPosition] = useState();
  const [activePosition, setActivePosition] = useState();

  useEffect(() => {
    setFirstPosition(one.current);
    setSecondPosition(two.current);
    setThirdPosition(three.current);
  }, []);

  const flickerPosition = () => {
    if (firstPosition.classList.contains("active-flicker-position")) {
      firstPosition.classList.toggle("active-flicker-position");
      secondPosition.classList.toggle("active-flicker-position");
      setActivePosition("flicker-position-two");
    } else if (secondPosition.classList.contains("active-flicker-position")) {
      secondPosition.classList.toggle("active-flicker-position");
      thirdPosition.classList.toggle("active-flicker-position");
      setActivePosition("flicker-position-three");
    } else if (thirdPosition.classList.contains("active-flicker-position")) {
      thirdPosition.classList.toggle("active-flicker-position");
      firstPosition.classList.toggle("active-flicker-position");
      setActivePosition("flicker-position-one");
    }
  };

  // Set localStorage
  useEffect(() => {
    if (flickerMounted.current) {
      localStorage.setItem(props.id, activePosition);
    } else {
      flickerMounted.current = true;
    }
  }, [activePosition, props.id]);
  
  // Load localStorage
  useEffect(() => {
    const children = parent.current.children;
    if (localStorage.getItem(props.id) !== null) {
      const active = localStorage.getItem(props.id);
      for (let i = 0; i < children.length; i++) {
        if (children[i].classList.contains(active)) {
          children[i].classList.add("active-flicker-position");
        }
      }
    } else {
      setActivePosition("flicker-position-one");
      children[0].classList.toggle("active-flicker-position");
    }
  }, [props.id]);

  return (
    <div className="Flicker" ref={parent} onClick={flickerPosition}>
      <div className="flicker-dot flicker-position-one" ref={one}></div>
      <div className="flicker-dot flicker-position-two" ref={two}></div>
      <div className="flicker-dot flicker-position-three" ref={three}></div>
    </div>
  );
}

export default Flicker;
