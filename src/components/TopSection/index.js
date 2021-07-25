import React from "react";
import "./topsection.css";

const TopSection = () => {
  return (
    <div className="container top-section">
      <div className="px-3 row top-section-container">
        <div className="col-lg-4 col-sm-12 col-md-6">
          <h1 className="product-title">All Products</h1>
          <p className="product-text">A 360° look at Lumin</p>
        </div>
        <div className="col-lg-4 col-sm-12 col-md-6">
          <select class="form-select" aria-label="Default select example">
            <option selected>Filter by</option>
            <option value="1">New Products</option>
            <option value="2">All Products</option>
            <option value="3">Three</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default TopSection;
