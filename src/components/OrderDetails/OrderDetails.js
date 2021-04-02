import React from 'react';
import { Table } from 'react-bootstrap';

const OrderDetails = (props) => {
    console.log(props.product);
    const {description,quantity,price,email} = props.product;
    const finalPrice=parseInt(price);
    return (
        <div>
        <Table className="container" striped bordered hover>
        <thead>
          <tr className='border-bottom'>
          <th>Email</th>
            <th>Description</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr className='border-bottom'>
          <td>{email}</td>
            <td>{description}</td>
            <td>{quantity}</td>
            <td>{finalPrice}</td>
          </tr>
        </tbody>
      </Table>
        </div>
    );
};

export default OrderDetails;