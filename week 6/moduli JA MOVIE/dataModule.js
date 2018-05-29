var dataModule = (function () {

    function Movie(title, length, genre) {
        this.title = title;
        this.length = length;
        this.genre = genre;
    }

    Movie.prototype.getData = function () {
        var firstLetter = this.genre.charAt(0).toUpperCase();
        var lastLetter = this.genre.charAt(this.genre.length - 1).toUpperCase();
        var result =
            this.title + ', ' + this.length + 'min' + ', ' + firstLetter + lastLetter;
        return result;
    };

    function Program(date) {
        this.date = (function () {
            var today = new Date(date);
            var day = today.getDate();
            var month = today.getMonth() + 1;
            var year = today.getFullYear();
            var datum = day + '.' + month + '.' + year;
            return datum;
        })();                           ///////////zasto samopozivajuca

        this.movies = [];
        this.numberOfMovies = 0;
    }
    Program.prototype.addMovie = function (movie) {
        this.movies.push(movie);
        this.numberOfMovies++;
    }
    Program.prototype.getData = function () {
        var moviesLength = 0;
        for (i = 0; i < this.movies.length; i++) {
            moviesLength += this.movies[i].length;
        }

        var result;
        if (this.numberOfMovies == 0) {
            result = this.date + ' ' + this.numberOfMovies + ' ' + 'TBA';
            return result;
        } else {
            result = this.date + ' ' + this.numberOfMovies + ' movies duration: ' + moviesLength + 'min';
            return result;
        }
    };


    function Database() {
        this.allMovies = [];
        this.allPrograms = [];
        this.numberOfMovies = 0;
        this.numberOfProgram = 0;
    }
    Database.prototype.addMovie = function (movie) {
        this.allMovies.push(movie);
        this.numberOfMovies++;
    }
    Database.prototype.addProgram = function (program) {
        this.allPrograms.push(program);
        this.numberOfProgram++;
    }

    function createMovie(title, length, genre) {
        return new Movie(title, length, genre);
    }
    function createProgram(date) {
        return new Program(date);
    }




    var database = new Database();

    return {
        movieData: function (movie) { //zasto funckija
            return movie.getData();
        },
        allMoviesData: function () {
            var arrayOfMoviesData = [];
            for (i = 0; i < database.allMovies.length; i++) {
                arrayOfMoviesData.push(database.allMovies[i].getData());
            }
            return arrayOfMoviesData;
        },
        programData: function (program) {
            return program.getData();
        },
        createMovie: function (title, length, genre) { //zasto sve ovo
            var movie = createMovie(title, length, genre);
            database.addMovie(movie);
        },
        createProgram: function (date) {
            var program = createProgram(date);
            database.addProgram(program);
        },

    }

})();