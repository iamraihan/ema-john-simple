import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  const cartHandler = (product) => {
    setCart([...cart, product]);
  };
  console.log(cart);
  return (
    <div className="products">
      <div className="product-container">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            cartHandler={cartHandler}
          ></Product>
        ))}
      </div>
      <div className="cart-container">
        <h1>Order Summery</h1>
        <div className="cart-info">
          <p className="cart-details">Selected Items: {cart.length}</p>
          {/* <p className="cart-details">Total Price: {cart.price}</p> */}
        </div>
      </div>
    </div>
  );
};

export default Shop;
