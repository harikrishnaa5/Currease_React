import React, { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import ImgHeader from "../../assets/Layer 2.png";
import "../../app.css";
import ProductsList from "../../components/productList/ProductsList";
import { useEffect } from "react";
import RecommendedList from "../../components/productList/RecommendedList";
import Footer from "../../components/footer/Footer";

const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const products = await fetch("https://fakestoreapi.com/products?limit=6").then((res) => res.json());
            console.log(products, "products are here");
            // .then(json=>)
            setProducts(products);
        }
        fetchData();
    }, []);
    return (
        <div className="shop">
            <div className="header">
                <Navbar />
                <div className="select-province">
                    <img className="image-1" src={ImgHeader} alt="" />
                    <div className="select-wrapper">
                        <h1>
                            <span className="blue-word">Products</span> Within <br />
                            Your Province
                        </h1>

                        <select name="select province" id="">
                            <option value="0">Select Province</option>
                            <option value="1">Kerala</option>
                            <option value="2">Goa</option>
                        </select>
                    </div>
                    <img className="image-2" src={ImgHeader} alt="" />
                </div>
            </div>
            <section className="products-section">
                <ProductsList products={products} />
            </section>
            <div class="more-button">
                <button class="btn">
                    More <i class="fa-solid fa-arrow-down"></i>
                </button>
            </div>

            <section class="recommended">
                <span class="title">
                    <h1 id="title-recommended">
                        You May <span class="blue-word">Also Like</span>
                    </h1>
                    <div class="carousel">
                        <a class="left-btn" href="">
                            <i class="fa-solid fa-chevron-left"></i>
                        </a>
                        <a class="right-btn" href="">
                            <i class="fa-solid fa-chevron-right"></i>
                        </a>
                    </div>
                </span>
                <div className="products-section">
                    <RecommendedList products={products} />
                </div>
            </section>
            <Footer/>
        </div>
    );
};

export default Shop;
