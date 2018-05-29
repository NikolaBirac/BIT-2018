export class UIInfoPage {

    showInfoData(data) {

        var row = $('<div>').attr('class', 'row');
        row.attr('id', 'row');
        var title = $('<h2>').text(data.name);
        var img = $('<img>').attr('src', data.image.original);
        img.attr('class', 'col-7');
        $('#infoTitle').append(title);
        row.append(img);
        var rowShowDetails = $('<div>').attr('class', 'row');
        var showDetails = $('<h4>').text('Show details');
        var textIn = $(data.summary)
        rowShowDetails.append(showDetails);
        rowShowDetails.append(textIn);
        $('#secondSection').append(row);
        $('#secondSection').append(rowShowDetails);
    }


    allSeasons(data) {
        var counter = 0;
        var ul = '<ul>';
        var li = '';

        for (var i in data) {
            counter++;
            var premierDate = data[i].premiereDate;
            var endDate = data[i].endDate;

            if (premierDate != null) {
                ul += '<li>' + premierDate + ' - ' + endDate + '</li>';
            } else {
                ul += '<li>TBA<li>'
            }
        }
        ul += '</ul>';

        var divRight = $('<div>').attr('class', 'col-4 offset-1');
        var divRight = $('<div>').attr('id', 'right');
        var divRightRow1 = $('<div>').attr('class', 'row');
        var seasonTitle = $('<h4>');
        seasonTitle.attr('class', 'col-6 offset-1');
        seasonTitle.text('Seasons (' + counter + ')');
        var divSeasons = $('<div>').attr('class', 'offset-1');
        divSeasons.html(ul)
        divRightRow1.append(seasonTitle);
        divRightRow1.append(divSeasons);
        divRight.append(divRightRow1);

        $('#row').append(divRight);
    }

    cast(data) {
        var ul = '<ul>';
        var li = '';
        for (var i in data) {
            var cast = data[i].person.name;
            ul += '<li>' + cast + '</li>';
        }
        ul += '</ul>';

        var divRightRow2 = $('<div>').attr('class', 'row');
        var castTitle = $('<h4>').text('Cast');
        castTitle.attr('class', 'col-6 offset-1');
        var actors = $('<div>').attr('class', 'offset-1');
        actors.html(ul);
        divRightRow2.append(castTitle);
        divRightRow2.append(actors);
        $('#right').append(divRightRow2);
    }

}