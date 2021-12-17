import ListContainer from "./components/ListContainer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import User from "./components/User";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route>
          <Route path={"/"} exact component={ListContainer}></Route>
        </Route>
      </Switch>

      <Switch>
        <Route path={`/user`} component={User}></Route>
      </Switch>
    </Router>
  );
};

export default App;
