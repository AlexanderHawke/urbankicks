import Navbar from './Navbar'
// import Home from './onClick and State Example'
import Home from './Home'
import Shop from './Shop'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path ="/">
              <Home />
            </Route>
            <Route path ="/shop">
              <Shop />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
