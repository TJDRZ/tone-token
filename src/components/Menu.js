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
      <button onClick={addNewPedalboard}>Add New Pedalboard</button>
      <button onClick={() => localStorage.clear()}>Clear localStorage</button>
      <ul className="card-container">
        {cards.map((card) => {
          return (
            <li key={card.id}>
              <Input
                type="text"
                name={"Pedalboard Name"}
                placeholder="Enter a pedalboard name"
                lift={setNameChange}
                card={card}
              />
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
