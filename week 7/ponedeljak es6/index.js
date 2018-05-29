
class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    printPersonData() {
        console.log(`${this.name} ${this.surname}`);
    }
}


class Programmer extends Person {
    constructor(name, surname, languages) {
        super(name, surname)
        this.languages = languages
    }
    printProgrammerData() {
        super.printPersonData()
        console.log(`${this.languages}`);
    }
    learnedNewLanguage(newLanguage) {
        this.languages += `, ${newLanguage}`;
    }
}


const marko = new Programmer('marko', 'markovic', 'javascript, Python, PHP')
// marko.printProgrammerData();
marko.learnedNewLanguage('C++');
marko.printProgrammerData();
