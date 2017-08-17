'use strict';

var storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var storeNames = [];

function Store(name, minCust, maxCust, avgCookies) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookies = avgCookies;
  this.cookiesPerHour = [];

  this.randomCustomersPerHour = function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  };

  this.computeCookiesSoldPerHour = function(){
    this.cookiesPerHour = [];
    this.totalCookieSales = 0;
    for (var i = 0; i < storeHours.length; i++) {
      var hourlyCookieSales = Math.ceil(this.avgCookies * this.randomCustomersPerHour());
      this.cookiesPerHour.push(hourlyCookieSales);
      this.totalCookieSales += hourlyCookieSales;
    }
  };


  storeNames.push(this);
};

// HEADER
function tableHead() {
  var headerGenisis = document.getElementById('sales-section');
  var headerTable = document.createElement('table');
  headerGenisis.appendChild(headerTable);
  var tableRow = document.createElement('tr');
  headerTable.appendChild(tableRow);
  var topLeft = document.createElement('td');
  tableRow.appendChild(topLeft);
  for (var i = 0; i < storeHours.length; i++) {
    var headerHours = document.createElement('th');
    headerHours.innerText = storeHours[i];
    tableRow.appendChild(headerHours);
  }

  var topRight = document.createElement('th');
  topRight.innerText = 'Daily Location Total';
  tableRow.appendChild(topRight);
};

// TABLE BODY
function dailySalesReport(store){
  store.computeCookiesSoldPerHour();
  var table = document.getElementsByTagName('table')[0];
  var row = table.insertRow(table.rows.length - 1);
  var leftColumn = document.createElement('th');
  leftColumn.innerText = store.name;
  row.appendChild(leftColumn);
  for (var i = 0; i < store.cookiesPerHour.length; i++) {
    var byHour = document.createElement('td');
    byHour.innerText = store.cookiesPerHour[i];
    row.appendChild(byHour);
  }
  var listItems = document.createElement('td');
  listItems.innerText = 'Total: ' + store.totalCookieSales + ' cookies';
  row.appendChild(listItems);
  // table.appendChild(row);
};

// FOOTER
function tableFoot() {
  var footerGenisis = document.getElementsByTagName('table')[0];
  var footerTable = document.createElement('tr');
  footerGenisis.appendChild(footerTable);
  var leftBottom = document.createElement('th');
  leftBottom.innerText = 'Total';
  footerTable.appendChild(leftBottom);
  for (var i = 0; i < storeHours.length; i++) {
    var daySum = document.createElement('th');
    daySum.innerText = ' ';
    footerTable.appendChild(daySum);
  }

  var rightBottom = document.createElement('th');
  rightBottom.innerText = ' ';
  footerTable.appendChild(rightBottom);
};

var Pike = new Store('1st and Pike', 23, 65, 6.3);
var Seatac = new Store('SeaTac Airport', 3, 24, 1.2);
var seattleCenter = new Store('Seattle Center', 11, 38, 3.7);
var capitolHill = new Store('Capitol Hill', 20, 38, 2.3);
var Alki = new Store('Alki', 2, 16, 4.6);

tableHead();
tableFoot();

for(var i = 0; i < storeNames.length; i++) {
  var store = storeNames[i];
  store.computeCookiesSoldPerHour();
  dailySalesReport(store);
}

function harvestAndPost(event){
  event.preventDefault();
  var newStore = new Store();
  newStore.name = this.elements['name'].value;
  newStore.minCust = this.elements['minCust'].value;
  newStore.maxCust = this.elements['maxCust'].value;
  newStore.avgCookies = this.elements['avgCookies'].value;
  dailySalesReport(newStore);
}
var form = document.getElementById('theForm');
form.addEventListener('submit', harvestAndPost);
