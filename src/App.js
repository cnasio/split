import React from 'react';
import { Navbar } from './components/Navbar/Navbar';

import Routing from './routes/Routing';
//import '../shared/design/App.css';

function App() {
  return (

    <>
    <Routing> 
      <Navbar />
    </Routing>
    </>
  );
}

export default App;
