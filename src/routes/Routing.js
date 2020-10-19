import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import HomeView from '../view/HomeView'
import InventoryView from '../view/InventoryView'
import CommunityView from '../view/CommunityView'
import AuthView from '../view/AuthView'

    // If !logged in: <Login /> 
    // Header (Logo, Search, Navbar, Notifications) 
    // Sidebar (left bar) 
    // Inventory 
    // Friends/Chat (right bar) 

const Routing = (props) => {
  return (
    <Router>
      <Suspense fallback={"Loading..."}>
        {props.children}
        <Switch>
          <Route exact path="/home" component={HomeView} />
          <Route exact path="/inventory" component={InventoryView} />
          <Route exact path="/community" component={CommunityView} />
          <Route exact path="/auth" component={AuthView} />
          <Redirect to="/home" />
        </Switch>
      </Suspense>
    </Router>
  )
}

export default Routing;