import React, {Fragment} from 'react';
import {db} from '../firebase'



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
    <div>
      {product && (
      <Fragment>
        {productList ? (
          <div id='crudProduct-content'>
            <img src={product.image} id='product-photos'></img>
            <p id= 'id'>{product.id}</p>
            <p id= 'color'>{product.color}</p>
            <p id= 'description'>{product.description}</p>
            <p id= 'price'>{product.price}</p>
            <p id= 'type'>{product.type}</p>
            <p id= 'category'>{product.category}</p>
            <button className='btn-primary' onClick={()=> addToCart(product.id)}>
            Agregar al carrito
            </button>
            </div>
        ):(
          <div id='cart-count'>
          <div id='name'>{product.name}</div>
          <div id='price'>{product.qty} X ${product.price.toFixed(2)}</div>
          <button onClick={() => addProduct(_id)} className='add'>add</button>
          <button onClick={() => removeProduct(_id)} className='remove'>remove</button>
          </div>
        )}
      </Fragment>
    )}
      </div>
  )}

