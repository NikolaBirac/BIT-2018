var dataModule = (function () {

    function loadData(nekafunkcija) {

        var request = $.ajax('http://api.tvmaze.com/shows');
        request.done(function (data) {
            data.sort(function (e1, e2) {
                return e2.rating.average - e1.rating.average;
            })
            var shows = data.slice(0, 50);
            nekafunkcija(shows);
        });
    }


    function liveSearch(sendTyping, liveSearchHandler) {

        var request = $.ajax('http://api.tvmaze.com/search/shows?q=' + sendTyping);
        request.done(function (data) {
            var movies10 = data.slice(0, 10);
            liveSearchHandler(movies10)
        });
    }


    function searchResultID(id, idMovie) {
        var request = $.ajax('http://api.tvmaze.com/shows/' + id);
        request.done(function (data) {
            idMovie(data);
        })
    }

    function season(id, seasonInfo) {
        var request = $.ajax('http://api.tvmaze.com/shows/' + id + '/seasons');
        request.done(function (data) {
            seasonInfo(data);
        })
    }

    function cast(id, castInfo) {
        var request = $.ajax('http://api.tvmaze.com/shows/' + id + '/cast');
        request.done(function (data) {
            var dataSlice = data.slice(0, 10);
            castInfo(dataSlice);
        })
    }




    return {
        loadData: loadData,
        liveSearch: liveSearch,
        searchResultID: searchResultID,
        season: season,
        cast: cast
    }
})();
