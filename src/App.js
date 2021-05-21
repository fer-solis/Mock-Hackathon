import "./App.css";
import { db } from "./firebase";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import AdminProducts from "./AdminProducts";
import Carrusel from "./components/Carrusel";
import Header from "./components/Header";
import Search from "./components/Search";
import Products from "./Products"

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact>
            <Header />
            <Search />
            <Carrusel />
          </Route>
          <Route path ='/products'>
          <Header />
          <br></br>
          <Products/>
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
          <Route path="/admin">
            <Header />
            <h1>Hola soy el administrador</h1>
            <p>aquí agrego productos</p>
            <AdminProducts />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
