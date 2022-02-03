import React from 'react';
import imgBlog1 from "../images/blog-1.jpg"
import imgBlog2 from "../images/blog-2.jpg"
import imgBlog3 from "../images/blog-3.jpg"

const Blogs = () => {
    return (
       <>
           <section className="blogs" id="blogs">

               <h1 className="heading"> our <span>blogs</span></h1>

               <div className="box-container">

                   <div className="box" data-aos="fade-up" data-aos-delay="150">
                       <div className="images">
                           <img src={imgBlog1} alt=""/>
                       </div>
                       <div className="content">
                           <h3>blog title goes here</h3>
                           <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab, mollitia?</p>
                           <a href="#" className="btn">read more</a>
                           <div className="icons">
                               <a href="#"> <i className="fas fa-calendar"/> 21st may, 2022 </a>
                               <a href="#"> <i className="fas fa-user"/> by admin </a>
                           </div>
                       </div>
                   </div>

                   <div className="box" data-aos="fade-up" data-aos-delay="300">
                       <div className="images">
                           <img src={imgBlog2} alt=""/>
                       </div>
                       <div className="content">
                           <h3>blog title goes here</h3>
                           <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab, mollitia?</p>
                           <a href="#" className="btn">read more</a>
                           <div className="icons">
                               <a href="#"> <i className="fas fa-calendar"/> 21st may, 2022 </a>
                               <a href="#"> <i className="fas fa-user"/> by admin </a>
                           </div>
                       </div>
                   </div>

                   <div className="box" data-aos="fade-up" data-aos-delay="450">
                       <div className="images">
                           <img src={imgBlog3} alt=""/>
                       </div>
                       <div className="content">
                           <h3>blog title goes here</h3>
                           <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab, mollitia?</p>
                           <a href="#" className="btn">read more</a>
                           <div className="icons">
                               <a href="#"> <i className="fas fa-calendar"/> 21st may, 2022 </a>
                               <a href="#"> <i className="fas fa-user"/> by admin </a>
                           </div>
                       </div>
                   </div>

               </div>

           </section>
           </>
    );
};

export default Blogs;
