import "../styles/Menu.css";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import uniqid from "uniqid";
import Input from "./Input";

function Menu() {
  const [card, setCard] = useState({});
  const [cards, setCards] = useState([]);
  const [nameChange, setNameChange] = useState([]);
  const menuMounted = useRef(false);

  // About
  const info = () => {
    const about = document.querySelector(".about");
    const slide = document.querySelector(".slide");
    const ham = document.querySelector(".ham");
    const bur = document.querySelector(".bur");
    const ger = document.querySelector(".ger");
    const author = document.querySelector(".author");
    const title = document.querySelector(".title");

    if (about.classList.contains("closed")) {
      ham.style.transform = "rotate(45deg) translate(22.5%, 100%)";
      bur.style.opacity = "0";
      ger.style.transform = "rotate(-45deg) translate(22.5%, -100%)";
      slide.style.transform = "translateX(100%)";
      author.style.color = "#fada5e";
      title.style.color = "#fada5e";
      about.classList.toggle("closed");
    } else {
      ham.style.transform = "rotate(0) translate(0)";
      bur.style.opacity = "1";
      ger.style.transform = "rotate(0) translate(0)";
      slide.style.transform = "translateX(-100%)";
      author.style.color = "#000";
      title.style.color = "#000";
      about.classList.toggle("closed");
    }
  };

  // Creation
  const addNewPedalboard = () => {
    setCards(cards.concat(card));
  };

  // Name Change
  useEffect(() => {
    const newCards = cards;
    newCards.forEach((card) => {
      if (card.id === nameChange[1]) {
        card.name = nameChange[0];
      }
    });
    setCards(newCards);
    setCard({ id: uniqid(), name: "New Pedalboard" });
  }, [cards, nameChange]);

  // Deletion
  const deletePedalboard = (target) =>
    setCards(cards.filter((card) => card.id !== target.id));

  // Lock Delete
  const hideDelete = () => {
    const buttons = document.querySelectorAll(".delete-card");
    buttons.forEach((button) => {
      button.classList.toggle("hide-delete");
    });
    if (buttons[0] && buttons[0].classList.contains("hide-delete")) {
      localStorage.setItem("cardLock", "true");
    } else {
      localStorage.setItem("cardLock", "false");
    }
  };

  // Set localStorage
  useEffect(() => {
    if (menuMounted.current) {
      localStorage.setItem("cards", JSON.stringify(cards));
    } else {
      menuMounted.current = true;
    }
  }, [cards, nameChange]);

  // Load localStorage
  useEffect(() => {
    if (localStorage.cards) {
      setCards(JSON.parse(localStorage.getItem("cards")));
    }
  }, []);

  // Clear localStorage
  const warning = () => {
    document.querySelector(".warning").style.display = "block";
  };

  const clearStorage = (e) => {
    console.log(e)
    if (e.target.elements[1].checked) {
      localStorage.clear();
      setCards([]);
    }
    e.preventDefault();
    document.querySelector(".warning").style.display = "none";
  };

  return (
    <main className="Menu">
      <header className="header">
        <div className="about closed" onClick={info}>
          <div className="ham"></div>
          <div className="bur"></div>
          <div className="ger"></div>
        </div>
        <div className="slide">
          <p>
            -Tired of forgetting where your knobs and switches were set as you
            change styles of music? How about what pedals you used to achieve
            that specific sound? ...Tone Token helps solve that problem.
          </p>
          <p>
            -Create pedalboards with pedals inside them, and knobs and switches
            inside them too! Click edit to customize the name of anything. Click
            on the Card Lock Token at the top of the main menu page to hide all
            'Delete' buttons to prevent unhappy accidents. Clear storage on the
            main menu screen will wipe it all and erase the local storage from
            your browser.
          </p>
          <p>
            -Only saves to your browser's local storage at the moment, so no
            cross-device accounts available yet. This is a Front-end Development
            project.
          </p>
          <p>
            <a className="website" href="https://tjdrz.com">
              https://tjdrz.com
            </a>
          </p>
        </div>
        <div className="card-lock">
          <div className="outer-lock" onClick={hideDelete}>
            <div className="inner-lock"></div>
          </div>
          <p>Card Lock</p>
        </div>
        <h2 className="author">TJDRZ's</h2>
        <h1 className="title">Tone Token</h1>
        <div className="header-buttons">
          <button className="new-pedalboard" onClick={addNewPedalboard}>
            New Pedalboard
          </button>
          <button className="clear-storage" onClick={warning}>
            Clear Storage
          </button>
        </div>
        <div className="warning">
          <form onSubmit={clearStorage}>
            <p>Are you sure?</p>
            <p>(Everything saved will be lost!)</p>
            <fieldset>
              <label htmlFor="warning">
                <input name="warning" type="radio" />
                Yes
              </label>
              <label htmlFor="warning">
                <input name="warning" type="radio" />
                No
              </label>
            </fieldset>
            <button type="submit">Submit</button>
          </form>
        </div>
      </header>
      <ul className="card-container">
        {cards.map((card) => {
          return (
            <li className="card" key={card.id}>
              <div className="card-name">
                <Input
                  type="text"
                  name={"Pedalboard Name"}
                  placeholder="Enter a pedalboard name"
                  lift={setNameChange}
                  card={card}
                />
              </div>
              <div className="card-buttons">
                <Link to={`/pedalboard/${card.id}/${card.name}`}>
                  <button>Open Pedalboard</button>
                </Link>
                <button
                  className={`delete-card ${
                    localStorage.cardLock === "true" ? "hide-delete" : 0
                  }`}
                  onClick={() => deletePedalboard(card)}
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

export default Menu;
