import React from 'react';
import aboutImg from '../images/about-img.png';

const About = () => {
    return (
      <>
          <section className="about" id="about">

              <div className="image" data-aos="fade-right" data-aos-delay="150">
                  <img src={aboutImg} alt=""/>
              </div>

              <div className="content" data-aos="fade-left" data-aos-delay="300">
                  <span>why choose us?</span>
                  <h3>celebrate your christmas with us</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur omnis magnam, labore quidem
                      assumenda unde aliquam quasi ipsa? Saepe voluptatum, magnam mollitia aperiam laborum eaque in nam
                      eos reiciendis corporis!</p>
                  <a href="#" className="btn">read more</a>
              </div>

          </section>
          </>
    );
};

export default About;
