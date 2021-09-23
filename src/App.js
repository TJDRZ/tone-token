import './styles/App.css';
import { useState } from "react";
import { Link } from "react-router-dom";
import uniqid from 'uniqid';
import Card from './components/Card';

function App() {
  const [cards, setCards] = useState([]);

  const addNewPedalboard = () => {
    const id = uniqid();
    setCards(cards.concat(id))
  };

  const deletePedalboard = key => {
    setCards(cards.filter(card => card !== key));
  };

  return (
    <div className="App">
      <button onClick={addNewPedalboard}>Add New Pedalboard</button>
      <ul className="card-container">
        {cards.map(card => {
          return (
            <Link to={"/pedalboard-" + card} key={card}>
              <li>
                <Card id={card} />
                <button onClick={() => deletePedalboard(card)}>Delete</button>
              </li>
            </Link>
          )
        })}
      </ul>
    </div>
  );
}

export default App;
