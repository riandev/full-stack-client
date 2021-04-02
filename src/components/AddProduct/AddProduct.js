import React from "react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
const axios = require("axios");

const AddProduct = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const [uploadStatus, setUploadStatus] = useState(false);
  const [pdImage, setPdImage] = useState();
  const handleImageChange = (event) => {
    setPdImage(event.target.files[0]);
    const imageData = new FormData();
    imageData.set("key", "8bf8ebc2ca539bc22b4cfe63af75b480");
    imageData.append("image", event.target.files[0]);
    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then(function (response) {
        setPdImage(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const onSubmit = (data) => {
    const productss = {
      name: data.pdName,
      weight: data.pdWeight,
      price: data.pdPrice,
      image: pdImage,
    };
    console.log(productss);
    fetch("http://localhost:5500/product", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(productss),
    })
      .then((res) => res.json())
      .then((data) => setUploadStatus(data));
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          name="pdName"
          className="form-control w-50"
          defaultValue=""
          placeholder="Input Your Product Name"
          ref={register({ required: true })}
        />
        <br />
        <input
          name="pdWeight"
          className="form-control w-50"
          placeholder="Input Product Weight"
          ref={register({ required: true })}
        />
        <br />
        <input
          name="pdPrice"
          className="form-control w-50"
          placeholder="Input Product Price"
          ref={register({ required: true })}
        />
        <br />
        <input
          name="pdImage"
          placeholder="Upload Image"
          className="btn btn-warning mb-4"
          onChange={handleImageChange}
          type="file"
          ref={register({ required: true })}
        />
        <br />
        <input className='btn btn-primary' type="submit" />
      </form>
      {
          uploadStatus ===true && alert('Product Uploaded Successfully')
      }
    </div>
  );
};

export default AddProduct;
