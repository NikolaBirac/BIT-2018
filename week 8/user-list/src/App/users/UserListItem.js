import React from 'react';
import utils from '../../shared/utils';
import PropTypes from "prop-types";
const UserListItem = (props) => ( //moze i {ingredient}
    <div className="listItem row">
        <div className="col-1">
            <img src={props.ingredient.mediumPicture} alt="user" />
        </div>
        <div className="col-11">
            <div className="item col-12"><p>name: {props.ingredient.name}</p></div>
            <div className="item col-12"><p>email: {utils.emailCut(props.ingredient.email)}</p></div>
            <div className="item col-12"><p>date-of-birth: {utils.dateCol(props.ingredient.dob)}</p></div>
        </div>
    </div>
);
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