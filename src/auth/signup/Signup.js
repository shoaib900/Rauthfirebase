import React, { useState } from "react";
import "./signup.css";
import { useNavigate } from "react-router-dom";
import { auth } from "../../config/config";
import { createUserWithEmailAndPassword } from "firebase/auth";

const Signup = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault(); // prevent form from refreshing the page
    if (password === confirmPassword){
        await createUserWithEmailAndPassword(auth, username, password).then(() => {
            navigate("/login");
            console.log("user has been signed up successfully");
          });
    }else{
        console.log("password != confirm password")
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
         <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="confirm Password"
          required
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Signup;
