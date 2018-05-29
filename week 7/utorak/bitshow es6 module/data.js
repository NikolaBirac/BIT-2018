export class dataModule {

    loadData() {
        const requestUrl = 'http://api.tvmaze.com/shows';

        return fetch(requestUrl)
            .then(response => {
                return response.json();
            })
            .then(myJson => {
                myJson.sort(function (e1, e2) {
                    return e2.rating.average - e1.rating.average;
                })
                return myJson.slice(0, 50);
            })
    }



    liveSearch(sendTyping) {
        const requestUrl = 'http://api.tvmaze.com/search/shows?q=' + sendTyping

        return fetch(requestUrl)
            .then(response => {
                return response.json();
            })
            .then(searchResult => {
                return searchResult.slice(0, 10);
            })
    }

    ///////// movie info new page ////////

    searchResultID(id) {
        const requestUrl = 'http://api.tvmaze.com/shows/' + id;

        return fetch(requestUrl)
            .then(response => {
                return response.json();
            })
    }

    season(id) {
        const requestUrl = 'http://api.tvmaze.com/shows/' + id + '/seasons';

        return fetch(requestUrl)
            .then(response => {
                return response.json();
            })
    }


    cast(id) {
        const requestUrl = 'http://api.tvmaze.com/shows/' + id + '/cast';

        return fetch(requestUrl)
            .then(response => {
                return response.json();
            })
            .then(casts => {
                return casts.slice(0, 10);
            })
    }

}