import "../styles/Menu.css";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import uniqid from "uniqid";
import Card from "./Card";

function Menu() {
  const [card, setCard] = useState({ id: null, name: "" });
  const [cards, setCards] = useState([]);
  const isMounted = useRef(false);

  useEffect(() => {
    if (localStorage.cards) {
      setCards(JSON.parse(localStorage.getItem("cards")));
    }
  }, []);

  useEffect(() => {
    if (isMounted.current) {
      localStorage.setItem("cards", JSON.stringify(cards));
    } else {
      isMounted.current = true;
    }
  }, [cards]);

  const addNewPedalboard = () => {
    const id = uniqid();
    setCard({
      id: id,
      name: "newCard"
    });
    setCards(cards.concat(card));
  };

  const deletePedalboard = (keycard) =>
    setCards(cards.filter((card) => card.id !== keycard.id));

  return (
    <main className="Menu">
      <button onClick={addNewPedalboard}>Add New Pedalboard</button>
      <button onClick={() => localStorage.clear()}>Clear localStorage</button>
      <ul className="card-container">
        {cards.map((card) => {
          return (
            <li key={card.id}>
              <Card getName={setCard} />
              <Link to={`/pedalboard/${card.id}`}>
                <button>Open Pedalboard</button>
              </Link>
              <button onClick={() => deletePedalboard(card)}>Delete</button>
            </li>
          );
        })}
      </ul>
    </main>
  );
}

export default Menu;
