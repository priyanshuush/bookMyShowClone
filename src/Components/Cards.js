import React from 'react';


import { useState, useEffect } from 'react';
import CardItems from './CardItems';
import './Cards.css';
import { Button } from './Button';


function Cards() {

    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton()
    }, []);

    window.addEventListener('resize', showButton);
    return (
        <div className='cards'>
            <h1>Recommended Movies</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        {/* <CardItems src="images/card-1.jpg" text="The Shawshank Redemption" label="IMDB Rating: 10/10" path="Services"  {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}/> */}
                        <CardItems src="images/card-1.jpg" text="The Shawshank Redemption" label="IMDB Rating: 10/10" path="Services" buttonn="View Details">
                           
                        </CardItems>


                        <CardItems src="images/card-2.jpg" text="Titanic" label="IMDB Rating: 8/10" path="Services" buttonn="View Details"/>

                        <CardItems src="images/card-3.jpg" text="The Dark Knight" label="IMDB Rating: 9/10" path="Services" buttonn="View Details"/>

                        <CardItems src="images/card-4.jpg" text="Inception" label="IMDB Rating: 7/10" path="Services" buttonn="View Details"/>


                    </ul>

                    <ul className="cards__items">
                        <CardItems src="images/card-5.jpg" text="Avengers: Endgame" label="IMDB Rating: 8/10" path="Services" buttonn="View Details"/>

                        <CardItems src="images/card-6.jpg" text="The Lord of the Rings" label="IMDB Rating: 8/10" path="Services" buttonn="View Details"/>

                        <CardItems src="images/card-7.jpg" text="Avatar" label="IMDB Rating: 7/10" path="Services" buttonn="View Details"/>

                        <CardItems src="images/card-8.jpg" text="The Godfather" label="IMDB Rating: 9/1" path="Services" buttonn="View Details"/>


                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards