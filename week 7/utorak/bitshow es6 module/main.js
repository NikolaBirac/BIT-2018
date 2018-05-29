import { dataModule } from './data.js'
import { UIModule } from './ui.js'

const data = new dataModule();
const ui = new UIModule();

data.loadData().then(a => ui.handleData(a));

///////////  SEARCH  /////////

$('#search').on('keyup', () => {
    typingInput();
})
const typingInput = () => {
    const tap = ui.typing();

    if (tap != '') {
        $('#drop').removeClass('visible')
        data.liveSearch(tap).then(a => ui.show10MovieResult(a));
    } else {
        $('#drop').addClass('visible');
    }
}

