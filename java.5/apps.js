 // task 1 //

 var x = 110;
 var y = 51;
 var sum = x + y;
 document.write("Sum of " + x + " and" + y + " is " + sum);
 document.write("</br>" + "</br>")


 //task 2 //
 var x = 15;
 var y = 20;
 var sub = x - y;
 var mult = x * y;
 var div = x + y;
 var mod = x % y;
 document.write("Subtraction of " + x + " and" + y + " is " + sub + "</br>");
 document.write("Multiplication of " + x + " and" + y + " is " + mult + "</br>");
 document.write("Divison of " + x + " and" + y + " is " + div + "</br>");
 document.write("Modulus of " + x + " and" + y + " is " + mod);

 document.write("</br>" + "</br>")

 //task 3 //
 var ticket_prize = 1200;
 var cost_of_5_tickets = ticket_prize * 5;
 document.write("Total cost to buy 5 tickets to movie is " + cost_of_5_tickets)

 document.write("</br>" + "</br>")

 //task 4 //
 var value = 4;
 document.write("Table of " + value + "</br>");
 document.write("4x1= " + value * 1 + "</br>");
 document.write("4x2= " + value * 2 + "</br>");
 document.write("4x3= " + value * 3 + "</br>");
 document.write("4x4= " + value * 4 + "</br>");
 document.write("4x5= " + value * 5 + "</br>");
 document.write("4x6= " + value * 6 + "</br>");
 document.write("4x7= " + value * 7 + "</br>");
 document.write("4x8= " + value * 8 + "</br>");
 document.write("4x9= " + value * 9 + "</br>");
 document.write("4x10= " + value * 10 + "");

 document.write("</br>" + "</br>")

 //task 5 //
 var celsius = 25;
 var fahrenhiet = 70;
 var c_to_f = ((celsius * 9 / 5) + 32);
 var f_to_c = (fahrenhiet - 32) * 5 / 9;
 document.write(celsius + "<sup>o</sup>" + " C is " + c_to_f + " is " + "<sup>o</sup>" + "F" + "</br>");
 document.write(fahrenhiet + "<sup>o</sup>" + " F is " + f_to_c + " is " + "<sup>o</sup>" + "C");

 document.write("</br>" + "</br>")

 //task 6 //
 var item_prize_1 = 650;
 var item_prize_2 = 100;
 var ord_qty_1 = 3;
 var ord_qty_2 = 7;
 var sh_ch = 100;
 var total = (item_prize_1 * ord_qty_1) + (item_prize_2 * ord_qty_2) + sh_ch;
 document.write("Price of item 1 is " + item_prize_1 + "</br>");
 document.write("Quantity of item 1 is " + ord_qty_1 + "</br>");
 document.write("Price of item 2 is " + item_prize_2 + "</br>");
 document.write("Quantity of item 2 is " + ord_qty_2 + "</br>");
 document.write("Shipping Chatges " + sh_ch + "</br>" + "</br>" + "</br>");
 document.write("Total cost of your order is " + total);

 document.write("</br>" + "</br>")

 //task 7 //
 var ob_m = 804;
 var total = 980;
 var perc = (ob_m * 100) / total;
 document.write("<h1>Marks Sheet</h1>");
 document.write("Total marks: " + total + "</br>");
 document.write("Total marks: " + ob_m + "</br>");
 document.write("Percentage=" + perc);

 document.write("</br>" + "</br>")

 // task 8 //
 var one_usd = 104.80;
 var one_sr = 28;
 var total = (10 * one_usd) + (25 * one_sr);
 document.write("<h1>Currrency in PKR</h1>");
 document.write("Total currency in pkr is :" + total);

 document.write("</br>" + "</br>")

 //task 9 //

 var value = 5;
 var result = (((value + 5) * 10) / 2);
 document.write("Result= " + result);

 document.write("</br>" + "</br>")

 //task 10 //
 document.write("<h1> Age Calculator </h1>");
 var c_y = 2020;
 var b_y = 2000;
 var c_a = c_y - b_y;
 document.write("Current year: " + c_y + "</br>");
 document.write("Birth year: " + b_y + "</br>");
 document.write("Your age:" + c_a);

 document.write("</br>" + "</br>")

 //task 11 //
 document.write("<h1>The Geometrizer</h1>");
 var radius = 20;
 var circ = 2 * 3.14 * radius;
 var area = (3.14 * (Math.pow(radius, 2)));
 document.write("Radius of circle: " + radius + "</br>");
 document.write("Circumference of circle: " + circ + "</br>");
 document.write("Area is : " + area + "</br>");

 document.write("</br>" + "</br>")

 //task 12//
 document.write("<h1>The lifetime supply calculator</h1>");
 var favt_s = "chocolate ship";
 var age = 15;
 var max_a = 65;
 var s_p_d = 3;
 var total = (max_a - age) * s_p_d;
 document.write("favourite snak: " + favt_s + "</br>");
 document.write("Current age: " + age + "</br>");
 document.write("Estimated maximum age: " + max_a + "</br>");
 document.write("you will need " + total + " " + favt_s + " to last you until the rip old age of " + max_a + "</br>");