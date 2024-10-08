import React, { useState } from "react";

function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // State to hold error message

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  
  const handleSubmit = async (event) => {
    event.preventDefault();
  
    try {
      const response = await fetch("https://anomxplorerfyp-production.up.railway.app/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });
  
      if (response.ok) {
        const data = await response.json();
        alert(data.error);
        console.log("User signed up successfully");
        // Handle successful sign-up
      } else {
        const data = await response.json();
        alert(data.error);
        console.error("Sign-up failed:", data.error);
        // Handle sign-up failure
      }
    } catch (error) {
      console.error("Error:", error.message);
      // Handle fetch error
    }
  };
  
  

  return (
    <div id="signup-tab-content" className="tabcontent" style={{ display: "block" }}>
      <form className="signup-form" action="" method="post" onSubmit={handleSubmit}>
        <input type="text" className="input" id="user_name" autoComplete="off" placeholder="Username" value={username} onChange={handleUsernameChange} />
        <input type="password" className="input" id="user_pass" autoComplete="off" placeholder="Password" value={password} onChange={handlePasswordChange} />

        <input type="submit" className="button" value="Sign Up" />
      </form>
      {errorMessage && <div className="error-message">{errorMessage}</div>} {/* Display error message if present */}
      <div className="help-text">
        <p>By signing up, you agree to our</p>
        <p>
          <a href="#">Terms of service</a>
        </p>
      </div>
    </div>
  );
}

export default Signup;

