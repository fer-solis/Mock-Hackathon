// --aqui ira todo lo de la comanda modal del carrito
import React, { Fragment } from 'react'
import ProductCard from './components/ProductCard'


const Cart = ({ cart, setCart, product }) => {
  console.log(product)
  // Traer los valores de la cantidad de productos y el id del producto.
  const productPrice = cart.reduce((a, c) => a + c.price * c.qty, 0);
  const taxPrice = productPrice * 0.16;
  const totalPrice = productPrice + taxPrice;

  // definiendo variables para hacer la suma

  return (
    <div className="cart-content">
      {cart.length === 0 ? (
        <div>orden vacia</div>
      ) : (
        console.log('has agregado una compra')
      )}
      {cart.length !== 0 && (
        <Fragment>

          <div>
            <div>Precio productos</div>
            <div>${productPrice.toFixed(2)}</div>
          </div>
          <div>
            <div>Precio IVA</div>
            <div>${taxPrice.toFixed(2)}</div>
          </div>
          <div>
            <div>
              <strong>TOTAL</strong>
            </div>
            <div>${totalPrice.toFixed(2)}</div>
          </div>
        </Fragment>
      )}
      {cart.length > 0 && <button>Hacer pedido</button>}
    </div>
  );
};

export default Cart;
