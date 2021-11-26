import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home.js'
import Navbar from './components/Navbar.js'
import Overview from './components/Overview.js'

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
            <Route path="/overview">
              <Overview />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
