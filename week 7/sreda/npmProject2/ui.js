export default class UI {

    showData(data) {
        for (let i = 0; i < data.length; i++) {
            const div = $("<div>").attr('id', data[i].id);
            div.attr('class', 'secondaryDiv');
            div.attr('class', 'blue-grey');
            const h2 = $("<h2>").text(data[i].title);
            const text = $("<p>").text(data[i].text);
            div.append(h2);
            div.append(text);
            $('#main').append(div);
        }
    }

}