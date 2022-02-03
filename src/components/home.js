import React,{useState,useEffect} from 'react';
import _ from "lodash"
import imgTrees from '../images/trees.png';
import imgMountains from '../images/mountains.png';
import imgMoon from '../images/moon.png';
import imgCloud from '../images/cloud.png';

const Home = () => {


    let [value,setValue] = useState(window.scrollY / 10);

    useEffect(() => {
        const throttledCount = _.throttle(() => {
           setValue(window.scrollY / 10)
        }, 0);
        window.addEventListener('scroll', throttledCount);
        return () => window.removeEventListener('scroll', throttledCount);
    });

    return (
        <>
            <section className="home" id="home">


                <div style={{bottom: `${value}rem`}} className="content">
                    <p>we wish you a</p>
                    <h3>merry christmas</h3>
                </div>

                <img src={imgTrees} className="tree" alt=""/>
                <img  style={{bottom: `${-value}rem`}} src={imgMountains} className="mountain" alt=""/>
                <img style={{marginTop: `${-value}rem`}} src={imgMoon} className="moon" alt=""/>
                    <img style={{right: `${-value}rem`}} src={imgCloud} className="cloud-1" alt=""/>
                    <img style={{left: `${-value}rem`}} src={imgCloud} className="cloud-2" alt=""/>

            </section>

        </>
    );
};

export default Home;
