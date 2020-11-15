import React, { Suspense }  from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import LoadingSpinner from './components/UIElements/LoadingSpinner/LoadingSpinner'

import NewItem from './components/Items/NewItem';
import UpdateItem from './components/Items/UpdateItem';
import HomeView from './view/HomeView'
import AuthView from './view/AuthView'
import InventoryView from './view/InventoryView'
import CommunityView from './view/CommunityView'
import Header from './components/Navigation/Header/Header';
import LeftBar from './components/Navigation/LeftBar/LeftBar';
import RightBar from './components/Navigation/RightBar/RightBar';
import { useAuth } from './shared/hooks/auth-hook'
import { UserContext } from './shared/context/UserContext'

import './shared/design/Global.css';

function App() {

  const { token, login, logout, userId } = useAuth();
  let routes;


  if (token) {
    routes = (
      <Switch>
        <Route path="/" exact>
          <HomeView />
        </Route>
        <Route exact path="/home">
          <HomeView />
        </Route>
        <Route path="/:userId/items" exact>
          <InventoryView />
        </Route>
        <Route path="/items/new">
          <NewItem />
        </Route>
        <Route path="/items/:itemsId" exact>
          <UpdateItem />
        </Route>
        <Route path="/community" exact>
          <CommunityView />
        </Route>
        <Redirect to="/" />
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route path="/" exact>
          <AuthView />
        </Route>
        <Route path="/:userId/items" exact>
          <AuthView />
        </Route>
        <Route path="/auth">
          <AuthView />
        </Route>
        <Redirect to="/auth" />
      </Switch>
    );
  }



  return (
    <UserContext.Provider value={{ isLoggedIn: !!token, token, userId, login, logout }}>
      <Router>
          <div id="wrapper">
            <Header userId={userId} />
            <LeftBar userId={userId} />
            <RightBar />
            <Suspense fallback={
            <div className="center">
              <LoadingSpinner />
            </div>}>
            {routes}
          </Suspense>
        </div>
      </Router>    
    </UserContext.Provider>
  );
}

export default App;
