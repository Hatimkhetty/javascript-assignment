// chapter 12-13 //

//task 1 //
var num1 = prompt("enter num one:");
var num2 = prompt("enter num two:");
var op = prompt("enter the operation (+,-,*,/):");
var int1 = parseInt(num1);
var int2 = parseInt(num2);
if (op === "+") {
    alert(num1 + op + num2 + "=" + (int1 + int2));
} else if (op === "-") {
    alert(num1 + op + num2 + "=" + (int1 - int2));
}
if (op === "*") {
    alert(num1 + op + num2 + "=" + (int1 * int2));
}
if (op === "/") {
    alert(num1 + op + num2 + "=" + (int1 / int2));
}

//task 2//
var data1 = prompt("Enter first number");
var data2 = prompt("Enter second number");
var check1 = parseInt(data1);
var check2 = parseInt(data2);
if (check1 > check2) {
    alert("first number is greater than second");
} else if (check2 === check1) {
    alert("Numbers are equal");
}

//task 3 //
var data1 = prompt("Enter first number");
var check1 = parseInt(data1);
if (check1 > 0) {
    alert("Number is positive");
} else if (check1 < 0) {
    alert("Number is negative");
} else {
    alert("Number is zero");
}

//task 4 //
var value = prompt("Enter the charachter");
if (value === 'a' || value === 'e' || value === 'i' || value === 'o' || value === 'u') {
    alert("given charachter is vowvel");
} else {
    alert("False");
}

//task 5//
var data_1 = prompt("Enter password:");
var data_2 = prompt("Re-Enter password for conformition:");
var pas_1 = data_1.toLowerCase();
var pas_2 = data_2.toLowerCase();
var pass = "pakistan"
if (pas_1 === pass || pas_2 === pass) {
    alert("The password you enter matched correct password");
} else {
    alert("enter password again");
}

//task 6//
var input = prompt("Enter time in 24 hrs format");
var result = input.slice(0, 2);
var check = parseInt(result);
var final = check - 12;
alert("The time is: " + final);