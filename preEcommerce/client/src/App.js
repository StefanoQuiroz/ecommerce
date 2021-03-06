import React, { useState } from 'react';
import './App.scss';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './views/Home';
import Product from './views/Product';
import Cart from './views/Cart';
import BackDrop from './components/BackDrop';
import SideDrawer from './components/SideDrawer';

function App() {
  const [sideToogle, setSideToogle] = useState(false);
  return (
    <div className="app">
      <Router>
        <BackDrop sideToogle={sideToogle}/>
        <SideDrawer sideToogle={sideToogle} />
        <Switch>
          <Route exact path={`/`}>
            <Home/>
          </Route>
          <Route path={`/product/:id`}>
            <Product/>
          </Route>
          <Route path={`/cart`}>
            <Cart/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
