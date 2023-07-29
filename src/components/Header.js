import { useState } from "react";
import { Link } from "react-router-dom";

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
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/instamart">Instamart</Link>
        </li>
      </ul>
      <button className="login-button" onClick={updateLoginLogoutText}>
        {buttonText}
      </button>
    </nav>
  );
};

export default HeaderComponent;

// default export and named export
