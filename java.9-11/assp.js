// chapter 9-11 //

//task 1 //
var city = prompt("enter your city:");
if (city == "Karachi") {
    alert("Welcome to city of lights: ");
}
document.write("</br>" + "</br>")

// task 2 //
var gender = prompt("Enter the gender:");
if (gender === "Male") {
    alert("Good Morning Sir");
}
if (gender === "Female") {
    alert("Good Morning mam");
}

//task 3 //
var signal_color = prompt("Enter the color of traffc light");
if (signal_color == "Red") {
    alert("Must Stop");
}
if (signal_color == "Yellow") {
    alert("Ready to move");
}
if (signal_color == "Green") {
    alert("Must Go");
}

//task 4 //
var check = prompt("Enter value of fuel in liters: ");
if (check == "0.25") {
    alert("please refill the fuel in the car");
} else {
    alert(check + " Liters");
}

//task 5 //
var a = 4;
if (++a === 5) {
    alert("given condition for variable a is true");
} // yes the alert is prompt

var b = 82;
if (b++ === 83) {
    alert("given condition for variable b is true");
} // no the alert is not prompt b/c the if return false statement

var c = 12;
if (c++ === 13) {
    alert("condition 1 is true");
}
if (c === 13) {
    alert("condition 2 is true");
}
if (++c < 14) {
    alert("condition 3 is true");
}
if (c === 14) {
    alert("condition 4 is true");
} // condition 2 and 4 is true

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
    alert("The cost equals");
} // yes alert is prompt

if (true) {
    alert("True");
}
if (false) {
    alert("False");
} //alert is prompt and show output true b/c if return true satement

if ("car" < "cat") {
    alert("car is smaller than cat");
} // yes the alert is prompt

//task 6 //
var marks1 = prompt("Enter the obtained number in first subject");
var marks2 = prompt("Enter the obtained number in second subject");
var marks3 = prompt("Enter the obtained number in third subject");
var total = 300;
var t_o_m = parseInt(marks1) + parseInt(marks2) + parseInt(marks3);
var perc = (t_o_m * 100) / total;
document.write("<h1>Marks Sheet </h1>" + "</br>" + "</br>");
document.write("Total Marks: " + total + "</br>");
document.write("Marks Obtained: " + t_o_m + "</br>");
document.write("Percentage: " + perc + "%" + "</br>");
if (perc >= 80) {
    document.write("Grade=A-one" + "</br>" + "Remarks:Excellent");
} else if (perc >= 70) {
    document.write("Grade=A" + "</br>" + "Remarks:Good");
} else if (perc >= 60) {
    document.write("Grade=B" + "</br>" + "Remarks:you need to improve");
} else {
    document.write("Grade=F" + "</br>" + "Remarks:Sorry");
}

//task 7 //
var secret_number = 7;
var guess = prompt("Enter your guess: ");
var check = parseInt(guess);
if (check === 7) {
    alert("Bingo! Correct answer");
} else if (check === 8) {
    alert("close enough!");
} else {
    alert("try again");
}

//task 8 //

var num = prompt("Enter number:");
var check = parseInt(num);
if (check % 3 == 0) {
    alert("Number is divisible by 3");
}

//task 9 //
var num = prompt("Enter number:");
var check = parseInt(num);
if (check > 40) {
    alert("Too Hot!");
} else if (check > 30) {
    alert("The weather today is normal");
} else if (check > 20) {
    alert("Today weather is cool");
} else if (check > 10) {
    alert("Tofday weather is so cool");
} else {
    alert("nothing");
}

//task 10 //
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