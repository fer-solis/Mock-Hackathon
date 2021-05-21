import React, {Fragment, useState} from 'react';
import {db} from '../firebase'
import formatCurrency from './Currency';


export default function CrudProduct ({ product, cart, setCart, productList}) {
 // para comprobar que estan pasando la data de los objetos iterados
  //console.log('product:', product)
  //console.log(cart) // está vacío
  //console.log(productList) // todos los productos

  const deleteProduct = async(id) =>{
    // que pase el id del producto
    console.log(id)
    if (window.confirm('estas seguro de borrar?')) {
      await db.collection('products').doc(id).delete()
      console.log('producto borrado')
    }
  }


  // const buyProduct = async (product) => {
  //   console.log(product)
  //   // const cartItems = {...products};
  //   // console.log(cartItems);

  //   // const productObj = { 
  //   //   nombre: products.name, 
  //   //   // descripción: product.description,
  //   //   color: products.color,
  //   //   precio: products.price,
  //   //   categoría: products.category, 
  //   //   // tipo: product.type, 
  //   //   imgagen: products.image };


  // }

  const buyProduct = async (id, productList, cart) =>{
    console.log("cart", cart)
    console.log("product id", product.id)
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
          <div id='crudProduct-content'>
            <img src={product.image} id='product-photos'></img>
            <p id= 'id'>{product.id}</p>
            <p id= 'color'>{product.color}</p>
            <p id= 'description'>{product.description}</p>
            {/* <p id= 'price'>{formatCurrency(product.price)}</p> */}
            <p id= 'price'>{product.price}</p>
            <p id= 'type'>{product.type}</p>
            <p id= 'category'>{product.category}</p>
            <button className='btn-primary' onClick={()=> deleteProduct(product.id)}>
            Eliminar
            </button>
            <button className='btn-primary' onClick={()=> buyProduct(product.id, productList, cart)}>
            Agregar al carrito
            </button>
            </div>
        </Fragment>
      )}
    </div>
  );
}

