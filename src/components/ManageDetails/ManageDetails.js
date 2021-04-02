import React from "react";
import { Redirect } from "react-router";

const ManageDetails = (props) => {
  console.log(props.product);
  const { image, name, price, weight, _id } = props.product;

  const handleDelete = (id) => {
    fetch(`https://rocky-castle-55025.herokuapp.com/deleteProduct/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => Redirect('/'));
  };

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Product Name</th>
            <th scope="col">Product Price</th>
            <th scope="col">Product Weight</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{name}</td>
            <td>{price}</td>
            <td>{weight}</td>
            <td>
              {" "}
              <button onClick={() => handleDelete(_id)}>Delete</button>{" "}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ManageDetails;
