import React from "react";
import UserListItem from "./UserListItem.js";
import CardItemList from './UserCardItem';
import PropTypes from 'prop-types';
// import dataServices from '../services/dataServices';


class Userlist extends React.Component {
    constructor(props) {
        super(props);

    }

    // onClick = () => {
    //     this.setState((prevState, props) => {
    //         return {
    //             selected: !prevState.selected
    //         }
    //     })
    // }
    

    render() {
        return (
            < div className="container" >
                {/* <button onClick={this.onClick}>Switch</button> */}
                {this.props.users.map((ingredient, i) => (
                    (this.props.selected) ? <UserListItem ingredient={ingredient} key={i} /> : <CardItemList ingredient={ingredient} key={i} />
                ))}
            </div >
        )
    }
}
Userlist.propTypes = {
    users: PropTypes.array.isRequired
}
Userlist.propTypes = {
    ingredient: PropTypes.shape({
        name: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        dob: PropTypes.string.isRequired,
        mediumPicture: PropTypes.string.isRequired,
        largePicture: PropTypes.string.isRequired
    })
}

export default Userlist;


// const Userlist = (props) => (
//     <div className="container">
//         {props.users.map((ingredient, i) => (
//             // <UserListItem ingredient={ingredient} key={i} />
//             <CardItemList ingredient={ingredient} key={i} />
//         ))}
//     </div>
// );