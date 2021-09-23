import './styles/App.css';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import uniqid from 'uniqid';
import Card from './components/Card';

function App() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    // localStorage.clear();
    if (localStorage.cards) {
      setCards(JSON.parse(localStorage.getItem("cards")));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cards", JSON.stringify(cards));
  }, [cards]);

  const addNewPedalboard = () => {
    const id = uniqid();
    setCards(cards.concat(id));
  };

  const deletePedalboard = id => setCards(cards.filter(card => card !== id));

  return (
    <div className="App">
      <button onClick={addNewPedalboard}>Add New Pedalboard</button>
      <ul className="card-container">
        {cards.map(card => {
          return (
            <li key={card}>
              <Card />
              <Link to={`/pedalboard/${card}`}>
                <button currentBoard={card}>Open Pedalboard</button>
              </Link>
              <button onClick={() => deletePedalboard(card)}>Delete</button>
            </li>
          )
        })}
      </ul>
    </div>
  );
}

export default App;
