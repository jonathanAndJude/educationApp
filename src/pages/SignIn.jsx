import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SignUp.css";

function SignIn() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  function handleEmail(e) {
    setEmail(e.target.value);
  }

  function handlePassword(e) {
    setPassword(e.target.value);
  }

  return (
    <div className="container">
      <div className="form__container">
        <form>
          <h1>Log In</h1>

          <div className="form__data">
            <p>Email address</p>
            <input
              type="text"
              name="name"
              value={email}
              onChange={handleEmail}
            />
          </div>
          <div className="form__data">
            <p>Password</p>
            <input
              type="text"
              name="password"
              value={password}
              onChange={handlePassword}
            />
          </div>

          <button className="form__btn">Sign Up</button>
        </form>

        <div className="redirect">
          <p>
            Already have an account?{" "}
            <Link to="/" className="link">
              Log In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
