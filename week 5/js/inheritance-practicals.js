

function Person(name, surname) {
    this.name = name;
    this.surname = surname;
}
Person.prototype.getFullName = function () {
    var res = this.name + ' ' + this.surname
    return res;
}



function Employee(name, surname, job, salary) {
    Person.call(this, name, surname)
    this.job = job;
    this.salary = salary;
}

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

Employee.prototype.getDataEmployee = function () {
    res = Person.prototype.getFullName.call(this) + ' ' + this.salary;
    // var res = this.name + ' ' + this.surname + ' ' + this.salary/;;
    return res;
}
Employee.prototype.getSalary = function () {
    return parseInt(this.salary);
}
Employee.prototype.increaseSalary = function () {
    return this.salary = this.salary * 1.1;
}




Developer.prototype = Object.create(Employee.prototype);
Developer.prototype.constructor = Developer;

function Developer(name, surname, job, salary, specialization) {
    Employee.call(this, name, surname, job, salary)
    this.specialization = specialization;
}
Developer.prototype.getSpecialization = function () {
    return this.specialization;
}
Developer.prototype.getDataDeveloper = function () {
    res = Employee.prototype.getDataEmployee.call(this) + ' ' + this.specialization;
    // var res = this.name + ' ' + this.surname + ' ' + this.salary/;;
    return res;
}



Manager.prototype = Object.create(Employee.prototype);
Manager.prototype.constructor = Manager;

function Manager(name, surname, job, salary, department) {
    Employee.call(this, name, surname, job, salary)
    this.department = department;
}
Manager.prototype.getDepartment = function () {
    return this.department;
}
Manager.prototype.changeDepartment = function (newValue) {
    this.department = newValue;
}
Manager.prototype.getDataManager = function () {
    res = Employee.prototype.getDataEmployee.call(this) + ' ' + this.department;
    return res;
}




var Marko = new Person('Marko', 'Markovic');

var Nikola = new Employee('Nikola', 'Nikolic', 'staff', 1300);

var Stefan = new Developer('Stefan', 'Stojanov', 'js master', 2600, 'js');

var Aleksandar = new Manager('Aleksandar', 'Jocic', 'supreme leader, ruler of seven kingdoms, master overlord', Infinity, 'full-stack');


// console.log(Marko);
// console.log(Nikola);
// console.log(Stefan);
// console.log(Aleksandar);

// console.log(Stefan.getFullName());
// console.log(Aleksandar.getDepartment());

// console.log(Stefan.getSalary());
// Stefan.increaseSalary();
// console.log(Stefan.getSalary());

// console.log(Stefan.getDataDeveloper());
console.log(Aleksandar.getDataManager());


