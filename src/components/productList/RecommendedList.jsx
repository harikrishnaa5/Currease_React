import React from "react";
import "./productsList.css";
const RecommendedList = ({ products }) => {
    console.log(products, "list component");
    return (
        <>
            {products.map((product, index) => {
                return(
                    index<3&& <div key={product.id} className="product-container">
                <div className="image-container">
                    <img src={product.image} alt="" />
                </div>
                <div className="desc">
                    <h4>{product.title}</h4>
                    <button class="quantity">{product.price}</button>
                </div>
                <a className="view-product" href="">
                    <i className="fa-solid fa-arrow-right"></i>
                </a>
            </div>
                )
            })}
            
        </>
    );
};

export default RecommendedList;