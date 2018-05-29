class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
}
class Employee extends Person {
    constructor(name, surname, job, salary) {
        super(name, surname);
        this.job = job;
        this.salary = parseInt(salary);
    }
    getData() {
        console.log(`${this.name} ${this.surname}'s salary is ${this.salary}e`);
    }
    getSalary() {
        console.log(`${this.salary}`);
    }
    increaseSalary() {
        this.salary *= 1.1;
    }
}
class Developer extends Employee {
    constructor(name, surname, job, salary, specialization) {
        super(name, surname, job, salary);
        this.specialization = specialization;
    }
    getSpecialization() {
        console.log(`${this.specialization}`);
    }
}
class Manager extends Employee {
    constructor(name, surname, job, salary, department) {
        super(name, surname, job, salary);
        this.department = department;
    }
    getDepartment() {
        console.log(`${this.department}`);
    }
    changeDepartment(newDepartment) {
        this.department = newDepartment;
    }
}

const Dejan = new Manager("Dejan", "Atanackovic", "Director", "2400", "CEO");
Dejan.getData();
Dejan.increaseSalary();
Dejan.getData();
Dejan.getDepartment()

