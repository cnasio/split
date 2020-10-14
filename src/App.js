import React from 'react';
import { Header } from './components/Navigation/Header/Header';
import LeftBar from './components/Navigation/LeftBar/LeftBar';
import RightBar from './components/Navigation/RightBar/RightBar';

import Routing from './routes/Routing';
import './shared/design/Global.css';

function App() {
  return (

    <div id="wrapper">
    <Routing> 
      <Header />
      <LeftBar />
      <RightBar />
    </Routing>
    </div>
  );
}

export default App;
