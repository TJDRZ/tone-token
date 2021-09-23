import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./App";
import Pedalboard from "./components/Pedalboard";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/tone-token">
          <App />
        </Route>
        <Route path="/pedalboard">
          <Pedalboard />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;