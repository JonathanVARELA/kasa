import PropTypes from 'prop-types';

function RatingStars({ rating }) {
    const MAX_STARS = 5; // Nombre maximum d'étoiles à afficher

    const stars = [];
    for (let i = 1; i <= MAX_STARS; i++) {
        if (i <= rating) {
            stars.push(<i key={i} className="fa-solid fa-star" />);
        } else {
            stars.push(<i key={i} className="fa-regular fa-star" />);
        }
    }

    return (
        <div className="rating-stars">
            {stars}
        </div>
    );
}

RatingStars.propTypes = {
    rating: PropTypes.number.isRequired,
};

export default RatingStars;
