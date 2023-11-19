import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./SignUp.css";
import { FaGoogle } from "react-icons/fa";
import { auth } from "../config/firebase";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const provider = new GoogleAuthProvider();

  function handleEmail(e) {
    setEmail(e.target.value);
  }

  function handlePassword(e) {
    setPassword(e.target.value);
  }

  const login = async (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(`you have an account. now you are logged in as: ${email}`);
        // ...
        navigate("/preloaderlogin");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  const googleLogin = async (e) => {
    e.preventDefault();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
        navigate("/preloaderlogin");
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  return (
    <div className="container">
      <div className="form__container">
        <form onSubmit={login}>
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

          <button className="form__btn">Log In</button>
        </form>

        <div className="form__data google">
          <p>or</p>
          <button className="form__btn" onClick={googleLogin}>
            <FaGoogle className="g__icon" /> Continue with google
          </button>
        </div>

        <div className="redirect">
          <p>
            Don't have an account?
            <Link to="/signup" className="link">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
