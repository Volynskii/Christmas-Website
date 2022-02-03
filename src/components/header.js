import React,{useEffect,useState} from 'react';
import {Link} from "react-scroll";
import _ from "lodash"

const Header = () => {

    const [isActiveHeader,setIsActiveHeader] = useState(false);
    const [isActiveNavBar,setIsActiveNavBar] = useState(false);
    const [isActiveSearch,setIsActiveSearch] = useState(false);

    const headerClassName = isActiveHeader?'active' : '';
    const menuClassName = isActiveNavBar?'fa-times' : '';
    const navBarClassName = isActiveNavBar?'active' : 'fa-times';
    const searchClassName = isActiveSearch?'fa-times' : 'active';
    const searchFormClassName = isActiveSearch?'active' : '';

    const handleToggleSearch = () => {
        setIsActiveSearch(!isActiveSearch)
    };
    const handleToggleNavBar = () => {
        setIsActiveNavBar(!isActiveNavBar)
    };

    useEffect(() => {
        const throttledCount = _.throttle(() => {
            if(window.scrollY > 650){
                if(isActiveHeader) return;
               setIsActiveHeader(false);
            }else {
                if(!isActiveHeader) return;
            setIsActiveHeader(true);
            }
        }, 200);
        window.addEventListener('scroll', throttledCount);
        return () => window.removeEventListener('scroll', throttledCount);
    });

    return (
      <>
          <header className={`header ${headerClassName} `}>

              <a href="#" className="logo">Christmas</a>

              <nav  className={`navbar fa-times ${navBarClassName}`}>
                  <Link to="home">home</Link>
                  <Link to="about">about</Link>
                  <Link to="products">products</Link>
                  <Link to="services">services</Link>
                  <Link to="gallery">gallery</Link>
                  <Link to="contact">contact</Link>
                  <Link to="blogs">blogs</Link>
              </nav>

              <div className="icons">
                  <div  id="menu-btn" className={`fas fa-bars ${menuClassName}`} onClick={handleToggleNavBar}/>
                  <div id="search-btn" onClick={handleToggleSearch} className={`fas fa-search ${searchClassName}`}/>
                  <a href="#" className="fas fa-heart"/>
                  <a href="#" className="fas fa-shopping-cart"/>
              </div>

              <form action="" className={`search-form ${searchFormClassName}`}>
                  <input type="search" name="" placeholder="search here..." id="search-box"/>
                      <label htmlFor="search-box" className="fas fa-search"/>
              </form>
          </header>
          </>
    );
};

export default Header;
