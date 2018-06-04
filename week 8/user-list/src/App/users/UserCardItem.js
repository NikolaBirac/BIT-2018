import React from 'react';
import utils from '../../shared/utils';
import PropTypes from "prop-types";
const CardItemList = (props) => (
    <div className="col-4 card">
        <img className="images" src={props.ingredient.largePicture} alt="user" />
        <p className="imgName">{props.ingredient.name}</p>
        <p>Name: {utils.emailCut(props.ingredient.email)}</p>
        <p>Date-of-birth: {utils.dateCol(props.ingredient.dob)}</p>
    </div>
);
CardItemList.propTypes = {
    ingredient: PropTypes.object.isRequired
}
CardItemList.propTypes = {
    ingredient: PropTypes.shape({
        name: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        dob: PropTypes.string.isRequired,
        mediumPicture: PropTypes.string.isRequired,
        largePicture: PropTypes.string.isRequired
    })
}

export default CardItemList;