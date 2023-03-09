import Topbar from "./components/topbar/Topbar";
import Planets from "./pages/planets/Planets";
import Signs from "./pages/signs/Signs";
import Home from "./pages/home/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Houses from "./pages/houses/Houses";



function App() {
  return (
 <Router>
  <Topbar/>
  <Switch>
    <Route exact path="/">
    <Home/>
    </Route>

    <Route path="/planets">
      <Planets/>
    </Route>

    <Route path="/signs">
      <Signs/>
    </Route>

    <Route path="/houses">
      <Houses/>
    </Route>
  </Switch>
  </Router>

  );
}

export default App;
