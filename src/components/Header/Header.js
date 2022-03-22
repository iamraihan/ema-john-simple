import React from "react";
import logo from "../../images/Logo.svg";
import "./Header.css";

const Header = () => {
  return (
    <nav>
      <div className="header">
        <img src={logo} alt="" />
        <div className="menu">
          <a href="/order">Order</a>
          <a href="/shop">Shop</a>
          <a href="/inventory">Inventory</a>
          <a href="/ohters">Others</a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
