import React from "react";
import "./Home.scss";
import Hero from "../../components/hero/Hero";
import Category from '../../components/category/Category'
import Product from '../../components/product/Product'

function Home() {
    return (
        <div className="Home">
            <Hero />
            <section className="collection container">
                <div className="info">
                    <h2 className="heading">Shop By Categories</h2>
                    <p className="subheading">
                        Shop from the best, our film and TV POsters Collection.
                    </p>
                    <div className="content">
                        <Category/>
                        <Category/>
                        <Category/>
                        <Category/>
                    </div>
                </div>
            </section>

            <section className="collection container">
                <div className="info">
                    <h2 className="heading">Out Top Picks</h2>
                    <p className="subheading">
                        All New Designs, Same Old Details.
                    </p>
                    <div className="content">
                        <Product/>
                        <Product/>
                        <Product/>
                        <Product/>
                        <Product/>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;
