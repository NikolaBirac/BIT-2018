var UIModule = (function () {

    var UISelectors = {
        titleSelector: '#title',
        lengthSelector: '#length',
        genreSelector: '#genre',
        createMovieButtonSelector: '#add-button',
        movieArraySelector: '#current-array',
        errorMovieSelector: '#error'
    }

    var status = {
        OK: 'everything is good',
        WRONG_MOVIE: 'please fill the form',
        WRONG_PROGRAM: 'valid date please'
    }

    titleInput = document.querySelector(UISelectors.titleSelector);
    lengthInput = document.querySelector(UISelectors.lengthSelector);
    genreInput = document.querySelector(UISelectors.genreSelector);
    movieArrayUL = document.querySelector(UISelectors.movieArraySelector);
    errorMovieField = document.querySelector(UISelectors.errorMovieSelector);

    function getMovieData() {
        var movieData = {};
        movieData.title = titleInput.value;
        movieData.length = lengthInput.value;
        movieData.genre = genreInput.value;
        return movieData;
    }
    function validationMovieData(movieData) {
        if (movieData.title != '' && parseInt(movieData.length) == movieData.length) { //proveri ovo
            return status.OK;
        } else {
            return status.WRONG_MOVIE;
        }
    }

    function updateMovieList(moviesArrayStrings) {
        var list = '<ul>';
        var movieUL = '';
        for (var i = 0; i < moviesArrayStrings.length; i++) {
            list += '<li>' + moviesArrayStrings[i] + '</li>';
            movieUL += '<option>' + moviesArrayStrings[i] + '</option>';
        }
        list += '</ul>';
        movieArrayUL.innerHTML = list;
        ///OVDE GADJAJ DONJI DROP///////////////////////////////////////////////////////////
        titleInput.value = '';
        lengthInput.value = '';
    }


    function setMovieError(message) {
        titleInput.value = '';
        lengthInput.value = '';
        return errorMovieField.textContent = message;
    }
    function cleanMovieError() {
        return errorMovieField.textContent = '';
    }


    return {
        UISelectors: UISelectors,
        status: status,
        getMovieData: getMovieData,
        validationMovieData: validationMovieData,
        updateMovieList: updateMovieList,
        setMovieError: setMovieError,
        cleanMovieError: cleanMovieError
    }


})();