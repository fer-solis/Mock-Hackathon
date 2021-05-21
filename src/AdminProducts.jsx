import React from 'react';
import { useEffect, useState } from 'react';

import { db } from './firebase';




export default function AdminProducts() {

  const [ productList, setproductList ] = useState([])
  const [ name, setName ] = useState('')
  const [ description, sepescription ] = useState('')
  const [ color, setColor ] = useState('')
  const [ price, setPrice] = useState('')
  const [ category, setCategory] = useState('')
  const [ type, setType] = useState('')
  const [ image, setImage] = useState('')

  useEffect(() => {
    getProducts()
  }, [])

  const getProducts = async () => {
    let obj;
    let list = []
    const querySnapshot = await db.collection('products').get();
    querySnapshot.forEach((doc) => {
      obj = doc.data()
      obj.id = doc.id
      list.push(obj)
    });
    setproductList(list)
  }

  const addProduct = async() => {
    const obj = {name, description, color, price, category, type, image }
    const dbRef = await db.collection('products').add(obj)
    // console.log(dbRef.id)
    clearInput()
    getProducts()

  }

  const clearInput = () => {
    setName('')
    sepescription('')
    setColor('')
    setPrice('')
    setCategory('')
    setType('')
    setImage('')
  }


  return (
    <div div className="App">
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

      <table className="table">
        {productList.map((product, index) => (
          <tr key={index}>
            <p>{index + 1}</p>
            <p>{product.id}</p>
            <p>{product.name}</p>
            <p>{product.color}</p>
            <p>{product.description}</p>
            <p>{product.price}</p>
            <p>{product.type}</p>
            <p>{product.category}</p>
            <img src={product.image} id="product-photos"></img>
          </tr>
        ))}
      </table>
    </div>
  );
}

