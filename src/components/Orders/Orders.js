import React, { useContext, useEffect, useState } from "react";
import { userContext } from "../../App";
import OrderDetails from "../OrderDetails/OrderDetails";

const Orders = () => {
  const [signInUser, setSignInUser] = useContext(userContext);
  const [matchedProduct, setMatchedProduct] = useState([]);
  const [orderItems, setOrderItems] = useState([]);
  console.log(orderItems)
  console.log(matchedProduct);
  
  const userEmail = signInUser.email;

  useEffect(() => {
    fetch("https://rocky-castle-55025.herokuapp.com/order")
      .then((res) => res.json())
      .then((data) => {
        setMatchedProduct(data);
      });
    const output = matchedProduct.filter((pd) => pd.email === userEmail);
console.log(output);
    setOrderItems(output);
  },[fetch]);

  return (
    <div>
    
      <h2>Your Order Count: {orderItems.length}</h2>
      {orderItems.map((product) => (
        <OrderDetails product={product}></OrderDetails>
      ))}
    </div>
  );
};

export default Orders;
