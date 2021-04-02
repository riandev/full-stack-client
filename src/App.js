import "./App.css";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Admin from "./components/Admin/Admin";
import AddProduct from "./components/AddProduct/AddProduct";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import { createContext, useState } from "react";
import Products from "./components/Products/Products";
import Deals from "./components/Deals/Deals";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Orders from "./components/Orders/Orders";

export const userContext=createContext()

function App() {
  const [signInUser,setSignInUser]=useState({})
  return (
    <userContext.Provider value={[signInUser,setSignInUser]}>
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/admin">
            <Admin></Admin>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/orders">
            <Orders></Orders>
          </PrivateRoute>
          <Route path="/home">
            <Products></Products>
          </Route>
          <PrivateRoute path="/deals/:pdId">
            <Deals></Deals>
          </PrivateRoute>
          <Route exact path="/">
            <Products></Products>
          </Route>
          <Route path="/signup">
            <SignUp></SignUp>
          </Route>
          <Route exact path="/admin/addProduct">
            <AddProduct></AddProduct>
          </Route>
        </Switch>
      </Router>
    </userContext.Provider>
  );
}

export default App;
