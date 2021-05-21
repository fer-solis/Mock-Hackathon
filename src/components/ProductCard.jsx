import React, {Fragment} from 'react';
import {db} from '../firebase'
import "./ProductCard.css";


export default function ProductCard ({ product, productList, cart, setCart}) {
 // para comprobar que estan pasando la data de los objetos iterados
  // console.log('product:', product)

  const addToCart = async (id) => {
    console.log("cart", cart)
    // console.log("product id", product.id)
    console.log("product", product);
    //console.log("product List", productList)
    //console.log("selected items", product)
    const matchIdAdd = cart.find((product) => product.id === id);
    console.log("matchIdd", matchIdAdd)
    if(matchIdAdd){
      setCart(cart.map((item)=> item.id === product.id ? {...matchIdAdd, qty: matchIdAdd.qty + 1 } : item))
    } else {
      setCart([...cart, { ...product, qty:1 }]);
    }
  }


  return (
    <div div className="table">
    {product && (
    <Fragment>
      {productList ? (
        <div id='card'>
            <img src={product.image} id='product-photos'></img>
                <div id="textBox">
                <p id= 'styleId'>{product.id}</p>
                <p id="styleProductName">{product.name}</p>
                <p id="stylePriceName">{product.price}</p>
                <p className="styleIdChar"> Color: {product.color}</p>
                <p className="styleIdChar">Detalles: {product.description}</p>
                <p className="styleIdChar">Depto: {product.category}</p>
                <br></br>
                <button className='btn-primary' onClick={()=> addToCart(product.id)}>Agregar al carrito</button>
                <br></br>
                </div>
            </div>

      ):(
        <div id='cart-count'>
        <div id='name'>{product.name}</div>
        <div id='price'>{product.qty} X ${product.price.toFixed(2)}</div>
        <button onClick={() => addProduct(id)} className='add'>add</button>
        <button onClick={() => removeProduct(id)} className='remove'>remove</button>
        </div>
      )}
    </Fragment>
  )}
    </div>
)}
