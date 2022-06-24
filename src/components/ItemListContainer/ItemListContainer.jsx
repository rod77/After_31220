import React, { useEffect, useState } from 'react';
import { listadoProdutos } from '../../data/asyncMock'
import { ItemList } from '../ItemList/ItemList';

const ItemListContainer = ({ greetings }) => {

  const [productos, setProductos] = useState([])
  const [productosFetch, setProductosFetch] = useState([])

  const getProductos = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        listadoProdutos.length > 0 ?
          resolve(listadoProdutos)
          :
          reject("No hay datos")
      }, 500);
    }
    )
  }

  //Utilizando Promise
  useEffect(() => {
    getProductos()
      .then(res => setProductos(res))
      .catch(err => console.log(err))
  }, [])

  // Utilizando Fetch
  // useEffect(() => {
  //   fetch('./data/data.json')
  //     .then(res => res.json())
  //     .then(data => setProductosFetch(data))
  //     .catch(err => console.log(err))
  // }, [])


  //console.log("productos:", productos)
  //console.log("productosFetch:", productosFetch)

  return (
    <>
      <h1>{greetings}</h1>
      <hr />
      <ItemList listadoProductos={productos} />
    </>
  );
};

export default ItemListContainer;





