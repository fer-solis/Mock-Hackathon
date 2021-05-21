import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import AdminProducts from './AdminProducts';
import Carrusel from './components/Carrusel'
import Header from './components/Header';
import Products from './Products';


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path = '/' exact>
            <Header/>
            <Carrusel/>


          </Route>
          {/* <Route path = '/home'>
            <Login />
          </Route>
          <Route path = '/promotion'>
            <h1>Hola soy para las ordenes</h1>
          </Route> */}
          <Route path = '/categories'>
            <h1>aqui va el listado de categorias</h1>
          </Route>
          <Route path = '/products'>
          <p>aquí veo todos los productos si soy cliente</p>
          <Products/>
          </Route>
          <Route path = '/admin'>
            <Header/>
            <p>aquí agrego productos si soy administrador</p>
            <AdminProducts/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
