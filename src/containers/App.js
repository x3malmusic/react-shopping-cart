import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "../router/history";

import Cart from "../containers/Cart";
import Form from "../containers/Form";

const App = () => {
  history.push("/cart");
  return (
    <Router history={history}>
      <Switch>
        <Route path="/cart" component={Cart} />
        <Route exact path="/shipping" component={Form} />
      </Switch>
    </Router>
  );
};

export default App;
