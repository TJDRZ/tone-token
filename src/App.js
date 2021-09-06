import './styles/App.css';
import Pedalboard from './components/Pedalboard';
import Pedalbody from './components/Pedalbody';
import Knob from './components/Knob';
import Switch from './components/Switch';

function App() {
  return (
    <div className="App">
      <Pedalboard />
      <Pedalbody />
      <Knob />
      <Switch />
    </div>
  );
}

export default App;
