import React, { useState } from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";
import { auth } from "../../config/config";
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error,setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault(); // prevent form from refreshing the page
    try {
      await signInWithEmailAndPassword(auth, username, password).then(() => {
        navigate("/");
        console.log("user has been logged in successfully");
        setError("");
      });
    } catch (error) {
      console.log(error.message);
      setError(error.message);
    }
  };

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <h1>LOGO</h1>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        {error && <p style={{color:"red"}}>{error}</p>}
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Login;
