import React from 'react'

const ItemDetail = ({img, name, description, price}) => {
    return (
        <div className='card'>
            <div className='imagen'>
                <img src= {img} alt= {name} />
            </div>
            <div className='cardDetail'>
                <h4> {name}</h4>
                <p> {description} </p>
                <span> {price} </span>
        
            </div>
        </div>
    )
}

export default ItemDetail