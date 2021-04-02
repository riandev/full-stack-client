import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Navigation } from "react-minimal-side-navigation";
import "react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css";
import "./Admin.css";
const axios = require("axios");
const routes = [
  {
    path: "/manage",
    component: Manage,
  },
  {
    path: "/addProduct",
    component: AddProduct,
  },
  {
    path: "/editProduct",
    component: EditProduct,
  },
];

function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      render={(props) => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
}

function Manage() {
  return <h2>Manage Product</h2>;
}

function EditProduct() {
  return <h2>Edit Product</h2>;
}

function AddProduct() {
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
          defaultValue=""
          placeholder="Input Your Product Name"
          ref={register({ required: true })}
        />
        <br />
        <input
          name="pdWeight"
          placeholder="Input Product Weight"
          ref={register({ required: true })}
        />
        <br />
        <input
          name="pdPrice"
          placeholder="Input Product Price"
          ref={register({ required: true })}
        />
        <br />
        <input
          name="pdImage"
          placeholder="Input Product Price"
          onChange={handleImageChange}
          type="file"
          ref={register({ required: true })}
        />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
}

const Admin = () => {
  return (
    <Router>
      <div>
        <nav>
          <p>
            <Link className="navStyle" to="/manage">
              Manage Products
            </Link>
          </p>
          <p>
            <Link to="/addProduct">Add Product</Link>
          </p>
          <p>
            <Link to="/editProduct">Edit Products</Link>
          </p>
        </nav>

        <Switch>
          {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))}
        </Switch>
      </div>
    </Router>
  );
};

export default Admin;
