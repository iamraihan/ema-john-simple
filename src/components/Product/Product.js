import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Product.css";

const Product = ({ product, cartHandler }) => {
  //   console.log(product);
  const { img, name, ratings, seller, price } = product;
  return (
    <div className="product">
      <img src={img} alt="" />
      <h6>{name}</h6>
      <p className="price">Price: ${price}</p>
      <div className="product-info">
        <p>
          <small>Manufacturer: {seller}</small>
        </p>
        <p>
          <small>Ratings: {ratings} star</small>
        </p>
      </div>
      <button className="cart-btn" onClick={() => cartHandler(product)}>
        Add To Cart <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default Product;
