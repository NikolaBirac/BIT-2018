var mainModule = (function (UIModule, dataModule) {

    function createMovieButtonListener() {

        var createMovieButton = document.querySelector(UIModule.UISelectors.createMovieButtonSelector);
        createMovieButton.addEventListener('click', function () {
            var movieData = UIModule.getMovieData();
            var validation = UIModule.validationMovieData(movieData);

            if (validation == UIModule.status.WRONG_MOVIE) {
                return UIModule.setMovieError(UIModule.status.WRONG_MOVIE);
            } else {
                UIModule.cleanMovieError('');
                dataModule.createMovie(movieData.title, movieData.length, movieData.genre);
                var list = dataModule.allMoviesData();
                UIModule.updateMovieList(list);
            }
        })
    }

    return {
        init: function () {
            console.log('Init..');
            createMovieButtonListener();
        }
    }

})(UIModule, dataModule);
mainModule.init();