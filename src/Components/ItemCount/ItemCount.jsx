import React from 'react'
import './ItemCount.css'

const ItemCount = ({onAdd, stock, initial, count}) => {
return <div className="producto">
    <span className="productoTitulo">Guantes de boxeo</span>
    <div className="contadores">
    <button className= "disminuir" onClick={() => {if (count > initial) {onAdd('-')}}}>-</button>
        {count}
    <button className= "aumentar"  onClick={() => {if (count < stock) {onAdd('+')}}}>+</button>
    </div>
    <button className= "agregar"  onClick={()=> onAdd (count)} > Agregar al carrito</button>
    <button className= "agregar"  onClick={()=> onAdd (count)} > Detalle</button>
    
    </div>
}

export default ItemCount