import React from 'react';

const Contacts = () => {
    return (
       <>
           <section className="contact" id="contact">

               <form action="">
                   <h3 data-aos="fade-up" data-aos-delay="150">contact us</h3>
                   <input data-aos="fade-up" data-aos-delay="300" type="text" placeholder="full name" className="box"/>
                       <input data-aos="fade-up" data-aos-delay="450" type="email" placeholder="email" className="box"/>
                           <input data-aos="fade-up" data-aos-delay="600" type="number" placeholder="phone"
                                  className="box"/>
                               <textarea data-aos="fade-up" data-aos-delay="750" name="" placeholder="message"
                                         className="box" id="" cols="30" rows="10"/>
                               <input data-aos="fade-up" data-aos-delay="900" type="submit" value="send now"
                                      className="btn"/>
               </form>

           </section>
           </>
    );
};

export default Contacts;
