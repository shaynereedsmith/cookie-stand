'use strict';

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
