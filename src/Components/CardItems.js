import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button'

function CardItems(props) {
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
  return (
    <>
    <li className="cards__item">
        <Link className="cards__item__link" to={props.path}>
            <figure className="cards__item__pic-wrap" data-category={props.label}>
                <img src={props.src} alt="Service Image" className="cards__item__img" />  
            </figure>
            <div className="cards__item__info">
           
                <h5 className="cards__item__text">{props.text}</h5>
                {button && <Button buttonStyle='btn--outline'>{props.buttonn}</Button>}
            </div>
        </Link>
    </li>
    </>
  )
}

export default CardItems