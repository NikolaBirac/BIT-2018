
export default class UI {

    typing() {
        const username = $('#search').val();
        return username;
    }

    waitingEvent(handler) {

        $('#search').keydown(event => {

            if (event.which == 13) {
                handler()
            }
        });
    }

    displayUsers(data) {
        const article = $('<article>');
        for (let i = 0; i < data.items.length; i++) {
            const div = $('<div>')
            const img = $('<img>').attr('src', data.items[i].avatar_url);
            const p = $('<p>' + data.items[i].login + '</p>')
            div.append(img);
            div.append(p);
            article.append(div);
        }
        $('body').append(article);
    }

}
