import React, {Fragment} from 'react';
import {db} from '../firebase'


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
    <div>
      {product && (
        <Fragment>
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
        </Fragment>
      )}
    </div>
  );
}

