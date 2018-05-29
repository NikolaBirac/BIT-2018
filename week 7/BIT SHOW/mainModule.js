var mainModule = (function (UIModule, dataModule) {

    dataModule.loadData(function (shows) {
        UIModule.handleData(shows);
    });

    ///////////  SEARCH  /////////

    $('#search').on('keyup', function () {
        typingInput();
    })
    function typingInput() {
        var tap = UIModule.typing();

        if (tap != '') {
            $('#drop').removeClass('visible')
            dataModule.liveSearch(UI.type, liveSearchHandler);
        } else {
            $('#drop').addClass('visible');
        }
    }
    function liveSearchHandler(data) {
        UIModule.show10MovieResult(data);
    }




})(UIModule, dataModule);