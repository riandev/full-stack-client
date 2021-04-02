import { Table } from "@material-ui/core";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { userContext } from "../../App";

const Deals = () => {
  const { pdId } = useParams();
  const [allProducts,setAllProducts]=useState([]);
  const [checkOutStatus,setCheckOutStatus]=useState(false);
  const [signInUser,setSignInUser]=useContext(userContext);
  console.log(signInUser);
  useEffect(() => {
fetch('https://rocky-castle-55025.herokuapp.com/products')
.then(res => res.json())
.then(data => {
    setAllProducts(data);
})
  }, [])
const matchedProduct=allProducts.find(pd => pd._id === pdId);
console.log(matchedProduct);
const handleCheckOut = () => {
    const checkedOutProduct={
        description: matchedProduct.name + ' ' + matchedProduct.weight,
        quantity: 1,
        price: matchedProduct.price,
        email:signInUser.email
    }
    console.log(checkedOutProduct);
    fetch('https://rocky-castle-55025.herokuapp.com/buyProduct',{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(checkedOutProduct)
    })
    .then(res => res.json())
    .then(data => setCheckOutStatus(data))
}
  return (
    <div>
      <h3 className="container">Checkout</h3>
      <Table className="container" striped bordered hover>
        <thead>
          <tr className='border-bottom'>
            <th>Description</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr className='border-bottom'>
            <td>{matchedProduct?.name + ' ' + matchedProduct?.weight}</td>
            <td>1</td>
            <td>{matchedProduct?.price}</td>
          </tr>
          <tr>
            <td colSpan='2'><b>Total</b></td>
            <td><b>{matchedProduct?.price}</b></td>
          </tr>
        </tbody>
      </Table>
      <button onClick={handleCheckOut} className='btn btn-primary container ml-5 pl-5'>CheckOut</button>
      {checkOutStatus === true && alert('Checkout Successfull')}
    </div>
  );
};

export default Deals;
