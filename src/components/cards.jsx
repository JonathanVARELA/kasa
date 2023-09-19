import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

function Card (props) {

    return (
        <Link to={`/detailsLogements/${props.id}`} key={props.id}>
        <span>{props.title}</span>
        <img className="overlay-card" src={props.cover} alt={props.title} /></Link>
    )
}

Card.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
};

export default Card;