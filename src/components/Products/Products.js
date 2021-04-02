import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import ProductDetails from "../ProductDetails/ProductDetails";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://rocky-castle-55025.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className='container'>
    {products.length === 0 && <div className='text-center mt-5 pt-5'>
        <Spinner animation="grow" variant="danger"/>
    </div>}
      <div className="row">
        {products.map((product) => (
          <ProductDetails product={product}></ProductDetails>
        ))}
      </div>
    </div>
  );
};

export default Products;
