import '../../App.css';
import React from 'react';
import Slider from '../Slider.js';
import Cards from '../Cards';
import Footer from '../Footer';

function Home (){
    return(
        <>
        <Slider/>
        <Cards />
        <Footer/>
        </>
    );
}
export default Home;