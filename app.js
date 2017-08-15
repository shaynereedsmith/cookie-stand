'use strict';

function cookieStand(location, minHourlyCust, maxHourlyCust, avgCookiesPerSale) {
  this.location = location;
  this.minHourlyCust = minHourlyCust;
  this.maxHourlyCust = maxHourlyCust;
  this.avgCookiesPerSale = avtCookiesPerSale;
};

var cookieStandOne = new cookieStand("1st and Pike", 23, 65, 6.3);
var cookieStandTwo = new cookieStand("SeaTac Airport", 3, 24, 1.2);
var cookieStandTwo = new cookieStand("Seattle Center", 11, 38, 3.7);
var cookieStandOne = new cookieStand("Capitol Hill", 20, 38, 2.3);
var cookieStandOne = new cookieStand("Alki", 2, 16, 4.6);

/*
function person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}
var myFather = new person("John", "Doe", 50, "blue");
var myMother = new person("Sally", "Rally", 48, "green");

var cookieStand1 = {
  location: 'firstPike',
  minHourlyCust:  23,
  maxHourlyCust: 65,
  avgDailyCustomersHr: function() {
    return Math.floor(Math.random() * (this.maxHourlyCust - this.minHourlyCust) + this.minHourlyCust);
  },
  avgCookiesPerSale: 6.3,
  hourlyCookiesSold: [],
  hourlyCookiesSoldRate: function() {
    for (var i = 0; i < 14; i++) {
      var product = this.avgCookiesPerSale * this.avgDailyCustomersHr();
      this.hourlyCookiesSold.push(Math.round(product));
    }
  }
};
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

var stores = document.getElementById('storeList1');
stores.textContent = cookieStand1.location;

cookieStand1.hourlyCookiesSoldRate();
for (var i = 0; i < hours.length; i++) {
  var newLi = document.createElement('li');
  newLi.innerText = hours[i] + ': ' + cookieStand1.hourlyCookiesSold[i] + ' cookies sold.';
  storeList1.appendChild(newLi);
}

/*

var storeOne = {
  location: '1st and Pike',
  minCust: 23,
  maxCust: 65,
  avgCookieSales: 6.3,
  hoursPerDay: ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
  salesPerHour: function(avgCookieSales, minCust, maxCust) {
    var random = (Math.floor(Math.random() * this.maxCust - this.minCust) + this.minCust);
    var salesPerHour = this.avgCookieSales * random;
    return salesPerHour;
  },

//NOAH CODE

var store1Dailylog = [];
var store2Dailylog = [];
var store3Dailylog = [];
var store4Dailylog = [];
var store5Dailylog = [];

var store1 = {
  storeName: '1st and Pike',
  minNumCustHour: 23,
  maxNumCustHour: 65,
  avgCookCustHour: 6.3,
  hoursOfDay: ['6am:', '7am:', '8am:', '9am:', '10am:', '11am:', '12pm:', '1pm:', '2pm:', '3pm:', '4pm:', '5pm:', '6pm:', '7pm', '8pm',],
  cookSalesHour: function(avgCookCustHour, minNumCustHour, maxNumCustHour) {
    var rando = (Math.floor(Math.random() * (this.maxNumCustHour - this.minNumCustHour) + this.minNumCustHour));
    var salesHour = this.avgCookCustHour * rando;
    return salesHour;
  },
  salesHourDailyLog: function () {
    for (var i = 0; i < this.hoursOfDay.length; i++) {
      // console.log(this.hoursOfDay.length);
      // console.log(i);
      store1Dailylog.push(this.hoursOfDay[i]);
      store1Dailylog.push(this.cookSalesHour());
      console.log(log);
    };
  }
};


  //operation to calculate aounts of cookies purchased per hour using average cookies purchased (avgCookieSales) and random number of
  //variable to store the operation
};

//3. Calculate and store amounts of cookies purchased for each hour using average cookies purchased and the random number of customers generated
//4. Store the results for each location in a separate array... perhaps as a property of the object representing that location
//5. Display the values of each array as unordered lists in the browser
//

var hotel = {
  name: 'hotel name',
  checkName: function() {
    return this.name;
  }
};

var storeTwo = {
  location: 'SeaTac Airport',
  minCust: 3,
  maxCust: 24,
  avgCookieSales: 1.2
};

var storeThree = {
  location: 'Seattle Center',
  minCust: 11,
  maxCust: 38,
  avgCookieSales: 3.7
};

var storeFour = {
  location: 'Capitol Hill',
  minCust: 20,
  maxCust: 38,
  avgCookieSales: 2.3
};

var storeFive = {
  location: 'Alki',
  minCust: 2,
  maxCust: 16,
  avgCookieSales: 4.6
};
*/
