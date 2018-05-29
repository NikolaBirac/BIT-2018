import UI from './UIModule.js';
import Data from './dataModule.js';

const data = new Data();
const display = new UI();

const handleData = () => {
    $('article').remove();
    data.loadData(display.displayUsers, display.typing());
}
display.waitingEvent(handleData);
