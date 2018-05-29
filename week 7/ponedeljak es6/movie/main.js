var genreModul = require('./genre.js');
var movieModul = require('./movie.js');
var programModul = require('./program.js');
var festivalModul = require('./festival.js');



function createMovie(title, genre, movieLength) {
    //genre kao string 
    var genre = new genreModul.Genre(genre);
    return new movieModul.Movie(title, genre, movieLength);
}

function createProgram(date) {
    return new programModul.Program(date);
}



var bekstvo = createMovie('The Shawshank Redemption', 'action', '130min');
var taxi = createMovie('Taxi', 'comedy', '150min');
var gospodar = createMovie('Gospodar prstenova', 'drama', '200min')
var UmriMuski = createMovie('Umri muski', 'drama', '115min');
var smrtonosnoOruzije = createMovie('Smrtonosno oruzje', 'comedy', '121min');
var rambo = createMovie('rambo', 'comedy', '85min');


var program = createProgram('6/5/2018');
var program2 = createProgram('6/6/2018');

var festival = new festivalModul.Festival('Deca srece festival', 5);


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
