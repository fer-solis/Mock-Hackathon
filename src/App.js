import React from 'react';
import {BrowserRouter as Router,
Swithc,
Route,
Link,
Switch} from 'react-router-dom'
import Header from './components/Header'
import Carrusel from './components/Carrusel'
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Header/>
          <Carrusel/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;