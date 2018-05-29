var array = [];

document.querySelector('#add-button').addEventListener('click', function () {
  createMovie();
});
document.querySelector('#add-button2').addEventListener('click', function () {
  createProgram();
});


function createMovie() {
  var titleElement = document.querySelector('#title');
  var lengthElement = document.querySelector('#length');
  var genreElement = document.querySelector('#genre');
  var currentArrayElement = document.querySelector('#current-array');
  var errorElement = document.querySelector('#error');
  var selectElement = document.querySelector('#moviee');

  var title = titleElement.value;
  var length = parseInt(lengthElement.value);
  var genre = genreElement.value;

  var movie = new Movie(title, length, genre);

  if (title != '' && parseInt(length) == lengthElement.value) {
    array.push(movie);
    errorElement.innerHTML = '';
  } else {
    errorElement.innerHTML = 'Please fill the field, appropriately!';
  }

  var list = '<ul>';
  var dropMovie = '';
  for (var i = 0; i < array.length; i++) {
    list += '<li>' + array[i].getData() + '</li>';
    dropMovie += '<option>' + array[i].getData() + '</option>';
  }
  list += '</ul>';
  currentArrayElement.innerHTML = list;
  selectElement.innerHTML = dropMovie;

  titleElement.value = '';
  lengthElement.value = '';
}

/* PROGRAM */

var arrProgram = [];
var selectProgram = document.querySelector('#dropPro');

function createProgram() {
  var dateElement = document.querySelector('#date');
  var currentArrayElement2 = document.querySelector('#current-array2');

  var date = dateElement.value;

  var program = new Program(date);
  arrProgram.push(program);

  var list = '<ul>';
  var dropProgram = '';
  for (var i = 0; i < arrProgram.length; i++) {
    list += '<li>' + arrProgram[i].getData() + '</li>';
    dropProgram += '<option>' + arrProgram[i].getData() + '</option>';
  }
  list += '</ul>';
  currentArrayElement2.innerHTML = list;
  selectProgram.innerHTML = dropProgram;
}

document.querySelector('#add-button3').addEventListener('click', function () {
  addMovies();
  update();
});

/* MOVIES */

var odabraniFilm;
var odabraniProgram;
var odbFilm = document.querySelector('#moviee');
var odbProgram = document.querySelector("#dropPro");

function addMovies() {
  odabraniFilm = odbFilm.value;
  odabraniProgram = odbProgram.value;

  var movie = array[odabraniFilm];
  for (var i = 0; i < array.length; i++) {
    if (odabraniFilm == array[i].getData()) {
      odabraniFilm = array[i];
    }
  }
  for (var j = 0; j < arrProgram.length; j++) {
    if (odabraniProgram == arrProgram[j].getData()) {
      odabraniProgram = arrProgram[j];
    }
  }
  odabraniProgram.addMovie(odabraniFilm);
}

/* UPDATE */

function update() {
  var currentArrayElement2 = document.querySelector('#current-array2');

  var list = '<ul>';
  var dropProgram = '';
  for (var i = 0; i < arrProgram.length; i++) {
    list += '<li>' + arrProgram[i].getData() + '</li>';
    dropProgram += '<option>' + arrProgram[i].getData() + '</option>';
  }
  list += '</ul>';
  currentArrayElement2.innerHTML = list;
  selectProgram.innerHTML = dropProgram;
}
