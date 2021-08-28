import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Desktop from "./Desktop.js";
import Mobile from "./Mobile.js";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/Default">
            <Desktop />
          </Route>
          <Route path="/Mobile">
            <Mobile />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
