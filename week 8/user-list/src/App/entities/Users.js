export default class User {
    constructor(name, email, dob, picture, gender) {
        this.name = name;
        this.email = email;
        this.dob = dob;
        this.mediumPicture = picture.medium;
        this.largePicture = picture.large;
        this.gender = gender
    }
};