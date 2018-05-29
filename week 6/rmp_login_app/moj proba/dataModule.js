var dataModule = (function () {

    function User(username, password) {
        this.username = username;
        this.password = password;
    }

    function Database() {
        this.users = [];
        this.numberOfUsers = 0;
    }
    Database.prototype.checkUsername = function (username) {
        for (var i = 0; i < this.numberOfUsers; i++) {
            if (this.users[i].username == username) {
                return true;
            }
        }
        return false;
    }

    Database.prototype.checkUsernameAndPassword = function (username, password) {
        for (var i = 0; i < this.numberOfUsers; i++) {
            if (this.users[i].username == username && this.users[i].password == password) {
                return true;
            }
        }
        return false;
    }

    Database.prototype.addUser = function (user) {
        if (this.checkUsername == false) {
            this.users.push(user);
            this.numberOfUsers++;
        }
    }

    var database = new Database();
    var marko = new User('marko', 'marko111')
    var slavko = new User('slavko', 'slavko111')

    database.addUser(marko);
    database.addUser(slavko);


    return {
        checkUsernameAndPassword: function (username, password) {//zasto pravimo funkciju ovde
            return datebase.checkUsernameAndPassword(username, password);
        }
    }


})();