import "../styles/Menu.css";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import uniqid from "uniqid";
import Input from "./Input";

function Menu() {
  const [card, setCard] = useState({ id: uniqid(), name: "newCard" });
  const [cards, setCards] = useState([]);
  const [nameChange, setNameChange] = useState([]);
  const isMounted = useRef(false);

  const addNewPedalboard = () => {
    const id = uniqid();
    setCard({
      id: id,
      name: "newCard",
    });
    setCards(cards.concat(card));
  };

  useEffect(() => {
    const newCards = cards;
    newCards.forEach((card) => {
      if (card.id === nameChange[1]) {
        card.name = nameChange[0];
      }
    });
    setCards(newCards);
  }, [cards, nameChange]);

  const deletePedalboard = (target) =>
    setCards(cards.filter((card) => card.id !== target.id));

  const hideDelete = () => {
    const buttons = document.querySelectorAll('.delete-card');
    buttons.forEach(button => {
      button.classList.toggle('hide-delete');
    });
  };

  useEffect(() => {
    if (isMounted.current) {
      localStorage.setItem("cards", JSON.stringify(cards));
    } else {
      isMounted.current = true;
    }
  }, [cards, nameChange]);

  useEffect(() => {
    if (localStorage.cards) {
      setCards(JSON.parse(localStorage.getItem("cards")));
    }
  }, []);

  return (
    <main className="Menu">
      <header className="menu-header">
        <div className="card-lock">
          <div className="outer-lock" onClick={hideDelete}><div className="inner-lock"></div></div>
          <p>Card Lock</p>
        </div>
        <h1 className="title">Tone Token</h1>
        <div className="menu-buttons">
          <button className="new-pedalboard" onClick={addNewPedalboard}>New Pedalboard</button>
          <button className="clear-storage" onClick={() => localStorage.clear()}>Clear Storage</button>
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
                <Link to={`/pedalboard/${card.id}`}>
                  <button>Open Pedalboard</button>
                </Link>
                <button className="delete-card" onClick={() => deletePedalboard(card)}>Delete</button>
              </div>
            </li>
          );
        })}
      </ul>
    </main>
  );
}

export default Menu;
