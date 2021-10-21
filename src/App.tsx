import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Cookbook from './components/Cookbook';
import Recipe from './components/Recipe';

function App() {

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/recipe/:recipeId" component={Recipe} />
          <Route path="/">
            <Cookbook />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
