import React from 'react';

import Header from './components/Navigation/Header/Header';
import LeftBar from './components/Navigation/LeftBar/LeftBar';
import RightBar from './components/Navigation/RightBar/RightBar';
import Routing from './routes/Routing';
import { UserProvider } from './shared/context/UserContext'
import './shared/design/Global.css';

function App() {
  return (

    <UserProvider>
      <div id="wrapper">
        <Routing> 
          <Header />
          <LeftBar />
          <RightBar />
        </Routing>
      </div>
    </UserProvider>
  );
}

export default App;
