import { Route, Switch } from "react-router-dom";
import Home from "./layout/Home";

import "./App.css";
import Cart from "./component/cart/Cart";

function App() {
  return (
    <div className="App">
      <Switch>
      <Route exact path="/cart">
          <Cart />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
