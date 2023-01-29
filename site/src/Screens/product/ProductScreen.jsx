import React, { useEffect, useState } from 'react';
import Cards from '../../Components/Cards';

const ProductScreen = () => {
  
    const [products, setProducts] = useState([]);
    const [currentProduct, setCurrentProduct] = useState(null);

    useEffect(() => {
        fetch("http://localhost:5000/product").then((response) => {
            response = response.json()
            response.then((result => {
                console.log(result);
                setProducts(result);
            }))
        })
        fetch().catch(console.error());
    }, [])


    return (
        <div>          
            {products.map(product => {
                return (
                    <div key={product.id} >
                        <Cards/>
                    </div>
                );
            })}
        </div>
    );
}

export default ProductScreen;