import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AddProduct from "../AddProduct/AddProduct";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBorderAll,faPlus,faEdit } from '@fortawesome/free-solid-svg-icons'

const routes = [
  {
    path: "/admin/manageProduct",
    sidebar: () => <div></div>,
    main: () => <h2>Manage Product</h2>,
  },
  {
    path: "/admin/addProduct",
    sidebar: () => <div></div>,
    main: () => (
      <div>
        <AddProduct></AddProduct>
      </div>
    ),
  },
  {
    path: "/admin/editProduct",
    sidebar: () => <div></div>,
    main: () => <h2>Edit Product</h2>,
  },
];

const Admin = () => {
  const sideStyle={
    padding: "10px"
  }
  return (
    <Router>
      <div style={{ display: "flex" }}>
        <div
          style={{
            padding: "10px",
            width: "20%",
            height: '100vh',
            backgroundColor: '#203D37',
            paddingLeft: '20px'
          }}
        >
          <ul style={{ listStyleType: "none", padding: 0 }}>
            <li style={sideStyle}>
              <Link style={{color:'white', textDecoration: 'none',fontWeight:'bold',fontSize: '18px'}} to="/admin/manageProduct"><FontAwesomeIcon icon={faBorderAll} /> Manage Product</Link>
            </li>
            <li style={sideStyle}>
              <Link style={{color:'white', textDecoration: 'none',fontWeight:'bold',fontSize: '18px'}} to="/admin/addProduct"><FontAwesomeIcon icon={faPlus} /> Add Product</Link>
            </li>
            <li style={sideStyle}>
              <Link style={{color:'white', textDecoration: 'none',fontWeight:'bold',fontSize: '18px'}} to="/admin/editProduct"><FontAwesomeIcon icon={faEdit} /> Edit Products</Link>
            </li>
          </ul>

          <Switch>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                children={<route.sidebar />}
              />
            ))}
          </Switch>
        </div>

        <div style={{ flex: 1, padding: "10px" }}>
          <Switch>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                children={<route.main />}
              />
            ))}
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default Admin;
