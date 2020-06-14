// chapter 6 

// task 1 //
document.write("Result:" + "</br>");
var a = 10;
document.write("The value of a is: " + a + "</br>");
document.write(".................................................." + "</br>");
var x = ++a
document.write("The value of ++a is: " + x + "</br>");
var x = a;
document.write("Now The value of a is: " + x + "</br>" + "</br>");
var x = a++;
document.write("The value of a++ is: " + x + "</br>");
document.write("Now The value of a is: " + a + "</br>" + "</br>");

var x = --a;
document.write("The value of --a is: " + x + "</br>");
document.write("Now The value of a is: " + a + "</br>" + "</br>");

var x = a--;
document.write("The value of a-- is: " + x + "</br>");
document.write("Now The value of a is: " + a + "</br>");
document.write("</br>" + "</br>")

// task 2 //
var a = 2;
var b = 1;
var result = --a - --b + ++b + b--;
document.write("a is:" + a + "</br>");
document.write("b is:" + b + "</br>");
document.write("result is:" + result + "</br>");
document.write("</br>" + "</br>")

// task 3 //

var x = prompt("enter your name");
alert("Hello " + x);
document.write("</br>" + "</br>")

// task 4 //
var value = prompt("Enter the number: ");
var intvalue = parseInt(value);

if (intvalue === null) {
    for (var x = 0; x <= 10; x++) {
        document.write("5" + "x" + x + "=" + 5 * x + "</br>");
    }
} else {
    for (var i = 0; i <= 10; i++) {
        document.write(intvalue + "x" + i + "=" + intvalue * i + "</br>");
    }
}
document.write("</br>" + "</br>")

// task 5//
var sub1 = prompt("Enter first subject name:");
var sub2 = prompt("Enter second subject:");
var sub3 = prompt("Enter third subject:");
var total = 100;
var ob_1 = prompt("Enter the obtained marks of first subject");
var ob_2 = prompt("Enter the obtained marks of second subject");
var ob_3 = prompt("Enter the obtained marks of third subject");
var intvalue1 = parseInt(ob_1);
var intvalue2 = parseInt(ob_2);
var intvalue3 = parseInt(ob_3);
var grand_total = total + 3;
var total_obtained_marks = intvalue1 + intvalue2 + intvalue3;
var percentage_of_first_subject = (intvalue1 * 100) / 100;
var percentage_of_second_subject = (intvalue2 * 100) / 100;
var percentage_of_third_subject = (intvalue3 * 100) / 100;
var total_percentage = (percentage_of_first_subject + percentage_of_second_subject + percentage_of_third_subject) / 3;
document.write("<b>Subject</b>" + " " + "<b>Total Marks</b>" + "<b>Obtained marks</b>" + "<b>Percentage</b>" + "</br>");
document.write(sub1 + "\t" + total + "\t" + ob_1 + "\t" + percentage_of_first_subject + "%" + "</br>");
document.write(sub2 + "\t" + total + "\t" + ob_2 + "\t" + percentage_of_second_subject + "%" + "</br>");
document.write(sub3 + "\t" + total + "\t" + ob_3 + "\t" + percentage_of_third_subject + "%" + "</br>");
document.write(grand_total + "" + total_obtained_marks + "" + total_percentage + "%" + "</br>");