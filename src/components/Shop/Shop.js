import React, { useEffect, useState } from "react";

const Shop = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div>
      <div className="product-container">
        Product
        {products.map((product) => console.log(product))}
      </div>
      <div className="cart-container">cart summery</div>
    </div>
  );
};

export default Shop;
