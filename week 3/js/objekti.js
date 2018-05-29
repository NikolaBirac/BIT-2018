/////////////1.zadatak

var coffee = {
    name: 'Jacobs',
    strength: 'strong',
    flavour: 'vanila',
    milk: true,
    sugar: false,
    cream: 'large'
}
console.log(coffee);

//////////////////////////2.zadatak

var movie = {
    title: 'Svecki',
    actors: 'Brus Vilis',
    director: 'Stiven Spilberg',
    genre: 'action',
    popularity: true
}
console.log(movie);

////////////////////////////3.zadatak


function CheckProgram(des, lang, git, comp) {

    this.description = des;
    this.proLanguage = lang,
        this.git = git,
        this.completed = comp

    this.CheckProLanguage = function () {
        if (this.proLanguage == 'JS') {
            return 'Java Script\n';
        } else {
            return 'NO Java Script\n';
        }
    }
    this.git2 = function () {
        return this.git;
    }


    this.Ccompleted = function () {
        if (this.completed == true) {
            return 'Program completed\n';
        } else {
            return 'Program no completed\n';
        }
    }
    this.descriptionn = function () {
        return this.description;
    }
}

var program = new CheckProgram('calculating numbers\n', 'JS\n', 'www.google.com\n', true)
console.log(program.git2(), program.Ccompleted(), program.CheckProLanguage(), program.descriptionn());

//////////////////////////////////////////4.zadatak

function Recipe(name, country, complicate, ing, time, instr) {

    this.name = name;
    this.typeOfCuisine = country;
    this.complexity = complicate;
    this.ingredients = ing;
    this.prepTime = time;
    this.prepInstruction = instr;

    this.ingredientsPrint = function () {
        return this.ingredients;
    }

    this.checkTime = function () {
        if (this.prepTime <= 15) {
            return "Meal can be prepared\n";
        } else {
            return 'Meal can not be prepared';
        }
    }

    // this.changeCuisine = function () {
    //     if (this.name === "sarma") {
    //         if (this.typeOfCuisine !== "serbian") {
    //             this.typeOfCuisine = "serbian";
    //         }
    //     }
    //     return this.typeOfCuisine;
    // }

    this.deleteIngredients = function (element) {
        var i;
        var j;
        var newArray = [];

        for (i = 0, j = 0; i < ing.length; i++) {
            if (element != ing[i]) {
                newArray[j] = ing[i];
                j++
            }
        } return newArray;
    }
}

var jelo = new Recipe('sarma', 'sada', 7, ['kupus', 'meso', 'zacini'], 120, 'open the window');

// console.log(jelo);
// jelo.changeCuisine();
// console.log(jelo);


console.log(jelo.ingredientsPrint(), jelo.checkTime() /*jelo.changeCuisine()*/);
console.log(jelo.deleteIngredients('zacini'));






