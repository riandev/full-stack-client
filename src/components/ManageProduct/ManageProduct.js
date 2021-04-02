import React, { useEffect, useState } from 'react';
import ManageDetails from '../ManageDetails/ManageDetails';

const ManageProduct = () => {
    const [products,setProducts]=useState([])
    useEffect(() => {
fetch('https://rocky-castle-55025.herokuapp.com/products')
.then(res => res.json())
.then(data => setProducts(data))
    }, [])
    return (
        <div>
            {products.map(product => <ManageDetails product={product}></ManageDetails>)}
        </div>
    );
};

export default ManageProduct;