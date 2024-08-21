import React from "react";
import { useCart } from "../context/CartContext";
import productsData from "../assets/products.json"; // Update this path based on where your JSON is located

const ProductList = () => {
  const { addToCart } = useCart();

  return (
    <div className="row">
      {productsData.products.map((product) => (
        <div className="col-md-3" key={product.id}>
          <div className="card mb-3">
            <img src={product.image} className="card-img-top" alt={product.title} width="250" height="250" />
            <div className="card-body">
              <h5 className="card-title">{product.title}</h5>
              <p className="card-text">${product.price}</p>
              <button
                className="btn btn-primary"
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
