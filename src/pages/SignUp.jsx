import { useState } from "react";
import { Link } from "react-router-dom";
import "./SignUp.css";
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

function SignUp() {
  const [email, setEmail] = useState();
  const [user, setUser] = useState();
  const [password, setPassword] = useState();

  function handleUser(e) {
    setUser(e.target.value);
  }

  function handleEmail(e) {
    setEmail(e.target.value);
    console.log(email);
  }

  function handlePassword(e) {
    setPassword(e.target.value);
  }

  return (
    <div className="container">
      <div className="form__container">
        <form>
          <h1>Sign Up</h1>

          <div className="form__data">
            <p>Full name</p>
            <input type="text" name="user" value={user} onChange={handleUser} />
          </div>
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

        <div>
          <p>or</p>
          <button className="form__btn">Continue with google</button>
        </div>

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

export default SignUp;
