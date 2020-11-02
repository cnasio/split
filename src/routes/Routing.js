import React, { Suspense, useContext, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import { UserContext } from '../shared/context/UserContext'
import RoutingPath from './RoutingPath'
import HomeView from '../view/HomeView'
import AuthView from '../view/AuthView'
import ProfileView from '../view/ProfileView'
import InventoryView from '../view/InventoryView'
import CommunityView from '../view/CommunityView'

    // If !logged in: <Login /> 
    // Header (Logo, Search, Navbar, Notifications) 
    // Sidebar (left bar) 
    // Inventory 
    // Friends/Chat (right bar) 


const Routing = (props) => {

  const [currentUser, setCurrentUser] = useContext(UserContext)

  const blockRouteifAuth = chosenView => currentUser.email ? HomeView : chosenView      
  const blockRouteifNotAuth = chosenView => !currentUser.email ? AuthView : chosenView      

  // const checkAuthInBrowser = () => {
  //   setCurrentUser({email: localStorage.getItem("DUMMY_user")})
  // }

  // useEffect(() => {
  //   checkAuthInBrowser()
  // })

  return (
    <Router>
      <Suspense fallback={"Loading..."}>
        {props.children}
        <Switch>
          <Route exact path={RoutingPath.homeView} component={blockRouteifNotAuth(HomeView)} />
          <Route exact path={RoutingPath.inventoryView} component={blockRouteifNotAuth(InventoryView)} />
          <Route exact path={RoutingPath.communityView} component={blockRouteifNotAuth(CommunityView)} />
          <Route exact path={RoutingPath.profileView} component={blockRouteifNotAuth(ProfileView)} />
          <Route exact path={RoutingPath.authView} component={blockRouteifAuth(AuthView)} />
          <Redirect to={RoutingPath.homeView} />
        </Switch>
      </Suspense>
    </Router>
  )
}

export default Routing;