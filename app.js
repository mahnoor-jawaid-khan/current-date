// current date

var todayDate = new Date();
var day = todayDate.getDay();

var monthname = ["January", "February", "March", "April", "May", "June", "July", "August", "September",  "Octuber", "November", "December"]
var monthIndex = todayDate.getMonth();
var month = monthname[monthIndex];

var year = todayDate.getFullYear();
var today = day + "-" + month + "-" + year;
document.write(today);

