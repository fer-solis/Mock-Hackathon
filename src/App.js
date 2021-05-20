import './App.css';
import  {db} from './firebase';
import React, {useState, useEffect} from 'react'



function App() {

//   const [getProducts, setGetProducts] = useState([]);

//   useEffect(() => {
//     const getProducts = () =>{
//     const { docs } =  db.collection('Productos').doc('VESTIDOS').get();
//     const nuevoArray = docs.map(item =>({name: item.Nombre, ...item.data() }))
//     setGetProducts(nuevoArray)
//     console.log(nuevoArray); //renderiza las notas desps de tomar la info
//   }
//   getProducts(); //trae los datos desde firebase y ademas los renderiza y tmbn los ids pa usar dsps.
// },[])

// REFERENCIA A LA BASE DE DATOS
  const productColection = db.collection('Productos').doc('VESTIDOS');

  // TREAMOS LA DATA DE LA REFERENCIA A LA CONSOLA
  productColection.get().then((doc) => {
      if (doc.exists) {
          console.log("Document data:", doc.data());
      } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
      }
  }).catch((error) => {
      console.log("Error getting document:", error);
  });


  return (
    <div className="App">
      <h1 key={doc.data('Nombre')}></h1>
      {/* <p id='name'>{doc.data(Nombre)}</p> */}
    </div>
  );
}

export default App;
