import PropTypes from 'prop-types';
import { useState } from 'react';

function Carousel (props) {
    const [currentCard, setCurrentCard] = useState(0)

    const handleClickNext = () => {
        if (currentCard === props.pictures.length - 1) {
            setCurrentCard(0)
            return
        }
        setCurrentCard(currentCard + 1)
    }

    const handleClickPrev = () => {
        if (currentCard === 0) {
            setCurrentCard(props.pictures.length - 1)
            return
        }
        setCurrentCard(currentCard - 1)
    }

    // si qu'une seule picture alors les chevrons disparaissent

    if (props.pictures.length === 1) {
        return (
            <>
        <div className='Carousel-content'>
        <div className="Carousel">
            <img src={props.pictures[currentCard]} alt={props.title} />
        </div>
        <div className='numberOfPictures'>
            <p>{currentCard + 1} / {props.pictures.length}</p>
        </div>
        </div>
        </>
        )
    }

    return (
        <>
        <div className='Carousel-content'>
        <div className="Carousel">
            <i onClick={handleClickPrev} className="fa-solid fa-chevron-left"></i>
            <img src={props.pictures[currentCard]} alt={props.title} />
            <i onClick={handleClickNext} className="fa-solid fa-chevron-right"></i>
        </div>
        <div className='numberOfPictures'>
            <p>{currentCard + 1} / {props.pictures.length}</p>
        </div>
        </div>
        </>
    )
}

Carousel.propTypes = {
    pictures: PropTypes.arrayOf(PropTypes.string).isRequired,
    title: PropTypes.string.isRequired,
};


export default Carousel;