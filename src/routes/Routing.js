import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { HomeView } from '../view/HomeView'
import { InventoryView } from '../view/InventoryView'

      {/* If !logged in: <Login /> */}
      {/* Header (Logo, Search, Navbar, Notifications) */}
      {/* Sidebar (left bar) */}
      {/* Inventory */}
      {/* Friends/Chat (right bar)  */}

const Routing = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/home" component={HomeView} />
        <Route exact path="/inventory" component={InventoryView} />
      </Switch>
    </Router>
  )
}

export default Routing;