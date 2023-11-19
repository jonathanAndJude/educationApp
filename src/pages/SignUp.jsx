import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./SignUp.css";
import { FaGoogle } from "react-icons/fa";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../config/firebase";

function SignUp() {
  const [email, setEmail] = useState("");
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const provider = new GoogleAuthProvider();
  const navigate = useNavigate();

  function handleUser(e) {
    setUser(e.target.value);
    console.log(user);
  }

  function handleEmail(e) {
    setEmail(e.target.value);
    console.log(email);
  }

  function handlePassword(e) {
    setPassword(e.target.value);
  }

  const createUser = async (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log("done");
        navigate("/preloader");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
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
        navigate("/preloader");
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
        <form onSubmit={createUser}>
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

        <div className="form__data google">
          <p>or</p>
          <button className="form__btn" onClick={googleLogin}>
            <FaGoogle className="g__icon" /> Continue with google
          </button>
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
