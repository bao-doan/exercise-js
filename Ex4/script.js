// Find the area of a triangle where lengths of the three of its sides are 5, 6, 7

var a = document.getElementById('a');
var b = document.getElementById('b');
var c = document.getElementById('c');
var calc = document.getElementById('calc');
var result = document.getElementById('result');
if (a.oninput || b.oninput || c.oninput) {

    console.log(a.value);
    console.log(b.value);
    console.log(c.value);
}
calc.onclick = function() {
    p = (Number(a.value) + Number(b.value) + Number(c.value)) / 2;
    let area = Math.sqrt(p*(p-a.value)*(p-b.value)*(p-c.value));
    result.innerHTML = "Result is: " + area;
}

// UNDONE YET !!!