
import {motion} from "framer-motion";
import { useRef, useEffect, useState, useLayoutEffect } from "react";
import './Slider.css';

function Slider() { 
  const [width, setWidth] = useState(0);
  const carousel = useRef();

//   useEffect(()=>{
// console.log(carousel.current.scrollWidth, carousel.current.offsetWidth);
// setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
//   }, []);
useLayoutEffect(() => {
  setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
}, []);
 
  return(
    <div className="carousel-container">
      <motion.div ref={carousel} className="carousel">
        <motion.div drag="x" dragConstraints={{right:0, left:-width}} className="inner-carousel">
          <img className="item" src="images/card-1.jpg" alt="" />
          <img className="item" src="images/card-5.jpg" alt="" />
          <img className="item" src="images/card-6.jpg" alt="" />
          <img className="item" src="images/card-2.jpg" alt="" />
          <img className="item" src="images/card-8.jpg" alt="" />
          <img className="item" src="images/card-3.jpg" alt="" />
          <img className="item" src="images/card-4.jpg" alt="" />
          <img className="item" src="images/card-7.jpg" alt="" />
       
        </motion.div>

       </motion.div>
    </div>
  );
 }
export default Slider;

