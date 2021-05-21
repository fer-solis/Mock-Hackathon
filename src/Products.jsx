import React, { useEffect, useState } from 'react'
import { db } from './firebase';
import ProductCard from './components/ProductCard'
import Cart from './Cart';

export default function Products( props ) {
  const [productList, setproductList] = useState ([])
  const [cart, setCart] = useState([]);



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
    

  const getProductsMan = async () => {
    let obj;
    let list = []
    const querySnapshot = await db.collection('products').where("type", "==", "Hombre").get();
    querySnapshot.forEach((doc) => {
      obj = doc.data()
      obj.id = doc.id
      list.push(obj)
    });
    setproductList(list)
  }

  const getProductsWoman = async () => {
    let obj;
    let list = []
    const querySnapshot = await db.collection('products').where("type", "==", "Mujer").get();
    querySnapshot.forEach((doc) => {
      obj = doc.data()
      obj.id = doc.id
      list.push(obj)
    });
    setproductList(list)
  }



  return (
    
    <div>
      <div className= 'cabecera'>
        <Cart cart={cart} setCart={setCart} product={productList}/>
      </div>
      <button className="categoryButton" onClick={getProductsMan}>Hombre</button>
      <button className="categoryButton" onClick={getProductsWoman}>Mujer</button>
      <button className="categoryButton" onClick={getProducts}>Todo</button>
      
      {productList &&
          productList.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              productList={productList}
              setproductList={setproductList}

              cart={cart}
              setCart={setCart}
            />
          ))}

          {/* agregar un modal para avisar que se ha agregado un producto al carrito */}
          {/* esta vista no contendra el resumen del carrito */}
    </div>
  )
}

            />
          ))}

    </div>
  )
}

