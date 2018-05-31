$(document).ready(function () {
    $('#first').clone().appendTo('#content');
    $('#first').removeClass('display');

    $('#active').on('click', function () {
        $('#content').empty();
        $('#first').clone().appendTo('#content');
        $('#first').removeClass('display');

    })
    $('#link').on('click', function () {
        $('#content').empty();
        $('#second').clone().appendTo('#content');
        $('#second').removeClass('display');
    })

    $('#template').on('click', function () {
        const template = `
            <div>TRECI DIV</div>
        `;
        const temp = $(template);
        console.log('template');
        $('#content').empty();
        $('#content').append(temp);
    })
})