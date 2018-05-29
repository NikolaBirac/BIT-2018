
var Chacker = new Object();//novi objekat u kom ce biti smestena svojstva

function WebApp(name, url, technologies, licence, stars) {
    this.name = name;
    this.url = url;
    this.technologies = technologies;
    this.licence = licence;
    this.stars = stars;
}
WebApp.prototype = Object.create(Chacker);
WebApp.prototype.constructor = WebApp;

WebApp.prototype.getDataWebApp = function () {
    return this.name + ', ' + this.url + ', ' + this.technologies + ', ' + this.licence + ', ' + this.stars;
}
WebApp.prototype.reactBased = function () {
    var a;
    if (this.technologies.indexOf('React') > -1) {
        a = 'YES';
    } else {
        a = 'No';
    }
    return a;
}


function MobileApp(name, platform, licence, stars) {
    this.name = name;
    this.platform = platform;
    this.licence = licence;
    this.stars = stars;
}
MobileApp.prototype = Object.create(Chacker);
MobileApp.prototype.constructor = MobileApp;

MobileApp.prototype.getDataMobileApp = function () {
    return this.name + ', ' + this.platform + ', ' + this.licence + ', ' + this.stars;
}
MobileApp.prototype.forAndroid = function () {
    if (this.platform.indexOf('android') > -1) {
        var a = "YES";
    } else {
        var a = "NO";
    }
    return a;
}


Chacker.CClicence = function () {
    if (this.licence == 'CC') {
        return 'YES';
    } else {
        return 'NO';
    }
}
Chacker.Like = function () {
    return this.stars = this.stars + 1;
}
Chacker.showStars = function () {
    console.log(this.stars);

}


var FantasyBall = new WebApp('Fantasy Foodball', 'www.fantasy.com', "js, css, java, React, android", 'CC', 4);
var WhatsUp = new MobileApp('WhatsUp', "js, React, mobDev", 'CC', 4);

// console.log(WhatsUp.getDataMobileApp());
// console.log(WhatsUp.forAndroid());
// console.log(FantasyBall.reactBased());

// console.log(WhatsUp.CClicence());
console.log(WhatsUp.Like());
// console.log(WhatsUp.showStars());
console.log(WhatsUp.getDataMobileApp());


