import Index from "./Pages/Index";
import Login from "./Pages/login";
import Join from "./Pages/Join";
import "./App.css";
import { Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Index />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/join">
          <Join />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
