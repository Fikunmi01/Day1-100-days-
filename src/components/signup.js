import React from "react";
import { Link } from "react-router-dom";
import "./signup.css";
import { Route } from 'react-router-dom';
import Login from "./login";

export default function Signup() {
  <Route>
  <Route index path="join" element={<Signup />} />
  <Route path="log-in" element={<Login />} />
</Route>
  return (
    <div className="signup-div">
      <div className="signup">
        <img className="logo" src=".//logo.png" alt="" />
        <h2>Create account</h2>
        <p>For business, band or celebrity.</p>
        <div className="form-span">
          <div>
            <label htmlFor="first name"> First name</label>
            <input type="text" />
          </div>

          <div>
            <label htmlFor="last name"> Last name</label>
            <input type="text" />
          </div>
        </div>
        <div className="form-span">
          <div>
            <label htmlFor="email"> Email</label>
            <input type="email" />
          </div>

          <div>
            <label htmlFor="DOB"> Date of birth(DD-MM-YYY)</label>
            <input type="date" />
          </div>
        </div>
        <div className="form-span">
          <div>
            <label htmlFor="password"> Password</label>
            <input required type="password" />
          </div>

          <div>
            <label htmlFor="copassword">Confirm password</label>
            <input required type="password" />
          </div>
        </div>
        <div className="checkbox">
          <>
            <input type="checkbox" />
            <p>Remember me.</p>
          </>
          <>
            <input type="checkbox" />
            <p>I agree to all the terms and Privacy policy.</p>
          </>
        </div>
        <div className="button-div">
          <button type="submit" className="create">Create account</button>
          <button className="log-in">
            <img src="./icon.png"/>
            Sign-in with google
          </button>
        </div>
        <p id="lowerP">
          Don't have an account? <Link to="/log-in" className="highlight"> Log In</Link>
        </p>
      </div>
    </div>
  );
}
