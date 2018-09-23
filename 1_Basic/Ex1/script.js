// Write a JavaScript program to display the current day and time in the following format.
// Today is : Tuesday. 
// Current time is : 10 PM : 30 : 38

var today = new Date();
var day = today.getDay();
var dayList = ['Sub', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
console.log('Today is: ' + dayList[day] + ".");


var hours = today.getHours();
var minute = today.getMinutes();
var second = today.getSeconds();

var prepand = hours >= 12 ? ' PM ' : ' AM ';
hours = hours >= 12 ? hours - 12 : hours;

if (hours == 0 && prepand == ' PM ') {
    hours = 12;
    prepand = ' PM';
}
if (hours == 0 && prepand == ' AM ') {
    hours = 12;
    prepand = ' AM';
}

console.log('Current time is : ' + hours+prepand+" : "+minute+" : "+second);




