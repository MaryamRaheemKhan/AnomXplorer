import React, { useState } from "react";
import Home from "../pages/Home";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    try {
      const response = await fetch("https://anomxplorerfyp-production.up.railway.app/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });
  
      if (response.ok) {
        const data = await response.json();
        console.log("User logged in successfully");
        // Redirect to Home.js page
        window.location.href = "https://anom-xplorer-fyp.vercel.app/Home"; // Update the URL as needed
      } else {
        const data = await response.json();
        alert(data.error);
        console.error("Login failed:", data.error);
        // Handle sign-up failure
      }
    } catch (error) {
      console.error("Error:", error.message);
      // Handle fetch error
    }
};



  return (
    <div id="login-tab-content" class="tabcontent">
      <form className="login-form" action="" method="post" onSubmit={handleSubmit}>
        <input type="text" className="input" id="user_login" autoComplete="off" placeholder="Username" value={username} onChange={handleUsernameChange}/>
        <input type="password" className="input" id="user_password" autoComplete="off" placeholder="Password" value={password} onChange={handlePasswordChange}/>
        <input 
          type="checkbox" 
          className="checkbox" 
          id="remember_me" 
          checked={rememberMe}
          onChange={(event) => setRememberMe(event.target.checked)}
        />
        <label htmlFor="remember_me">Remember me</label>

        <input type="submit" className="button" value="Login" />
      </form>
      <div className="help-text">
        <p>
          <a href="#">Forget your password?</a>
        </p>
      </div>
    </div>
  );
}

export default Login;
