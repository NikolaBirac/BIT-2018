var passed = [];
var failed = [];
var counter = 1;
var sub = document.querySelector('.add-subject');
var nameSur = document.querySelector('.add-student-name');
var gradeInput = document.querySelector('.add-grade');
var pali = document.querySelector('.failed-list');
var polozili = document.querySelector('.passed-list');
var counterPass = 0;
var counterFailed = 0;
var totalStudent = counterPass + counterFailed;
var exam;



document.querySelector('.add-btn').addEventListener('click', function () {
    var nameARR = nameSur.value
    var n = nameARR.split(' ');

    if (n.length > 1) {
        Validation();
    } else {
        alert('name and surname');
    }


    var niz = document.querySelectorAll('.item-delete-btn');
    for (i = 0; i < niz.length; i++) {

        niz[i].addEventListener('click', function () {
            deleteStudent();
            examTotal();
        });
    }

});



