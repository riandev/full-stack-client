import React, { useContext, useEffect, useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { userContext } from "../../App";

const Login = () => {
  const [email, setEmail] = useState();
  const [signInUser,setSignInUser]=useContext(userContext);
  const [password, setPassword] = useState();
//   useEffect(() => {
//     fetch("https://rocky-castle-55025.herokuapp.com/user")
//       .then((res) => res.json())
//       .then((data) => console.log(data));
//   }, []);
  const history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  const handleLoginMatch = (e) => {
    fetch("https://rocky-castle-55025.herokuapp.com/user?email=" + email)
    .then((res) => {
      if (res.status === 200) {
        res.json()
        .then((result) => {
          if (result.email) {
              setSignInUser(result);
              history.replace(from);
            // history.replace("/home");
            localStorage.setItem("email", email);
          } else {
            history.replace("/");
          }
        });
      }
    });
    e.preventDefault();
  };
  return (
    <div className="mt-4">
      <form className="w-50 card m-auto p-4">
        <h3>Sign In</h3>

        <div className="form-group">
          <label>Email address</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>

        <div className="form-group">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>

        <button
          onClick={handleLoginMatch}
          type="submit"
          className="btn btn-primary btn-block"
        >
          Submit
        </button>
        <p className="forgot-password text-right mt-2">
          Don't Have Account? <Link to="/signup">Create Account</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
