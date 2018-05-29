export class UIModule {
    constructor() {
        this.UISelectors = {
            searchSelector: '#search'
        }
    }

    // var searchInput = document.querySelector(UISelectors.searchSelector);

    typing() {
        const val = $('#search').val();
        return val;
    }

    show10MovieResult(movies) {    ///za drop

        for (let i in movies) {
            const title = movies[i].show.name
            const imgID = movies[i].show.id;
            const div = $('<div>');
            const a = $('<a>').attr('href', './showInfo.html?id=' + imgID);
            a.attr('target', '_blank');
            a.text(title);
            div.prepend(a);
            $('.drop').prepend(div);
        }
    }

    handleData(data) {     //50 filmova

        const row = $('<div>').attr('class', 'row');
        for (let i = 0; i < data.length; i++) {
            const imgID = data[i].id;
            const div = $('<div>').attr('class', 'col-4');
            const a = $('<a>').attr('href', './showInfo.html?id=' + imgID);
            a.attr('target', '_blank');
            const img = $('<img>').attr('src', data[i].image.original);
            img.attr('id', imgID);
            const p = $('<p>' + data[i].name + '</p>');
            p.attr('id', imgID);
            a.append(img);
            a.append(p);
            div.append(a);
            row.append(div);
        }
        $('#firstSection').append(row);
    };
}

