import React,{useEffect} from 'react';
import Header from "./components/header";
import Home from "./components/home";
import About from "./components/about";
import Products from "./components/products";
import Services from "./components/services";

import Aos from "aos";
import "aos/dist/aos.css"
import Gallery from "./components/gallery";
import Contacts from "./components/contacts";
import Blogs from "./components/blogs";
import Footer from "./components/footer";


function App() {
    useEffect(() => {
        Aos.init({duration:700})
    });
  return (
    <>
<Header/>
<Home/>
<About/>
<Products/>
<Services/>
<Gallery/>
<Contacts/>
<Blogs/>
<Footer/>
      </>
  );
}

export default App;
