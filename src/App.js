
import "./App.css";
import { db } from "./firebase";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import AdminProducts from "./AdminProducts";
import Carrusel from "./components/Carrusel";
import Cart from './Cart'
import Table from "./components/Table";
import Header from "./components/Header";
// import Search from "./components/Search";
import Products from "./Products";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact>
            <Header />
            {/* <Search /> */}
            <Carrusel />
            <Table />
          </Route>
          <Route path="/products">
            <Header />
            <br></br>
            <Products />

          </Route>
          <Route path = '/categories'>
            <Cart/>
          </Route>
          <Route path="/admin">
            <Header />
            <AdminProducts />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
