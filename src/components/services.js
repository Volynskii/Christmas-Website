import React from 'react';

const Services = () => {
    return (
       <>
           <section className="services" id="services">

               <h1 className="heading"> our <span>services</span></h1>

               <div className="box-container">

                   <div className="box"  data-aos="fade-up" data-aos-delay="150">
                       <i className="fas fa-tree"/>
                       <h3>christmas tree</h3>
                       <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat, doloribus!</p>
                   </div>

                   <div className="box" data-aos="fade-up" data-aos-delay="300">
                       <i className="fas fa-cookie"/>
                       <h3>christmas cookies</h3>
                       <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat, doloribus!</p>
                   </div>

                   <div className="box" data-aos="fade-up" data-aos-delay="450">
                       <i className="fas fa-snowman"/>
                       <h3>christmas snowman</h3>
                       <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat, doloribus!</p>
                   </div>

                   <div className="box" data-aos="fade-up" data-aos-delay="600">
                       <i className="fas fa-gifts"/>
                       <h3>christmas gifts</h3>
                       <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat, doloribus!</p>
                   </div>

                   <div className="box" data-aos="fade-up" data-aos-delay="750">
                       <i className="fas fa-candy-cane"/>
                       <h3>christmas candy</h3>
                       <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat, doloribus!</p>
                   </div>

                   <div className="box" data-aos="fade-up" data-aos-delay="900">
                       <i className="fas fa-sleigh"/>
                       <h3>christmas sleigh</h3>
                       <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat, doloribus!</p>
                   </div>

               </div>

           </section>
           </>
    );
};

export default Services;
