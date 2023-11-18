import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SignUp.css";

function SignUp() {
  const [email, setEmail] = useState();
  const [user, setUser] = useState();
  const [password, setPassword] = useState();

  function handleUser(e) {
    setUser(e.target.value);
  }

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
          <h1>Sign Up</h1>

          <div>
            <p>Full name</p>
            <input
              type="text"
              name="user"
              value={user}
              onChange={handleEmail}
            />
          </div>
          <div>
            <p>Email address</p>
            <input
              type="text"
              name="name"
              value={email}
              onChange={handleUser}
            />
          </div>
          <div>
            <p>Password</p>
            <input
              type="text"
              name="password"
              value={password}
              onChange={handlePassword}
            />
          </div>

          <button>Sign Up</button>
        </form>

        <div>
          <p>
            Already have an account? <Link to="/">Log In</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
