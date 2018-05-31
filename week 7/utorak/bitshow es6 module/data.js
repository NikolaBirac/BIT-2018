import { Shows } from './entities/shows.js'
import { Seasons } from './entities/seasons.js'

export class dataModule {

    loadData() {
        if (localStorage.getItem('arrayOf50movies') == null) {
            const requestUrl = 'http://api.tvmaze.com/shows';
            return fetch(requestUrl)
                .then(response => {
                    return response.json();
                    console.log(response.json());

                })
                .then(myJson => {
                    myJson.sort(function (e1, e2) {
                        return e2.rating.average - e1.rating.average;
                    })
                    myJson.slice(0, 50);

                    let arrShows = [];
                    for (let i in myJson) {
                        const obj = new Shows(myJson[i].name, myJson[i].image.original, myJson[i].id)
                        arrShows.push(obj);
                    }
                    localStorage.setItem('arrayOf50movies', JSON.stringify(arrShows));
                    return arrShows;
                })
        } else {
            const array = localStorage.getItem('arrayOf50movies');
            return Promise.resolve(JSON.parse(array));
        }
    }



    liveSearch(sendTyping) {
        const requestUrl = 'http://api.tvmaze.com/search/shows?q=' + sendTyping;

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
            .then(data => {

                let arr = [];
                for (let i in data) {
                    const obj = new Seasons(data[i].premiereDate, data[i].endDate)
                    arr.push(obj)
                }
                return arr;

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