import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home.js'
import Navbar from './Navbar.js'
import Quiz from './Quiz.js'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/quiz">
              <Quiz />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
