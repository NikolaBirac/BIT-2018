var secondPage = (function (UIInfoPage, dataModule) {

    var urlQuery = window.location.search;
    var urlIDsplit = urlQuery.split('=');
    var urlID = urlIDsplit[1];

    dataModule.searchResultID(urlID, idMovie)

    function idMovie(data) {
        UIInfoPage.showInfoData(data);
    }

    ////////// seasons /////////

    dataModule.season(urlID, seasonInfo);

    function seasonInfo(data) {
        UIInfoPage.allSeasons(data);
    }

    ////////// cast /////////

    dataModule.cast(urlID, castInfo);

    function castInfo(data) {
        UIInfoPage.cast(data);
    }

})(UIInfoPage, dataModule)