import React from 'react';
import {Link} from "react-scroll";

const Footer = () => {
    return (
        <>
            <section className="footer">

                <div className="box-container">

                    <div className="box" data-aos="fade-up" data-aos-delay="150">
                        <h3>quick links</h3>
                        <Link className="link" to="home"> <i className="fas fa-angle-right"/> home</Link>
                        <Link className="link" to="about"> <i className="fas fa-angle-right"/> about</Link>
                        <Link className="link" to="products"> <i className="fas fa-angle-right"/> products</Link>
                        <Link className="link" to="services"> <i className="fas fa-angle-right"/> services</Link>
                        <Link className="link" to="gallery"> <i className="fas fa-angle-right"/> gallery</Link>
                        <Link className="link" to="contact"> <i className="fas fa-angle-right"/> contact</Link>
                        <Link className="link" to="blogs"> <i className="fas fa-angle-right"/> blogs</Link>
                    </div>

                    <div className="box" data-aos="fade-up" data-aos-delay="300">
                        <h3>extra links</h3>
                        <a target="_blank" rel="noopener noreferrer" className="link" href="#"> <i className="fas fa-angle-right"/> my order </a>
                        <a target="_blank" rel="noopener noreferrer" className="link" href="#"> <i className="fas fa-angle-right"/> my wishlist </a>
                        <a target="_blank" rel="noopener noreferrer" className="link" href="#"> <i className="fas fa-angle-right"/> my favorite </a>
                        <a target="_blank" rel="noopener noreferrer" className="link" href="#"> <i className="fas fa-angle-right"/> terms or use </a>
                        <a target="_blank" rel="noopener noreferrer" className="link" href="#"> <i className="fas fa-angle-right"/> privacy policy </a>
                    </div>

                    <div className="box" data-aos="fade-up" data-aos-delay="450">
                        <h3>contact info</h3>
                        <a target="_blank" rel="noopener noreferrer"  className="link" href="#"> <i className="fas fa-phone"/> +123-456-7890 </a>
                        <a target="_blank" rel="noopener noreferrer" className="link" href="#"> <i className="fas fa-phone"/> +111-222-3333 </a>
                        <a target="_blank" rel="noopener noreferrer" className="link" href="#"> <i className="fas fa-envelope"/> shaikhanas@gmail.com </a>
                        <a target="_blank" rel="noopener noreferrer" className="link" href="#"> <i className="fas fa-envelope"/> anasbhai@gmail.com </a>
                        <a target="_blank" rel="noopener noreferrer" className="link" href="#"> <i className="fas fa-map"/> mumbai, india - 400104 </a>
                    </div>

                    <div className="box" data-aos="fade-up" data-aos-delay="600">
                        <h3>newsletter</h3>
                        <form action="">
                            <input type="email" name="" placeholder="enter your email" className="email" id=""/>
                                <input type="submit" value="subscribe" className="btn"/>
                        </form>
                        <div className="share">
                            <Link to="#" className="fab fa-facebook-f"/>
                            <Link to="#" className="fab fa-twitter"/>
                            <Link to="#" className="fab fa-instagram"/>
                            <Link to="#" className="fab fa-linkedin"/>
                        </div>
                    </div>

                </div>

                <p className="credit"> created by <span>mr. Anton Wolynskii</span> | all rights reserved! </p>

            </section>
            </>
    );
};

export default Footer;
