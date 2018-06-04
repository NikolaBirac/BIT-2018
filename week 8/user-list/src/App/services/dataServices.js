import usersData from '../../data';
import User from '../entities/Users';
class DataServices {
    getUser() {
        return usersData.map(ingredient => {
            return new User(ingredient.name, ingredient.email, ingredient.dob, ingredient.picture)
        })
    };
}
export default new DataServices();
