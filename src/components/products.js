import React from 'react';
import imgProd1 from '../images/product-1.png'
import imgProd2 from '../images/product-2.png'
import imgProd3 from '../images/product-3.png'
import imgProd4 from '../images/product-4.png'
import imgProd5 from '../images/product-5.png'
import imgProd6 from '../images/product-6.png'

const Products = () => {
    return (
        <>
            <section className="products" id="products">

                <h1 className="heading"> our <span>products</span></h1>

                <div className="box-container">

                    <div className="box" data-aos="fade-up" data-aos-delay="150">
                        <div className="image">
                            <img src={imgProd1} alt=""/>
                                <div className="icons">
                                    <a href="#" className="fas fa-shopping-cart"/>
                                    <a href="#" className="fas fa-heart"/>
                                    <a href="#" className="fas fa-search"/>
                                </div>
                        </div>
                        <div className="content">
                            <div className="stars">
                                <i className="fas fa-star"/>
                                <i className="fas fa-star"/>
                                <i className="fas fa-star"/>
                                <i className="fas fa-star"/>
                                <i className="fas fa-star-half-alt"/>
                            </div>
                            <h3>christmas decor</h3>
                            <div className="price">$29.99 <span>$39.99</span></div>
                        </div>
                    </div>

                    <div className="box" data-aos="fade-up" data-aos-delay="300">
                        <div className="image">
                            <img src={imgProd2} alt=""/>
                                <div className="icons">
                                    <a href="#" className="fas fa-shopping-cart"/>
                                    <a href="#" className="fas fa-heart"/>
                                    <a href="#" className="fas fa-search"/>
                                </div>
                        </div>
                        <div className="content">
                            <div className="stars">
                                <i className="fas fa-star"/>
                                <i className="fas fa-star"/>
                                <i className="fas fa-star"/>
                                <i className="fas fa-star"/>
                                <i className="fas fa-star-half-alt"/>
                            </div>
                            <h3>christmas decor</h3>
                            <div className="price">$29.99 <span>$39.99</span></div>
                        </div>
                    </div>

                    <div className="box" data-aos="fade-up" data-aos-delay="450">
                        <div className="image">
                            <img src={imgProd3} alt=""/>
                                <div className="icons">
                                    <a href="#" className="fas fa-shopping-cart"/>
                                    <a href="#" className="fas fa-heart"/>
                                    <a href="#" className="fas fa-search"/>
                                </div>
                        </div>
                        <div className="content">
                            <div className="stars">
                                <i className="fas fa-star"/>
                                <i className="fas fa-star"/>
                                <i className="fas fa-star"/>
                                <i className="fas fa-star"/>
                                <i className="fas fa-star-half-alt"/>
                            </div>
                            <h3>christmas decor</h3>
                            <div className="price">$29.99 <span>$39.99</span></div>
                        </div>
                    </div>

                    <div className="box" data-aos="fade-up" data-aos-delay="600">
                        <div className="image">
                            <img src={imgProd4} alt=""/>
                                <div className="icons">
                                    <a href="#" className="fas fa-shopping-cart"/>
                                    <a href="#" className="fas fa-heart"/>
                                    <a href="#" className="fas fa-search"/>
                                </div>
                        </div>
                        <div className="content">
                            <div className="stars">
                                <i className="fas fa-star"/>
                                <i className="fas fa-star"/>
                                <i className="fas fa-star"/>
                                <i className="fas fa-star"/>
                                <i className="fas fa-star-half-alt"/>
                            </div>
                            <h3>christmas decor</h3>
                            <div className="price">$29.99 <span>$39.99</span></div>
                        </div>
                    </div>

                    <div className="box" data-aos="fade-up" data-aos-delay="750">
                        <div className="image">
                            <img src={imgProd5} alt=""/>
                                <div className="icons">
                                    <a href="#" className="fas fa-shopping-cart"/>
                                    <a href="#" className="fas fa-heart"/>
                                    <a href="#" className="fas fa-search"/>
                                </div>
                        </div>
                        <div className="content">
                            <div className="stars">
                                <i className="fas fa-star"/>
                                <i className="fas fa-star"/>
                                <i className="fas fa-star"/>
                                <i className="fas fa-star"/>
                                <i className="fas fa-star-half-alt"/>
                            </div>
                            <h3>christmas decor</h3>
                            <div className="price">$29.99 <span>$39.99</span></div>
                        </div>
                    </div>

                    <div className="box" data-aos="fade-up" data-aos-delay="900">
                        <div className="image">
                            <img src={imgProd6} alt=""/>
                                <div className="icons">
                                    <a href="#" className="fas fa-shopping-cart"/>
                                    <a href="#" className="fas fa-heart"/>
                                    <a href="#" className="fas fa-search"/>
                                </div>
                        </div>
                        <div className="content">
                            <div className="stars">
                                <i className="fas fa-star"/>
                                <i className="fas fa-star"/>
                                <i className="fas fa-star"/>
                                <i className="fas fa-star"/>
                                <i className="fas fa-star-half-alt"/>
                            </div>
                            <h3>christmas decor</h3>
                            <div className="price">$29.99 <span>$39.99</span></div>
                        </div>
                    </div>

                </div>

            </section>
            </>
    );
};

export default Products;
