'use strict';

(
    function () {

        function Person(name, surname) {
            this.name = name;
            this.surname = surname;

            this.getDataPerson = function () {
                return this.name.concat(' ', this.surname);
            }
        }

        //Seat(12, "e") --> number:12, category: e
        //Seat(12) --> number:12, category: undefined
        //Seat("e") --> number:"e", category: undefined
        //Seat() --> number:undefined, category: undefined

        function Seat(number, category) {
            if (parseInt(number) == number) {
                this.number = parseInt(number);
            } else {
                this.number = parseInt((100 - 10) * Math.random() + 10);
            }

            if (category === 'business' || category === 'economy') {
                this.category = category.charAt(0).toUpperCase();
            } else {
                this.category = 'E';
            }

            this.getDataSeat = function () {
                return this.number.concat(', ', this.category);
            }
        }

        function Passenger(person, seat) {
            this.person = person;
            this.seat = seat;

            this.getDataPassenger = function (seat, person) {
                return this.seat.number.toString().concat(', ', this.seat.category, ', ', this.person.getDataPerson());
            }
        }

        function Flight(relation, date) {
            this.relation = relation;
            this.date = new Date(date).toDateString();
            this.listOfPassenger = [];

            this.addPassenger = function (passenger) {
                this.listOfPassenger.push(passenger); /*ne treba return jer ga push gura*/
            }

            this.getDataFlight = function () {

                var result = '';
                for (var i = 0; i < this.listOfPassenger.length; i++) {
                    var a = this.listOfPassenger[i];
                    result += a.getDataPassenger() + '\n\t\t';
                }

                var dataString = '';
                dataString = this.date + ' ' + this.relation;
                return dataString.concat('\n\t\t', result);

                // return this.date.concat(', ', this.relation, '\n\t', result)
            }
        }

        function Airport() {
            this.airportName = 'Nikola Tesla';
            this.listOfFlight = [];

            this.addFlight = function (flight) {
                this.listOfFlight.push(flight)
            }

            this.getDataAirport = function () {
                var passengers = 0;
                var flightData = '';
                for (var i = 0; i < this.listOfFlight.length; i++) {
                    passengers += this.listOfFlight[i].listOfPassenger.length;
                    flightData += this.listOfFlight[i].getDataFlight() + '\n\t'
                }
                return 'Airport: ' + this.airportName + ', total passengers:' + passengers + '\n\t' + flightData;
            }
        }



        function createFlight(relation, date) {
            return new Flight(relation, date);
        }
        function createPassenger(name, surname, seatNumber, category) {
            var person = new Person(name, surname);
            var seat = new Seat(seatNumber, category);
            return new Passenger(person, seat);
        }


        // var brojSedista = new Seat('35', 'business');
        // var brojSedista2 = new Seat('asd', 'economy');
        // var brojSedista3 = new Seat('economy');
        // var brojSedista4 = new Seat(58);

        // var Nikola = new Person('Nikola', 'Birac');
        // var Pera = new Person('Pera', 'Peric');
        // var Mika = new Person('Mika', 'Mikser');
        // var Deki = new Person('Deki', 'Atanac');

        // var putnik1 = new Passenger(Nikola, brojSedista);
        // var putnik2 = new Passenger(Pera, brojSedista2);
        // var putnik3 = new Passenger(Mika, brojSedista3);
        // var putnik4 = new Passenger(Deki, brojSedista4);

        var let1 = createFlight("Belgrade-New York", '5/25/2018');
        var let2 = createFlight("Belgrade-Sidney", '5/27/2018');

        var putnik1 = createPassenger('John', "Snow", '1', 'business');
        var putnik2 = createPassenger('Cercei', "Lanister", '2', 'business');
        var putnik3 = createPassenger('Daenerys', "Targaryen", 14);
        var putnik4 = createPassenger('Tyrion', "Lannister");

        var Aerodrom = new Airport();

        let1.addPassenger(putnik1);
        let1.addPassenger(putnik2);
        let2.addPassenger(putnik3);
        let2.addPassenger(putnik4);

        Aerodrom.addFlight(let1);
        Aerodrom.addFlight(let2);

        // console.log(putnik1.getDataPassenger());

        // console.log(let1.listOfPassenger);
        console.log(Aerodrom.getDataAirport());
        // console.log(let2.getDataFlight());


    }
)()