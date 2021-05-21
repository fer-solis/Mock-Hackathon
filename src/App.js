import './App.css';
import  {db} from './firebase';


import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import AdminProducts from './AdminProducts';


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path = '/' exact>
            <h1>Hola soy el home</h1>
          </Route>
          {/* <Route path = '/home'>
            <Login />
          </Route>
          <Route path = '/promotion'>
            <h1>Hola soy para las ordenes</h1>
          </Route>
          <Route path = '/categories'>
            <h1>Hola soy el jefe de cocina</h1>
          </Route>
          <Route path = '/products'>
            <h1>Hola soy el administrador</h1>
          </Route> */}
          <Route path = '/admin'>
            <h1>Hola soy el administrador</h1>
            <p>aquí agrego productos</p>
            <AdminProducts/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
