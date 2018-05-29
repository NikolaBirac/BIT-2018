"use strict";

(
    function () {

        function Product(name, price, expDate) {
            this.id = parseInt(((99999 - 10000) * Math.random()) + 10000);
            this.name = name;
            this.price = parseFloat(price);
            this.expDate = new Date(expDate);

            this.getInfo = function () {
                var firstLetter = this.name[0].toUpperCase();
                var lastLetter = this.name[this.name.length - 1].toUpperCase();
                var letterNumber = firstLetter + lastLetter + this.id;
                return letterNumber + ', ' + this.name + ', ' + this.price;
            }
        }

        function ShoppingBag() {
            this.productList = [];

            this.addProduct = function (product) {
                // if (product instanceof Product) {
                //     this.productList.push(product)
                // } da se osiguramo 
                if (product.expDate > new Date()) {
                    this.productList.push(product);
                    return this.productList;
                } else {
                    return 'Product is out of date!';
                }
            }

            this.calculateTotalPrice = function () {
                var result = 0;
                var i;

                for (i = 0; i < this.productList.length; i++) {
                    var product = this.productList[i];
                    result += product.price;
                }
                return parseFloat(result);
            }

            this.averagePrice = function () {
                var total = this.calculateTotalPrice();
                var result = (total / this.productList.length).toFixed(3);
                return parseFloat(result);
            }

            this.getMostExpensive = function () {
                this.productList.sort(
                    function (a, b) {
                        return a.price - b.price;
                    }
                )
                var max = this.productList[this.productList.length - 1];
                return max.getInfo();
            }
        }

        function PaymentCard(accountBalance, status, validDate) {

            this.balance = parseFloat(accountBalance);
            this.status = status;
            this.date = new Date(validDate);
        }

        function checkoutAndBuy(bag, card) {
            if (card.status == 'valid' && card.date >= new Date()) {
                if (card.balance >= bag.calculateTotalPrice()) {
                    return "The purchase is successful! :)"
                } else {
                    return card.balance - bag.calculateTotalPrice();
                }
            } else {
                return "Card is not valid!"
            }
        }

        var Banana = new Product("Banana", "120.54", "12/12/2019");
        var Kiwi = new Product("Kiwi", "140.54", "12/12/2019");

        var MarkoBag = new ShoppingBag();
        var MarkoCard = new PaymentCard(500, 'valid', '10/10/2018');
        // console.log(MarkoCard.date);

        // console.log(MarkoBag.addProduct(Banana));
        // console.log(MarkoBag.addProduct(Kiwi));

        // console.log(Banana.getInfo());
        // console.log(MarkoBag.calculateTotalPrice());
        // console.log(MarkoBag.averagePrice());
        // console.log(MarkoBag.getMostExpensive());
        // var b = checkoutAndBuy(MarkoBag)
        console.log(checkoutAndBuy(MarkoBag, MarkoCard));
        // console.log(MarkoCard.balance);

    }
)();




// this.getMostExpensive = function () {
//     var niz = [];
//     var i;
//     var result;
//     var info;
//     for (i = 0; i < this.productList.length; i++) {
//         niz[i] = this.productList[i].price;
//     }
//     niz = niz.reverse();
//     result = niz[0];

//     for (i = 0; i < this.productList.length; i++) {
//         if (result == this.productList[i].price) {
//             info = this.productList[i].getInfo();
//         }
//     }
//     return info;
// }