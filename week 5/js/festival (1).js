'use strict';
(
    function () {

        function Genre(name) {
            this.name = name;
        }

        Genre.prototype.getDataGenre = function () {
            var firstLetter = this.name.charAt(0).toUpperCase();
            var lastLetter = this.name.charAt(this.name.length - 1).toUpperCase();
            return firstLetter.concat(lastLetter);
        }

        function Movie(title, genre, movieLength) {
            this.title = title;
            this.genre = genre;

            try {
                if (parseInt(movieLength) == parseInt(movieLength)) {
                    this.movieLength = parseInt(movieLength);
                } else {
                    throw new Error('STAVI BROJ ZA DUZINU FILMA ' + this.title);
                }
            } catch (error) {
                console.log(error.message);
            }
        }

        Movie.prototype.getDataMovie = function () {
            return this.title + ', ' + this.movieLength + ', ' + this.genre.getDataGenre();
        }

        function Program(date) {
            this.date = new Date(date).toDateString();
            this.listOfMovies = [];
            this.numOfMovies = 0;
        }

        Program.prototype.addMovie = function (movie) {
            var counter = 1;
            for (var i = 0; i < this.listOfMovies.length; i++) {
                var a = this.listOfMovies[i];
                if (a.genre.name == movie.genre.name) {
                    counter++;
                }
            }
            if (counter <= 3) {
                this.listOfMovies.push(movie);
                this.numOfMovies++;
            } else {
                console.log('Maximum number of same genre is 3!!!');
            }
        }

        Program.prototype.getDataProgram = function () {
            var moviesLength = 0;
            var movieList = '';
            for (var i = 0; i < this.listOfMovies.length; i++) {
                var a = this.listOfMovies[i];
                moviesLength += a.movieLength;
                movieList += a.getDataMovie() + '\n\t';
            }
            return this.date + ', program length is ' + moviesLength + 'min \n\t' + movieList;
        }

        function Festival(name, maxNumMovies) {
            this.name = name;
            this.listOfProgram = [];
            this.numOfAllMovies = 0;

            try {
                if (parseInt(maxNumMovies) == parseInt(maxNumMovies)) {
                    this.maxNumMovies = maxNumMovies;
                } else {
                    throw new Error('STAVI BROJ ZA MAXIMALNI BROJ FILMA');
                }
            } catch (error) {
                console.log(error.message);
            }
        }

        Festival.prototype.addProgram = function (program) {
            if ((this.numOfAllMovies + program.numOfMovies) > this.maxNumMovies) {
                var a = 'Max number of movies are 5!';
                console.log(a);
            } else {
                this.listOfProgram.push(program);
                this.numOfAllMovies += program.numOfMovies;
            }
        }

        Festival.prototype.getDataFestival = function () {
            var result;
            if (this.listOfProgram.length == 0) {
                result = this.name + '\n\tProgram to be announced';
            } else {
                result = this.name + ' has ' + this.numOfAllMovies + ' movie titles\n';
                for (var i = 0; i < this.listOfProgram.length; i++) {
                    var programInfo = this.listOfProgram[i].getDataProgram() + '\n';
                    result += programInfo;
                }
            }
            return result;
        }



        function createMovie(title, genre, movieLength) {
            //genre kao string 
            var genre = new Genre(genre);
            return new Movie(title, genre, movieLength);
        }

        function createProgram(date) {
            return new Program(date);
        }

        var bekstvo = createMovie('The Shawshank Redemption', 'action', '130min');
        var taxi = createMovie('Taxi', 'comedy', '150min');
        var gospodar = createMovie('Gospodar prstenova', 'drama', '200min')
        var UmriMuski = createMovie('Umri muski', 'drama', '115min');
        var smrtonosnoOruzije = createMovie('Smrtonosno oruzije', 'comedy', '121min');
        var rambo = createMovie('rambo', 'comedy', '85min');


        var program = createProgram('6/5/2018');
        var program2 = createProgram('6/6/2018');

        var festival = new Festival('Deca srece festival', 5);



        Program.prototype.addMovie.call(program, bekstvo);
        Program.prototype.addMovie.call(program, taxi)

        // program2.addMovie(bekstvo);


        program.addMovie(gospodar);
        program.addMovie(UmriMuski);
        program2.addMovie(smrtonosnoOruzije);
        program2.addMovie(rambo);
        festival.addProgram(program);
        festival.addProgram(program2);

        // console.log(program.getDataProgram());
        console.log(festival.getDataFestival());
        // console.log(taxi.movieLength);

    }
)()
