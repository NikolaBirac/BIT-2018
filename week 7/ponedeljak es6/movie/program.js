
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

module.exports.Program = Program;