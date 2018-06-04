export default class User {
    constructor(name, email, dob, picture) {
        this.name = name.first;
        this.email = email;
        this.dob = dob;
        this.mediumPicture = picture.medium;
        this.largePicture = picture.large;
    }
};