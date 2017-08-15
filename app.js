'use strict';

//-------- 1st and Pike --------

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

//-------- SeaTac Airport ---------

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

var cookieStand2 = {
  location: 'SeaTac Airport',
  minHourlyCust:  3,
  maxHourlyCust: 24,
  avgDailyCustomersHr: function() {
    return Math.floor(Math.random() * (this.maxHourlyCust - this.minHourlyCust) + this.minHourlyCust);
  },
  avgCookiesPerSale: 1.2,
  hourlyCookiesSold: [],
  hourlyCookiesSoldRate: function() {
    for (var i = 0; i < hours.length; i++) {
      var product = this.avgCookiesPerSale * this.avgDailyCustomersHr();
      this.hourlyCookiesSold.push(Math.round(product));
    }
  }
};

var stores = document.getElementById('storeList2');
stores.textContent = cookieStand2.location;

cookieStand2.hourlyCookiesSoldRate();
for (var i = 0; i < hours.length; i++) {
  var newLi = document.createElement('li');
  newLi.innerText = hours[i] + ': ' + cookieStand2.hourlyCookiesSold[i] + ' cookies sold.';
  storeList2.appendChild(newLi);
}

var totalLi = document.createElement('li');
var sumOne = 0;
for (var j; j < cookieStand2.hourlyCookiesSold.length; j++) {
  sumOne = sumOne + cookieStand2.hourlyCookiesSold[j];
}
totalLi.innerText = 'Total:' + sumOne + ' cookies';
newLi.appendChild(totalLi);

//-------- Seattle Center --------

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

var cookieStand3 = {
  location: 'Seattle Center',
  minHourlyCust:  11,
  maxHourlyCust: 38,
  avgDailyCustomersHr: function() {
    return Math.floor(Math.random() * (this.maxHourlyCust - this.minHourlyCust) + this.minHourlyCust);
  },
  avgCookiesPerSale: 3.7,
  hourlyCookiesSold: [],
  hourlyCookiesSoldRate: function() {
    for (var i = 0; i < hours.length; i++) {
      var product = this.avgCookiesPerSale * this.avgDailyCustomersHr();
      this.hourlyCookiesSold.push(Math.round(product));
    }
  }
};

var stores = document.getElementById('storeList3');
stores.textContent = cookieStand3.location;

cookieStand3.hourlyCookiesSoldRate();
for (var i = 0; i < hours.length; i++) {
  var newLi = document.createElement('li');
  newLi.innerText = hours[i] + ': ' + cookieStand3.hourlyCookiesSold[i] + ' cookies sold.';
  storeList3.appendChild(newLi);
}

var totalLi = document.createElement('li');
var sumOne = 0;
for (var j; j < cookieStand3.hourlyCookiesSold.length; j++) {
  sumOne = sumOne + cookieStand3.hourlyCookiesSold[j];
}
totalLi.innerText = 'Total:' + sumOne + ' cookies';
newLi.appendChild(totalLi);

//-------- Capitol Hill --------

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

var cookieStand4 = {
  location: 'Capitol Hill',
  minHourlyCust:  20,
  maxHourlyCust: 38,
  avgDailyCustomersHr: function() {
    return Math.floor(Math.random() * (this.maxHourlyCust - this.minHourlyCust) + this.minHourlyCust);
  },
  avgCookiesPerSale: 2.3,
  hourlyCookiesSold: [],
  hourlyCookiesSoldRate: function() {
    for (var i = 0; i < hours.length; i++) {
      var product = this.avgCookiesPerSale * this.avgDailyCustomersHr();
      this.hourlyCookiesSold.push(Math.round(product));
    }
  }
};

var stores = document.getElementById('storeList4');
stores.textContent = cookieStand4.location;

cookieStand4.hourlyCookiesSoldRate();
for (var i = 0; i < hours.length; i++) {
  var newLi = document.createElement('li');
  newLi.innerText = hours[i] + ': ' + cookieStand4.hourlyCookiesSold[i] + ' cookies sold.';
  storeList4.appendChild(newLi);
}

var totalLi = document.createElement('li');
var sumOne = 0;
for (var j; j < cookieStand4.hourlyCookiesSold.length; j++) {
  sumOne = sumOne + cookieStand4.hourlyCookiesSold[j];
}
totalLi.innerText = 'Total:' + sumOne + ' cookies';
newLi.appendChild(totalLi);

//-------- Alki --------

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

var cookieStand5 = {
  location: 'Alki',
  minHourlyCust:  2,
  maxHourlyCust: 16,
  avgDailyCustomersHr: function() {
    return Math.floor(Math.random() * (this.maxHourlyCust - this.minHourlyCust) + this.minHourlyCust);
  },
  avgCookiesPerSale: 4.6,
  hourlyCookiesSold: [],
  hourlyCookiesSoldRate: function() {
    for (var i = 0; i < hours.length; i++) {
      var product = this.avgCookiesPerSale * this.avgDailyCustomersHr();
      this.hourlyCookiesSold.push(Math.round(product));
    }
  }
};

var stores = document.getElementById('storeList5');
stores.textContent = cookieStand5.location;

cookieStand5.hourlyCookiesSoldRate();
for (var i = 0; i < hours.length; i++) {
  var newLi = document.createElement('li');
  newLi.innerText = hours[i] + ': ' + cookieStand5.hourlyCookiesSold[i] + ' cookies sold.';
  storeList5.appendChild(newLi);
}

var totalLi = document.createElement('li');
var sumOne = 0;
for (var j; j < cookieStand5.hourlyCookiesSold.length; j++) {
  sumOne = sumOne + cookieStand5.hourlyCookiesSold[j];
}
totalLi.innerText = 'Total:' + sumOne + ' cookies';
newLi.appendChild(totalLi);
