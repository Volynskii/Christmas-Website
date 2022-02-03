import React from 'react';
import gImage1 from '../images/g-img-1.jpg'
import gImage2 from '../images/g-img-2.jpg'
import gImage3 from '../images/g-img-3.jpg'
import gImage4 from '../images/g-img-4.jpg'
import gImage5 from '../images/g-img-5.jpg'
import gImage6 from '../images/g-img-6.jpg'
import gImage7 from '../images/g-img-7.jpg'
import gImage8 from '../images/g-img-8.jpg'
import gImage9 from '../images/g-img-9.jpg'

const Gallery = () => {
    return (
       <>
           <section className="gallery" id="gallery">

               <h1 className="heading"> our <span>gallery</span></h1>

               <div className="box-container">
                   <img className="box" data-aos="zoom-in" data-aos-delay="150" src={gImage1} alt=""/>
                       <img className="box" data-aos="zoom-in" data-aos-delay="300" src={gImage2} alt=""/>
                           <img className="box" data-aos="zoom-in" data-aos-delay="450" src={gImage3} alt=""/>
                               <img className="box" data-aos="zoom-in" data-aos-delay="600" src={gImage4}
                                    alt=""/>
                                   <img className="box" data-aos="zoom-in" data-aos-delay="750" src={gImage5}
                                        alt=""/>
                                       <img className="box" data-aos="zoom-in" data-aos-delay="900"
                                            src={gImage6} alt=""/>
                                           <img className="box" data-aos="zoom-in" data-aos-delay="1050"
                                                src={gImage7} alt=""/>
                                               <img className="box" data-aos="zoom-in" data-aos-delay="1200"
                                                    src={gImage8} alt=""/>
                                                   <img className="box" data-aos="zoom-in" data-aos-delay="1350"
                                                        src={gImage9} alt=""/>
               </div>

           </section>
           </>
    );
};

export default Gallery;
