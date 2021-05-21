import React, {Fragment} from 'react';
import {db} from '../firebase'
import "./ProductCard.css";


export default function ProductCard ({ product}) {
 // para comprobar que estan pasando la data de los objetos iterados
  console.log('product:', product)

  const addToCart = async(id) =>{
    // que pase el id del producto
    console.log(id)
    if (window.confirm('estas seguro de añadir?')) {
      console.log('agregado a carrito')
    }
  }

  return (
    <div className="table">
      {product && (
        <Fragment>  
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
        </Fragment>
      )}
    </div>
  );
}