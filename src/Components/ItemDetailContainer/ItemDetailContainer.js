import {useState, useEffect} from 'react'
import ItemDetail from './ItemDetail.js'
import {useParams} from 'react-router-dom'
import { getProductsbyId } from '../../asyncmock.js'




const ItemDetailContainer = () => {
    const [product, setProduct] = useState();
    console.log (product)

    const {prodId} = useParams ();

    useEffect (() => {
        getProductsbyId (prodId).then ((item) => {
            setProduct (item);
            console.log (item)
        });
        }, [prodId]);


    
    return (
    <div>
    <ItemDetail {...product}/> 
    
    
    </div>
)
}



export default ItemDetailContainer