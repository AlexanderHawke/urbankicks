import Navbar from './Navbar'
import Home from './Home'
import Shop from './Shop'
import Cart from './Cart'
import Footer from './Footer'
import Reviews from './Reviews'
import Checkout from './Checkout'

import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
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
            <Route path ="/cart">
              <Cart />
            </Route>
            <Route path ="/checkout">
              <Checkout />
            </Route>
            <Route path ="/reviews">
              <Reviews />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
