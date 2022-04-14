const products = [
    { 
        
            id: 1,
            name: 'Indumentaria',
            description: 'Guantes de box diseñados para competir. Calidad de cuero premium',
            Image: './Images/guantesbox.jpg',
            price: '3000',
            stock: 6,
    
        },
        {
            id: 2,
            name: 'Indumentaria',
            description: 'Guantes de box diseñados para competir. Calidad de cuero premium',
            Image: './Images/guantesbox.jpg',
            price: '3000',
            stock: 6,
    
        },
        {
            id: 3,
            name: 'Indumentaria',
            description: 'Guantes de box diseñados para competir. Calidad de cuero premium',
            Image: './Images/guantesbox.jpg',
            price: '3000',
            stock: 6,
    
        },
]

export const getProductsbyId = () => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })
}

