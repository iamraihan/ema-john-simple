import React from "react";
import logo from "../../images/Logo.svg";
import CustomLink from "../CustomLink/CustomLink";
import "./Header.css";

const Header = () => {
  return (
    <nav>
      <div className="header">
        <img src={logo} alt="" />
        <div className="menu">
          <CustomLink to="/orders">Order</CustomLink>
          <CustomLink to="/shop">Shop</CustomLink>
          <CustomLink to="/inventory">Inventory</CustomLink>
          <CustomLink to="/others">Others</CustomLink>
        </div>
      </div>
    </nav>
  );
};

export default Header;
