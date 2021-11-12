import { Routes, Route } from "react-router-dom";
import Pedalboard from "./components/Pedalboard";
import Pedalbody from "./components/Pedalbody";
import Menu from "./components/Menu";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/tone-token" element={<Menu />} />
        <Route path="/pedalboard/:id" element={<Pedalboard />} />
        <Route path="/pedalbody/:id" element={<Pedalbody />} />
      </Routes>
    </div>
  );
}

export default App;
