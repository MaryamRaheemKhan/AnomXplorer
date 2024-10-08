// import React from "react";

// import Signup from "./Signup";
// import Login from "./Login";
// import "./Main.css";

// function openTab(evt, tabName) {
//   var i, tabcontent, tablinks;

//   // Hide all tab content
//   tabcontent = document.getElementsByClassName("tabcontent");
//   for (i = 0; i < tabcontent.length; i++) {
//     tabcontent[i].style.display = "none";
//   }

//   // Remove the "active" class from all tab links
//   tablinks = document.getElementsByClassName("tablink");
//   for (i = 0; i < tablinks.length; i++) {
//     tablinks[i].classList.remove("active");
//   }

//   // Show the selected tab content and add the "active" class to the clicked tab link
//   document.getElementById(tabName).style.display = "block";
//   evt.currentTarget.classList.add("active");
// }

// function Main() {
//   return (
//     <div className="container">
//       <h1 style={{textAlign:"center",fontSize:"3em", fontWeight:"1500", padding:"20px", marginTop:"130px"}}>Welcome to the Our AnomXplorer</h1>
//       <div className="form-wrap">
//         <div className="tabs">
//           <h3 className="signup-tab">
//             <a className="tablink active" onClick={(e) => openTab(e, "signup-tab-content")}>
//               Sign Up
//             </a>
//           </h3>
//           <h3 className="login-tab">
//             <a className="tablink" onClick={(e) => openTab(e, "login-tab-content")}>
//               Login
//             </a>
//           </h3>
//         </div>

//         <div className="tabs-content">
//           <Signup />
//           <Login />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Main;


import React from "react";

import Signup from "./Signup";
import Login from "./Login";
import "./Main.css";

function openTab(evt, tabName) {
  var i, tabcontent, tablinks;

  // Hide all tab content
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Remove the "active" class from all tab links
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.remove("active");
  }

  // Show the selected tab content and add the "active" class to the clicked tab link
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.classList.add("active");
}

function Main() {
  return (
    <div className="container">
      <div className="sliding-text">
        <span>A</span>
        <span>n</span>
        <span>o</span>
        <span>m</span>
        <span>X</span>
        <span>p</span>
        <span>l</span>
        <span>o</span>
        <span>r</span>
        <span>e</span>
        <span>r</span>
        
      </div>
      <div className="form-wrap">
        <div className="tabs">
          <h3 className="signup-tab">
            <a className="tablink active" onClick={(e) => openTab(e, "signup-tab-content")}>
              Sign Up
            </a>
          </h3>
          <h3 className="login-tab">
            <a className="tablink" onClick={(e) => openTab(e, "login-tab-content")}>
              Login
            </a>
          </h3>
        </div>

        <div className="tabs-content">
          <Signup />
          <Login />
        </div>
      </div>
    </div>
  );
}



export default Main;
