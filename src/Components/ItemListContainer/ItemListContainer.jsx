import React, { useState, useEffect } from "react";
import ItemCount from "../ItemCount/ItemCount";
import ItemList from './ItemList.js'
import './Item.css'

const ItemListContainer = () => {
    const [count, setCount] = useState(1);
    const [products, setProducts] = useState ([])

    useEffect (() => {
        ItemList().then (Item => setProducts (Item)).catch(error=> console.log (error));
    }, [count])


    const onAdd = (condition) => {
        if(condition === '-') {
            setCount(count -1);
        }
        if(condition === '+') {
            setCount(count +1);
        }

};
    

    
    const initial = 1;
    return (
        <div>
            {products.map((product)=> (
            <div className='productoGuantes'> 
            <h1 className='tituloCategoria'>{product.name}</h1>
            <img className= 'imagenGuantes' src= {product.Image} alt = {product.name}/>
            <ItemCount onAdd={onAdd} stock={product.stock} initial={initial} count={count}
            />
            </div>
            ))}
            
        </div>
        
    )
}

export default ItemListContainer