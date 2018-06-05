import React from 'react';
import utils from '../../shared/utils';
import PropTypes from "prop-types";
const UserListItem = (props) => {

    let classForGender = "listItem row";
    if (props.ingredient.gender === "female") {
        classForGender += " female";
    }

    return (
        <div className={classForGender}>
            <div className="col-1">
                <img src={props.ingredient.mediumPicture} alt="user" />
            </div>
            <div className="col-11">
                <div className="item col-12"><p>{props.ingredient.name.first} {props.ingredient.name.last}</p></div>
                <div className="item col-12"><p><i className="glyphicon glyphicon-envelope"></i> email: {utils.emailCut(props.ingredient.email)}</p></div>
                <div className="item col-12"><p><i className="glyphicon glyphicon-glass"></i> {utils.dateCol(props.ingredient.dob)}</p></div>
            </div>
        </div>)
};
UserListItem.propTypes = {
    ingredient: PropTypes.object.isRequired
}

UserListItem.propTypes = {
    ingredient: PropTypes.shape({
        name: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        dob: PropTypes.string.isRequired,
        mediumPicture: PropTypes.string.isRequired,
        largePicture: PropTypes.string.isRequired
    })
}

export default UserListItem;