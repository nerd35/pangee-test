import React from "react";
import { useQuery } from "@apollo/client";
import "./productgrid.css";

import { gql } from "@apollo/client";


export const QUERY_LIST_OF_PRODUCTS = gql`
  {
    products {
      id
      title
      image_url
      price(currency: NGN)
    }
    
  }
`;

const ProductGrid = ({ onAddToCart }) => {
  const { data, loading, error } = useQuery(QUERY_LIST_OF_PRODUCTS);
  return (
    <div className="product-wrapper ">
      <div className="container">
        <div className="px-3 py-5 row">
          {loading && (
            <h3 className="text-center justify-content-center">
              Products is Loading ...
            </h3>
          )}
          {error && <h3>{error.message}</h3>}
          {data &&
            data.products.map((product, key) => {
              return (
                <div
                  key={key}
                  className=" col-sm-12 col-md-6 col-lg-4 product-item"
                >
                  <img
                    src={product.image_url}
                    className="product-images"
                    alt="productimage"
                  />
                  <h1 className="product-item-title">{product.title}</h1>
                  <p className="product-item-amount">
                    from NGN {product.price}
                  </p>
                  <button
                    onClick={() => onAddToCart(product)}
                    className=" product-item-btn"
                  >
                    Add to Cart
                  </button>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default ProductGrid;
