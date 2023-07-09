import "./App.css";
import React from "react";
import HeaderComponent from "./components/Header";
import FooterComponent from "./components/Footer";
import { Outlet } from "react-router-dom";

/**
 *  Header
 *    Logo
 *    Nav Items
 *      -Home
 *      - About
 *      - Contact
 *
 * Body
 *    Search
 *    Restaurant Container
 *      Restaurant Cards
 *
 * Footer
 *    Copyright
 *    Links
 *
 */

// Composition --- putting one componnet inside another component

// props

// JSX should have one parent element

// React Fragment

function App() {
  return (
    <>
      <HeaderComponent />
      <Outlet />
      <FooterComponent />
    </>
  );
}

export default App;

// Config driven UI
