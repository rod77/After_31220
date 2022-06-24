import React from 'react'
import { Item } from '../Item/Item'

export const ItemList = ({ listadoProductos }) => {

    console.log('listadoProductos', listadoProductos)

    return (
        // Item = ({ name, image, price, id }) => {
        <div className='container'>
            <div className="row justify-content-evely">
                {listadoProductos.map((unProducto) => <Item key={unProducto.id} name={unProducto.name} image={unProducto.img} price={unProducto.price} />)}
            </div>
        </div>

    )
}
