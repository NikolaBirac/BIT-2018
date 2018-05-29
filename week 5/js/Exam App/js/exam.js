function Exam(subject, student, grade, counter) {
  this.subject = subject;
  this.student = student;
  this.grade = grade;
  this.counter = counter;
}

Exam.prototype.getExamInfo = function () {
  return this.subject + ', ' + this.student.getStudentData();
};

Exam.prototype.hasPassed = function () {
  if (this.grade > 5) {
    return true;
  } else {
    return false;
  }
};
