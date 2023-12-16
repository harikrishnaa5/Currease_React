import React from "react";

import { Link } from "react-router-dom";
import "./productsList.css";
const ProductsList = ({ products }) => {
    console.log(products, "list component");
    return (
        <>
            {products.map((product, index) => {
                return (
                    <div key={product.id} className="product-container">
                        <div className="image-container">
                            <img src={product.image} alt="" />
                        </div>
                        <div className="desc">
                            <h4>{product.title}</h4>
                            <button class="quantity">{product.price}</button>
                        </div>
                        <Link className="view-product" to={`/products/${product.id}`} state={{ product }}>
                            <i className="fa-solid fa-arrow-right"></i>
                        </Link>
                    </div>
                );
            })}
        </>
    );
};

export default ProductsList;
