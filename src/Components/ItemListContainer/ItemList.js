import Item from './Item.js'

const ItemList = () => {
    return new Promise ((resolve, reject) => {
        const ok = true;
        setTimeout (() => {
            if (ok) {
                resolve (Item);
            } else {
                reject ('error');
            }
    
        }, 2000);
    })

}

export default ItemList;

