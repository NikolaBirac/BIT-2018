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

module.exports.Movie = Movie;
