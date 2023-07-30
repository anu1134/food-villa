import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../common/cartSlice";

const HeaderComponent = () => {
  const [buttonText, setButtonText] = useState("Login");

  const dispatch = useDispatch();

  // Subscribing to the store using a selector
  const cartItems = useSelector((store) => store.cart.items);

  console.log("cartItems", cartItems);

  function updateLoginLogoutText() {
    if (buttonText === "Login") {
      setButtonText("Logout");
    } else {
      setButtonText("Login");
    }
  }

  function handleClearCart() {
    dispatch(clearCart());
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
        <li>
          <Link to="/cart">Cart-{cartItems.length}items</Link>
        </li>
        <button onClick={handleClearCart}>Clear Cart</button>
      </ul>
      <button className="login-button" onClick={updateLoginLogoutText}>
        {buttonText}
      </button>
    </nav>
  );
};

export default HeaderComponent;

// default export and named export
