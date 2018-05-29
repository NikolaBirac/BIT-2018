function Festival(name, maxNumMovies) {
    this.name = name;
    this.listOfProgram = [];
    this.numOfAllMovies = 0;

    try {
        if (parseInt(maxNumMovies) == parseInt(maxNumMovies)) {
            this.maxNumMovies = maxNumMovies;
        } else {
            throw new Error('STAVI BROJ ZA MAXIMALNI BROJ FILMA');
        }
    } catch (error) {
        console.log(error.message);
    }
}

Festival.prototype.addProgram = function (program) {
    if ((this.numOfAllMovies + program.numOfMovies) > this.maxNumMovies) {
        var a = 'Max number of movies are 5!';
        console.log(a);
    } else {
        this.listOfProgram.push(program);
        this.numOfAllMovies += program.numOfMovies;
    }
}

Festival.prototype.getDataFestival = function () {
    var result;
    if (this.listOfProgram.length == 0) {
        result = this.name + '\n\tProgram to be announced';
    } else {
        result = this.name + ' has ' + this.numOfAllMovies + ' movie titles\n';
        for (var i = 0; i < this.listOfProgram.length; i++) {
            var programInfo = this.listOfProgram[i].getDataProgram() + '\n';
            result += programInfo;
        }
    }
    return result;
}

module.exports.Festival = Festival;