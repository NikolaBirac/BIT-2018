$(document).ready(function () {

    $('#search').keydown(function (event) {

        if (event.which == 13) {
            $('article').remove();
            var username = $('#search').val();
            var url = "https://api.github.com/search/users?q=" + username;

            var request = $.ajax(url);
            request.done(function (msg) {
                // console.log(msg);
                var article = $('<article>')

                for (i = 0; i < msg.items.length; i++) {
                    var div = $('<div>')
                    var img = $('<img>').attr('src', msg.items[i].avatar_url);
                    var p = $('<p>' + msg.items[i].login + '</p>')
                    div.append(img);
                    div.append(p);
                    article.append(div);
                }
                $('body').append(article);

            })
        }
    })

})