import { url } from './url.js';
export default class Data {
    loadData(displayUsers, username) {
        const address = url + username;
        const request = $.ajax(address);
        request.done(function (data) {
            displayUsers(data);
        })
    }
}