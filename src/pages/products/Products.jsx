import React, {useEffect, useState} from 'react'
import "./products.css"
import { Link } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar'
import { useLocation } from 'react-router-dom';
import Footer from '../../components/footer/Footer';
const Products = () => {

  const { state } = useLocation();
  const product = state && state.product;
  // const history = useHistory();

  // const handleGoBack = () => {
  //   history.goBack(); 
  // };

  return (
    <div>
      <div className='product-header'>
          <Navbar/>
      </div>

      <section className="product-single">
        <div className="left-section">
            <Link to='/' id="back-to-product" className="btn-2"><i className="fa-solid fa-arrow-left"></i>Back to products</Link>
            <div className="image-container">
                <img src={product.image} alt="product image" />
            </div>
        </div>
        <div className="right-section">
            <button style={{color: "#0051a0"}} className="btn-2">New</button>
        <h1>{product.title}</h1>
        <h6>Description:</h6>
       

            <ul className="description">
                <li>{product.description}</li>
                {/* <li>Mengandung antioksidan (vitamin E dan selenium) untuk sistem kekebalan tubuh yang sehat.</li>
                <li>Mengandung serat untuk memperlancar pencernaan dan meningkatkan kesehatan usus.</li>
                <li>Diperkaya dengan kalsium, fosfor dan vitamin D untuk tulang yang sehat.</li> */}
            </ul>
            <div className="multi-images">
                <span><img src={product.image} alt=""/></span>
                <span><img src={product.image} alt=""/></span>
                <span><img src={product.image} alt=""/></span>
            </div>
            
                <h6>Ingredients:</h6>
                {/* <ul className="description">
                    <li>Nutisi</li>
                    <li>Vitamin E</li>
                    <li>Protein</li>
                </ul> */}
                <button className="btn btn-buy-now">Buy Now<i className="fa-solid fa-arrow-right"></i></button>
        </div>
        
    </section>
    <Footer/>
    </div>
  )
}

export default Products