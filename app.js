'use strict';

var storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var storeNames = [];

function Store(name, minCust, maxCust, avgCookies) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookies = avgCookies;
  this.simCookies = [];
  this.randomCustomersPerHour = function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  };
  this.eachHourSales = function(){
    this.simCookies = [];
    this.totalCookieSales = 0;
    for (var i = 0; i < storeHours.length; i++) {
      var hourlyCookieSales = Math.ceil(this.avgCookies * this.randomCustomersPerHour());
      this.simCookies.push(hourlyCookieSales);
      this.totalCookieSales += hourlyCookieSales;
    }
  };
  this.dailySalesReport = function(){
    this.eachHourSales(); // generates sales
    var location = document.getElementById('sales-section');
    var locationName = document.createElement('h2');
    locationName.innerText = this.name;
    location.appendChild(locationName);

    var list = document.createElement('ul');
    location.appendChild(list);

    for (var i = 0; i < storeHours.length; i++) { // for each hour do some stuff
      // this block of code creates a child element for "list"
      var listItems = document.createElement('li');
      listItems.innerText = storeHours[i] + ': ' + this.simCookies[i] + ' cookies';
      list.appendChild(listItems); // adds the new list item to the unordered list
    }
    var listItems = document.createElement('li');
    listItems.innerText = 'Total: ' + this.totalCookieSales + ' cookies';
    list.appendChild(listItems);
  };
  storeNames.push(this);
};

var Pike = new Store('1st and Pike', 23, 65, 6.3);
var Seatac = new Store('SeaTac Airport', 3, 24, 1.2);
var seattleCenter = new Store('Seattle Center', 11, 38, 3.7);
var capitolHill = new Store('Capitol Hill', 20, 38, 2.3);
var Alki = new Store('Alki', 2, 16, 4.6);

for(var i = 0; i < storeNames.length; i++) {
  storeNames[i].eachHourSales();
  storeNames[i].dailySalesReport();
}
