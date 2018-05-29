'use strict';
(
    function () {

        function Country(name, odds, continent) {
            this.name = name;
            this.odds = odds;
            this.continent = continent;
        }

        function Person(name, surname, dateOfBirth) {
            this.name = name;
            this.surname = surname;
            this.dateOfBirth = new Date(dateOfBirth).toDateString();

            this.getDataPerson = function () {
                return this.name + ' ' + this.surname + ', ' + this.playerYears() + ' years';
            }

            this.playerYears = function () {
                var current = new Date().getFullYear();
                var year = new Date(dateOfBirth).getFullYear();
                return current - year;
            }
        }

        function Player(person, betAmount, country) {
            this.person = person;
            this.betAmount = betAmount;
            this.country = country;

            this.getDataPlayer = function () {
                var letter = this.country.name.charAt(0).toUpperCase() + this.country.name.charAt(1).toUpperCase();
                var winAmount = country.odds * this.betAmount;
                return letter + ', ' + winAmount + ', ' + this.person.getDataPerson();
            }
        }

        function Address(country, city, postalCode, street, number) {
            this.country = country;
            this.city = city;
            this.postalCode = postalCode;
            this.street = street;
            this.number = number;

            this.getDataAddress = function () {
                var letter = country.charAt(0).toUpperCase() + country.charAt(1).toUpperCase();
                return this.street + ' ' + this.number + ', ' + this.postalCode + ' ' + this.city + ', ' + letter;
            }
        }

        function BettingPlace(address) {
            this.address = address;
            this.listOfPlayers = [];

            this.addPlayer = function (player) {
                this.listOfPlayers.push(player);
            }

            this.getDataBettingPlace = function () {
                var b = 0;
                for (var i = 0; i < this.listOfPlayers.length; i++) {
                    var a = this.listOfPlayers[i];
                    b = b + a.betAmount;
                }
                return this.address.street + ', ' + this.address.postalCode + ' ' + this.address.city + ', sum of all bets: ' + b + 'eur';
            }
        }

        function BettingHouse(competition, numberOfPlayers) {
            this.competition = competition;
            this.numberOfPlayers = 0;
            this.lisOfBettingPlace = [];

            this.addBettingPlaces = function (places) {
                this.lisOfBettingPlace.push(places);
                this.numberOfPlayers++;
            }

            this.getDataBetHouse = function () {
                var num = 0;
                var betData = '';
                var dataPlayer = '';
                var result = '';
                for (var i = 0; i < this.lisOfBettingPlace.length; i++) {
                    num += this.lisOfBettingPlace[i].listOfPlayers.length;
                    betData = this.lisOfBettingPlace[i].getDataBettingPlace() + '\n\t\t';
                    dataPlayer = '';
                    for (var j = 0; j < this.lisOfBettingPlace[i].listOfPlayers.length; j++) {

                        dataPlayer += this.lisOfBettingPlace[i].listOfPlayers[j].getDataPlayer() + '\n\t\t';
                    }
                    result = result + betData + dataPlayer;
                }
                return this.competition + ', ' + this.numberOfPlayers + ' betting places, ' + num + ' bets\n\t' + result;
            }
        }

        function createPlayer(person, betAmount, country) {
            return new Player(person, betAmount, country)
        }

        function createBettingPlace(address) {
            return new BettingPlace(address);
        }


        var Continent = {
            ASIA: 'AS',
            EUROPE: 'EU',
            AUSTRALIA: 'AU',
            SOUTHAMERICA: 'SA',
            NORTHAMERICA: 'NA',
            AFRICA: 'AF'
        }


        var adresa1 = new Address('Srbija', 'Belgrade', 11000, 'Nemanjina', 4);
        var adresa2 = new Address('Srbija', 'Belgrade', 11070, 'Pohorska', 5);

        var Nemacka = new Country('Nemacka', 2.15, Continent.EUROPE);
        var Brazil = new Country('Brazil', 1.50, Continent.SOUTHAMERICA);
        var Srbija = new Country('Srbija', 3.00, Continent.EUROPE);

        var Janez = new Person('Jane', 'Markovic', '2/17/1987');
        var Marko = new Person('Marko', 'Stefamovic', '2/17/1987');
        var Zarko = new Person('Zarko', 'Batic', '2/17/1987');
        var Mirko = new Person('Mirko', 'Jovanovic', '2/17/1987');
        var player1 = createPlayer(Janez, 1000, Brazil);
        var player2 = createPlayer(Marko, 2100, Nemacka);
        var player3 = createPlayer(Zarko, 1500, Srbija);
        var player4 = createPlayer(Mirko, 2000, Nemacka);

        var Soccer = new BettingPlace(adresa1);
        var Mozzart = new BettingPlace(adresa2);
        var glavna = new BettingHouse('World Cup');

        Soccer.addPlayer(player1);
        Soccer.addPlayer(player2);
        Mozzart.addPlayer(player3);
        Mozzart.addPlayer(player4);

        glavna.addBettingPlaces(Soccer);
        glavna.addBettingPlaces(Mozzart);




        // console.log(adresa1.getDataAddress());
        // console.log(Janez.playerYears());
        // console.log(player1.getDataPlayer());
        // console.log(Soccer.getDataBettingPlace());
        console.log(glavna.getDataBetHouse());
        // console.log(Soccer.addPlayer());








    }
)()

