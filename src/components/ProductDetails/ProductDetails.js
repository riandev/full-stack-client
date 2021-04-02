import React from 'react';
import { useHistory } from 'react-router';

const ProductDetails = (props) => {
    const {name, weight,price,image,_id}=props.product;
    
    const history=useHistory()
    const handleBuyNow = (id) => {
        history.push(`/deals/${id}`)
    }
    return (
<div className="card col-md-3 col-sm-1 mb-4 col-lg-4 m-md-3" Style="width: 18rem;">
  <img src={image} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title text-center">{name} - {weight}</h5>
  </div>
  <div className="card-body d-flex justify-content-around">
    <p><b> ${price} </b></p>
    <button onClick={() => handleBuyNow(_id)} className='btn btn-primary'>Buy Now</button>
  </div>
  </div>
    );
};

export default ProductDetails;