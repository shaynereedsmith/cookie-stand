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

  // TABLE BODY
  this.dailySalesReport = function(){
    this.eachHourSales();
    var rowContainer = document.getElementsByTagName('table')[0];
    var rows = document.createElement('tr');
    rowContainer.appendChild(rows);
    var leftColumn = document.createElement('th');
    leftColumn.innerText = this.name;
    rows.appendChild(leftColumn);
    for (var i = 0; i < this.simCookies.length; i++) {
      var byHour = document.createElement('td');
      byHour.innerText = this.simCookies[i];
      rows.appendChild(byHour);
    }
    var listItems = document.createElement('td');
    listItems.innerText = 'Total: ' + this.totalCookieSales + ' cookies';
    rows.appendChild(listItems);
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

for(var i = 0; i < storeNames.length; i++) {
  storeNames[i].eachHourSales();
  storeNames[i].dailySalesReport();
}

tableFoot();

// function renderToHTML() {
//   var nameP = document.getElementById('myName').value;
//   document.getElementById('nameTest').innerHTML = nameP;
//   console.log(nameP);
//
//   var minCustP = document.getElementById('myMinCust').value;
//   document.getElementById('minCustTest').innerHTML = minCustP;
//   console.log(minCustP);
//
//   var maxCustP = document.getElementById('myMaxCust').value;
//   document.getElementById('maxCustTest').innerHTML = maxCustP;
//   console.log(maxCustP);
//
//   var avgCookiesPerHourP = document.getElementById('myCookiesPerHour').value;
//   document.getElementById('avgCookiesTest').innerHTML = avgCookiesPerHourP;
//   console.log(avgCookiesPerHourP);
// };

function harvestAndPost(event){
  event.preventDefault();
  var newStore = new Store();
  newStore.name = this.elements['name'].value;
  newStore.minCust = this.elements['minCust'].value;
  newStore.maxCust = this.elements['maxCust'].value;
  newStore.avgCookies = this.elements['avgCookies'].value;
  newStore.dailySalesReport();
}
var form = document.getElementById('theForm');
form.addEventListener('submit', harvestAndPost);

// THIS IS WHERE THE NEW STUFF STARTS
/*function Post(name, minCust, maxCust, avgCookies){
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookies = avgCookies;
  this.simCookies = [];

  this.renderToHTML = function(){
    // select the body
    var body = document.getElementsByTagName('table')[0];

    // create the article element and give it a class and attach to the body.
    var rows = document.createElement('tr');
    // row.setAttribute('class', 'post');
    // accomplishes the same as below
    rows.className = 'rows';
    body.appendChild(rows);
    // var postArticle = createAndAppend('article', 'post', '', body);

    // create the title and append it to the article
    var h2 = document.createElement('h2');
    h2.innerText = this.title;
    postArticle.appendChild(h2);
    // createAndAppend('h2', '', this.title, postArticle);

    // create the author_date p-tag and append it to the article
    var authorDate = document.createElement('p');
    authorDate.className = 'author_date';
    authorDate.innerText = 'By ' + this.author + ' on ' + this.date;
    postArticle.appendChild(authorDate);
    // createAndAppend('p', 'author_date', 'By ' + this.author + ' on ' + this.date, postArticle);

    // create the body p-tag and append it to the article
    var postBody = document.createElement('p');
    postBody.className = 'post-body';
    postBody.innerText = this.body;
    postArticle.appendChild(postBody);
    // createAndAppend('p', 'post-body', this.body, postArticle);
  };

  function createAndAppend(toCreate, theClass, theContent, theParent){
    var theElement = document.createElement(toCreate);
    if (theClass && theClass !== ''){
      theElement.className = theClass;
    }
    if (theContent && theContent !== ''){
      theElement.innerText = theContent;
    }
    theParent.appendChild(theElement);
    return theElement;
  }

  // this.confirmPost = function(){
  //   var yesNo = confirm('You are about to write this: ' + this.body);
  //   if (yesNo === true) {
  //     this.renderToHTML();
  //   }
  // };
  //
  // this.confirmPost();
  // this.renderToHTML();
}
*/
