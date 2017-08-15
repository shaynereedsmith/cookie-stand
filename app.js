'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

var cookieStand1 = {
  location: '1st and Pike',
  minHourlyCust:  23,
  maxHourlyCust: 65,
  avgDailyCustomersHr: function() {
    return Math.floor(Math.random() * (this.maxHourlyCust - this.minHourlyCust) + this.minHourlyCust);
  },
  avgCookiesPerSale: 6.3,
  hourlyCookiesSold: [],
  hourlyCookiesSoldRate: function() {
    for (var i = 0; i < hours.length; i++) {
      var product = this.avgCookiesPerSale * this.avgDailyCustomersHr();
      this.hourlyCookiesSold.push(Math.round(product));
    }
  }
};

var stores = document.getElementById('storeList1');
stores.textContent = cookieStand1.location;

cookieStand1.hourlyCookiesSoldRate();
for (var i = 0; i < hours.length; i++) {
  var newLi = document.createElement('li');
  newLi.innerText = hours[i] + ': ' + cookieStand1.hourlyCookiesSold[i] + ' cookies sold.';
  storeList1.appendChild(newLi);
}

var totalLi = document.createElement('li');
var sumOne = 0;
for (var j; j < cookieStand1.hourlyCookiesSold.length; j++) {
  sumOne = sumOne + cookieStand1.hourlyCookiesSold[j];
}
totalLi.innerText = 'Total:' + sumOne + ' cookies';
newLi.appendChild(totalLi);

/*
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
