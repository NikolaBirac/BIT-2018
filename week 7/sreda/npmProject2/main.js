import UI from './ui.js';
import Data from './data.js';
const ui = new UI();
const data = new Data();

data.getData().then(data => ui.showData(data));

