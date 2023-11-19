import React, { useEffect } from "react";
import loading from "./fountain.gif";
import "./Preloader.css";
import { useNavigate } from "react-router-dom";

const Preloader = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/account");
    }, 1500);
  });

  return (
    <div className="preloader">
      <div className="text-container">
        <h1>Welcome to Burham</h1>
        <img src={loading} alt="preloader" />
      </div>
    </div>
  );
};

export default Preloader;
