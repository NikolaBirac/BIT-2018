
function Validation() {
  if (nameSur.value == '' || gradeInput.value == '' || gradeInput.value > 10 || gradeInput.value < 5) {
    alert('Input data correctly!');
    nameSur.value = '';
    gradeInput.value = '';
  } else {
    exam = createForm();
    update(exam);
    examTotal();
  }
}

function createForm() {
  var grade = parseInt(gradeInput.value);
  var subject = sub.value;
  var nameARR = nameSur.value.split(' ');
  var name = nameARR[0].split('');
  name[0] = name[0].toUpperCase();
  var firstName = name.join('');
  var surName = nameARR[1].split('');
  surName[0] = surName[0].toUpperCase();
  var lastName = surName.join('');
  fullName = firstName + ' ' + lastName;

  var student = new Student(firstName, lastName);
  return new Exam(subject, student, grade, counter);
}


function update(exam) {
  var divList = document.createElement('div');
  divList.classList.add('item', 'clearfix');
  var divName = document.createElement('div');
  divName.setAttribute('class', 'item-description');
  var textIme = document.createTextNode(exam.student.getStudentData());
  divName.appendChild(textIme);
  divList.appendChild(divName);
  var div2 = document.createElement('div');
  div2.classList.add('right', 'clearfix');
  var div21 = document.createElement('div');
  div21.setAttribute('class', 'item-value');
  var textBroj = document.createTextNode(exam.grade);
  div21.appendChild(textBroj);
  div2.appendChild(div21);
  var div22 = document.createElement('div');
  div22.setAttribute('class', 'item-delete');
  var button = document.createElement('button');
  button.setAttribute('class', 'item-delete-btn');
  button.textContent = 'x';
  div22.appendChild(button);
  div2.appendChild(div22);
  divList.appendChild(div2);

  if (exam.hasPassed()) {
    divList.setAttribute('id', counter);//counter
    polozili.appendChild(divList);
    counter++;
    counterPass++;
    passed.push(exam);
  } else {
    divList.setAttribute('id', counter);
    pali.appendChild(divList);
    counter++;
    counterFailed++;
    failed.push(exam);
  }

  /*restart posle add*/
  nameSur.value = '';
  gradeInput.value = '';
}

function examTotal() {
  totalStudent = counterPass + counterFailed;
  var percentage = parseInt(counterPass / totalStudent * 100) + '%';
  var percentage2 = parseInt(counterFailed / totalStudent * 100) + '%';

  document.querySelector('.exam-total').innerHTML =
    'Total students: ' + totalStudent;
  document.querySelector('.exam-passed-count').innerHTML = counterPass;
  document.querySelector('.exam-failed-count').innerHTML = counterFailed;
  document.querySelector('.exam-passed-percentage').innerHTML = percentage;
  document.querySelector('.exam-failed-percentage').innerHTML = percentage2;
}


function deleteStudent() {
  var dete = event.target.parentElement.parentElement.parentElement
  deteID = dete.id;
  console.log('Dete', dete);
  var roditelj = dete.parentElement;
  console.log('Roditelj', roditelj);
  console.log('Roditelj', roditelj.className);


  if (roditelj.className == 'passed-list') {
    counterPass--;
  } else {
    counterFailed--;
  }
  roditelj.removeChild(dete);


  // console.log(passed);

}



