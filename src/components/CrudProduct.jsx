import React, { Fragment } from "react";
import { db } from "../firebase";
import "./CrudProduct.css";

export default function CrudProduct({ product }) {
  // para comprobar que estan pasando la data de los objetos iterados
  // console.log('product:', product)

  const deleteProduct = async (id) => {
    // que pase el id del producto
    console.log(id);
    if (window.confirm("estas seguro de borrar?")) {
      await db.collection("products").doc(id).delete();
      console.log("producto borrado");
    }
  };

  return (
    <div>
      {product && (
        <Fragment>
          <div id="crudProduct-content">
            <img src={product.image} id="product-photos"></img>
            <p id="styleId">{product.id}</p>
            <p id="styleProductName">{product.name}</p>
            <p className="styleIdChar">{product.color}</p>
            <p className="styleIdChar">{product.description}</p>
            <p id="stylePriceName">{product.price}</p>
            <p className="styleIdChar">{product.type}</p>
            <p className="styleIdChar">{product.category}</p>
            <button
              className="btn-primary"
              onClick={() => deleteProduct(product.id)}
            >
              Eliminar
            </button>
          </div>
        </Fragment>
      )}
    </div>
  );
}
