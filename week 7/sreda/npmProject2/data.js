export default class Data {

    getData() {
        const url = 'http://127.0.0.1:3000/'
        return fetch(url)
            .then(response => {
                return response.json();
            });
    }

}