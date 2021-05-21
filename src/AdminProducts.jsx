import React, { Fragment } from 'react';
import { db } from './firebase';
import { useEffect, useState } from 'react';

import CrudProduct from './components/CrudProduct'

export default function AdminProducts(props) {
  const [productList, setProductList] = useState([]);
  const [name, setName] = useState("");
  const [description, sepescription] = useState("");
  const [color, setColor] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [type, setType] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    // onSnapshot hace un seguimineto en tiempo real
    db.collection("products").onSnapshot((querySnapshot) => {
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      // añadimos todos los productos al estado
      setProductList(docs);
    });
  };

  const addProduct = async () => {
    const obj = { name, description, color, price, category, type, image };
    await db.collection("products").add(obj);
    clearInput();
    getProducts();
  };

  const clearInput = () => {
    setName("");
    sepescription("");
    setColor("");
    setPrice("");
    setCategory("");
    setType("");
    setImage("");
  };

  return (
    <div className="crud-content">
      <Fragment>
        <input
          className="form-control"
          placeholder="Nombre"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <input
          className="form-control"
          placeholder="Description"
          onChange={(e) => sepescription(e.target.value)}
          value={description}
        />
        <input
          className="form-control"
          placeholder="Color"
          onChange={(e) => setColor(e.target.value)}
          value={color}
        />
        <input
          className="form-control"
          placeholder="Price"
          onChange={(e) => setPrice(e.target.value)}
          value={price}
        />
        <input
          className="form-control"
          placeholder="Categoría"
          onChange={(e) => setCategory(e.target.value)}
          value={category}
        />
        <input
          className="form-control"
          placeholder="Tipo?"
          onChange={(e) => setType(e.target.value)}
          value={type}
        />
        <input
          className="form-control"
          placeholder="Imagen url"
          onChange={(e) => setImage(e.target.value)}
          value={image}
        />
        <button className="btn-primary" onClick={addProduct}>
          Agregar Producto
        </button>

        {productList &&
          productList.map((product) => (
            <CrudProduct
              key={product.id}
              product={product}
              productList={productList}
              setProductList={setProductList}
            />
          ))}
      </Fragment>
    </div>
  );
}

