// import usersData from '../../data';
import User from '../entities/Users';
import axios from 'axios';

class DataServices {

    // getUser() {
    //     return usersData.map(ingredient => {
    //         return new User(ingredient.name, ingredient.email, ingredient.dob, ingredient.picture)
    //     })
    // };

    getUser() {
        return axios.get('https://randomuser.me/api/?results=15')
            .then(response=>{
                const result = response.data.results;
                return result.map(ingredient => {
                        return new User(ingredient.name, ingredient.email, ingredient.dob, ingredient.picture, ingredient.gender)
                    })
            })
    };
    // getUser() {
    //     return fetch('https://randomuser.me/api/?results=15')
    //         .then(response=> {
    //             return response.json()
    //         })
    //         .then(data=>{
    //             const result = data.results;
    //             return result.map(ingredient => {
    //                     return new User(ingredient.name, ingredient.email, ingredient.dob, ingredient.picture)
    //                 })
    //         })
    // };
}
export default new DataServices();
