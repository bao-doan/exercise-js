// Write a JavaScript program to get the current date
// Expected Output : 
// mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy

var current = new Date();
var yyyy = current.getFullYear();
var mm = current.getMonth() + 1;
var dd = current.getDate();
var printDate = function (format) {
    let day = dd, month = mm;
    if (dd < 10) { day = '0' + dd; }
    if (mm < 10) { month = '0' + mm; }
    switch (format) {
        case 'mm-dd-yyyy':
            return month + '-' + day + '-' + yyyy;
            break;
        case 'mm/dd/yyyy':
            return `${month}/${day}/${yyyy}`;
            break;
        case 'dd-mm-yyyy':
            return `${day}-${month}-${yyyy}`;
            break;
        case 'dd/mm/yyyy':
            return `${day}/${month}/${yyyy}`;
            break;
    }
}
console.log(printDate('mm-dd-yyyy'));
console.log(printDate('mm/dd/yyyy'));
console.log(printDate('dd-mm-yyyy'));
console.log(printDate('dd/mm/yyyy'));


