import React from "react";
import UserListItem from "./UserListItem.js";
import CardItemList from './UserCardItem';
import PropTypes from 'prop-types';
import Counter from './UsersCounter';
import UserNotFound from './UserNotFound'
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

    filterUserList = (element) => {             //callback filter funkcije
        if (!this.props.searchText) {
            return true;                    //callback filter funkcije kad vrati true, niz ostaje takav kakav jeste
        }
        return (element.name.first.toLowerCase() + element.name.last.toLowerCase()).includes(this.props.searchText.toLowerCase())
    }
    render() {
        return (
            < div className="container" >
                {(this.props.users.filter(this.filterUserList).length === 0) ? <UserNotFound /> : <Counter users={this.props.users.filter(this.filterUserList)} />}
                {this.props.users.filter(this.filterUserList).map((ingredient, i) => (
                    (!this.props.isCardView) ? <UserListItem ingredient={ingredient} key={i} /> : <CardItemList ingredient={ingredient} key={i} />
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