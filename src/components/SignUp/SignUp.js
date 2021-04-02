import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const SignUp = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const [signUpStatus,setSignUpStatus]=useState(false);
  const onSubmit = (data) => {
      console.log(data);
      fetch('http://localhost:5500/signup',{
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(data)
      })
      .then(res => res.json())
      .then(data => setSignUpStatus(data))
    };
  return (
    <div className="mt-4">
      <form className="w-50 card m-auto p-4" onSubmit={handleSubmit(onSubmit)}>
        <h3>Sign Up</h3>

        <div className="form-group">
          <label>First name</label>
          <input
            name="f_name"
            ref={register({ required: true })}
            type="text"
            className="form-control"
            placeholder="First name"
          />
        </div>

        <div className="form-group">
          <label>Last name</label>
          <input name="l_name" ref={register({ required: true })} type="text" className="form-control" placeholder="Last name" />
        </div>

        <div className="form-group">
          <label>Email address</label>
          <input
          name="email" ref={register({ required: true })}
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
          name="password" ref={register({ required: true })}
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>
        <input className="btn btn-primary btn-block" type="submit" />
        <p className="forgot-password text-right">
          Already registered <Link to="/login">sign in?</Link>
        </p>
      </form>
      {
          signUpStatus === true && alert('Sign Up Successfully Completed')
      }
    </div>
  );
};

export default SignUp;
