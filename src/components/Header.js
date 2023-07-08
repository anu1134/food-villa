import { useState } from "react";

const HeaderComponent = () => {
  const [buttonText, setButtonText] = useState("Login");

  function updateLoginLogoutText() {
    if (buttonText === "Login") {
      setButtonText("Logout");
    } else {
      setButtonText("Login");
    }
  }

  return (
    <nav className="nav-bar">
      <img
        src="https://img.freepik.com/premium-vector/good-food-logo-template_79169-17.jpg?w=360"
        alt="restaurant-logo"
      ></img>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <button className="login-button" onClick={updateLoginLogoutText}>
        {buttonText}
      </button>
    </nav>
  );
};

export default HeaderComponent;

// default export and named export
