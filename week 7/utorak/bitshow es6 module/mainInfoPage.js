import { UIInfoPage } from './uiInfoPage.js';
import { dataModule } from './data.js';

const data = new dataModule();
const ui = new UIInfoPage();

var urlQuery = window.location.search;
var urlIDsplit = urlQuery.split('=');
var urlID = urlIDsplit[1];

data.searchResultID(urlID).then(data => ui.showInfoData(data))

////////// seasons /////////

data.season(urlID).then(data => ui.allSeasons(data));

////////// cast /////////

data.cast(urlID).then(data => ui.cast(data));

