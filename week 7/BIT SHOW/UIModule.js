var UIModule = (function () {

    UISelectors = {
        searchSelector: '#search'
    }

    // var searchInput = document.querySelector(UISelectors.searchSelector);

    function typing() {
        var val = $('#search').val();
        return val;
    }

    function show10MovieResult(movies) {    ///za drop

        for (var i in movies) {
            var title = movies[i].show.name
            var imgID = movies[i].show.id;
            var div = $('<div>');
            var a = $('<a>').attr('href', './showInfo.html?id=' + imgID);
            a.attr('target', '_blank');
            a.text(title);
            div.prepend(a);
            $('.drop').prepend(div);
        }
    }

    function handleData(data) {     //50 filmova

        var row = $('<div>').attr('class', 'row');
        for (i = 0; i < data.length; i++) {
            var imgID = data[i].id;
            var div = $('<div>').attr('class', 'col-4');
            var a = $('<a>').attr('href', './showInfo.html?id=' + imgID);
            a.attr('target', '_blank');
            var img = $('<img>').attr('src', data[i].image.original);
            img.attr('id', imgID);
            var p = $('<p>' + data[i].name + '</p>');
            p.attr('id', imgID);
            a.append(img);
            a.append(p);
            div.append(a);
            row.append(div);
        }
        $('#firstSection').append(row);
    };



    return {
        UISelectors: UISelectors,
        typing: typing,
        handleData: handleData,
        show10MovieResult: show10MovieResult,
    }
})();

