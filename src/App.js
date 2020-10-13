import React from 'react';
import { Header } from './components/Navigation/Header/Header';

import Routing from './routes/Routing';
import './shared/design/Global.css';

function App() {
  return (

    <div id="wrapper">
    <Routing> 
      <Header />
    </Routing>
    </div>
  );
}

export default App;
