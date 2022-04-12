import { useState, useEffect } from 'react'
import { getItem } from './ItemDetail'



export const getItem = () => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(Item)
        }, 2000)
    })
}

const ItemDetailContainer = (props) => {
    const [itemDetail, setItemDetail] = useState ([])

    useEffect(() => {
        getItemDetail().then(prods=> {
            setItemDetail(prods)
        }).catch(error => {
            console.log(error)
        })
    }, [])
}

export default ItemDetailContainer;