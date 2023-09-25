import React from "react";
import "./Product.scss";
import Naruto from "../../assets/naruto.jpeg";
import { useNavigate } from 'react-router-dom'

function Product() {
    const navigate = useNavigate();
    return (
        <div className="Product" onClick={() => navigate('/products/asdfjkl')}>
            <div className="product-container">
                <div className="product-img">
                    <div className="img-container">
                        <img src={Naruto} alt="" id="img" />
                    </div>
                </div>
                <div className="product-info">
                    <p className="title">
                        Delux Wall Hanger 23", 23x23 Solid Color
                    </p>
                    <p className="price">₹ 549</p>
                </div>
            </div>
        </div>
    );
}

export default Product;
